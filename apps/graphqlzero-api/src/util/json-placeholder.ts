import parseLinkHeader from "parse-link-header";
import {
  OperatorOptions,
  Page,
  PageMetadata,
  PageQueryOptions,
  PaginateOptions,
  PaginationLinks,
  SearchOptions,
  SliceOptions,
  SortOptions,
} from "../models/page";

let apiBaseUrl = process.env["JSON_PLACEHOLDER_URL"];
if (!(typeof apiBaseUrl === "string" && apiBaseUrl.length > 0)) {
  apiBaseUrl = "https://jsonplaceholder.typicode.com";
}

export async function fetchResource<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${endpoint}`);
  return response.json();
}

export async function createResource<T>(
  endpoint: string,
  body: string
): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return response.json();
}

export async function updateResource<T>(
  endpoint: string,
  body: string
): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  return response.json();
}

export async function deleteResource<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "DELETE",
  });
  return response.json();
}

type QueryStringParams = {
  [param: string]: string;
};

function getPaginationQueryParams(
  paginate?: PaginateOptions,
  slice?: SliceOptions
): QueryStringParams {
  const params = {} as QueryStringParams;
  if (paginate !== undefined) {
    let { page, limit } = paginate;
    if (page === undefined) {
      page = 1;
    }
    if (limit === undefined) {
      limit = 10;
    }
    params["_page"] = page.toString();
    params["_limit"] = limit.toString();
  } else {
    if (slice !== undefined) {
      let { start, limit } = slice;
      const { end } = slice;
      if (start === undefined) {
        start = 1;
      }
      if (end === undefined) {
        if (limit === undefined) {
          limit = 10;
        }
        params["_start"] = start.toString();
        params["_limit"] = limit.toString();
      } else {
        params["_start"] = start.toString();
        params["_end"] = end.toString();
      }
    } else {
      params["_page"] = "1";
      params["_limit"] = "10";
    }
  }
  return params;
}

function getSortQueryParams(sort?: SortOptions[]): QueryStringParams {
  const params = {} as QueryStringParams;
  if (sort !== undefined) {
    const fields: string[] = [];
    const orders: string[] = [];
    for (const { field, order } of sort) {
      if (field !== undefined && order !== undefined) {
        fields.push(field);
        orders.push(order);
      }
    }
    params["_sort"] = fields
      .map((field) => encodeURIComponent(field))
      .join(",");
    params["_order"] = orders
      .map((order) => encodeURIComponent(order.toLowerCase()))
      .join(",");
  }
  return params;
}

function getOperatorsQueryParams(
  operators?: OperatorOptions[]
): QueryStringParams {
  const params = {} as QueryStringParams;
  if (operators !== undefined) {
    for (const { kind, field, value } of operators) {
      if (kind !== undefined && field !== undefined && value !== undefined) {
        const key = `${encodeURIComponent(field)}_${encodeURIComponent(
          kind.toLowerCase()
        )}`;
        params[key] = encodeURIComponent(value);
      }
    }
  }
  return params;
}

function getSearchQueryParams(search?: SearchOptions): QueryStringParams {
  const params = {} as QueryStringParams;
  if (search !== undefined && search["q"] !== undefined) {
    params["q"] = encodeURIComponent(search["q"]);
  }
  return params;
}

function buildUrlQueryString(options: PageQueryOptions): string {
  const params = {
    ...getPaginationQueryParams(options.paginate, options.slice),
    ...getSortQueryParams(options.sort),
    ...getOperatorsQueryParams(options.operators),
    ...getSearchQueryParams(options.search),
  };
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

function parsePaginationLinks(headers: Headers): PaginationLinks | undefined {
  const linkHeaderText = headers.get("link");
  if (linkHeaderText === null) {
    return;
  }
  const linkHeader = parseLinkHeader(linkHeaderText);
  if (linkHeader === null) {
    return;
  }
  const links: PaginationLinks = {};
  type PaginationLinkType = keyof PaginationLinks;
  const linkTypes: PaginationLinkType[] = ["first", "prev", "next", "last"];
  for (const linkType of linkTypes) {
    const link = linkHeader[linkType];
    if (link !== undefined) {
      const { _page: page, _limit: limit } = link;
      if (page !== undefined && limit !== undefined) {
        links[linkType] = {
          page: Number(page),
          limit: Number(limit),
        };
      }
    }
  }
  return links;
}

function parsePageMetadata(headers: Headers): PageMetadata | undefined {
  const totalCountText = headers.get("x-total-count");
  if (totalCountText === null) {
    return;
  }
  const meta: PageMetadata = {
    totalCount: Number(totalCountText),
  };
  return meta;
}

export async function fetchPage<T>(
  endpoint: string,
  options?: PageQueryOptions
): Promise<Page<T>> {
  let url: string;
  if (options === undefined) {
    url = `${apiBaseUrl}${endpoint}`;
  } else {
    const queryString = buildUrlQueryString(options);
    url = `${apiBaseUrl}${endpoint}?${queryString}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  const { headers } = response;
  const links = parsePaginationLinks(headers);
  const meta = parsePageMetadata(headers);
  return { data: json, links, meta } as Page<T>;
}
