"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_micro_1 = require("apollo-server-micro");
exports.typeDefs = apollo_server_micro_1.gql `
  input PageQueryOptions {
    paginate: PaginateOptions
    slice: SliceOptions
    sort: [SortOptions]
    operators: [OperatorOptions]
    search: SearchOptions
  }

  input PaginateOptions {
    page: Int
    limit: Int
  }

  input SliceOptions {
    start: Int
    end: Int
    limit: Int
  }

  input SortOptions {
    field: String
    order: SortOrderEnum
  }

  enum SortOrderEnum {
    ASC
    DESC
  }

  input OperatorOptions {
    kind: OperatorKindEnum
    field: String
    value: String
  }

  enum OperatorKindEnum {
    GTE
    LTE
    NE
    LIKE
  }

  input SearchOptions {
    q: String
  }

  type PostsPage {
    data: [Post]
    links: PaginationLinks
    meta: PageMetadata
  }

  type CommentsPage {
    data: [Comment]
    links: PaginationLinks
    meta: PageMetadata
  }

  type AlbumsPage {
    data: [Album]
    links: PaginationLinks
    meta: PageMetadata
  }

  type PhotosPage {
    data: [Photo]
    links: PaginationLinks
    meta: PageMetadata
  }

  type TodosPage {
    data: [Todo]
    links: PaginationLinks
    meta: PageMetadata
  }

  type UsersPage {
    data: [User]
    links: PaginationLinks
    meta: PageMetadata
  }

  type PaginationLinks {
    first: PageLimitPair
    prev: PageLimitPair
    next: PageLimitPair
    last: PageLimitPair
  }

  type PageLimitPair {
    page: Int
    limit: Int
  }

  type PageMetadata {
    totalCount: Int
  }
`;
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
