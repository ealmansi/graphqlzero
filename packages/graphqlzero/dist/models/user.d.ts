import { Album } from './album';
import { Page, PageQueryOptions } from './page';
import { Post } from './post';
import { Todo } from './todo';
export declare const typeDefs: import("graphql").DocumentNode;
export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export interface Geo {
    lat: number;
    lng: number;
}
export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface CreateUserInput {
    name: string;
    username: string;
    email: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
export interface UpdateUserInput {
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
export declare function fetchUsers(options?: PageQueryOptions): Promise<Page<User>>;
export declare function fetchUser(id: string): Promise<User>;
export declare function createUser(input: CreateUserInput): Promise<User>;
export declare function updateUser(id: string, input: UpdateUserInput): Promise<User>;
export declare function deleteUser(id: string): Promise<boolean>;
export declare function fetchUserAlbums(id: string, options?: PageQueryOptions): Promise<Page<Album>>;
export declare function fetchUserTodos(id: string, options?: PageQueryOptions): Promise<Page<Todo>>;
export declare function fetchUserPosts(id: string, options?: PageQueryOptions): Promise<Page<Post>>;
export declare const resolvers: {
    Query: {
        users(_: undefined, args: object): Promise<Page<User>>;
        user(_: undefined, args: object): Promise<User>;
    };
    Mutation: {
        createUser(_: undefined, args: object): Promise<User>;
        updateUser(_: undefined, args: object): Promise<User>;
        deleteUser(_: undefined, args: object): Promise<boolean>;
    };
    User: {
        posts(user: User, args: object): Promise<Page<Post>>;
        albums(user: User, args: object): Promise<Page<Album>>;
        todos(user: User, args: object): Promise<Page<Todo>>;
    };
};
