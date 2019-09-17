"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const config_1 = require("./config");
/**
 *
 */
class GraphQlZeroServer extends apollo_server_1.ApolloServer {
    constructor() {
        super(config_1.config);
    }
}
exports.GraphQlZeroServer = GraphQlZeroServer;
