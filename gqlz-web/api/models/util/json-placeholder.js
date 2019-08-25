"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
var parse_link_header_1 = __importDefault(require("parse-link-header"));
var apiBaseUrl = process.env.JSON_PLACEHOLDER_URL;
if (apiBaseUrl === undefined) {
    throw new Error('Missing env variable JSON_PLACEHOLDER_URL.');
}
function fetchResource(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isomorphic_fetch_1.default("" + apiBaseUrl + endpoint)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.fetchResource = fetchResource;
function createResource(endpoint, body) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isomorphic_fetch_1.default("" + apiBaseUrl + endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: body,
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.createResource = createResource;
function updateResource(endpoint, body) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isomorphic_fetch_1.default("" + apiBaseUrl + endpoint, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: body,
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.updateResource = updateResource;
function deleteResource(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isomorphic_fetch_1.default("" + apiBaseUrl + endpoint, {
                        method: 'DELETE',
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
exports.deleteResource = deleteResource;
function getPaginationQueryParams(paginate, slice) {
    var params = {};
    if (paginate !== undefined) {
        var page = paginate.page, limit = paginate.limit;
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
            var start = slice.start, limit = slice.limit;
            var end = slice.end;
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
    var params = {};
    if (sort !== undefined) {
        var fields = [];
        var orders = [];
        for (var _i = 0, sort_1 = sort; _i < sort_1.length; _i++) {
            var _a = sort_1[_i], field = _a.field, order = _a.order;
            if (field !== undefined && order !== undefined) {
                fields.push(field);
                orders.push(order);
            }
        }
        params._sort = fields.map(function (field) { return encodeURIComponent(field); }).join(',');
        params._order = orders.map(function (order) { return encodeURIComponent(order.toLowerCase()); }).join(',');
    }
    return params;
}
function getOperatorsQueryParams(operators) {
    var params = {};
    if (operators !== undefined) {
        for (var _i = 0, operators_1 = operators; _i < operators_1.length; _i++) {
            var _a = operators_1[_i], kind = _a.kind, field = _a.field, value = _a.value;
            if (kind !== undefined && field !== undefined && value !== undefined) {
                var key = encodeURIComponent(field) + "_" + encodeURIComponent(kind.toLowerCase());
                params[key] = encodeURIComponent(value);
            }
        }
    }
    return params;
}
function getSearchQueryParams(search) {
    var params = {};
    if (search !== undefined && search.q !== undefined) {
        params.q = encodeURIComponent(search.q);
    }
    return params;
}
function buildUrlQueryString(options) {
    var params = __assign({}, getPaginationQueryParams(options.paginate, options.slice), getSortQueryParams(options.sort), getOperatorsQueryParams(options.operators), getSearchQueryParams(options.search));
    return Object.entries(params).map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + value;
    }).join('&');
}
function parsePaginationLinks(headers) {
    var linkHeaderText = headers.get('link');
    if (linkHeaderText === null) {
        return;
    }
    var linkHeader = parse_link_header_1.default(linkHeaderText);
    if (linkHeader === null) {
        return;
    }
    var links = {};
    var linkTypes = ['first', 'prev', 'next', 'last'];
    for (var _i = 0, linkTypes_1 = linkTypes; _i < linkTypes_1.length; _i++) {
        var linkType = linkTypes_1[_i];
        var link = linkHeader[linkType];
        if (link !== undefined) {
            var page = link._page, limit = link._limit;
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
    var totalCountText = headers.get('x-total-count');
    if (totalCountText === null) {
        return;
    }
    var meta = {
        totalCount: Number(totalCountText)
    };
    return meta;
}
function fetchPage(endpoint, options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, queryString, response, json, headers, links, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (options === undefined) {
                        url = "" + apiBaseUrl + endpoint;
                    }
                    else {
                        queryString = buildUrlQueryString(options);
                        url = "" + apiBaseUrl + endpoint + "?" + queryString;
                    }
                    return [4 /*yield*/, isomorphic_fetch_1.default(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    headers = response.headers;
                    links = parsePaginationLinks(headers);
                    meta = parsePageMetadata(headers);
                    return [2 /*return*/, { data: json, links: links, meta: meta }];
            }
        });
    });
}
exports.fetchPage = fetchPage;
