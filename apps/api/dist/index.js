"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var micro_1 = require("graphqlzero/dist/micro");
var micro_cors_1 = __importDefault(require("micro-cors"));
var server = new micro_1.GraphQlZeroServer();
var handler = server.createHandler({
    path: '/api'
});
var cors = micro_cors_1.default();
exports.default = cors(function (req, res) {
    if (req.method === 'OPTIONS') {
        res.end();
        return;
    }
    return handler(req, res);
});
