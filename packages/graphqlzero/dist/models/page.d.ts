export declare const typeDefs: import("graphql").DocumentNode;
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
export declare enum SortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export interface OperatorOptions {
    kind?: OperatorKindEnum;
    field?: string;
    value?: string;
}
export declare enum OperatorKindEnum {
    Gte = "GTE",
    Lte = "LTE",
    Ne = "NE",
    Like = "LIKE"
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
export declare const resolvers: {
    Query: {};
    Mutation: {};
};
