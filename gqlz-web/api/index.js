"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var server = server_1.buildServer();
var handler = server.createHandler({
    path: '/api'
});
exports.default = handler;
