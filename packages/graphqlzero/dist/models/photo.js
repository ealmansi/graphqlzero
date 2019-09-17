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
const album_1 = require("./album");
const json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql `
  extend type Query {
    photos(options: PageQueryOptions): PhotosPage
    photo(id: ID!): Photo
  }

  extend type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo
    updatePhoto(id: ID!, input: UpdatePhotoInput!): Photo
    deletePhoto(id: ID!): Boolean
  }

  type Photo {
    id: ID
    title: String
    url: String
    thumbnailUrl: String
    album: Album
  }

  input CreatePhotoInput {
    title: String!
    url: String!
    thumbnailUrl: String!
  }

  input UpdatePhotoInput {
    title: String
    url: String
    thumbnailUrl: String
  }
`;
function fetchPhotos(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/photos', options);
    });
}
exports.fetchPhotos = fetchPhotos;
function fetchPhoto(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/photos/${id}`);
    });
}
exports.fetchPhoto = fetchPhoto;
function createPhoto(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/photos`, JSON.stringify(input));
    });
}
exports.createPhoto = createPhoto;
function updatePhoto(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/photos/${id}`, JSON.stringify(input));
    });
}
exports.updatePhoto = updatePhoto;
function deletePhoto(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/photos/${id}`);
        return true;
    });
}
exports.deletePhoto = deletePhoto;
exports.resolvers = {
    Query: {
        photos(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchPhotos(options);
            });
        },
        photo(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchPhoto(id);
            });
        },
    },
    Mutation: {
        createPhoto(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createPhoto(input);
            });
        },
        updatePhoto(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updatePhoto(id, input);
            });
        },
        deletePhoto(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deletePhoto(id);
            });
        }
    },
    Photo: {
        album(photo) {
            return __awaiter(this, void 0, void 0, function* () {
                return album_1.fetchAlbum(photo.albumId);
            });
        },
    },
};
