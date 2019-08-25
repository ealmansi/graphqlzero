"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_micro_1 = require("apollo-server-micro");
var album_1 = require("./models/album");
var comment_1 = require("./models/comment");
var page_1 = require("./models/page");
var photo_1 = require("./models/photo");
var post_1 = require("./models/post");
var todo_1 = require("./models/todo");
var user_1 = require("./models/user");
function buildServer() {
    var baseTypeDefs = apollo_server_micro_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n      _: Int\n    }\n\n    type Mutation {\n      _: Int\n    }\n  "], ["\n    type Query {\n      _: Int\n    }\n\n    type Mutation {\n      _: Int\n    }\n  "])));
    var typeDefs = [
        baseTypeDefs,
        album_1.typeDefs,
        comment_1.typeDefs,
        page_1.typeDefs,
        photo_1.typeDefs,
        post_1.typeDefs,
        todo_1.typeDefs,
        user_1.typeDefs,
    ];
    var resolvers = {
        Query: __assign({}, album_1.resolvers.Query, comment_1.resolvers.Query, page_1.resolvers.Query, photo_1.resolvers.Query, post_1.resolvers.Query, todo_1.resolvers.Query, user_1.resolvers.Query),
        Mutation: __assign({}, album_1.resolvers.Mutation, comment_1.resolvers.Mutation, page_1.resolvers.Mutation, photo_1.resolvers.Mutation, post_1.resolvers.Mutation, todo_1.resolvers.Mutation, user_1.resolvers.Mutation),
        Album: album_1.resolvers.Album,
        Comment: comment_1.resolvers.Comment,
        Photo: photo_1.resolvers.Photo,
        Post: post_1.resolvers.Post,
        Todo: todo_1.resolvers.Todo,
        User: user_1.resolvers.User,
    };
    return new apollo_server_micro_1.ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        introspection: true,
        playground: {
            settings: {
                'editor.theme': 'light',
            }
        }
    });
}
exports.buildServer = buildServer;
var templateObject_1;
