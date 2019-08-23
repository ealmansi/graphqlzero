webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/example-query.ts":
/*!******************************!*\
  !*** ./lib/example-query.ts ***!
  \******************************/
/*! exports provided: getExampleQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExampleQueries", function() { return getExampleQueries; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function getExampleQueries() {
  return [{
    id: 'get-post',
    label: 'Get a post',
    query: unindent("\n        query getPost {\n          post(id: 1) {\n            id\n          }\n        }\n      ")
  }, {
    id: 'get-user',
    label: 'Get a user',
    query: unindent("\n        query getUser {\n          user(id: 1) {\n            id\n          }\n        }\n      ")
  }, {
    id: 'get-user-todos',
    label: 'Get user posts',
    query: unindent("\n        query getUserPosts {\n          user(id: 1) {\n            posts(options: { paginate: { limit: 5 } }) {\n              data {\n                id\n              }\n            }\n          }\n        }\n      ")
  }, {
    id: 'get-posts',
    label: 'Get posts',
    query: unindent("\n        query getPosts {\n          posts(options: { paginate: { limit: 5 } }) {\n            data {\n              id\n            }\n          }\n        }\n      ")
  }, {
    id: 'get-comments',
    label: 'Get comments',
    query: unindent("\n        query getComments {\n    \n        }\n      ")
  }, {
    id: 'create-post',
    label: 'Create a post',
    query: unindent("\n        mutation createPost {\n          createPost(input: { title: \"some title\", body: \"some body\" }) {\n            id\n          }\n        }\n      ")
  }, {
    id: 'update-post',
    label: 'Update a post',
    query: unindent("\n        mutation updatePost {\n          updatePost(id: 1) {\n            id\n          }\n        }\n      ")
  }, {
    id: 'delete-post',
    label: 'Delete a post',
    query: unindent("\n        mutation deletePost {\n          deletePost(id: 1) {\n            id\n          }\n        }\n      ")
  }];
}

function unindent(text) {
  var lines = text.split('\n').slice(1, -1);
  var spaces = text.length;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(lines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;
      var i = 0;

      for (; i < line.length && line[i] === ' '; ++i) {}

      spaces = Math.min(spaces, i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return lines.map(function (line) {
    return line.substr(spaces);
  }).join('\n');
}

/***/ })

})
//# sourceMappingURL=index.js.f12f69f41f376867e548.hot-update.js.map