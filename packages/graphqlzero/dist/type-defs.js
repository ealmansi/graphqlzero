"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_core_1 = require("apollo-server-core");
const album_1 = require("./models/album");
const comment_1 = require("./models/comment");
const page_1 = require("./models/page");
const photo_1 = require("./models/photo");
const post_1 = require("./models/post");
const todo_1 = require("./models/todo");
const user_1 = require("./models/user");
/**
 *
 */
const baseTypeDefs = apollo_server_core_1.gql `
  type Query {
    _: Int
  }

  type Mutation {
    _: Int
  }
`;
/**
 *
 */
exports.typeDefs = [
    baseTypeDefs,
    album_1.typeDefs,
    comment_1.typeDefs,
    page_1.typeDefs,
    photo_1.typeDefs,
    post_1.typeDefs,
    todo_1.typeDefs,
    user_1.typeDefs,
];
