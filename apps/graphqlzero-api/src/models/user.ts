import { gql } from "graphql-tag";
import { Album } from "./album";
import { Page, PageQueryOptions } from "./page";
import { Post } from "./post";
import { Todo } from "./todo";
import {
  createResource,
  deleteResource,
  fetchPage,
  fetchResource,
  updateResource,
} from "../util/json-placeholder";

export const typeDefs = gql`
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

export async function fetchUsers(
  options?: PageQueryOptions
): Promise<Page<User>> {
  return fetchPage<User>("/users", options);
}

export async function fetchUser(id: string): Promise<User> {
  return fetchResource<User>(`/users/${id}`);
}

export async function createUser(input: CreateUserInput): Promise<User> {
  return createResource<User>(`/users`, JSON.stringify(input));
}

export async function updateUser(
  id: string,
  input: UpdateUserInput
): Promise<User> {
  return updateResource<User>(`/users/${id}`, JSON.stringify(input));
}

export async function deleteUser(id: string): Promise<boolean> {
  await deleteResource<User>(`/users/${id}`);
  return true;
}

export async function fetchUserAlbums(
  id: string,
  options?: PageQueryOptions
): Promise<Page<Album>> {
  return fetchPage<Album>(`/users/${id}/albums`, options);
}

export async function fetchUserTodos(
  id: string,
  options?: PageQueryOptions
): Promise<Page<Todo>> {
  return fetchPage<Todo>(`/users/${id}/todos`, options);
}

export async function fetchUserPosts(
  id: string,
  options?: PageQueryOptions
): Promise<Page<Post>> {
  return fetchPage<Post>(`/users/${id}/posts`, options);
}

export const resolvers = {
  Query: {
    async users(_: undefined, args: object): Promise<Page<User>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchUsers(options);
    },
    async user(_: undefined, args: object): Promise<User> {
      const { id } = args as { id: string };
      return fetchUser(id);
    },
  },
  Mutation: {
    async createUser(_: undefined, args: object): Promise<User> {
      const { input } = args as { input: CreateUserInput };
      return createUser(input);
    },
    async updateUser(_: undefined, args: object): Promise<User> {
      const { id, input } = args as { id: string; input: UpdateUserInput };
      return updateUser(id, input);
    },
    async deleteUser(_: undefined, args: object): Promise<boolean> {
      const { id } = args as { id: string };
      return deleteUser(id);
    },
  },
  User: {
    async posts(user: User, args: object): Promise<Page<Post>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchUserPosts(user.id, options);
    },
    async albums(user: User, args: object): Promise<Page<Album>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchUserAlbums(user.id, options);
    },
    async todos(user: User, args: object): Promise<Page<Todo>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchUserTodos(user.id, options);
    },
  },
};
