import { Comment } from './comment';
import { Page, PageQueryOptions } from './page';
import { User } from './user';
export declare const typeDefs: import("graphql").DocumentNode;
export interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
}
export interface CreatePostInput {
    title: string;
    body: string;
}
export interface UpdatePostInput {
    title: string;
    body: string;
}
export declare function fetchPosts(options?: PageQueryOptions): Promise<Page<Post>>;
export declare function fetchPost(id: string): Promise<Post>;
export declare function createPost(input: CreatePostInput): Promise<Post>;
export declare function updatePost(id: string, input: UpdatePostInput): Promise<Post>;
export declare function deletePost(id: string): Promise<boolean>;
export declare function fetchPostComments(id: string, options?: PageQueryOptions): Promise<Page<Comment>>;
export declare const resolvers: {
    Query: {
        posts(_: undefined, args: object): Promise<Page<Post>>;
        post(_: undefined, args: object): Promise<Post>;
    };
    Mutation: {
        createPost(_: undefined, args: object): Promise<Post>;
        updatePost(_: undefined, args: object): Promise<Post>;
        deletePost(_: undefined, args: object): Promise<boolean>;
    };
    Post: {
        user(post: Post): Promise<User>;
        comments(post: Post, args: object): Promise<Page<Comment>>;
    };
};
