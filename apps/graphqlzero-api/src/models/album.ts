import { gql } from "graphql-tag";
import { Page, PageQueryOptions } from "./page";
import { Photo } from "./photo";
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
    albums(options: PageQueryOptions): AlbumsPage
    album(id: ID!): Album
  }

  extend type Mutation {
    createAlbum(input: CreateAlbumInput!): Album
    updateAlbum(id: ID!, input: UpdateAlbumInput!): Album
    deleteAlbum(id: ID!): Boolean
  }

  type Album {
    id: ID
    title: String
    user: User
    photos(options: PageQueryOptions): PhotosPage
  }

  input CreateAlbumInput {
    title: String!
    userId: ID!
  }

  input UpdateAlbumInput {
    title: String
    userId: ID
  }
`;

export interface Album {
  id: string;
  title: string;
  userId: string;
}

export interface CreateAlbumInput {
  title: string;
  userId: string;
}

export interface UpdateAlbumInput {
  title?: string;
  userId?: string;
}

export async function fetchAlbums(
  options?: PageQueryOptions
): Promise<Page<Album>> {
  return fetchPage<Album>("/albums", options);
}

export async function fetchAlbum(id: string): Promise<Album> {
  return fetchResource<Album>(`/albums/${id}`);
}

export async function createAlbum(input: CreateAlbumInput): Promise<Album> {
  return createResource<Album>(`/albums`, JSON.stringify(input));
}

export async function updateAlbum(
  id: string,
  input: UpdateAlbumInput
): Promise<Album> {
  return updateResource<Album>(`/albums/${id}`, JSON.stringify(input));
}

export async function deleteAlbum(id: string): Promise<boolean> {
  await deleteResource<Album>(`/albums/${id}`);
  return true;
}

export async function fetchAlbumPhotos(
  id: string,
  options?: PageQueryOptions
): Promise<Page<Photo>> {
  return fetchPage<Photo>(`/albums/${id}/photos`, options);
}

export const resolvers = {
  Query: {
    async albums(_: undefined, args: object): Promise<Page<Album>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchAlbums(options);
    },
    async album(_: undefined, args: object): Promise<Album> {
      const { id } = args as { id: string };
      return fetchAlbum(id);
    },
  },
  Mutation: {
    async createAlbum(_: undefined, args: object): Promise<Album> {
      const { input } = args as { input: CreateAlbumInput };
      return createAlbum(input);
    },
    async updateAlbum(_: undefined, args: object): Promise<Album> {
      const { id, input } = args as { id: string; input: UpdateAlbumInput };
      return updateAlbum(id, input);
    },
    async deleteAlbum(_: undefined, args: object): Promise<boolean> {
      const { id } = args as { id: string };
      return deleteAlbum(id);
    },
  },
  Album: {
    async user(album: Album): Promise<User> {
      return fetchUser(album.userId);
    },
    async photos(album: Album, args: object): Promise<Page<Photo>> {
      const { options } = args as { options?: PageQueryOptions };
      return fetchAlbumPhotos(album.id, options);
    },
  },
};
