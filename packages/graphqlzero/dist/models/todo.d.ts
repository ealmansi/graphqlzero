import { Page, PageQueryOptions } from './page';
import { User } from './user';
export declare const typeDefs: import("graphql").DocumentNode;
export interface Todo {
    id: string;
    title: string;
    completed: string;
    userId: string;
}
export interface CreateTodoInput {
    title: string;
    completed: boolean;
}
export interface UpdateTodoInput {
    title?: string;
    completed?: boolean;
}
export declare function fetchTodos(options?: PageQueryOptions): Promise<Page<Todo>>;
export declare function fetchTodo(id: string): Promise<Todo>;
export declare function createTodo(input: CreateTodoInput): Promise<Todo>;
export declare function updateTodo(id: string, input: UpdateTodoInput): Promise<Todo>;
export declare function deleteTodo(id: string): Promise<boolean>;
export declare const resolvers: {
    Query: {
        todos(_: undefined, args: object): Promise<Page<Todo>>;
        todo(_: undefined, args: object): Promise<Todo>;
    };
    Mutation: {
        createTodo(_: undefined, args: object): Promise<Todo>;
        updateTodo(_: undefined, args: object): Promise<Todo>;
        deleteTodo(_: undefined, args: object): Promise<boolean>;
    };
    Todo: {
        user(todo: Todo): Promise<User>;
    };
};
