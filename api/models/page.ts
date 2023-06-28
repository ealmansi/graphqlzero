import { gql } from "graphql-tag";

export const typeDefs = gql`
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

export interface PageQueryOptions {
  paginate?: PaginateOptions;
  slice?: SliceOptions;
  sort?: SortOptions[];
  operators?: OperatorOptions[];
  search?: SearchOptions;
}

export interface PaginateOptions {
  page?: number;
  limit?: number;
}

export interface SliceOptions {
  start?: number;
  end?: number;
  limit?: number;
}

export interface SortOptions {
  field?: string;
  order?: SortOrderEnum;
}

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export interface OperatorOptions {
  kind?: OperatorKindEnum;
  field?: string;
  value?: string;
}

export enum OperatorKindEnum {
  Gte = "GTE",
  Lte = "LTE",
  Ne = "NE",
  Like = "LIKE",
}

export interface SearchOptions {
  q?: string;
}

export interface Page<T> {
  data: T[];
  links?: PaginationLinks;
  meta?: PageMetadata;
}

export interface PaginationLinks {
  first?: PageLimitPair;
  prev?: PageLimitPair;
  next?: PageLimitPair;
  last?: PageLimitPair;
}

export interface PageLimitPair {
  page: number;
  limit: number;
}

export interface PageMetadata {
  totalCount: number;
}

export const resolvers = {
  Query: {},
  Mutation: {},
};
