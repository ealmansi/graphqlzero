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
const post_1 = require("./post");
const json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql `
  extend type Query {
    comments(options: PageQueryOptions): CommentsPage
    comment(id: ID!): Comment
  }

  extend type Mutation {
    createComment(input: CreateCommentInput!): Comment
    updateComment(id: ID!, input: UpdateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
  }

  type Comment {
    id: ID
    name: String
    email: String
    body: String
    post: Post
  }

  input CreateCommentInput {
    name: String!
    email: String!
    body: String!
  }

  input UpdateCommentInput {
    name: String
    email: String
    body: String
  }
`;
function fetchComments(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchPage('/comments', options);
    });
}
exports.fetchComments = fetchComments;
function fetchComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.fetchResource(`/comments/${id}`);
    });
}
exports.fetchComment = fetchComment;
function createComment(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.createResource(`/comments`, JSON.stringify(input));
    });
}
exports.createComment = createComment;
function updateComment(id, input) {
    return __awaiter(this, void 0, void 0, function* () {
        return json_placeholder_1.updateResource(`/comments/${id}`, JSON.stringify(input));
    });
}
exports.updateComment = updateComment;
function deleteComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield json_placeholder_1.deleteResource(`/comments/${id}`);
        return true;
    });
}
exports.deleteComment = deleteComment;
exports.resolvers = {
    Query: {
        comments(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { options } = args;
                return fetchComments(options);
            });
        },
        comment(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return fetchComment(id);
            });
        },
    },
    Mutation: {
        createComment(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { input } = args;
                return createComment(input);
            });
        },
        updateComment(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, input } = args;
                return updateComment(id, input);
            });
        },
        deleteComment(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = args;
                return deleteComment(id);
            });
        }
    },
    Comment: {
        post(comment) {
            return __awaiter(this, void 0, void 0, function* () {
                return post_1.fetchPost(comment.postId);
            });
        },
    },
};
