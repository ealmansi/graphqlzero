"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_micro_1 = require("apollo-server-micro");
exports.typeDefs = apollo_server_micro_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  input PageQueryOptions {\n    paginate: PaginateOptions\n    slice: SliceOptions\n    sort: [SortOptions]\n    operators: [OperatorOptions]\n    search: SearchOptions\n  }\n\n  input PaginateOptions {\n    page: Int\n    limit: Int\n  }\n\n  input SliceOptions {\n    start: Int\n    end: Int\n    limit: Int\n  }\n\n  input SortOptions {\n    field: String\n    order: SortOrderEnum\n  }\n\n  enum SortOrderEnum {\n    ASC\n    DESC\n  }\n\n  input OperatorOptions {\n    kind: OperatorKindEnum\n    field: String\n    value: String\n  }\n\n  enum OperatorKindEnum {\n    GTE\n    LTE\n    NE\n    LIKE\n  }\n\n  input SearchOptions {\n    q: String\n  }\n\n  type PostsPage {\n    data: [Post]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type CommentsPage {\n    data: [Comment]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type AlbumsPage {\n    data: [Album]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type PhotosPage {\n    data: [Photo]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type TodosPage {\n    data: [Todo]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type UsersPage {\n    data: [User]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type PaginationLinks {\n    first: PageLimitPair\n    prev: PageLimitPair\n    next: PageLimitPair\n    last: PageLimitPair\n  }\n\n  type PageLimitPair {\n    page: Int\n    limit: Int\n  }\n\n  type PageMetadata {\n    totalCount: Int\n  }\n"], ["\n  input PageQueryOptions {\n    paginate: PaginateOptions\n    slice: SliceOptions\n    sort: [SortOptions]\n    operators: [OperatorOptions]\n    search: SearchOptions\n  }\n\n  input PaginateOptions {\n    page: Int\n    limit: Int\n  }\n\n  input SliceOptions {\n    start: Int\n    end: Int\n    limit: Int\n  }\n\n  input SortOptions {\n    field: String\n    order: SortOrderEnum\n  }\n\n  enum SortOrderEnum {\n    ASC\n    DESC\n  }\n\n  input OperatorOptions {\n    kind: OperatorKindEnum\n    field: String\n    value: String\n  }\n\n  enum OperatorKindEnum {\n    GTE\n    LTE\n    NE\n    LIKE\n  }\n\n  input SearchOptions {\n    q: String\n  }\n\n  type PostsPage {\n    data: [Post]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type CommentsPage {\n    data: [Comment]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type AlbumsPage {\n    data: [Album]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type PhotosPage {\n    data: [Photo]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type TodosPage {\n    data: [Todo]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type UsersPage {\n    data: [User]\n    links: PaginationLinks\n    meta: PageMetadata\n  }\n\n  type PaginationLinks {\n    first: PageLimitPair\n    prev: PageLimitPair\n    next: PageLimitPair\n    last: PageLimitPair\n  }\n\n  type PageLimitPair {\n    page: Int\n    limit: Int\n  }\n\n  type PageMetadata {\n    totalCount: Int\n  }\n"])));
var SortOrderEnum;
(function (SortOrderEnum) {
    SortOrderEnum["Asc"] = "ASC";
    SortOrderEnum["Desc"] = "DESC";
})(SortOrderEnum = exports.SortOrderEnum || (exports.SortOrderEnum = {}));
var OperatorKindEnum;
(function (OperatorKindEnum) {
    OperatorKindEnum["Gte"] = "GTE";
    OperatorKindEnum["Lte"] = "LTE";
    OperatorKindEnum["Ne"] = "NE";
    OperatorKindEnum["Like"] = "LIKE";
})(OperatorKindEnum = exports.OperatorKindEnum || (exports.OperatorKindEnum = {}));
exports.resolvers = {
    Query: {},
    Mutation: {},
};
var templateObject_1;
