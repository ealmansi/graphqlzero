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
    query: "\n        query getPost {\n          post(id: 1) {\n            id\n          }\n        }\n      "
  }, {
    id: 'get-user',
    label: 'Get a user',
    query: "\n        query getUser {\n          user(id: 1) {\n            id\n          }\n        }\n      "
  }, {
    id: 'get-user-todos',
    label: 'Get a user\'s todos',
    query: "\n        query getUserTodos {\n    \n        }\n      "
  }, {
    id: 'get-posts',
    label: 'Get posts',
    query: "\n        query getPosts {\n    \n        }\n      "
  }, {
    id: 'get-comments',
    label: 'Get comments',
    query: "\n        query getComments {\n    \n        }\n      "
  }, {
    id: 'create-post',
    label: 'Create a post',
    query: "\n        mutation createPost {\n    \n        }\n      "
  }, {
    id: 'update-post',
    label: 'Update a post',
    query: "\n        mutation updatePost {\n    \n        }\n      "
  }, {
    id: 'delete-post',
    label: 'Delete a post',
    query: "\n        mutation deletePost {\n    \n        }\n      "
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
//# sourceMappingURL=index.js.83e6cf015119644dd718.hot-update.js.map