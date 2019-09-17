import { Page, PageQueryOptions } from './page';
import { Post } from './post';
export declare const typeDefs: import("graphql").DocumentNode;
export interface Comment {
    id: string;
    name: string;
    email: string;
    body: string;
    postId: string;
}
export interface CreateCommentInput {
    name: string;
    email: string;
    body: string;
}
export interface UpdateCommentInput {
    name?: string;
    email?: string;
    body?: string;
}
export declare function fetchComments(options?: PageQueryOptions): Promise<Page<Comment>>;
export declare function fetchComment(id: string): Promise<Comment>;
export declare function createComment(input: CreateCommentInput): Promise<Comment>;
export declare function updateComment(id: string, input: UpdateCommentInput): Promise<Comment>;
export declare function deleteComment(id: string): Promise<boolean>;
export declare const resolvers: {
    Query: {
        comments(_: undefined, args: object): Promise<Page<Comment>>;
        comment(_: undefined, args: object): Promise<Comment>;
    };
    Mutation: {
        createComment(_: undefined, args: object): Promise<Comment>;
        updateComment(_: undefined, args: object): Promise<Comment>;
        deleteComment(_: undefined, args: object): Promise<boolean>;
    };
    Comment: {
        post(comment: Comment): Promise<Post>;
    };
};
