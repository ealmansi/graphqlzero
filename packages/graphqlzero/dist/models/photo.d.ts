import { Album } from './album';
import { Page, PageQueryOptions } from './page';
export declare const typeDefs: import("graphql").DocumentNode;
export interface Photo {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface CreatePhotoInput {
    title: string;
    url: string;
    thumbnailUrl: string;
}
export interface UpdatePhotoInput {
    title?: string;
    url?: string;
    thumbnailUrl?: string;
}
export declare function fetchPhotos(options?: PageQueryOptions): Promise<Page<Photo>>;
export declare function fetchPhoto(id: string): Promise<Photo>;
export declare function createPhoto(input: CreatePhotoInput): Promise<Photo>;
export declare function updatePhoto(id: string, input: UpdatePhotoInput): Promise<Photo>;
export declare function deletePhoto(id: string): Promise<boolean>;
export declare const resolvers: {
    Query: {
        photos(_: undefined, args: object): Promise<Page<Photo>>;
        photo(_: undefined, args: object): Promise<Photo>;
    };
    Mutation: {
        createPhoto(_: undefined, args: object): Promise<Photo>;
        updatePhoto(_: undefined, args: object): Promise<Photo>;
        deletePhoto(_: undefined, args: object): Promise<boolean>;
    };
    Photo: {
        album(photo: Photo): Promise<Album>;
    };
};
