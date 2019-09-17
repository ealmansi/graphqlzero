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
const user_1 = require("./user");
const json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql `
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
function fetchAlbums(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/albums', options);
    });
}
exports.fetchAlbums = fetchAlbums;
function fetchAlbum(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/albums/${id}`);
    });
}
exports.fetchAlbum = fetchAlbum;
function createAlbum(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/albums`, JSON.stringify(input));
    });
}
exports.createAlbum = createAlbum;
function updateAlbum(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/albums/${id}`, JSON.stringify(input));
    });
}
exports.updateAlbum = updateAlbum;
function deleteAlbum(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/albums/${id}`);
        return true;
    });
}
exports.deleteAlbum = deleteAlbum;
function fetchAlbumPhotos(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage(`/albums/${id}/photos`, options);
    });
}
exports.fetchAlbumPhotos = fetchAlbumPhotos;
exports.resolvers = {
    Query: {
        albums(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchAlbums(options);
            });
        },
        album(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchAlbum(id);
            });
        },
    },
    Mutation: {
        createAlbum(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createAlbum(input);
            });
        },
        updateAlbum(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updateAlbum(id, input);
            });
        },
        deleteAlbum(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deleteAlbum(id);
            });
        }
    },
    Album: {
        user(album) {
            return __awaiter(this, void 0, void 0, function* () {
                return user_1.fetchUser(album.userId);
            });
        },
        photos(album, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchAlbumPhotos(album.id, options);
            });
        },
    },
};
