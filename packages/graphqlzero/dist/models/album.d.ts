import { Page, PageQueryOptions } from './page';
import { Photo } from './photo';
import { User } from './user';
export declare const typeDefs: import("graphql").DocumentNode;
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
export declare function fetchAlbums(options?: PageQueryOptions): Promise<Page<Album>>;
export declare function fetchAlbum(id: string): Promise<Album>;
export declare function createAlbum(input: CreateAlbumInput): Promise<Album>;
export declare function updateAlbum(id: string, input: UpdateAlbumInput): Promise<Album>;
export declare function deleteAlbum(id: string): Promise<boolean>;
export declare function fetchAlbumPhotos(id: string, options?: PageQueryOptions): Promise<Page<Photo>>;
export declare const resolvers: {
    Query: {
        albums(_: undefined, args: object): Promise<Page<Album>>;
        album(_: undefined, args: object): Promise<Album>;
    };
    Mutation: {
        createAlbum(_: undefined, args: object): Promise<Album>;
        updateAlbum(_: undefined, args: object): Promise<Album>;
        deleteAlbum(_: undefined, args: object): Promise<boolean>;
    };
    Album: {
        user(album: Album): Promise<User>;
        photos(album: Album, args: object): Promise<Page<Photo>>;
    };
};
