import { gql } from "graphql-tag";
import { Comment } from "./comment";
import { Page, PageQueryOptions } from "./page";
import { fetchUser, User } from "./user";
import {
  createResource,
  deleteResource,
  fetchPage,
  fetchResource,
  updateResource,
} from "../util/json-placeholder";

export const typeDefs = gql`
  extend type Query {
    posts(options: PageQueryOptions): PostsPage
    post(id: ID!): Post
  }

  extend type Mutation {
    createPost(input: CreatePostInput!): Post
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean
  }

  type Post {
    id: ID
    title: String
    body: String
    user: User
    comments(options: PageQueryOptions): CommentsPage
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }
`;

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

export async function fetchPosts(
  options?: PageQueryOptions
): Promise<Page<Post>> {
  return fetchPage<Post>("/posts", options);
}

export async function fetchPost(id: string): Promise<Post> {
  return fetchResource<Post>(`/posts/${id}`);
}

export async function createPost(input: CreatePostInput): Promise<Post> {
  return createResource<Post>(`/posts`, JSON.stringify(input));
}

export async function updatePost(
  id: string,
  input: UpdatePostInput
): Promise<Post> {
  return updateResource<Post>(`/posts/${id}`, JSON.stringify(input));
}

export async function deletePost(id: string): Promise<boolean> {
  await deleteResource<Post>(`/posts/${id}`);
  return true;
}

export async function fetchPostComments(
  id: string,
  options?: PageQueryOptions
): Promise<Page<Comment>> {
  return fetchPage<Comment>(`/posts/${id}/comments`, options);
}

export const resolvers = {
  Query: {
    async posts(_: undefined, args: object): Promise<Page<Post>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchPosts(options);
    },
    async post(_: undefined, args: object): Promise<Post> {
      const { id } = args as { id: string };
      return fetchPost(id);
    },
  },
  Mutation: {
    async createPost(_: undefined, args: object): Promise<Post> {
      const { input } = args as { input: CreatePostInput };
      return createPost(input);
    },
    async updatePost(_: undefined, args: object): Promise<Post> {
      const { id, input } = args as { id: string; input: UpdatePostInput };
      return updatePost(id, input);
    },
    async deletePost(_: undefined, args: object): Promise<boolean> {
      const { id } = args as { id: string };
      return deletePost(id);
    },
  },
  Post: {
    async user(post: Post): Promise<User> {
      return fetchUser(post.userId);
    },
    async comments(post: Post, args: object): Promise<Page<Comment>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchPostComments(post.id, options);
    },
  },
};
