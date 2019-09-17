import { Page, PageQueryOptions } from '../page';
export declare function fetchResource<T>(endpoint: string): Promise<T>;
export declare function createResource<T>(endpoint: string, body: string): Promise<T>;
export declare function updateResource<T>(endpoint: string, body: string): Promise<T>;
export declare function deleteResource<T>(endpoint: string): Promise<T>;
export declare function fetchPage<T>(endpoint: string, options?: PageQueryOptions): Promise<Page<T>>;
