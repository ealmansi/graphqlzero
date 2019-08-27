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
var json_placeholder_1 = require("./util/json-placeholder");
exports.typeDefs = apollo_server_micro_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  extend type Query {\n    users(options: PageQueryOptions): UsersPage\n    user(id: ID!): User\n  }\n\n  extend type Mutation {\n    createUser(input: CreateUserInput!): User\n    updateUser(id: ID!, input: UpdateUserInput!): User\n    deleteUser(id: ID!): Boolean\n  }\n\n  type User {\n    id: ID\n    name: String\n    username: String\n    email: String\n    address: Address\n    phone: String\n    website: String\n    company: Company\n    posts(options: PageQueryOptions): PostsPage\n    albums(options: PageQueryOptions): AlbumsPage\n    todos(options: PageQueryOptions): TodosPage\n  }\n\n  type Address {\n    street: String\n    suite: String\n    city: String\n    zipcode: String\n    geo: Geo\n  }\n\n  type Geo {\n    lat: Float\n    lng: Float\n  }\n\n  type Company {\n    name: String\n    catchPhrase: String\n    bs: String\n  }\n\n  input CreateUserInput {\n    name: String!\n    username: String!\n    email: String!\n    address: AddressInput\n    phone: String\n    website: String\n    company: CompanyInput\n  }\n\n  input UpdateUserInput {\n    name: String\n    username: String\n    email: String\n    address: AddressInput\n    phone: String\n    website: String\n    company: CompanyInput\n  }\n\n  input AddressInput {\n    street: String\n    suite: String\n    city: String\n    zipcode: String\n    geo: GeoInput\n  }\n\n  input GeoInput {\n    lat: Float\n    lng: Float\n  }\n\n  input CompanyInput {\n    name: String\n    catchPhrase: String\n    bs: String\n  }\n"], ["\n  extend type Query {\n    users(options: PageQueryOptions): UsersPage\n    user(id: ID!): User\n  }\n\n  extend type Mutation {\n    createUser(input: CreateUserInput!): User\n    updateUser(id: ID!, input: UpdateUserInput!): User\n    deleteUser(id: ID!): Boolean\n  }\n\n  type User {\n    id: ID\n    name: String\n    username: String\n    email: String\n    address: Address\n    phone: String\n    website: String\n    company: Company\n    posts(options: PageQueryOptions): PostsPage\n    albums(options: PageQueryOptions): AlbumsPage\n    todos(options: PageQueryOptions): TodosPage\n  }\n\n  type Address {\n    street: String\n    suite: String\n    city: String\n    zipcode: String\n    geo: Geo\n  }\n\n  type Geo {\n    lat: Float\n    lng: Float\n  }\n\n  type Company {\n    name: String\n    catchPhrase: String\n    bs: String\n  }\n\n  input CreateUserInput {\n    name: String!\n    username: String!\n    email: String!\n    address: AddressInput\n    phone: String\n    website: String\n    company: CompanyInput\n  }\n\n  input UpdateUserInput {\n    name: String\n    username: String\n    email: String\n    address: AddressInput\n    phone: String\n    website: String\n    company: CompanyInput\n  }\n\n  input AddressInput {\n    street: String\n    suite: String\n    city: String\n    zipcode: String\n    geo: GeoInput\n  }\n\n  input GeoInput {\n    lat: Float\n    lng: Float\n  }\n\n  input CompanyInput {\n    name: String\n    catchPhrase: String\n    bs: String\n  }\n"])));
function fetchUsers(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage('/users', options)];
        });
    });
}
exports.fetchUsers = fetchUsers;
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchResource("/users/" + id)];
        });
    });
}
exports.fetchUser = fetchUser;
function createUser(input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.createResource("/users", JSON.stringify(input))];
        });
    });
}
exports.createUser = createUser;
function updateUser(id, input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.updateResource("/users/" + id, JSON.stringify(input))];
        });
    });
}
exports.updateUser = updateUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, json_placeholder_1.deleteResource("/users/" + id)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
exports.deleteUser = deleteUser;
function fetchUserAlbums(id, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage("/users/" + id + "/albums", options)];
        });
    });
}
exports.fetchUserAlbums = fetchUserAlbums;
function fetchUserTodos(id, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage("/users/" + id + "/todos", options)];
        });
    });
}
exports.fetchUserTodos = fetchUserTodos;
function fetchUserPosts(id, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, json_placeholder_1.fetchPage("/users/" + id + "/posts", options)];
        });
    });
}
exports.fetchUserPosts = fetchUserPosts;
exports.resolvers = {
    Query: {
        users: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchUsers(options)];
                });
            });
        },
        user: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = args.id;
                    return [2 /*return*/, fetchUser(id)];
                });
            });
        },
    },
    Mutation: {
        createUser: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var input;
                return __generator(this, function (_a) {
                    input = args.input;
                    return [2 /*return*/, createUser(input)];
                });
            });
        },
        updateUser: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, id, input;
                return __generator(this, function (_b) {
                    _a = args, id = _a.id, input = _a.input;
                    return [2 /*return*/, updateUser(id, input)];
                });
            });
        },
        deleteUser: function (_, args) {
            return __awaiter(this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    id = args.id;
                    return [2 /*return*/, deleteUser(id)];
                });
            });
        }
    },
    User: {
        posts: function (user, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchUserPosts(user.id, options)];
                });
            });
        },
        albums: function (user, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchUserAlbums(user.id, options)];
                });
            });
        },
        todos: function (user, args) {
            return __awaiter(this, void 0, void 0, function () {
                var options;
                return __generator(this, function (_a) {
                    options = args.options;
                    return [2 /*return*/, fetchUserTodos(user.id, options)];
                });
            });
        },
    },
};
var templateObject_1;
