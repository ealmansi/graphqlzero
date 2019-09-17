"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
const user_1 = require("./user");
const json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql `
  extend type Query {
    todos(options: PageQueryOptions): TodosPage
    todo(id: ID!): Todo
  }

  extend type Mutation {
    createTodo(input: CreateTodoInput!): Todo
    updateTodo(id: ID!, input: UpdateTodoInput!): Todo
    deleteTodo(id: ID!): Boolean
  }

  type Todo {
    id: ID
    title: String
    completed: Boolean
    user: User
  }

  input CreateTodoInput {
    title: String!
    completed: Boolean!
  }

  input UpdateTodoInput {
    title: String
    completed: Boolean
  }
`;
function fetchTodos(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/todos', options);
    });
}
exports.fetchTodos = fetchTodos;
function fetchTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/todos/${id}`);
    });
}
exports.fetchTodo = fetchTodo;
function createTodo(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/todos`, JSON.stringify(input));
    });
}
exports.createTodo = createTodo;
function updateTodo(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/todos/${id}`, JSON.stringify(input));
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/todos/${id}`);
        return true;
    });
}
exports.deleteTodo = deleteTodo;
exports.resolvers = {
    Query: {
        todos(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchTodos(options);
            });
        },
        todo(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchTodo(id);
            });
        },
    },
    Mutation: {
        createTodo(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createTodo(input);
            });
        },
        updateTodo(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updateTodo(id, input);
            });
        },
        deleteTodo(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deleteTodo(id);
            });
        }
    },
    Todo: {
        user(todo) {
            return __awaiter(this, void 0, void 0, function* () {
                return user_1.fetchUser(todo.userId);
            });
        },
    },
};
