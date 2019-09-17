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
const json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql `
  extend type Query {
    users(options: PageQueryOptions): UsersPage
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean
  }

  type User {
    id: ID
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
    posts(options: PageQueryOptions): PostsPage
    albums(options: PageQueryOptions): AlbumsPage
    todos(options: PageQueryOptions): TodosPage
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: Float
    lng: Float
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  input CreateUserInput {
    name: String!
    username: String!
    email: String!
    address: AddressInput
    phone: String
    website: String
    company: CompanyInput
  }

  input UpdateUserInput {
    name: String
    username: String
    email: String
    address: AddressInput
    phone: String
    website: String
    company: CompanyInput
  }

  input AddressInput {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: GeoInput
  }

  input GeoInput {
    lat: Float
    lng: Float
  }

  input CompanyInput {
    name: String
    catchPhrase: String
    bs: String
  }
`;
function fetchUsers(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/users', options);
    });
}
exports.fetchUsers = fetchUsers;
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/users/${id}`);
    });
}
exports.fetchUser = fetchUser;
function createUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/users`, JSON.stringify(input));
    });
}
exports.createUser = createUser;
function updateUser(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/users/${id}`, JSON.stringify(input));
    });
}
exports.updateUser = updateUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/users/${id}`);
        return true;
    });
}
exports.deleteUser = deleteUser;
function fetchUserAlbums(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage(`/users/${id}/albums`, options);
    });
}
exports.fetchUserAlbums = fetchUserAlbums;
function fetchUserTodos(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage(`/users/${id}/todos`, options);
    });
}
exports.fetchUserTodos = fetchUserTodos;
function fetchUserPosts(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage(`/users/${id}/posts`, options);
    });
}
exports.fetchUserPosts = fetchUserPosts;
exports.resolvers = {
    Query: {
        users(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchUsers(options);
            });
        },
        user(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchUser(id);
            });
        },
    },
    Mutation: {
        createUser(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createUser(input);
            });
        },
        updateUser(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updateUser(id, input);
            });
        },
        deleteUser(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deleteUser(id);
            });
        }
    },
    User: {
        posts(user, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchUserPosts(user.id, options);
            });
        },
        albums(user, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchUserAlbums(user.id, options);
            });
        },
        todos(user, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchUserTodos(user.id, options);
            });
        },
    },
};
