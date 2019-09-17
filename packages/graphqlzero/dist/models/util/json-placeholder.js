"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const parse_link_header_1 = __importDefault(require("parse-link-header"));
const apiBaseUrl = process.env.JSON_PLACEHOLDER_URL;
if (apiBaseUrl === undefined) {
    throw new Error('Missing env variable JSON_PLACEHOLDER_URL.');
}
function fetchResource(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield isomorphic_fetch_1.default(`${apiBaseUrl}${endpoint}`);
        return response.json();
    });
}
exports.fetchResource = fetchResource;
function createResource(endpoint, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield isomorphic_fetch_1.default(`${apiBaseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        return response.json();
    });
}
exports.createResource = createResource;
function updateResource(endpoint, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield isomorphic_fetch_1.default(`${apiBaseUrl}${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        return response.json();
    });
}
exports.updateResource = updateResource;
function deleteResource(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield isomorphic_fetch_1.default(`${apiBaseUrl}${endpoint}`, {
            method: 'DELETE',
        });
        return response.json();
    });
}
exports.deleteResource = deleteResource;
function getPaginationQueryParams(paginate, slice) {
    const params = {};
    if (paginate !== undefined) {
        let { page, limit } = paginate;
        if (page === undefined) {
            page = 1;
        }
        if (limit === undefined) {
            limit = 10;
        }
        params._page = page.toString();
        params._limit = limit.toString();
    }
    else {
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
                params._start = start.toString();
                params._limit = limit.toString();
            }
            else {
                params._start = start.toString();
                params._end = end.toString();
            }
        }
        else {
            params._page = '1';
            params._limit = '10';
        }
    }
    return params;
}
function getSortQueryParams(sort) {
    const params = {};
    if (sort !== undefined) {
        const fields = [];
        const orders = [];
        for (const { field, order } of sort) {
            if (field !== undefined && order !== undefined) {
                fields.push(field);
                orders.push(order);
            }
        }
        params._sort = fields.map(field => encodeURIComponent(field)).join(',');
        params._order = orders.map(order => encodeURIComponent(order.toLowerCase())).join(',');
    }
    return params;
}
function getOperatorsQueryParams(operators) {
    const params = {};
    if (operators !== undefined) {
        for (const { kind, field, value } of operators) {
            if (kind !== undefined && field !== undefined && value !== undefined) {
                const key = `${encodeURIComponent(field)}_${encodeURIComponent(kind.toLowerCase())}`;
                params[key] = encodeURIComponent(value);
            }
        }
    }
    return params;
}
function getSearchQueryParams(search) {
    const params = {};
    if (search !== undefined && search.q !== undefined) {
        params.q = encodeURIComponent(search.q);
    }
    return params;
}
function buildUrlQueryString(options) {
    const params = Object.assign(Object.assign(Object.assign(Object.assign({}, getPaginationQueryParams(options.paginate, options.slice)), getSortQueryParams(options.sort)), getOperatorsQueryParams(options.operators)), getSearchQueryParams(options.search));
    return Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
}
function parsePaginationLinks(headers) {
    const linkHeaderText = headers.get('link');
    if (linkHeaderText === null) {
        return;
    }
    const linkHeader = parse_link_header_1.default(linkHeaderText);
    if (linkHeader === null) {
        return;
    }
    const links = {};
    const linkTypes = ['first', 'prev', 'next', 'last'];
    for (const linkType of linkTypes) {
        const link = linkHeader[linkType];
        if (link !== undefined) {
            const { _page: page, _limit: limit } = link;
            if (page !== undefined && limit !== undefined) {
                links[linkType] = {
                    page: Number(page),
                    limit: Number(limit)
                };
            }
        }
    }
    return links;
}
function parsePageMetadata(headers) {
    const totalCountText = headers.get('x-total-count');
    if (totalCountText === null) {
        return;
    }
    const meta = {
        totalCount: Number(totalCountText)
    };
    return meta;
}
function fetchPage(endpoint, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let url;
        if (options === undefined) {
            url = `${apiBaseUrl}${endpoint}`;
        }
        else {
            const queryString = buildUrlQueryString(options);
            url = `${apiBaseUrl}${endpoint}?${queryString}`;
        }
        const response = yield isomorphic_fetch_1.default(url);
        const json = yield response.json();
        const { headers } = response;
        const links = parsePaginationLinks(headers);
        const meta = parsePageMetadata(headers);
        return { data: json, links, meta };
    });
}
exports.fetchPage = fetchPage;
