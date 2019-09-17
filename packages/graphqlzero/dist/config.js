"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
const type_defs_1 = require("./type-defs");
/**
 *
 */
exports.config = {
    typeDefs: type_defs_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    introspection: true,
    playground: {
        settings: {
            'editor.theme': 'light',
        }
    }
};
