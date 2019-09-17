"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.resolvers = {
    Query: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, album_1.resolvers.Query), comment_1.resolvers.Query), page_1.resolvers.Query), photo_1.resolvers.Query), post_1.resolvers.Query), todo_1.resolvers.Query), user_1.resolvers.Query),
    Mutation: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, album_1.resolvers.Mutation), comment_1.resolvers.Mutation), page_1.resolvers.Mutation), photo_1.resolvers.Mutation), post_1.resolvers.Mutation), todo_1.resolvers.Mutation), user_1.resolvers.Mutation),
    Album: album_1.resolvers.Album,
    Comment: comment_1.resolvers.Comment,
    Photo: photo_1.resolvers.Photo,
    Post: post_1.resolvers.Post,
    Todo: todo_1.resolvers.Todo,
    User: user_1.resolvers.User,
};
