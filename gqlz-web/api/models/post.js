"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_micro_1 = require("apollo-server-micro");
var user_1 = require("./user");
var json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    posts(options: PageQueryOptions): PostsPage\n    post(id: ID!): Post\n  }\n\n  extend type Mutation {\n    createPost(input: CreatePostInput!): Post\n    updatePost(id: ID!, input: UpdatePostInput!): Post\n    deletePost(id: ID!): Boolean\n  }\n\n  type Post {\n    id: ID\n    title: String\n    body: String\n    user: User\n    comments(options: PageQueryOptions): CommentsPage\n  }\n\n  input CreatePostInput {\n    title: String!\n    body: String!\n  }\n\n  input UpdatePostInput {\n    title: String\n    body: String\n  }\n"], ["\n  extend type Query {\n    posts(options: PageQueryOptions): PostsPage\n    post(id: ID!): Post\n  }\n\n  extend type Mutation {\n    createPost(input: CreatePostInput!): Post\n    updatePost(id: ID!, input: UpdatePostInput!): Post\n    deletePost(id: ID!): Boolean\n  }\n\n  type Post {\n    id: ID\n    title: String\n    body: String\n    user: User\n    comments(options: PageQueryOptions): CommentsPage\n  }\n\n  input CreatePostInput {\n    title: String!\n    body: String!\n  }\n\n  input UpdatePostInput {\n    title: String\n    body: String\n  }\n"])));
function fetchPosts(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage('/posts', options)];
        });
    });
}
exports.fetchPosts = fetchPosts;
function fetchPost(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchResource("/posts/" + id)];
        });
    });
}
exports.fetchPost = fetchPost;
function createPost(input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.createResource("/posts", JSON.stringify(input))];
        });
    });
}
exports.createPost = createPost;
function updatePost(id, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.updateResource("/posts/" + id, JSON.stringify(input))];
        });
    });
}
exports.updatePost = updatePost;
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, json_placeholder_1.deleteResource("/posts/" + id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deletePost = deletePost;
function fetchPostComments(id, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage("/posts/" + id + "/comments", options)];
        });
    });
}
exports.fetchPostComments = fetchPostComments;
exports.resolvers = {
    Query: {
        posts: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchPosts(options)];
                });
            });
        },
        post: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = args.id;
                    return [2 /*return*/, fetchPost(id)];
                });
            });
        },
    },
    Mutation: {
        createPost: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var input;
                return __generator(this, function (_a) {
                    input = args.input;
                    return [2 /*return*/, createPost(input)];
                });
            });
        },
        updatePost: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, id, input;
                return __generator(this, function (_b) {
                    _a = args, id = _a.id, input = _a.input;
                    return [2 /*return*/, updatePost(id, input)];
                });
            });
        },
        deletePost: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = args.id;
                    return [2 /*return*/, deletePost(id)];
                });
            });
        }
    },
    Post: {
        user: function (post) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, user_1.fetchUser(post.userId)];
                });
            });
        },
        comments: function (post, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchPostComments(post.id, options)];
                });
            });
        },
    },
};
var templateObject_1;
