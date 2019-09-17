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
function fetchPosts(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/posts', options);
    });
}
exports.fetchPosts = fetchPosts;
function fetchPost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/posts/${id}`);
    });
}
exports.fetchPost = fetchPost;
function createPost(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/posts`, JSON.stringify(input));
    });
}
exports.createPost = createPost;
function updatePost(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/posts/${id}`, JSON.stringify(input));
    });
}
exports.updatePost = updatePost;
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/posts/${id}`);
        return true;
    });
}
exports.deletePost = deletePost;
function fetchPostComments(id, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage(`/posts/${id}/comments`, options);
    });
}
exports.fetchPostComments = fetchPostComments;
exports.resolvers = {
    Query: {
        posts(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchPosts(options);
            });
        },
        post(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchPost(id);
            });
        },
    },
    Mutation: {
        createPost(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createPost(input);
            });
        },
        updatePost(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updatePost(id, input);
            });
        },
        deletePost(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deletePost(id);
            });
        }
    },
    Post: {
        user(post) {
            return __awaiter(this, void 0, void 0, function* () {
                return user_1.fetchUser(post.userId);
            });
        },
        comments(post, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchPostComments(post.id, options);
            });
        },
    },
};
