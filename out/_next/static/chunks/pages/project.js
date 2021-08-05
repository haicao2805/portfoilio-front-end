_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/project"],{

/***/ "./common/helpers/string.helper.ts":
/*!*****************************************!*\
  !*** ./common/helpers/string.helper.ts ***!
  \*****************************************/
/*! exports provided: capitalize, truncateContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateContent", function() { return truncateContent; });
var capitalize = function capitalize(str) {
  return str.split(' ').map(function (item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }).join(' ');
};
var truncateContent = function truncateContent(str, maxLength) {
  var newStr = str.slice(0, maxLength).trim();
  return str.length <= maxLength ? str : newStr + '...';
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/seoHead.tsx":
/*!********************************!*\
  !*** ./components/seoHead.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_string_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/helpers/string.helper */ "./common/helpers/string.helper.ts");
var _jsxFileName = "E:\\portfolio\\client\\components\\seoHead.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var SeoHead = function SeoHead(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$isIndexPage = _ref.isIndexPage,
      isIndexPage = _ref$isIndexPage === void 0 ? false : _ref$isIndexPage,
      _ref$isFollowPage = _ref.isFollowPage,
      isFollowPage = _ref$isFollowPage === void 0 ? true : _ref$isFollowPage,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$canonical = _ref.canonical,
      canonical = _ref$canonical === void 0 ? '' : _ref$canonical,
      _ref$imageUrl = _ref.imageUrl,
      imageUrl = _ref$imageUrl === void 0 ? '/asset/images/avatar.jpg' : _ref$imageUrl;
  var metaIndexPage = isIndexPage ? 'index' : 'noindex';
  var metaIsFollowPage = isFollowPage ? 'follow' : 'nofollow';
  var metaRobots = "".concat(metaIndexPage, ",").concat(metaIsFollowPage);
  var pageTitle = "".concat(title);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html;charset=UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, user-scalable=0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "google-site-verification",
    content: "BWOjVaLMrQlDDZSMNRtScpbtQTBOWSuuZLoFe6IwjV4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, Object(_common_helpers_string_helper__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(pageTitle)), __jsx("meta", {
    name: "description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "robots",
    content: metaRobots,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Cao Chi Hai, portfolio, personal project",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: 'https://haicao.website' + canonical,
    rel: "canonical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "article",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:title",
    content: pageTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "og:image",
    content: imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("meta", {
    property: "fb:app_id",
    content: process.env.FB_APP_ID,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: pageTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));
};

_c = SeoHead;
/* harmony default export */ __webpack_exports__["default"] = (SeoHead);

var _c;

$RefreshReg$(_c, "SeoHead");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproject&absolutePagePath=E%3A%5Cportfolio%5Cclient%5Cpages%5Cproject.tsx!./":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproject&absolutePagePath=E%3A%5Cportfolio%5Cclient%5Cpages%5Cproject.tsx ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project",
      function () {
        return __webpack_require__(/*! ./pages/project.tsx */ "./pages/project.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./pages/project.tsx":
/*!***************************!*\
  !*** ./pages/project.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seoHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/seoHead */ "./components/seoHead.tsx");
/* harmony import */ var _public_asset_icons_nestjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/asset/icons/nestjs */ "./public/asset/icons/nestjs.tsx");
/* harmony import */ var _public_asset_icons_mysql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/asset/icons/mysql */ "./public/asset/icons/mysql.tsx");
/* harmony import */ var _public_asset_icons_redis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/asset/icons/redis */ "./public/asset/icons/redis.tsx");
/* harmony import */ var _public_asset_icons_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/asset/icons/socket.io */ "./public/asset/icons/socket.io.tsx");
/* harmony import */ var _public_asset_icons_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/asset/icons/nextjs */ "./public/asset/icons/nextjs.tsx");
/* harmony import */ var _public_asset_icons_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/asset/icons/redux */ "./public/asset/icons/redux.tsx");
var _jsxFileName = "E:\\portfolio\\client\\pages\\project.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];









var Project = function Project() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_seoHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Cao Chi Hai | Project",
    canonical: "/project",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "relative z-10 flex flex-col items-center justify-center flex-1 p-2 pt-24 space-y-16 transform -translate-y-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "text-4xl font-semibold text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "My Project")), __jsx("div", {
    className: "text-white bg-gray-800 bg-opacity-80 md:flex md:w-4/5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "md:h-166 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/asset/images/project1.jpg",
    alt: "project 1",
    className: "object-cover w-full h-full ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "p-2 space-y-4 md:p-8 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-2xl font-semibold md:text-4xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "My Chess"), __jsx("div", {
    className: "space-y-2 opacity-80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, "My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world. This website is inspired by Chess.com and Steam."), __jsx("div", {
    className: "flex items-center space-x-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Front-end: "), __jsx("div", {
    className: "flex space-x-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, __jsx(_public_asset_icons_nextjs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }), __jsx(_public_asset_icons_redux__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }))), __jsx("p", {
    className: "flex items-center space-x-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Back-end: "), __jsx("div", {
    className: "flex space-x-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, __jsx(_public_asset_icons_nestjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }), __jsx(_public_asset_icons_mysql__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }), __jsx(_public_asset_icons_redis__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }), __jsx(_public_asset_icons_socket_io__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "flex items-center space-x-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, "My Role:"), __jsx("p", {
    className: "px-2 py-1 border border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "backend")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, "Team size: 3")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    className: "inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Project Detail")))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    className: "inline-block px-8 py-2 mx-auto font-semibold text-white bg-blue-600 rounded-md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Show More"))));
};

_c = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c;

$RefreshReg$(_c, "Project");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/mysql.tsx":
/*!**************************************!*\
  !*** ./public/asset/icons/mysql.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\mysql.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern2)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern2",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image2",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/nestjs.tsx":
/*!***************************************!*\
  !*** ./public/asset/icons/nestjs.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\nestjs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern1)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern1",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image1",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/nextjs.tsx":
/*!***************************************!*\
  !*** ./public/asset/icons/nextjs.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\nextjs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern7)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern7",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image7",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/redis.tsx":
/*!**************************************!*\
  !*** ./public/asset/icons/redis.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\redis.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern4)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern4",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image4",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/redux.tsx":
/*!**************************************!*\
  !*** ./public/asset/icons/redux.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\redux.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern6)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern6",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image6",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/asset/icons/socket.io.tsx":
/*!******************************************!*\
  !*** ./public/asset/icons/socket.io.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\socket.io.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "32",
    height: "32",
    fill: "none",
    viewBox: "0 0 32 32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "url(#pattern0)",
    d: "M0 0H32V32H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("pattern", {
    id: "pattern0",
    width: "1",
    height: "1",
    patternContentUnits: "objectBoundingBox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("use", {
    transform: "scale(.00781)",
    xlinkHref: "#image0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("image", {
    id: "image0",
    width: "128",
    height: "128",
    xlinkHref: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
}

_c = Icon;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

var _c;

$RefreshReg$(_c, "Icon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproject&absolutePagePath=E%3A%5Cportfolio%5Cclient%5Cpages%5Cproject.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW9IZWFkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9hc3NldC9pY29ucy9teXNxbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9hc3NldC9pY29ucy9uZXN0anMudHN4Iiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXQvaWNvbnMvbmV4dGpzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0L2ljb25zL3JlZGlzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0L2ljb25zL3JlZHV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0L2ljb25zL3NvY2tldC5pby50c3giXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsInN0ciIsInNwbGl0IiwibWFwIiwiaXRlbSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwidHJ1bmNhdGVDb250ZW50IiwibWF4TGVuZ3RoIiwibmV3U3RyIiwidHJpbSIsImxlbmd0aCIsIlNlb0hlYWQiLCJ0aXRsZSIsImlzSW5kZXhQYWdlIiwiaXNGb2xsb3dQYWdlIiwiZGVzY3JpcHRpb24iLCJjYW5vbmljYWwiLCJpbWFnZVVybCIsIm1ldGFJbmRleFBhZ2UiLCJtZXRhSXNGb2xsb3dQYWdlIiwibWV0YVJvYm90cyIsInBhZ2VUaXRsZSIsInByb2Nlc3MiLCJlbnYiLCJGQl9BUFBfSUQiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwiaSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJwcm9wcyIsInVuaXF1ZSIsImMiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZCIsImlzU2VydmVyIiwiY29uc3RydWN0b3IiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIkNvbXBvbmVudCIsIlByb2plY3QiLCJJY29uIl0sIm1hcHBpbmdzIjoiOzs7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O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLGdGQUFlO0FBQ3JDLHFCQUFxQixtQkFBTyxDQUFDLDhFQUEyQjs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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LEtBQ0k7QUFBUyxNQUFFLEVBQUMsVUFBWjtBQUF1QixTQUFLLEVBQUMsR0FBN0I7QUFBaUMsVUFBTSxFQUFDLEdBQXhDO0FBQTRDLHVCQUFtQixFQUFDLG1CQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixhQUFTLEVBQUMsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUNJLE1BQUUsRUFBQyxRQURQO0FBRUksU0FBSyxFQUFDLEtBRlY7QUFHSSxVQUFNLEVBQUMsS0FIWDtBQUlJLGFBQVMsRUFBQyxnaE9BSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBRkosQ0FESjtBQWdCSDs7S0FqQlFBLEk7QUFtQk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvcHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gc3RyXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKSlcclxuICAgICAgICAuam9pbignICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRydW5jYXRlQ29udGVudCA9IChzdHI6IHN0cmluZywgbWF4TGVuZ3RoOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0ciA9IHN0ci5zbGljZSgwLCBtYXhMZW5ndGgpLnRyaW0oKTtcclxuXHJcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA8PSBtYXhMZW5ndGggPyBzdHIgOiBuZXdTdHIgKyAnLi4uJztcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL2NvbW1vbi9oZWxwZXJzL3N0cmluZy5oZWxwZXInO1xyXG5leHBvcnQgaW50ZXJmYWNlIFNlb0hlYWRQcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpc0luZGV4UGFnZT86IGJvb2xlYW47XHJcbiAgICBpc0ZvbGxvd1BhZ2U/OiBib29sZWFuO1xyXG4gICAgY2Fub25pY2FsOiBzdHJpbmc7XHJcbiAgICBrZXl3b3JkPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VVcmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNlb0hlYWQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFNlb0hlYWRQcm9wcz4gPSAoe1xyXG4gICAgdGl0bGUgPSAnJyxcclxuICAgIGlzSW5kZXhQYWdlID0gZmFsc2UsXHJcbiAgICBpc0ZvbGxvd1BhZ2UgPSB0cnVlLFxyXG4gICAgZGVzY3JpcHRpb24gPSAnJyxcclxuICAgIGNhbm9uaWNhbCA9ICcnLFxyXG4gICAgaW1hZ2VVcmwgPSAnL2Fzc2V0L2ltYWdlcy9hdmF0YXIuanBnJyxcclxufSkgPT4ge1xyXG4gICAgY29uc3QgbWV0YUluZGV4UGFnZSA9IGlzSW5kZXhQYWdlID8gJ2luZGV4JyA6ICdub2luZGV4JztcclxuICAgIGNvbnN0IG1ldGFJc0ZvbGxvd1BhZ2UgPSBpc0ZvbGxvd1BhZ2UgPyAnZm9sbG93JyA6ICdub2ZvbGxvdyc7XHJcbiAgICBjb25zdCBtZXRhUm9ib3RzID0gYCR7bWV0YUluZGV4UGFnZX0sJHttZXRhSXNGb2xsb3dQYWdlfWA7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBgJHt0aXRsZX1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkNvbnRlbnQtVHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTBcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cIkJXT2pWYUxNclFsRERaU01OUnRTY3BidFFUQk9XU3V1WkxvRmU2SXdqVjRcIiAvPlxyXG5cclxuICAgICAgICAgICAgey8qIGNvbW1vbiBoZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDx0aXRsZT57Y2FwaXRhbGl6ZShwYWdlVGl0bGUpfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD17bWV0YVJvYm90c30gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkNhbyBDaGkgSGFpLCBwb3J0Zm9saW8sIHBlcnNvbmFsIHByb2plY3RcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPXsnaHR0cHM6Ly9oYWljYW8ud2Vic2l0ZScgKyBjYW5vbmljYWx9IHJlbD1cImNhbm9uaWNhbFwiIC8+XHJcbiAgICAgICAgICAgIHsvKiBnb29nbGUgaGVhZGVyICovfVxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImZiOmFwcF9pZFwiIGNvbnRlbnQ9e3Byb2Nlc3MuZW52LkZCX0FQUF9JRH0gLz5cclxuICAgICAgICAgICAgey8qIHR3aXR0ZXIgaGVhZGVyICovfVxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtpbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VvSGVhZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9wcm9qZWN0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRTpcXFxccG9ydGZvbGlvXFxcXGNsaWVudFxcXFxwYWdlc1xcXFxwcm9qZWN0LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDg4MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg4ODApO1xuLyoqKioqKi8gfSkoKVxuOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBIZWFkTWFuYWdlckNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8e1xuICB1cGRhdGVIZWFkPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgbW91bnRlZEluc3RhbmNlcz86IGFueVxuICB1cGRhdGVTY3JpcHRzPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgc2NyaXB0cz86IGFueVxufT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnXS5zb21lKCh1cmwpID0+XG4gICAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjE0LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjE0LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlb0hlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9zZW9IZWFkJztcclxuaW1wb3J0IE5lc3RKU0xvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL25lc3Rqcyc7XHJcbmltcG9ydCBNeXNxbExvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL215c3FsJztcclxuaW1wb3J0IFJlZGlzTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvcmVkaXMnO1xyXG5pbXBvcnQgU29ja2V0TG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvc29ja2V0LmlvJztcclxuaW1wb3J0IE5leHRKc0xvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL25leHRqcyc7XHJcbmltcG9ydCBSZWR1eExvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0UHJvcHMge31cclxuXHJcbmNvbnN0IFByb2plY3Q6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb2plY3RQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTZW9IZWFkIHRpdGxlPVwiQ2FvIENoaSBIYWkgfCBQcm9qZWN0XCIgY2Fub25pY2FsPVwiL3Byb2plY3RcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC0xIHAtMiBwdC0yNCBzcGFjZS15LTE2IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPk15IFByb2plY3Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS04MDAgYmctb3BhY2l0eS04MCBtZDpmbGV4IG1kOnctNC81XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoLTE2NiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXQvaW1hZ2VzL3Byb2plY3QxLmpwZ1wiIGFsdD1cInByb2plY3QgMVwiIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgc3BhY2UteS00IG1kOnAtOCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWQ6dGV4dC00eGxcIj5NeSBDaGVzczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIG9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IGNoZXNzIGlzIGFuIG9ubGluZSB3ZWIgZ2FtZXMgYWxsb3cgcGVvcGxlIGNhbiBwbGF5IGNoZXNzIG9yIHRpYyB0YWMgdG9lIGFuZCBzaGFyZSB0aGVpciBoYXBwaW5lc3MgYWNyb3NzIHRoZSB3b3JsZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHdlYnNpdGUgaXMgaW5zcGlyZWQgYnkgQ2hlc3MuY29tIGFuZCBTdGVhbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnJvbnQtZW5kOiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEpzTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVkdXhMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJhY2stZW5kOiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVzdEpTTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlzcWxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpc0xvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2tldExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TXkgUm9sZTo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiBweS0xIGJvcmRlciBib3JkZXItd2hpdGVcIj5iYWNrZW5kPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWFtIHNpemU6IDM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNCBweS0yIG14LWF1dG8gZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIGJnLXllbGxvdy01MDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgRGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC04IHB5LTIgbXgtYXV0byBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctYmx1ZS02MDAgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJ1cmwoI3BhdHRlcm4yKVwiIGQ9XCJNMCAwSDMyVjMySDB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxwYXR0ZXJuIGlkPVwicGF0dGVybjJcIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgcGF0dGVybkNvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB0cmFuc2Zvcm09XCJzY2FsZSguMDA3ODEpXCIgeGxpbmtIcmVmPVwiI2ltYWdlMlwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQVNjRWxFUVZSNEFlMWRDYlFkUlJHdDc0SUt1SXZpZ2lBcWJyZ2hpQUtDK3dJS29nUVZKSm1lbnhNRUJBU1VBNTREZms0T3laL3VIeUNvYkNvaW9BS3lCSlZGUVVEQ2JoSlpCVmxrbDVBRUNCQWdRc2ozM0tycDkzcm16WHYveldQKy85UHpwcy81Wjk1L00yK211N3FtdXJycVZoVlIzV29LdEtYQTBOQkxhTXJRR29SajNmcUVBbUgwU2dxSHR5S2w5eU5sVGlLbDUvRXgxQWVSTWp2UXRPRVAwSXpoVnhPTkR2UUpSZnBvbUdyay9SVG9NMG5wSjBqcDBZeS9aMG5waHltSS9rNmgzb3VaWWUralg5WkhGS3J3VURINUtscVVNZWxaaklEdm5pZWxIMkxwTURpeU5lMDV0SGFGcVZQeG9VSHN5NXZmYnJMSCt2NXhVdnBzVW5vYm1uTEVLeXBPclFvT0x6U2ZKMldlZE43KzFhVDBnNlRNbGFUMGRhVDB2YVQwU3VkOE80WllUc3FjU01Id0IybG82RVVWcEZRRmh6VGxqQmRUb0grV25Gd3pud2JuZkpURk9oUytjUGFHcFBTM0tOVG5DR093K0cvSEJHQWVNTXgrTkhYVzZ5dElzWW9OYWZDSTExR2dyM1VZWUFVTm11MHlSd21GYjlCc1RJSFJwUFN0cFBSenp1L1NESUZ6WnpQelpONnMvckljRkpoKytKdEk2WDg2RTdtWXBrZnY2OWc1aVBmcDBkc29qQTZnVU44d0JpTmNSY3BzWGk4SkhTazZpU2NoNHBXWjd6REFVeFNPZktXN0hvME8wSXdqMzB4c0k5QzN4enVEdENUQS8vZFJvSDlNb2RtUkF2MWx3cTVoTVBvNFRUVWZvcWx6TnFKQXIwdjFkckk3a2hkK0ZkNW1wVWNjQnNDRS9aWm1IUC9TN3A4MU9rQ0RzOTlGU2g5UFNqK1d1cGRsQ09nR1dCYWdURDVGU2k4bnBaZFNFUDFYbGhQekIxSjZCazNUVzdKMHFSbWllL0svNEN0RC9jVjRVdXhrUFVUQnlHYTU3d3VtQ2FLdms5SzN0V0VDZS85Mng5WHhidVJPVXRIcEZFYTc4bkpVYnkxelQwVytIOHdZZVFNcGZWVmkwbUFYMk0yc2xlOUc4ZFZodEdsOFA3ejE3U2E3bSs5WGliRXBPcDNVOEpmRUJOMVRqK29malVtQjBPeE1Tai90VE5qVEZFYmY2OW5tSDh6ZWdKVCtWYndsZklpVVhoYUxmMWdRdTVuODlEVllOczVqWTFPOVBJdzVuZmt2MlBYb1YyVllBeCtnd0h3Ni84M2lYMkNpcHB0M1VCaTloOExoRDVQU1h5Vmw5aUdsWjFKb2ZoNDdtYzZKRFU2d0hmeHZUT1lJOWFPa29ya1U2SGYzekp3OUQ2anFQNFFGTDR6K25acUVoVUxzOFJqODZBQzdtdGtET1h0REN2VlVVdnBjVXZwK1VocmlQeTBGN1A5WVdtNmpVQWYxc2xEMHZLaG9KMUlhdG4xTDdGRlM1aXdLam54TjBZL0t2QitrQmtzTWMwaHNuM2dtMlJlM1g3eWpPSmVnYzhDaVdiY0NLQUFBU0dCK1FrckQ5V3VaQUo4UG0xaGd5T2dBcVZucmtJb1VLWDAxS2QySkVSNmdRTzlMc0dyV3JRQUs0RzFYK2pTSEFjQUlTeW5RMnhadzkveTMyR1gyYTFuY0s3MndnOVVSVEFvbGNaUGE2cGlmeEsyL0VBZlFnaVFUUkl0WXFXdTllbUsrWWJOMWREQXBmVGNwM1c2TGVROUxqVjYzc0JNekVrK2VNaTM2SENPQW1rc0I5SUVUS1JoNithU05BSlpMd05JQ2ZXb0g1Tkl6RkVTL3BOMkczejVwL2F6RWcwSHN3T3lmMnA0OVFWQVVKN3VCQ2NWMmNXTWJId1FreE5XTWI4UTQ2dFlqQlZnZllEdTlWUWh4WE1oT29LNXZPVHJBbW4yZ3A1RFNlL0FmbHBnaUd1d01rRXBLcjBndVZ3MEY5bjRLb3QwWTNWekU4L3J5SHJBUEtIMlhRK0JWcEtLRGM5RUNuc0FtMkJSdjV3SUtvODhVWXN4aGFhQURDdlIvbkQ0NkRNdG9wNW0xelNEWGpLVXVocWZPM1JvQ0J3QTNicmR0eHRDYWJNRnpEVHd5WVp0MGU0dk8xNDBPMExTUmo1SFNmMnRqUklJbjhqY1VSbS9wZkovNmJEWUZkak52VERtTVZySm96YjQ2KzF0QXhFSjlSa3FEUDZWUThTd0FsK05TZmcwckRWWlRxQzhZUDh0bTlyQ3I4NjBZWlpvbVdoQXpyNnNXYTcrZ2lPeWszRTJESStzWFNpVDBpUU5iMkFGbG45TThodm9LQnFNVSt0Qit1Qm0yWDBvdmJxeXpBSE1BSTVpM0tUMjlZZENCNzJFOHhESk13MkxXdnFmUjM4UjJObHJFSnVTOGZlL3I2eGsrbHNBTlFLUWVsSnNtYXM1NnBQUk44Y1NjbDF1S2RQM0EwUUgyWmlwOVN6WVRtT3Q3QXI1MC9md3FYaGhHUXlsaVh0b1RjQVMyZTZXWFVCaHRQKzVrQXJvSnU0NkVCTERiUkhNOVErREh2Uk5WZVFDaWY5d2dFaXdEWTZHSXM4Yk9Vc0RzTUdFT0p0bktYcFBOQlBvNnRpNW05YlArTGtVQjJRM0FLV09WcWxVTThraGRWc3Avb2ErSVo5SDJ2WGxFd0N0UVRIWHJnZ0tBZURjWkFQNkJDOGR2SGUraVAza3VBUlJkdklyTnlXK09aUjY3b1BQY3J5K3ZCYWFmb1ZrTktYQXZUZFB2OUlZV29oTmtLWWJBS3g1UE1GclZyUU1GNEIrQXlHeStPYzlTb01NT3Z5amZLWmloSllZeExRbWVvVEQ2VVkwd0dtdkt4S25qK3VULzZGMTBqOWdKSG5FWTJUTERNbzVpR29zR2ZYMWV0T3FtVVFodkV5TjFQYUlLakVXaCtVRWJ1Tm10SE9idTBYQW10cXRpYmtWU0NQdldZUDM4NGNSMm9vQ25BVG5FRVBXc2tQZm8vRHJFdlJPTnhjWHJKbzY0aG9EZjg2MGh3Rlc4aUphWjdYRVZoZnJ3Q2JOVitFWTN0dUVuSFRzcktJaSs0ZDA0MEdHNGtyUHhCTXZhNWt2d2NxQkZkMXJXMEdhNFY2Z3ZKa1FaK2RpQUhKTElaU3NCN0hGaDRSNUxIK21UMldkQkR5TTNnQ1VXWXZpK2szbHQyYjhVdlFaWUFuZDNJK01LOUxHRjRoYktUb3RjL1lQeUoybmpMQk1zcEtsSHZEWFhQY3B5c1dBTXIzY1kybzVwT1llK2w2V2ZwZW9IQUIxTjl5NEloaVZoSkYrU2lSS05TSEljWkNYTFhPQXRZNDg3ZVFVdDVFYjNQa0toL21ZaG9NOXg3M3pxQWJJVS9DSkRDanpQQ2JMcU9NUVV3ZkF2NHZJQUVXdnFBcEFFOTRrRzdXRmU0V0RrdmFRNDc1RmRBdXp4SVU1amswR0MraXMxdkVXYzg4Y1NTNWdBaVNoOWJFaVE0U0tobTh3OXIzWVlaVTBvUnhKRmV6cjRmMkVFNUNFRWpzQzNodWprcE5QTE12WnlUbG5qMjNnbXBMOUlGS1dpNzZmMjB5c3BNTitla09jWC9SREphdUttMFJVbVFOYlV5WXlSTEhxY2hkNlBnMEJhd3NsbUZ2cU1pYm9ac3BkSUltejc5dHZqWXJZZVRsUS92SG9PM2d5SjNyWEVlbzdqKzcwYWhOTlo1RW1TdklaMlBQWjRsSmU3SEdkbzQvTlJRclNRRmN3U2Fpa25pUnFmcDQzL1hWa0tST2M3NDdIanVpbGZrT3o0ZDdVY1R3aFlFYlJFd3ZFNkw3MkVMaldSTGIxMVI0QzBOWDZhdmQyeEZmcFpJbldSVnI3SkFFRjBaS0hQbUl5YndVU2M2UzJNenZjR0VEc2hkRVBFc05ML2NoamdFUXFpVDB6SXM4ZnpJYWljcGpRY1JVM0dsczhQMXlGbUx1R1JwRWxwQjJkbjVudnJIbmJIaGM4TUpFMVVWaEZtUU1HTk9ndEpUQzFsdnV2RTU4TXBkR0NhanQ3K0Q3U1QwcGUyU2dGeng2UW16eW9OUVpGalVPbmZPUVI2Z0dCVHIxS0RRYXMxcGUzelBRWEpWb2t1UEJhSjk3dkRZWURMZWdvY0xUTmhCRC9vVmxpSmRZSm9rWmZtN2tKcEhacFBKdFBNUm5NTHZYOVpiaWJiM0dhaURGRUdWNUtLcHBXbGk1UFREeFI0YUNLRFZsWTJ1RUlBTUNpYWxkNFJYRDVoT1pVblo0WTdQWldUTWFDYW1DWEtra29IVnFCZ1ZwUFo0ekdiSnljazMwR25hWmkwYzBEUkFCSGNaSUE3dWZiUHBIVm9uQjhzTlpMdWRNWnJkWUh6SzZmM2RFVktManRqWEREbEF1L052eDBIanVTWG5OSStpU0JHMURSUzdQWmR3dzRnYVNxOXJQS29HWUdOb2RLSlhmYnM4ZXord3dvZ01KVHJEVnRpd0VZK3RFYWxYd1NBUXdNOU80TUJsbkdPNGtvUFBqMDRpUlplMGlBR0VETzVhZy9paGloRW1hZGVZYm9Uay9DLzFFSnlvNlN0RkRqTnUzRDVGMFMrUUg4a3Jnd1dFOENjbFR1b0V1Vm9rWDRHNmVoOGFXTDl6SUtRTCtrdjlEQ3FqYnRPSUVnQWVOQzZiYnlMaU9iRWxVZTM2ZlpucGJnT2FPaGt5cHo0SlloTzd4OHBJTW1YbGphV2dDRDZjOWM2QUR4cEFzRzJkUXVqVWt4c3Q1M1ljMmp0dU5xWkZmLzJpREk3bityMk5uNWZKeG94Q2tUYXdWL1NOVkJDS3BPNDY2aC9lUVlZUFp3b3ZDbDBRSExzdmloMEtaVkNtMXNpeEFKMHM1WWppRlRwZEFMSEZSU1lyM24xUm1TVjM1V1hZUW5CUjFMNUptbmEzZFJydDNWVlQwQlN4cVlkSzNoNzVubTNsNWI4QW02NXZWZ0ttSk85Mjkza1psaEd6cG9yRzBzQVVzaWlBR1NueHZDeGhQWFFMaDg0THZZT2FvV3M1MHBudUlyMWcxNmpvanZOWWVNY3AyZm5ZdEYyRWxkSVNaakdGYTBmWk8xSFFnbjdtL1R4R08veTlZa3lteVhSanMrMUsycWxsZ2ZmU083QTVpUmlUOStwS1gxb2g4bkhmZTRpT0YxOGFyQmxxRXlwdHBnR1I3YjJhU2o1K3hwRVgwaVVhdWxrRFpRbFkvNFlETENha0o3ZXR3WmdTQ3RzREF4OVdiVnpEVTJkc3hFcC9ZQXpxYmUwVlFSbDE5QmF6WU1kU2duazdhM2VFUTIxa1pUK3EwTUhLeFVCa3IyR2tVT2dWZVY4SlJKSWVZa3o4Q2VvWFc0QVNkajhtSE10aVBRY0NkQWltWUFTYmxmNENYeHFFUGNvaUpHdDM2Q0NHVjZVNHdpSnR5dVZuRnFLTlZtT0grVVNybGtwVlFiTmRobGk4bkVtaUNSeWRuUDAzTzZkTGlDZVFxVFZ4MlEzNmRINkdhbDB6dUI4QTVXb2ZpNXZkak13QkVXaHNtcjRoanJJU01kMkZ3RlhnUFN0U3ArYklCekN5N0lZcWN4U0FWblZKUTF0V3RKbE1jUlRwTXg4UWx3RkY5SHlUT0kxNWdGSklwUHIzM01VNkwwYjUrMEhwUTlMVExDOEdWYzNvb2l3ZERRcmpZSmc5M3U1bDRZWkdOdGRxWmNJUzJtcm9TZ3BGWjdsc25yWVRnS0M3bVZEeEt5ckJjTXNETVhJTmlnL1FwRDBtM0J1dzJJbStrUlNDaWh6a3JlS0U4YU1vaHBTZ1JYalFpbGVSQmVuYVdEL3g0dHpMU216UTljK0ZVdmZTVDlLZ09nL25NR2h5dWllalg3SjVGN2xuSmRCaDlFSmpXdndvVlVLTENObFBwdTR4c2Qvd0F4WUZoRnlqcTB5cEp0YlVqZkJGSXcwUGtGMElKK1dCWWtSY0RPSjM5T0FTWW5md0kwZ0JnTmd6MzlBWWo3WnpacE9OV011YkN3VGlZczkvUWRMQkxhRXN2dTVMQWJWSklHbWtycjJaczY3NkUxZUlpNDdyLytVZU11aEVJTHJzVVdDcnlEQjZScEtVT3ZiRGFSUkVtejZ0SGZsYWJybFRXSDR6UWw1aVVVcXBCaUI3U05IK1pPdE5JdzJ6YWpMZzNVUHVJRzB2ZnkrdGxzOXNheXRjQmptNWtwSDQySzNBNFJWb005TVpWdURwRVFnNmhVc1RiMElTUS8xMUdTOFlCdWxKOUIvYVdzUWdkaEQ3dUVFMDVpZk5oVEdidDh3MzY2RGdVam9kMXZHbHZsQlVtYjN0alFyelZpaDhDQkhnRnR0TkNuNndkWEl4TjI1MEFTTUpDbzYzU0hFVW9Mdm9SOGFvNjE0N0JZeUowb3pkaEd3TTVSK3U4amJQak1ZYjMxZ0Q3Y0R3SEVwUjlqZ21yR2FoSjlmMlB5OW1kODNJZGxpSE5zalkwbkZrbkF4UVZjcXRia2M2NVU0aTJaeXBWR3AwWE1jUTZmem9JZGxMMjM5RGRBalpucG5JUnlMMGR1ZVJ3QXVGOEsrcU1YRURBVWJNTHJ5VzB0SEJ4Z2tpWFc5VnlVR0dJRm1JT3JEZlJlTEo5N0dtUm5PcHFVVTZyMzhNeHkxNWZnT0o4U2RiTGVaVi91ek5lb3dwanluSURYRmFZYWNSVzZkQnVnSlJ5UXNyM251NjlXMVluRThKYmF2SDlNZjhPdlVETEZ5RENXYnJZbFd0OExTZUZwLzZFZnNmREt6MkxiQTlZdDlNcGVtSnJQWGY3R1VJaGNqZXhNYkJhOVdVNkIvM1IrNUNuaVhBZmV5dVhKTUlHcXZSUGJoZDd4TFN1UTBoaW4rUUE4VXd5S29PenBBU205RG9UbVpFS1pXdVliSTZhRTFDUUVvY0NUQk5vQ3RIeEJGQ0R5WnByY2taVFpuSlRCWiszQUpCWHJieXBHajdZQTRVM2swbDdlY2JTL3k0SVFnaXRibENSYjNla1JLWDhSWUFhWHZqczNweU1pK1hIQVQ4QlBZdjhZeVlIV0NXN3pFVXZROFRWd0cxbWoydi9kOGswbjRJZFp5bE5aaE4zZzBsNVJHcEJVbU9PMDNzUlBiN1JHN0JGTnVRMUhSOUpaOEJZY0o1NWRjTVVRTUpUeWhNR3BKVEVHbllKbHVKaDA0UkVScUwyQk1KdW9nbHQ1Y1hEUUQ0SDVpT3Q2ZFVONjJyQTJUTDlWVjBuYitzU1lhVlZnZWpVM0RONUxTbDBzOHBUNlczZVhJWElJdFlxL0d0ckxTSzNlL3NFT0FIYjJzalNPSjlNMU4vMGJDVCtJeUFXeitqOFo0d2Q4enRJeVh1dGtiaUdKbzFoTHZhTW1sWFZubllWTDdwY3crclVrbm1SRXc2VGV3RnpRdyszT3dMSFlCZVh3bmt6cXcrdUhkVVFCUjFLTFp1Mis4L1d6cUNlK09qUDVlaFhWYUtyQm5CWkU4MkRhNnl0OFIxejF2b1lCNCtLeHp5Nzc5OGRIY3daRkQ1WGYxdGd5ci9pSVBCUWJOeHZIZVA4VUFyQThzSnVnS0FOdldyY0lVa0JCN3hBbGtNUUdpaXVheE1saExnNm95QVpKUVI5dVQwcTJoODAybUFLcjYwRXBuWTYvcTlIWTNMakRCOEZaeDlyUTBodEpLaGxXa29rVVVtcDBKOFFSMXF5QUZZTW1FVDE5bDVCOXNTZ01FeXB3NlprS3VDcEtuUDRhRUZMcFNvK2krTm5xQmxRZzNzOXUzTmhKVmtDOFk4VE95R1lYNkFsTGFqYmUwazIrUHl3aDVGeXVWY2FTQzg5bnprQ1QzQW1JRDRDWnU1eUpHNk4xUjFhN1cwak1GcS9CRElKL21yQmVYcXdFalpDV2NXTVhJS0dBTDZsWlJDbUJaUUNvWlRyVWJMY3BZR3JCNzZCTmtjRVhudUx0aFFTTE1Xb2N4QUVvajZZYUxLd0FUbkZJdkI5MVIwdityT0NrVkYrKzh6Z2tkZzcxZ2JuOUVDL2svaGNXTVFIQ0ZoemhGdkdBcjJMZEdCeFZEWGovdXdpN200UzA0UGExVU9BVThmRXJOQkg1TVgzRzloRFRBdGxEeU16eGNNMEZ4cFBYblRzQkZCbWFYR0hXRUNpWTcrdFA1dXFjRlVZQWpwemFKczVGZTN6YUpkMEZQcTI5VFZnb01qcXd2eWFlaWFXWHRZdDJ2OGFZQWdrUlV0Rk85TlJ4dlFwZjYvb2dmcUdNSVNqMUZFOUc1L3dOSTgwTzYxeGxlT0FBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwidXJsKCNwYXR0ZXJuMSlcIiBkPVwiTTAgMEgzMlYzMkgwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0dGVybiBpZD1cInBhdHRlcm4xXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1c2UgdHJhbnNmb3JtPVwic2NhbGUoLjAwNzgxKVwiIHhsaW5rSHJlZj1cIiNpbWFnZTFcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2UxXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFVYUVsRVFWUjRBZTFkQzVRbVIxVWVSZkdGNGdzSmlncGhkK3JXSk1HWTlVR1V4NWlwVzdNYlRCUmtRUVFsQWdxK1VJbUtKQm9ERWNpQmFBZ0ppQjVDaklJbkR6WnF6QUx5U0xJeGE0NGt4anhJc25tdWt1enVkUFhzWkRlYlpKZVozUjNQVjEwMTA5UHo5K3YvLy83LzduOTZ6cG5UL1hkWGQ5KzY5OWF0Vy9kVlkyUHRYeVlHSG4zK3lkOFdrdjVOUTN5REliNC9JUDV5U1B6T1FFeTllSEZ5OHBzeUgyNXZOaDhEaTJQbmZtTkE2dFdHZUxjaFhuVC9oMFBpL3cxSS9kSGNzZXJaeVY3aUdmd25yN2UvRzR5QlVPZzNHT0luWTB3QVpwZzNwQy9mczI3VGMrSmRDOFZHRVJLZkV3aitXVE14K2F6NHZmYThvUmdBSVEzcHp5UVlBRXh3SkNEKytJUHJObjJMNzFwSS9BcEQvSlFoM204a1h4WFExTW1MR3paOHM3L2ZIaHVLZ1ZDcVZ4cmlneDJZWUE1RTk5MHlRcjhaakJGck4ydUkzeGNLL2tIZnBqMDJFQVBtdU9sMWh2alJHR0c5VHJBWUVGK0FMbGxKSWZtekhkcUFJYmFIcENZWHh6WS9vNEhkYjBFMkU1UEhHT0w3T2hEM3FaRFViMWdHa0h5cUZmM0xDdU1TazdqblpvelE3d2pGNmQvWllyUmhHSUFJTjhRUEpCaGd6Z2gxOXVMRTVtZEMrVFBFdHlmdUp4a0EwdUxyUnZBbkhxT3A3MnNZQ3RZMnVNSDQ5SThaNG5DSndKTHZEYVQrUlloMGQyL2IwcjEwQ2VBWjRvaVI2dEs5NnpaOTE5ckdhb042SHhLZmFZaVA0ajhVL0tXOXgwMU5SS3NEUHNNUVAxaUMrSjRKNWtPcFBoaGZRVFFJSFdzTDFEMjA4UVd3QkVaRTFwL2J1MjdUODQzazlZWjRpeUUrMUFYeFBSTWNNTVJuckMxc05yQzNnVlMvNXRiODk0RHdNQVViNHR0NklMeG5nRVVqOVVNelVoL2ZRTFNzRFpBaG9nM3hOWVo0d1FqMTY4SHhVODgxeEdYbSsyVmlwK2dHQWZFLzdYekI1TGV1RFl3MnJKZjdqNXYrWGtQNnpwRDRxek12MGo5Z0JQKytJVDdjbDlHL3pCQnpNeE04MVREVURBZmN4Ykd4YjRCcGRmZUcwNzRkNituSFQ1ejg3dDNqazkrUGtRbTdQSDVET2NPSVFydGVIVE5Zcm9INFJxZ3IzRkx3amo0VDMwdUlMYTBVaVBFVTF0WWdMT2JjR2FsZUVnbytQU1IrbXhGOHZwRjhwU0crMFJEZkVzM0YrczZBK0I1RGZKZWJtN2VIcEw4SVc3d1I2cVBRNEVQaTEyT1V6WkE2SVpUVHo1dDVzZjRPTUZQc2t4MVA0UkkyZ3JjR3hPK1pIWi8rcVJ4RGp5ZG1GMGU5Qjh2SmprQ3NoWXZnZm1qYnNLdkRCeCtRL2pSRXJ5SGU1WkErMytQSWd6a1d0bnlzNWIxdi94d2orVlFZY2VEYVRXTUlJL1ZiQXFGK0s1RDhLcXNMTEl2dUxnaTk1RlplL2F4VTU2MEZXaS8xRVFqSEtBOUpuK2FXVkR1ZDJ4WHI3ZFVJcXVZYWxuSHc5OThja3ZxTGdGalBqcC95US9HcEkxZy9kU3ppQWtLcGZ6bmg2T2szakRldkNlTVFDQS9idWx0ZVFZeDM4ckwxRzdsRjMzZlF3TW9uK0wyejQxTS9DVDBEMWo0UUJoNUJhOHF0aGhFQjN5NUlvNlVSTW9vblVOUmcvRENrL2pzS3FoallTQy9LQUw0ZHBOQ2NJZjRDQWtMbUp0U1BtQWsrMFJEUFZDaWREb0xKUnBIdVk1ampuVTk5ZTgwSjd4a2dmbHd3eEk4WTRrOGE0b2NyWklCRkkvU2ZqUndEWUU0MVFsOW9TRDFSS2ZLcUU4MmVHYXd2b05JK1NIWHBTREZBU0hxREVlb201MGp4aUd5UDZjeDZ6VWhFSEVQUkM4WDB6eGxTT3lvZE1lbUliQ2FUQ2Q0S0cwampwVUFncDVRaHhyS3VtWVFZRXR3QjhiODJQb2dVc1crVkswdERJbERWREEzSFVOd0drWlFFc0dEV09zQVVZZEFwc1hPdEpDakN0SkkvbkNSNi9MZHpSVjhERTNuOGVpM096Ymg2S1l3b1ZZK1NFWDcvQW94aldjUTBVcjg4eWp2UW40TlBJNnZ0d083WnVEaGkzU0Zvc2gzMVJVYjljcHRaR0p1eUNPZk0wWEJIWTBsNkdUeWZXZTBydndkVGFTRDQ3WWIwbmhFZW1ZTmk1RHZnRzBrakdsWldBZkZmeGZCOHlKRDYwNkhrR3VDalprTDl1SFc1OWhZWE55amsxdjg3Z2orUnBRQWlOcUZES0ZvWWt2NzVOS2JwKzNXc1VXZlhLd25QbVNGK0xNYU45VWZ3c3FpdEk2ejc4NktDUXNFL0VSRHZYWTF6ZlNjeWwvcE9iUDlDMlBIM0hxOS9PQ0ExamFRRzU2T1A1Ny9WRWFGTmcrbG1SRE41bkhjNkd0THZYazM4eU00U2tQb1VvcVE2UFZmcUdrUzc5ZEdMalNJZy9UTUloSFNac1hDQ1BKMEdRSHU5SjRQWElaOWVsa2FzYUFEYXFLYzB4bjRLdEVwN1B2YzZDSS93NUlEMHVZWVljVys3bmZPbUhlblZUeDAzSVBnMGkwaGdrUHhvSkxXanEzZ0M2NnBGdkYyVS9UcklhSncwYmw1TDE4Tzh1ZDhscHR4ZFVNcGVWaXJiQ0VwZElQUWZ1NklHYXdueGRlanI0WkQwaDdLOGYvQUxHTklmS094TkZmeDRxYUNTR2FGK29icEkxNTdteFRvUXFHb1lyc1hTTGx2MDY5T000TWNMam40UDc3YThLY1YrRTRxRklmNUt5WmY3ajdUSFhuUURvVzRLMXAzeW9peml3Kzd2d3QxTDRScHhpNEhVdjUzMWJudlBsVFBwSmJteEZHQXRvem1KS05STnMrT2FzZ2cwSS9RTFhYbTZibkY4RnlLeHNyNHg1aUoxdXYxQSsxeDVDUUFiL25WNUk5K1ZvL2w4andNRzN6b3Jtd0ZReWFwOEoxckNkNE16d1k4SHBQNDZ6OVlQYTUvTGVPb2R6NUx2eFRTZnlnU0ZOY3R1T3R3K1l3bm84Z2h1Z2JLZEZla1RwYUNwMTNaWmJDS05XUTdEV1pURkFLMEVxSTVSWVRXOXpaRDZ2V1F4eVRoQllJQkR0WkdBOU45MUtFYVpSdGdTMS9XZFNNS0pmM1BwM1BxVFY5YTBLL0hpZG9tWG1ENWhRRU0xVVpTTDJXS0VmZzJXZUhEaExpRThkdUtkYWlneWhkS3pWVWxqU0tCUThsdGpuMTQraFNiYUxnTjdZbVFrakR4Z1NQMmJrZW84UkVFalNpZk5zQU14djF1ZThxTkdURzBNU1AzdHdKeHFRdDJVbW5QbzBwMlFyZE9hZ010UEI5QzBkeUtRMDlycUxXR25Ua2FjQkZLOXJVSW45Y3VSVld5dHJZSzN1Z3lqUWVkQzdnTnpMZy85eEpsZGMwWTU5OG1DeU8yVVVKd3BqanFGNzREejJZZk9nb2U2d1pBVVE4YWx2anhOTWxsMnNCVTNTUDJLSVVadDJ5RUQyMzYvQWhvOGlBVFh4TmhmK1JNeDU4aUdyZURqTFVNTmYxRE5GNG9YY09iaEdvaXNWZ3BVTUJDdmcrdC81YkJQL0hLRmtGb0gwZkJIYk4rbHB0M3BaUDNVc1FtU3IvNkpaVXJGaFJENjNya0tSc3Nvd2ppZmwzaGl1UUdoeVVidzVqYTVjd1NuSWFHdXlGd05lSGtRcFhmRE1XRzNTa0ZabERZMmNEU21oYnRSOE5MVE9mY1lsWGFaUGltV2tBQ0RFZGEyYVlZakdFZFFCRGx3SnM3N1hMbTMyNDNnL3pIRWlHMkR1ZlJSdDE2R1VTVHRYYU1vaG9mZHB6a1V2OG9sZkx5QjlWUkZlK2NCK0YwdU4yQnBwUkFSVWwwUGg0Wk5FNXVZZmhrY0hOYnNPVEY1REZ5Z0NGR0NiUnlPRVNpYThJbkRZdVlxYjcwbmtqUzJjRlJRRDhQSkNJci9TSUlkeGQ2SGNmcm1ubHY3Z09UL2dLS0Y4bWtJTjRvcFhVK2ppQ0lrUlpyakkvY0RZMk5qbUpmQUpBaE5ONUovQi9aMUowR1dHQzMyeldHUG9xWi8vK29zMS9RcWVvRzRodmpmamVUUEluc0ZteVl1RVFQbFdDdklVRVZvczVVU3BIN1hSTXpYdXE3N3A0TjhKUzhZZFFVVFJLdUNxWTJvbUlrYktHVm1wUUh4UGNnVFhORzRnaC93WkxtbDZiV3VkbC9UUitCUTRRK0kveTh2SmpHVGpFNENCQ2p4bXRtd3p6ZWhpd1JTczVWR2tTSTZWRVF1U2NIK2pjeEI5V2MvOE5nMWViQXRLbHljV2FuTVhiKzh3SU9vU1lCcW95NWt1bDJlbG1mQWhVRHlueFJBZGIyYlJEb0MvMzAxb1ZRanV3cUlwSXprcStwTjNZTFFSWFlLZm12YXJwNE5GdE5WVHdmYkM2SzQvczJ3L0RRVDB5OXpCYWlyUnR5SXZGL3RxRDlsUzBJSXpkYnVGTkphRmdzd3FkNVRFcjNOYUc3THVoTmp1ZGlhbDdPVnd3UE5vR2dYVU5xTkhZbXZhNWtnVTVGZDZBSzF6WG5FRlZXNG9WVUMwNW1nT2RUc0VsSlhWclZvWlkwQzgyWTZNcHZJYUYyaXRWbVBZUk1vdUthYlNLQ3FZVzRXSmJ1RUZ0YktVS28vY0RIN2EyNlVaekZSbHlodDNtUHdZSVpDL1hNV010Ymd2Y1BObzJRUEVOdXl0b0svdGdZSm5TYjFudXdCbmMxNzFNWTRFcDlad2NiUGFRaXUrL1dnZVZUc0VXS1g4M0JiS3dYc2F1YkJIdEhaek1leENXU3JFRm9HdUtXWkZPd1Jhb1JFQjVML3E1VUN2S1ZIVkRiMzhhZ0FkaDFTdG9kbVdGcEE1ZkhtVXJCSHlKMlpHTGtKZFZmVXFvSnZYMTU5NGg1UlhPL0huWEhvZzJ1VkFSQnVIOUxVZUMyb2hPVlpjUHpVYzdFYkZoUTBJL1ZiQWxLdlJvbVZLc0xOZmFmZDdsdklZQ283eXVhYnY1VFUvN252aEZkK2o4ZkYwSTRnc0NIOUpoZkpnL0kwUHNBVHlTQ3pScWdycXRva0VjcWdTMWtyeVFCcWgwdFlLZmxjYVVhcjhQMzZjcFNuR3hyaDhXRWtKb1JTZjh6a2JEaUZ2WW1xQU5SS0h1SUxTa3NBSk1JZ1NhYTg1S2lRb0tXWXExaUtlQlZJOSsrMHFXWkNmVFEyNHJPUTgwbi9YTCtQeUV2TVk4QUVvUmZzRkNYNHZZbnJXZkRYN2Q2dXJuWVY2U2Z5N1Z4UFhLUlUydUZDWmM5emdITVJRbWNoNXhBNURiNW1IckthU3U1M09BUGtvY2hDZzZPTnRsV3BXK1dRWW13c21uc0w3MUZ3UHpLTWMxL3FHaUNmMEJNMy9vekxaSEl4Z3VvSlEzd3RhdmhoR2lvWlNid2QxZFNncE5Zd2cvbUkyK01wVytKSWRWNGNOd00vZHp1TEY2cEhHQXIraHpMS2loM1JVcjh1M3FtbzdyN2EwVUZrN3d3Rm4yNUlYOTdoWGhvUzM0ZDNtM0c5cVlibTVCQktjODYwYWtMU0crTDRHZmg1bFBwZFRHa0ppYzhwQXlDcWRVS3g5TTlFU2EzcTdBeWtJRnpzb21MaVhPL0IwaFR2ZGxGR2RkdG80ejZrNmVmb05OdVFWdWZ4TS9CalpJQ3htbi9hQ0V0ZXY2Z29rSFBIcW1jYjRtMkcrR292TmV5K2g5bDdHbU81K1VCQmNYNHRrbE1CajVGOGF0MGtRQ2o0U3lIeEt6TDJGem9jU3YySFJmRlpTVHNVSlVCZDNSSWk5NVpDbXgrTmpZM05DbjBLTnJaRTVBOFlBTnVsR09JYkMzd0xKVzF5Y2dqVUUvRk02SnJxQUpjZ2ZkK2tCNzA4ak9td0VzSVdmU2tJRXhCL3ZBQlJ2Q1E0aEN6V3ZHb1dMbHQ0aTN2djFhaVA3K2IySE1JV200cFFQVFV1T2dQSnY1clBOSVhmN2Z2YXkvRWdOcVRBWUhFMW1GYTlDK1Y3dkdRc1NxOUsycTJvTGxMTW1MSWZ6OFFKa0FRc0lQVkxQa000SVA1eUFXVm9GWUpTbVJKYnRvM3JUZkZ2WWkrZTFQYkYrbFQ4K3dYZUI4c2tSamRXS0s2YVN2TDlRZW5DVVBFTzkvTWNvclNMK2ZNUXRxa1BDS1hZSjU4Vmg4ZUt2V2lyVzk5cDJPcTlTZGxmNi9xSWxRZ3lrUDAzdTVqR3V2NTJVU1pEUGlUMEU4Qm1ONnRJTW8za0swdnRKdW83VzhYUmJWS3hxMmpuRXUzbUlqT3NyUnQwYXJSQkEvOWpvazAvRVg1L3NwUktaRHZnMnl2OFpsbjRqL3A5Z2V5cWgvamlCR3loR1ZjdnJZS1dYYjNUaWluc3NKSGswbksvZlcxK1dCUDdOdHBYd2dTRGtYNVRzcE5kV0EvTEVyUnMrOTE3SnFhUDgzQmk1NUo0UHdMU242N042RjhDTWlwRFc3ZDFkQnp4V0JsYzFBbHhycTdoMStOSUh2TDVGekNvUEc2aE5NZmcyUVdMcDc5WG15UDgvM1dPeThOU3N0UCtmcllRUmJTUmM1eFpobmsrRCtOWG5MQmhGUG9PbUk0YW9TK3NoZVlmQjlDZnUyTFVLRGs3VEFSMitMYTZIaUZqSHM3NDBma3g3cWdQekdvSEhGMXhHR01NY0hjWlAwcjhIUU01aHpZZnlrb1Z1QTdFeldXMkc3TkNwWnl4cVpBZll5Qk1Jdm5EVVB6aUJJUDUzRVNlMWpQaTEydDVqaXBmTlprS2pxQUtLdUJKUXhSSzJab29ocUVieGlyekRKVGFJdnJSWTBoL2o4TzdGT1FpK2FxNFhoQnZVN3R6ZUtjTURYVlpkZEJJZFducTdwb09ZNGdEeURDemxpRndYdHZIUXVLdkZwQWdseVV0cE5pTUVodFJvdDV5N1FqZENTQndySzFEUEs0M3VmMzA4cERUNy90QTlqdnpSa3VrL0Zuclg3OU15Mm45Z0JFTDNzbThvaGE3UXpsOVVoS25rRktRWXNscElkbHU2TCt0d1dLQ1QzUm1ZY1RYd1NNM3lMa1ZJdmJ6TTFLOXBBaXk3T2duZnFUQXFFd2piTUhyNm5xbloyUVd0QWdsLzAyaFhUK0dUdWtVQUN3RFNQMDZJL25lNmd3NUhSVSt1SC92Z3Q4Yzd1TVU4RlpjaHBnTnBScEVEa0dBV29jb3dadnBucGI2b2FISDlLM0FVSmMvSUZidGhoS1I1ZXErTHZ3REJVZVZaUVJZRE84d2t0K0ZNSE44dXlqWU1EZTduVTNLZks5czJ3Vlk4T3djVG54SmhxU1poOW0zRFB4Rit6bTBkcEFHMW5jdjlKc1J6QkZKQlJ1MzE5TjhDNFpDV1hRYi8wZjhldXhVVWhaeGtWdlpCcG1VSldqWjl0ZWhpZ25zRERrSzRBM3dSUXlOV0ZWLzJIcXpKaWFQUVdTTEU3dUk4SGtFVVM1T1FxUXh4WUlMaUh6VUVOOEsremNpZDZFUWRUTG5GdWtIbmpQRTc2OTZpa0xGYzYrMXcybVRFZGc1ZzNqS0lyQ1BSQnVNVnVRUFlKcUFQZHY2L0NXL0t5QytBRUVsYnZ2MWl3UFM1d2FDM3doWE1RaU9rZFNyK1JQZmRxSGYzYVNPbFJuOUFYd0xubUNoNUQ5UEVmL1JGREhzYkI0UDZLZ2ZBMUxUZG5Pc2FzM1VCNHpRNy9DckVKc2Z1VEt1WVptUkJHOHRHaG8zNnJTcHZIOHVhYlJJNmpnVXl5TEpMY3VFWEdhb1ExN3A4eDF5TzZHczlvMUl2bmVHMUFtK1hYdXNDQU1RKzlENERmSDlLV0lZaER4aU00a0ViN1ZUVDZSa2RpSnc2aldyeXdoOVlkejRaTFYvV0NPWEdjUS9iNUM3VUZHWDI5ZDZERmdMbXVSWHBXVDlJalpnQnJGMmNMUWcrQ0lTMTZVU1NpeEJuU0o3Y1RLc3pXNlZSN3c3d1FCUG9zQ2xueUk4ck8yeHp4aEFLcG0xU0NMNE14cUJDTEY2d2hDeWllemVoV2VDUUQ0b0ZhUFZLV3N3Mi9xUld1VDROQlRZSlBFaGVXQy9qNzhya2hKOGZyY3JtRDZqYUhSZlp3MVJrWWNQcHVoYm80QksvVzVZNUt6QmFHTHpNK085eCtvaWxIWjdtcEtyQStRVjhEaytzU1QrVGhmVUd0YzU1dUYxeEFvbzNxNDk3ek1HN0RKVDZCZGlpWWtBRUppR3MrenIwVWpWcnpIRVlYeTBGampmaFpUeXBPZk9kOGY1UTN4YzR6eVd1RVhOMVA0ZDdiRmlERmdGa2ZScEpaZUdSN0ZaZGlDbkZKN3ZCS0tSdk41SS9aQmpva09HOUVjNlpUZDNlcmE5TmlBTVFBbUxzb2daVnNZaWN6M2FSSGtNV1FFbVk1dWZZYVQrUy9mT0ExZ1d4bGNHQStwZSs1a3NER0JLTUVLOTFxelcwTk1aUWZEWGtJU1pWUGFTMzVtWjBEOXRpQTFXR1BCT3BrMFJ5ZWZhM3dQQ0FBSlZBc0Z2TCtFSmZOb1huc2hidW1HT0Q2WCtGd1Ird0FDVTEzNUFYVzQvNHpGZ2t5d2o4YnphTXJkNkdvQ2Q0QzY3T2tpa3JmbjN4WS9RQjVCY0dwRDZWRllBYXZ5WjlueUFHSERSUDhnMEJtSFRSWDJVa2ZRSTVuR0VacWNwZWtuUTRmSkZlbm1yNlNjeE0rVGYxc0FUYWZwNThYaGdqSWREMGgrQ0ZsOVdmTU9XVVBhWklhTm05RC92cW9qQjk3OHZZOVEvNlFwS25ZVlU3SmFJSThBWFdIYTVKUjZzZ040WXN5VDJuZTErcDVGOEpkTGFrUzVXVk5TUEFIcEd0d3RSb09mMFNjajlOOFJ4UlE4UlIvc2pQNEQrREpRMVdBa3hQWXd1TnRaUXowQkkrTmFONFBOZHZPQStkN3pWN2lvbTFOa29MQlhLNmVlMTYvSVJZd3lJN2lqbXppWmVYQklTdnkycVVMNVJJTkJ5TFk3eS93ZmY5WVYrMGpNak5RQUFBQUJKUlU1RXJrSmdnZz09XCJcclxuICAgICAgICAgICAgICAgID48L2ltYWdlPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cInVybCgjcGF0dGVybjcpXCIgZD1cIk0wIDBIMzJWMzJIMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9XCJwYXR0ZXJuN1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBwYXR0ZXJuQ29udGVudFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dXNlIHRyYW5zZm9ybT1cInNjYWxlKC4wMDc4MSlcIiB4bGlua0hyZWY9XCIjaW1hZ2U3XCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBUGFrbEVRVlI0QWUyZEI2dzlSUlhHUDNzWEM0b0syQkFyU2xGUUVSVkJCRkdDdmFKaUIrekVLQnFzSVJJUlJBa0JwUVFMQXJiWUd4WXNJQllRN0lJaUZzU0d2WGZ6dS8vWmwyWGY3c3pzN3V5VWUzZVNsM2Z2M1h0M1o4NzU1c3laMDBaYXJuWTFTVGVXZENkSkQ1QjBrS1RUSkgxZTByY2svVlRTYnlUOVJkSS9KZjFYMHY4ay9VZlNQeVQ5U2RLdkpGMHM2VHhKbjVSMG5LUm5TTnBKMGhhU3JpZnBTc3RGdG5KSGN3MUptMHZhVmRJaGtqNWtHSGVKcEQ5SytwZGhNRXdlK2dkSS9tNkFjNUdrc3lTOVE5SUJrcmFSdFBFTWlIZ0F1b0tralNUZFZkTEJrazZYQkZQK1hKdk5ReG5kOTNmL2xuU1pwUE1sblN6cE1aSnVJUWtwTkxmQUZMaTJwTzBrSFNycFM0YndpTzIrVEp2eSswZ0psbzczUzNxOHBFMW55VEFPQlZlVXRKbWsvU1I5UnRLdnpWbzlKUk5EM1Jzd1hHRDBoM3RKdXRZNFVxeldyNjhpNlM2UzNtQ0lpTElXaWpFcDdvUFMrUWxKanpRSzVHcHhzOGRvcnlwcGUwbHZrWFJwZ2pWOWFuQ3c4L2lpcEgwbDNhQUhYWmIrcTJ5cHRwWjBrcVJmTENIam04RDZtd0hDWXlXaDI2eHNRNk5IYXo1Q0V0dTJhay9lSk5peXZrY2lmRXpTenBKWTlsYXFnZnluR2VNTTI2bGxaYkxQdUZCdWo1RjA2MVZBQUxOK1c3TlYrdXVLTTc0T0RyYTBXQ3BaRnE2K3JFQmcxajlmMG85bXhuZEtQRXpSS01GTEp3MXVJK2xVU1NoQWRlVFByOWZUQTEwSTYrS2V5MkJJd3BpenV4blFxaWw1WThHTmJ2Q1NrbmNLckdYUGsvVExlZFlQbG5wWUZOOW16TXBGcVFhNFROOW8zSzVqWjhLcS94NEZFVlA0VnFVZzRLWm12US9oaWwxMTV0ZkhqMTZBWHlIcmRpdEpIeW5JYVZNbmNBbXZ2eTlwdDF3UmdLYVBxSnFWdmZXYWZVaHdzWTErWUc0Z0lGVHFqRm5aRzZ6czlRWElqeVh0a1FzSWJtNWk1L29PWXY3K09FbEJKTlI5VTRPQUFFd2lZR2F4UDQ2WlF5ZkR0MDJrVkJJY1hNZTRjSE1MelJwS3pGSi9SNHhCZE5NeDdrdWljQW1sTHBWd3k5VHY5MHE2WVV3eDhFUkp2NStabnczNGNha1RNQnNsSXZudUp2cDFtV2JRTW93RlR5S2g2Wk8yVGVidFhqYXp2ZzIwR0lvSXFKMmtzZTRUcVRzcmZYbnJQUitRZFAwcEVMQzNwTi9PNjM3V0VnQ3BRQmo5Y3lRUmZSV3NrYUJ4enN6ODdKbGZMUXRZQ3NsYkROS3VMT24xczdHbkdPWlhJQ0FyT2tqWU9TNUk0dldyRzgvL3k2QUZDYk1QSFNzQ1FCQXAxelBUeTZRQmliUTNHUU9DUjVtaUNUTUF5Z1FBUVRuUEhBb0E4dGZPbkdkL0wrbUhNZVo3cG9qRUYwd3dMQlZIVW02ZHlUZkFZOXU3UFRtRE1HNElCMUdKa01YMG5HdVlHZDVRTW9DcFZFSklIRXNuS2VIWTV6SE1IR2FLV0tTUXBKaUpuOTJYKzh4K3ZFd3BPbHc5OHdlU0RqUnhjQkJ4QjVNNVF6NGQwYkxWOTNMNFR5MEFJcUs2R2paNmtsOVQ5ZlViZlNPTFdmdEpYa3pWWVlJZDhEbTBHVE91SytrRm1la21GSk55cFhROVZWS3FQRWlNUXpqd3ZCcWlDM0dXaXZrOEYxZXpyVEdqamszY3h6cDlQdTRCQUJpUWNnbWpVcHBYWFlJZFRRMmUrZ0Jqdi9iUlhFa3QvMW9tSUNnQkFPaFN1OWhtRmRjbzFrQmR2TmdNYno2UHVudytEVU5IRG5FSkpRQUFHc05iYXkwQ2JQNXNZNW9NaWYzZUZ3QXNCVy9Pb0wrbEFBQWZnVTFaWFpRM3kwSEQ5Z1VBVXVLV1pyOGRHNlQxNTVVQ0FIUVFhaEMwTm9vMHZTK0QyUVJoK3dDQXdUeGMwaDhTOXIwVUFFQmJlRXlGMVhVTnBZcnRWeDNacVY3M0JRQkx3ZkVKKzE0U0FLaVh2T1U2N2t0aTc1K0QrQjhpQVJnUG9kRVlQRktBdGlRQVlCTlk1eVZFK3ljUFBRWHgycDdaVndKVWdLWVlZNHFsb0NRQVFHOXNLSmVyZUk3Tk9wYzlOUjBjQ2dDc2NTY21BSEpwQVBpbUthdGZUWnlGd3dLSFM5dHNUUEhaVUFBd0lCSlZHV0RNZnBjR0FHSTdxYmkrMXA2ZTBFN2R4cWd4QUdCUXhNZHpYa0RidmFmNHJEUUE0Sk5BNTFzMENqbTlOU0t4ZkJnd0ZnQXNCWlJiODNsV2lPK1VCZ0RHVEp3bnZCZmVOUndGSVFnUjZoNWpBY0M0Mk9xUVBSdXFUN2I3bEFnQWduMm81U1RLdXBCUllodGc3R3NoQU1EWUhoZkpiVndpQUxENW9DOHQvTzQ1S1lDQXpRVUF0akMzZFRrMmpNVXJ4dmEyUkFCd2pnR2UzMFdnUUc0VlBGMEFJRmZoU0VuM1pnQ09CbEMrTTdHRUt4RUE4UHdSMEk1NmZybFYrSEFCQUFud0xwT29laU1IQUxpOHo4UXhlU1VDZ0hoTENubnFveFBQamlINmd3OEEzbW42L2RLbVZhc0ZFTmMwSjNzTjZZdlBiMG9FQU9NNkdscDlwWEFBVUlyV3AxalM3U2VNZFNnVkFKVDF5MjRIQURMN1NBQysvem5QREpnblRiUVVsQW9BZG4vNmVlRVNBQUN3bnIxYUVzcWhyYkVVbkRMQmVFc0ZBRG1mV2NUVXdjVDZYMThKd0cvWjF2aVVVYjJET1k2dS9yeXhyMHNGQUo3VExBOXhHQUlBbUhpMk9XelNKZ1c0UnRaVHlMeUhVZ0hBVmpCcHJIclh6QnNLQUphQzEwa2l2TTNXeUgyb2RoRmRmZWp6ZWFrQXdDbVVuUTBBd2c4RkFMOGxUUHhCTnU2YmF4d3hmMkZqNmVuRDlQcDNTd1VBOXArbEF3Q01PZGVjU2VqQ0FVZlhoVGk5ckZRQUlER1Q1YXZWWjFEejlSZ0p3TDFBTmtZT1Y3NGVTOEc3QTBpQlVnRkFtSGcyZ2FCMUVJd0ZBUGNpRmVwaExoRmdqbUloRTduKy9MNnZTd1VBMGk5SkVLV0x3Q0VBd0RNSURiTm13aGlBOEx3eFMwR3BBQ0EwTE1zQ1VLRUFBQWhPa0lRQnlOWW82RURCWlJjd3U2NlhDb0NmUVpSY2trSHF4QTBKQUtwbGRhWkQxVkJCRVlxaHRDZ1ZBTGpKRnhwem5mZzV2QTRKQU1ielhVazRnMXh0LzRHR3NWSUJ3QUZmeVl0QnRBRXVOQUI0eHNrZWhSTTVCR05JZm1TcEFIZ3RBSGpUaUxXdmpYa2hQcHNDQUpnOTkzV0pBRk5pOVljOWFWSWlBTmdDN2djOXFGMlRTMDVnQlo0cEFNQzkyZTdkMlFFQzZoSlJWYXRQbUZ5SkFNQVhzaGUwMk1sNDBpcmk1L0IvS2dBd05ndy9HemxBd0ZKQTJYVmZXbnpXWTNsSlhTT29PUllDYWJhSERvUUdEOVYrbXpjTjlYNUtBQ0R0ZkdvUWJkdmpaQlQ4RDY3REhITURBSXJ4b29Ba2h3dWtyZ25ZQk02VUFPQlpuTDY1blVNS3NCUVFOT203UEZLWGx4STdYUzAzQUp4ZVNTMGliS2VJa21reXRjLzdxUUZBWHlpQzdTcWJSdGFVYjdGc0hDdXZzZVFxNUFhQWw5V1IrdHpFOVd5YjRJZ0JBQW9sTU1QYmlsSFdhVU1XTGNXVm1uMXNlMDlVRXVWaTIxcE9BT0M0djRVQ1dIV1VRZEw1dGtHbCtDd0dBQmdYcHRCN1ZFVG8rQTlBcUV6cWUwWWlSYUtwRjl4c09RR0FXRURpSWRZYVI4REd6cW0zQVNzV0FPZ0RWVkZkeVNYc0dyQ2EyZnBjWFNQSzV1VXR1UW81QWVETHpZT2xpS1lOR1NKVkVXUG8vNWdBd0NCeVVBdkQxbWFIZWNHVzZTZWVJS0JFL0gwYU44Z0pBRVJRcjJ2RXpMTXVEbVZheU4vRkJBRDlaay9jWkZpVFFDd0ZMK3l4Rkh5NlVZWWxGd0RnOW02Tm5zWWU0S3ZzaEdSMjI3MWlBNEErWU14eEhhOUNQajNsNnR2NjNQeU1wZURGVlJFR2s0U0x0R2wrTC9aN2trRTJiNktiOTRSUDVaSW5tQUlBTU95Vkhza2xsTEduMXA0UDQwaTZ1YWNoZGk0U2dOSzZuUWswK0FWeVdBWlNBQUNHWG1iWnhsV1Rocklxekd4Zk9pRXhrQnhQeUNBRUgvK0cxV0pKM2QyeDhYRStNOFAxblZRQW9GOVlSVGV0dU4zeEgrdXA3NWtLQUFYbkVqcFc2aVdBQUJEcjJCQU5NU3BxNUF3QUxIcjR5VjNKSllqMlN6eVhBa3pQUi9WUUlGMzBHWG9kN2Q5bCtGb2NLcEM2Qm45S0NRQnhHZitlSGJPLytwaWxnTm9FUGtzQlllb1kyZ0RYVU9hTi9SM0wyOEw3VncyZzZ6K3UwRE1TZHBTQnBnWUFmZUNzWkFwbzJ4cStCTTRMR3N1Y0dMOG4wb2s4Q0svR2V1WHJCWnVpOHprQWdGbUwySFlsbDNDMExpYmxLZWdRNnA0RWYvaWt5NjJCQTlOb3l0UENjd0FBeEtmYTZMcksybXRVMnZDQ3BlRGdEQlE4RzFpb0Ewazk2RjZOQ0ZsZkI0anQ0VU91NVFJQSt2NzFxcDZlaFhvUUY4dmZrTEZPL1JzaythTXRmZSs4aEJSSVZUOG9Kd0RBSUE2amNDV1hFRnAzYVlZZ3dEdTVjU2VYSFJld1hvMUptUnFLN3R3QVFISUpCYWh0amFYZ0Zaa3RCYXo5cmlYTU5xWkY4R1FLTGRkMTFpMzJpdmRFbm0wWVVXNW5wZGFHbVpaNkIxV2ZkQi8wQ0lCMURFbTZmNEtESkhGTnR4NXNaSHJMbXB0aWVjSklSaDZoclZHeUxvZkNXK3o3WFI1TzJ6aldybkhRWU94ald0RytXWDdhRGpsa0wvdXFSQW9xeXlIOXNqVmlMTEc0NFZ5cXo4YVlyOW5DWXMxc281K3Q3NTNYVWh6STlEdEpwMGw2aU1uV0lZb1hod3BKR0NuMGtvcUJ1Rk8zNnFUVWhnc28wTlF1ckg0VCt6K0haMUVGUG1qamhJa1VCekxod1VLY2tjdWVhbHZhWkNCMWlva1l0cldkRTZYZVV4aURjeFNEdDF5T2FXMHlJOFY3OXRZK094Vk9RWSs1RkZUV1M1ditOQW9ZSkQ3a2xrU1NBZ0E4RXc4ZjJVTzJSckJ0ek5OWUNQWmNaUHZZT2pYMkdwcWxyeHMwRlhOaVBaZjhRV0lEYkkwajI0azVuTHBQN0R6dVordElxR3Y0a3ltdnhsb3o5YUJ5dnordVlKSnFiRDUyZGdXSFR1d0tSazhpMVJ0alZKU0dQa0JGenRRUkxqa0FCR2xJbktDdGJTS0pRNXFtNkM4eEJvYzc3Q2EydmcyK1JwemJxWmtXbXB5QzBMWjdFdmZuc3JjVGlrMitnTzArUTY1aEVYVTllekNUWFQ4a3ZveDkrWkNPTDlOdmtJUXZjb2hnek5lSEJWNEtzRFVFMysrN21ONjhUaDIrbUpwdXJzQWgzdzZQb0syUk14aHFGMFc4eHVYeSsyd1BudnJhSFFNT0xGY0crL1NMSTFoWTcyMXRkMGxqaitrNzM2TytnYTBQazF3REJHZXQrSEtBMFFlWGNHZmloYm1HMGpZMFFQUzg1c0hQazNCejRFMDVvKzlUS3c0Q3pOYnMvVzN0WnVad0N4K3BVdjhPVlVpMnNkMDRoMnRFMGxKMmRTakM2d011OVRWYlBwaHNhM3YwY0xOajRxV2tpeXNld2ZhOHFOZndoaDJUT0xJNEpYZ0FQOFlmbXp1V2E1emdEWE50ZldXSDhYWkgvYUdvelBWOUdINzdBek9yUEdJamRPaHJ1TE9aNWJiR05ocjdmZGV6aVl0QXAzQ1Z0Yk05SStrMWxDSGkwV01kNDk1RnlGU2ZFN1hrY3M2UWdkUldub2RxcFJTNXh1cGFkTU5PemxGdDZBVSthVlNwbURYRmN4SHZuTTFzWXlKTFFmMzhabllTclBmVWJZcG0yNCtCTUV6SE9FNXl6NklKRFFURStONE9BdU5tLzZvSmVpSEpKSmxwMTlIUDBaZnhqTzBnNmNNWlJmZUVabmpiL1REY0VGWm5hMlFiWTBtMEtZNjIzeGQxRFI4Nkx1VUxQTFRnTm9LVytCbVZPU2FMMUNtSys2YXo2QVpiR3JmeUZGNnkzRUJDY2dseGxYTnJVQUNSZHpkSko1azFNRGZHaGV3UEJab0IvZHhhS0VBYU51c2dRTUJaNGpLUWhHUk1qSHRSZElLZGtFc1hhQ0hOYW4wRUVNZ0JJTEhoNHNLampyQUlrakI2bkZId3ZBczByQmJMMjBlTEVZblp3a25mMVBERHNsYUtWR0M5eDE5UGpXRzhwSzU2USswVW1EOWRvd0NtVUxhUDFPU0JzRG1DQWFhVFFIcUVpYzdGSDJJTEZsMGIzUHpDbndJUWxNUlF3SENBS1d4SmRWUFNvR05MQjdLVWlBSTZXeEsxOThrRUl1SUhXOGZjSWxHQW9nM0V4T0YvZjVZNUQ0aXE1Nnk3aEsxamVoNExERXl6NUNLeVZjVnVRU1VRS29vKzJJaDNMSnp6VEkvRWNOZGpVQ0NaaFZzYlQ5eFRUS1l1MmpmQUlJU2JIRU1rQnVCQVNRTWd1RnlKclVkVFoxWmZhT3p4dUdzQkZnbXFTQjFpSGFpaXRqUU0vejlwOXFra2FpdTVxZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJ1cmwoI3BhdHRlcm40KVwiIGQ9XCJNMCAwSDMyVjMySDB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgIDxwYXR0ZXJuIGlkPVwicGF0dGVybjRcIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgcGF0dGVybkNvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVzZSB0cmFuc2Zvcm09XCJzY2FsZSguMDA3ODEpXCIgeGxpbmtIcmVmPVwiI2ltYWdlNFwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbWFnZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhsaW5rSHJlZj1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQVk4MGxFUVZSNEFlMmRDN2htVlZuSGo3ZnNSaGZMS0pnNWUrMHpJMGZPWHZzTU5HU0pncGlHWXpmVFJFc1RGYk1zRGFWU2lrRXFoTWRFQzdKMEtKQU1yVURwSWEwaE1CSENRS1d4Z2FHWnZmYVpZYmg0YTdqSmNHc1lCdWo1dld2dGoyODIrNXh2WDliZTU3Ym5lZWI1dm0rZjc5dDdyWGU5NjczKzMzZU5qZlgvZWdyMEZPZ3AwRk9ncDBCUGdaNENQUVY2Q3ZRVTZDblFVNkNuUUUrQm5nSTlCWG9LTEFjS1hIWE1NVS9mdFBhZzd6YVRrd2Z3eXVmbE1POWxPOGV2UFgvRmQ4M0U0eE16OGNSTGt6aDhSeHFwdnpWYVhXMjB1aTdSNmorTURpNU1kUGc3OHZmRGxOcStldlV6bHkyeGxzckVXZlEwVnM5Tm8vQjRFNnZQR0sxdU4xbzlaTFI2ekdqMWVNRi9yajlrSW5XTGlkVGZKenA0VlhLWVVyMTBXRVFjY2RVeFkwL2ZkbWdZR0IyK3htaDFxZEhxbTBZSGp4UXNkaEVENUs4OWJMUzYyV2gxVGpvZEhyVWxIdi9CeDhmR25yS0l5TEU4aHNxaWJEOTg5Yk5ORkx3NDFjR0gzYUt4ZVBrRmJmTDVQcVBELzB4aTlSdkptb2xEZWhXeEFIZ0xFWi9FRTNFYXFaT01WcHVNVmc5NFh2UWlodGxudFBwNkdxdVBKem84ZHNmMHFoL3BwVUtIelBENGNXTlAyNkZYclV5aTRKZFRyZjdKYUxYTGFQVm9Cd3RmeEF3UEpySDY3MFNIdnc4andwQWRrbUo1UGVybXRSUGZuOFRCODAyay90UkVLalZhbFJIeDl4Z2QzTjhCYzhDQXUwd2NmTnBFNFMrYXlaVUhQVDQyOXRUbHRVSXR6SGJUMnJYUDJCcXRXbTFpOVdhajFWVkdxM3Zuc09DZnZFTmpkU1dTd21oMWtkSHF0Z3JHNEtOR0IzY2FyYTQzV24ycklnUHRTYlRhbW1yMVI5dW1neC9mT2pYMXZTMlFadW5lRW4yYUhuTElENXNvK0dtajFZYUtDNWRuZ252dzYxRWJNRktpZzkvRGtETmFmYnRnVWUwdTV1OVJjUHIycWVEd05BclhPSU15Zjk4eW4zRXA3elphYmNRajJUbzFNYzQ0bHU3S05ad1orblByMUhoa3REclI3VHhmQnQwVlJQdXk0VzFmdmZyN2NPbU1EczRUVlJLcmIwaEFLQXBQbFFXZm5Ed2dNK3FTU0wyeGd0U1lpeWxRVnpPb3IyM1Q2cWNZUXphZVpmMktua1JmSmxINEM0anBWS3YvYmNHZ2U0QWRtQ2MwdTNINzlPb1ZaanFjTEJMVHR4eW1mc0JGQ3VkYTJLcC9ReXJjbStqZzN5VTROUjJFeEMzeVkxdnlueUY0RW8rdlRXTjFHdnJTYVBWL0JTSzVLbkZuL1Q0RUg1WUNaUWc4RTRkSEc2MTJ0emN1Q1U3dFRLUGdMM2tXUWFZeTQxcTAzeUdjU29RdWlkU3ZtbGo5bTlPUHM0VmtaMTNNQ2d1eTEyaTFrNUR1TmgzK0RBWmxXZUtKSFJLcjA0eFcrUHcreGpMcUh2Y1pIWHd4amNLM0VtVGFPalgxSFdYSHV1Qy9KKzZiRG80ME9qakxhTFhEYU1YQ2pDSkkzYjgvSnRaN3JLNU1vK0MzaWVOWFdmaGhZbUswa1RSeTNzZGRsYnlQK3ZQYlozVHdOYVBWQlRBdDBjM01IaGtlMjRKL0Q5RzM2NVdyblB0R3hxMUZVU3FKSGR6RFRSaFpHSEkrQXpLb3EzUXFmSjdSNmkrTURtNXl5YVM2REZybGR3OGFIZnlYaWRTN3RrMnYwajduMUFvRHdhbkpjdy8rSWVMeFJxdVBOblRmcWhCcWo5SGhKVW1zZmpPZEhuK0owUk5INEUydysyL1M0WUVZY3hDdmFVYVArUkgyVFNQMUsySlRkQk4yaGc2UE91UDQ0a1JQL1B6V0tmV2pDeXJJUkZKa1JnZUhJaTZUV0gyNW84aGJua0hRMWFnV2pFbWt6UjJXQWRVMjJVV3h1cEo4djRtRDl4bXRmaXZSd1pGRm9oVW1nWWtKTlRNbmRqNmkyTVRoY1RBWThRR2p3MDg2Ti9XK0ZsVlpmbjdaWithM0pkSEJLVE5UNnJBYnB3LzhubFoyODZpYlpydkJSR3Bkb3RYZjJaVHJ2TVhqTStKVWViMFJnelEvVHhiYWFIVUR4cVBiZGFnV2lON1VHSHpNM2U4cnhzWWRtdVl1eE5aSmRmQXZqQmw3cGFtRXk5T2k4RE9pbEtTSDBlRzdqVmFiUGVwRHZJRnNGeE0wWVRjM0pmcGNEUEdZaWRYWncwUkRWVmhra0ZjREZmREpsaVFLLzR6SUlnRWc5SG1xd3pNZC9SNzBJRVVlVG5Xd1BkWGhoMHcwL2dMdjdpUUJrM1ROaW9OVEhieHlLUHRXMTMxalVRbVBKaTdJY2pGK3NJblZ5VVlISnhDd0FZV0Ruc1VsTWxGNHFnMEhoNWNRd21XaUxoL1FkQWZCSE4rQ1lCbW5lL1Q3SDVWZEhxbC9ObEg0NnFKME1SS1VjSGNhcTE4UzBJb2ZxY0NjZHB0SVhaTkc0YTgzZGlleGZqR29FcTMrMkdoMHFkcFRrMXRaOU5zVEhmNnIwZXFkSkVpMkhScjhHRURNc3JGeGRxcFk0MnRXSEV3bzFlaGd2WW5Dejd0RVRWMW1mRnpHTkRsNUFQYzNPdnhJemZrNVNTTlp4MDJTUjRqR3A4b0NSdmplOW1oOHl0SDVxNTR3RGVKT2duc0VzMURhbllRUUhvTTE3RklqV2JGREo1NVRsaURaamh6MUNnTko3RDVXWnp1RHJ3NGpQRVJJZHR1aEU4OXhlTUc1MUViUjM0UzVqVllYeitqZzU3WkdLNTVWWkZ5T21ndC81M2Y4SGt2ZmFQVXBOeDRmYWhBMWhPM3hacVJPNFZoWUhIWm1FcW4zZXdyVzdJSDdRT0hXSlVqaFFBc3U0aExCQ0dJUTFiTWJickRlUVNYYzRPNVVxeStsc2ZvRG1NZDM1STc3a2FQQTJwZkYwOHFEeHhFOGttcjFPYVROZ0l3c0RoZXMzeTc1N3pxN0tMOHoyUGtmN2RwRlFkYzZFR2grUEtNK005NFN4cGlOM2VOT0VtL0FhT3lBdVorQ1VZY1lKNlF0b2UxeVFKaTU1bnpwWUcyNHNUT3M1dnBCMWIvZHpNNGZjRm1IYi9Edlo4bjFWNTNEOFBkSlN3TkdPWEUrSWVMaWdVWHFaUTdQTUR5K3F1OXZKSmcwSnFsUUM2U3Nlb05SMzkvazNSVXB5VVFPUFVSK2Y5UVlxL3o5VnBEQUJJZm1Jd0lITGZGUVBLS2R0MkNFanptM3B3Z1pVNFU0UmQrOUE4QkZ5VFh6K2pYY3g1WlN5OFFtZHVCcmcwdHNHOUF4Z01McDRDMWtDWTBYRzJDd0tTd0RKRm9kNDN6cW9rVnNldTA2QWtaZVYzZU9tN0V6azFpOXlJRkZtNDU5cnQ5akk5MXJKTnNZSG04RTBPR25wakR6QWx3dUJTamM3WjdRU1BuNWRNSUFQRFF4Y2ZCNll1dHpyRjJqUDBFMHhCazFmV0QxUFl2K1BPRnluek9qVUoyVFRrMjhFS093em1ReWk1OGNCWjVGQjdtVXpoZ0FnaEU4dW82b0h0NEdvck9wNWN4dWg5Z2tROUk0K0YyajFZMHQ3WlRjZ2c5RWFOSDErMXlCNlFuWUlhTXdDTkNBNEl3a21uUjR2c3NQK1BENWk4YVd2OVlwQTJRUDMwY3lSSWdVaGFlQ0FRUVNoZ2pGZllNeHNIS0pSN0FqZUNYUUE1aUVsQzdZZ3BrcDlaTlNyQm1wOTl1c293S2s0U01rbkkzUnh5dUxlQnR1TUNvcEh4aTZSYW52ZEc3M08xMGxVd24zYzA3R3F6UG1lV0dBL0VCSjl0d0RzZEpZL1k5YlVGeXRqVVppNk9veWw1Z0JsMDlLRjVUTXZSM3RkTUtvOTl0ZEdkeEViTjNsTC9KekdQRlpRc1BYNGtFUXFCTGdxL1hscVRPWVQ4WmRFQXd3Z25qZXVUNy9QSXc1TEhzU1V6dkJETGhjeGJtaWk2Y21Ya2d5QmZzbGpZT2ZOVnFrVGY0ZUpUK0xyWUMwYWhYNFdzSCtXVllNd0U0amtNT3VJNkVGUE8waW84TXpVQ2VrYU1tbFkxT2dldkwyQ1FhbWM4TktMbmJyak90akhFdVNBZGpOOTBoakJ4dmMycGpFd2QvWWpoL2gwY1RWc1NXcVpDQXg1QnlDYUQ3RnRZOEZ6OTlqMFRQQUE5Z05HWjVBaWtYajhEaWJaZzRESW1kRnU3bXFpd2JheWRrcGVRSXU5cytMbkFGaTlZMUVxejhFV2VNN3had3hDV3BCc0lSK1E4b0xoWEUyNzlUaGdXTXRSd0xibml4ZXhNMUdCeDhFdUFsWUpGdThwcTh3RlJDdWp1b0EycVpUd2YyRDg1Q1FZeTV6aG5WYThLVkZjdzFybm56R1Jpa0Q5MUNYNzJCYUh2THZDNDZHKy9CMFNHckpKc0h5ZFRubXBXTGs3SkdZZ2c1T0lROUIwS1dxTkNDTmJTT0xDMjd4R203UzRFNEJwaDYrK3RuNzBjU0JLRWc4dEZtNTAzRHdsUmNEaHQ0RmN5ZVJlaGt3cUx4N3R4OFIzQWM4Qk5lUG9Pdnh0dm04QjZqRFJOMFBJNkQzbXo4NlQ5cWEyTVlKQ3lWWTRZc285UEQ1c3RIcWJVQzM1b3JSdTFTeXI1NEV2c1pmOXo2N3FWNGkxbEhhUGhMb1VhemVaRE5TblhUYnFqdTVPcitUR0gwU2gzOEZGSndjdy9BdW9Ka2tBTmJGYnc4RmQ3cFErcnJTQ3o5TUNONWpHemhEYUdPekVHaGwwVjFuWWV2OFpyZEF5dVBnOVJoRXRucFpxcHZxM0dzaC9BYm12cFdPSjNoRWRXeWZQQS9JWjdKejdCYjY0ZGtIdEZxcE14K0V4SlVFcy9EcGNxRFFCY2ZRRDB1MWNoU2NqbnFiVmNjWHJtNkZpOXpZWXUzQzk5SVR6Mk01Mkh3cytsSjQ1cjFrU3FuK2NaWENsVnJYVW94VEM5dUlKUzNsVEZxOTFuYjQ4QVlqWHdxTDB2WWNiTGtaZlpTbXgxOVNGNU1vK1EzYTZWSWdRalFJMTZlQ01CaDhsZDhCMEVnajlkY09WbzQ0YlpzSXkvSCtKTG5BUTV4Rnp3T0o0QTFXb2RvYmJBT2todEhxQ3pUbUdnUGpUcTFlMWVaSnc0OUZuTmpPM05MYTdib2xGaytZVDRhVElrOTZFcENTcmlXeTNVTHhXMndFOFlBc0pzRW1nNlNGaTdnKzRmbThMeE1zR1Y3OC9IdHJUWWZISmxyOW8wUHdMSlVJWTFlTUFMMitTVjJnOUFkcTJFdFFWUGFhRlFlVEVuZFNPcXY2c2d3Z1lVOE9SckNpZTF0ZG95TFBDSWdwOGF0dE53NmFMVkNjMkJVUkYrTnp4QnV4TlFjVGNSTXh6MXJZSFI4R05NbXlQWTJlVlBOWXlBQVFqb0Y4RlVid1VRVURCMG9QZnc1dWlOUmxybTFMeG9XTGNhRjhqMW5PSDBpajRPMzBYMmdpNWxsNEREeTc4ZFRKcmo1aU5wVHhyQXpnSmlnY2sxRDVDb0sxS1VjeU9HSUthVFR4RTY0R2Y2YmxWbkcrRjhybi9aeVlEeThCY0pLUFNPYWxhWm5QR09UU3hjeVd5Vk1iTVVyMWptS0FnYmpPWEk4TkZEN1VkVDJHSjRIUmlIU0I2eDNXamg0OFBnbThVTytGZERWazVNaFUrZ0N5QURtM3FDVzZwd2k0dGV6Y1N6UEE4QTJwaC85Y3F0VnJmWWdybUFLR2tyWnVGaXJOWVU2emlhemhjU3kyOTE3RlBHckNicUR3ZUxlQjZ0UVYxR0tBalBBUFN5OThHaU5NcjlJKzRzN29MaURZSmg1RUd1dE1LaHZmUW5oMUhjSDhpWGtrQnZSMlBaTklXaldKdXpSaWdJekFybmxoY0NFdUMvajVwbTRrditjKzBpU0s5bWYyS0poRlpEVFNnWU51WGNHSEtWdnpJZVpkb29vaTNndGNtemtmOVBEQ0FCa2o4TXFPdGZWL2V1VXFIMGtKSkFzb1g5dWVWZEswUk1TR243bVEzalAvNnprM0NEQnAyY1pYdzdiUjhIdkVQR3BXbW1vVHRmTmJHZzdkdkROQXRoZzJMUm1ycytWc242RkRHb1luV09YOWdCZ2MxU2FuZXhhZTlKRTl2K3ZYdXlVbkVvV3Z6dGNBVnBsajlsMjhMYnFUbWtpOXg4SGUyMkg2U0YxRHluOHNGd2p5U1R6RUZOYjk1ZlQ5ODJVMEVySzJTT2JnRTY0QWM1Uzc0M05PMmIxNDV0ZU5EajZCWjFRM2w1SXRPcS9NaTN0Sm55Wi8vUUt6OGVaZjcwS3l5UE1kSHZEYWxrVnJsc3hZYjNRNFRUeGdlUEoxM21kR28rdXJSNlN4QXhpYnhFWm1pTmFSbEdFTWRjYWUvUVo3aDFRdWpTVHRScEVOazE4czM1OTNKSEh3dXYxVWxLMVBseDcrdmgrV3Z4OVNZWmZrQ1NLMXJpeFFNeU5ZMFdzV2FYUll2c3NyK3NMNThjMzJlYThWeDhGNmtsNCtvblhpOFVUcVhRNTlYTGY1NW16akxib080UGNpdklnbkdlcGllVk9uTHlkYmRSYXpKemR3dlJ6b3NHYmlrS2E3Q2VaQUZJTmVzbzJycFpTOHFYcllhOUUyNmozdURNQktvSXM4dzRMUHN4MU8xVG5kSmNxQys0RytVWlkrVXZLaWg0d09mODBoYURzUXFXTFJ1OU14d28rZ0EvMkVSZGMrd3paZ0NNNXk4ZkNxL2pLbzRPdmxrQWFiaHEyOThHd3VVYk94ZW9YUjZyTXR0SzhyMnUxY28wajJNbnVBNVJPbnBlV1pzdkN6MU1QcjhBMnVMMTZYdFFLN2FieEVUeUZmcnRRVElXZjFCZGVDcFVqY0lpa3dXTGR4RGtEVGRxOFFGVGVZOUxyTnhzbDV4bDFzS0FuYnA3SDZCenFUTkRaT3JjVk5FMGs1bTVmYWVoOEJpTms0ZHZnNk8zYUdzbXppQUlPT2xvWHNXdTRpOTVCbUR6cDRsUndwSXlCWDhTUTJrQ3ZIWmNVZ2F4cS9FRFdrSjQ2UXM1RnNtcjJEMExZMVRwTlkvVGs2M2tmaWJqK3FFczBpcW1VMHVxdlRnQXdNUjkzaXBZZ3lhdnVmWk1Ec045THlIN2hQVTJOdStHbXVpOGpMSGJxWWppTmRiQlk1VDJnUWZLcHdUakgyUUdWR2dXQ3VzK2piWEt2U0x0VURJblF6SGNGY3A3Rm5EaS9BZkx5SEhxaVlKRlp2SWdyYUVlakZub2dtZlpUcUJaOUl3QmtkdkVWYXhXS1pDaml3SWdXNUNUVjN0RWgzdmZtYVd0ekRLbUN1OXp3SHlOUUZORk9jajNhMGVDeUFMc0JLdUVNdnFocVpjODF2dHIraFNuWUtBSGNxZk41SWkzNlc5YlFiV001RTJDU3RZZ1hycjlXNWRSczdEMEtYT2p6RCtiUWRRcitrQTlmVnFRN2Y0TU5vbklWbWc4c1FIZENGNjlkYkJuUXgyMkpXdVE0OU45RU1neldxYTZOSXBGRUhyeHhxZUdGekFRNFV1dE1sTW82dHkxbVp1L05FUUtiVGVnRnJORWJCNmRncVB0TFRnMVVmR3hzVEE1SVd0UGFrTVBSN2xRV3M4MTFyKzhqSnF1RnJtbVJaa2ZDQ3Q0alZaM0tWVDRYSm9OMzB3Y2NpYnVKQzhGdnFCVnlaZFpmUUx3aDNoeHdORndVdmJocFRZT0ZSTTg0TDZzTGUyV2NiWEFYbkVUQ3F1eGxoWHRmM1laMnhDMS9VNktLUUFUSnUvVGJXN0V3ODhWTEpHQTF2aHdydmlUY2ptbDBQWC9JTlhSRFJ6U0c0SC9RU3VJSXEzZ09TREJDcjlBV2tXV1UzWTM3SWx0c0Y2NUhJZGNVOFkwZXZPeWxNdzgyNVFEVnpNa0RHQ0RRV3VGSnUyTER0Q2thamdFYTZyeGNnOExPWjlDcFNDY3VYblpXNWdEQ3ArTzZUS3creVlWbzVDbTlUQnhaOTV1SmVMaEM3a2cwc2l2WWZET05zdVJPZEhWWW1oVnlLQVRKR2VGaVNJYkU2bVN4WUU1UUxSaU1XZEJLcFAvRjg1bUEyMXRsZUlUalJQbzZxdTV3S0dYYzIwZ1k1QWpaU3FkdnRmRysyZS9pNDdzUzgrbGhUVlFzajArVFN6ZVBXaW5qS1NneVFUUndYaklpZ3VHQ04xSU1yTW5XbmROS0RZRmRId1pOc0xsMi9ZczF2QnZQSWJxMHI1cEVBdUw2U3dSVWdiVzFqdXhZRERCRk5YTENyU0I1Sml2UzRzYWNWaWFjeTErQmt1b2E3dWpYQWptVkUyTkJZV3QyeFRaK0QxM0FGYXJUMHVYMEZSQnNFblNMMVJvY0VidHJHcGlrRERJaSsxNElnd3pOWnhDWnhlL1F4Z1FxS0lSY2c5S3NLSXlBcDZZRCtjZExUVFR3cTFLMGMweHVINzNWaGVGOUJKMjhNa0JFRzNYbTM5S2FKMVN1cVdONEZEQzhRS1Z3dzUzdlRlNytEcE1xQXFiTTVWWDNGNE53aVRhZ2JZaHlzRzhmOHZTS0JoK2RqVHcxckNSTm80L2FST2dtQVl4T2prYkFyWmMzb1Rtb1dSN2cyd3hQczhqM3U3ZFdjeXRtRThSSHpnZ1NPZzlkSi9UN25GYlJua0Y0cWtvblRPbXk3MWNiY1gwUndiM0Y3ZkZ5TFUrRHc2Z1ZSTDRERTIwV1FTTTdsYlZER2pXY2tBSmEya2NCUE1OTm12QWVSdkJZRkpBbWRvZ1gwZUExb2tycEdNbWNOVDluSzZnWGt4SEhydnZuU2kyWG1tN2x4RzhBcU5KRnV0aXd1UElvRWowdHdzV0hLaktIdWQvWVFHWVRaOWxPN3FBRjNVa1lIaEJUd2dwY0d6eGlOUTRnZklvMUZJYys2eE1yOVRzWU5ZdWdNM0RpZXZSOFJTMzVBek1zQkZIRjRITjVCUjVIR2ZWTEtGd1Z2aCtrS2g0cHZTYlRNblV2YmRqQUU0dklNemd1U0JzOU5XNkFROTgrcVpEMldUekhPQVREVTFUYlV3Z2Mra1VLV0U4NjJkT1BxQ3RNYWdtNXNGTlJvNGVKbkYrRk9UdFZ3NlU0aVMyMkxwR3lYN1FGOVMzNjlib1BuYkE2SVpGZE9SdTlqc3B4MXZRY3MraHVNRHQvZEJCRXNLallhZjRIcmlkQlZDdG1HdjJOMXNsdjRwMmIwS2ZXS2VMT1Z1c0g3V2kxUGVySytjOFdtNFNmbFFPc0c4WEdKS1FES2pOVnBkaUZMdGIyRjRYZEpCMUVkbkZEWG9tZW44ZHVVL0x2dGl0SlYvd1B4UnJDelFDS1AzUEdqdUNIVFZ3Um01Z0VDSmcyZWVUWTZ0MjdkQUVRWVpQZDBjSjZEYnUxd1JoZGhiWG9TSUpJM0FycmdhTGU2d2F3c0taUEU0VHRjTTAxMllpYmwybm9kbEtGTGVOaERMV1loWHd4QndEN2w0TlZkcVFkRStHMnpOWGd1SE93c0YwWEZUVTRlSU5IR05ST0hTQytkNlNDa1FxbUpOWitGc2dVSkxQMTZhNnVkQ2t3aStuMEhxZ1dYcnNuNFp5Rlg4V1Y4VmpLQ0psWWZjT3FoQ3k3UENDTU5ucWx0cTZYYmlxZFUreXJST2pBVDRQQWRlcmtMNDFuSzBMRk42UEZZMXh1cFBlbnNoNWw2SVBvbHhSeldvczhXcXUzWHZWVDhZTjBDQVdNSFp1TnEreFdWa2dOZE5FM0tsS0VWakhVSHJycjAvbzlXUEt1eGZ2ZEpLSXM3QzQrU05IRXp5N3NNTVlhL0k0U1JReUFqdGE0SmRtNFVQY1F3UGt3cDlIc0YwTVh3V0d1OHoySW02bHk2cTNYSjZLUG9VZmgzakNDWFd5Q2U4SlVPamtBZkpxcDBLQUh2N3FPQ041c2dDeSs1Q0Iyc2Q1MDI2N3FWdzJNZDlWNEtQaVF1TXgyRTh5Ym1NeUpVZlVVOEVWaWl4cTc3c2pMWk5UUDBEV2hTSmdVeml5dXNnL1h1Sk5LMmpkN0dCUjlWMTZtVDcyT2QwaFJDenZhekozMTJaVFNpSG5EemdId2RXUVloRE9QeVBZdG9EczdxcGdPSk1HempnbzlPRnJQSlF6QWFBV1FtSUZxaThQT3VrVU1YVmpQaVZnNVhNRnFkS00wdTljcFZqSVg0QUsrMmk3WjZVUnFwazl3eDhaeEIyUGJZVUZtYnBMcW9ZWEtzeWJyTXkyOHQzbDdDbytlN2t6OGY2U0JnQWlNZ1p1OTN6UmtBaHhJQU1pNnVnVFhmOXFKei83dHNkTEJad2NlOExKenZoMmFXTlFXZnRpbEZxd0NJVVlaWG0zL0hjTnpKU2Vhb2x3VnZ6ZnRlNkZIM1EvY1NWSkZpREE1dmFyOUxWcHVMUFh4dktmaElkSEJLazdxK1VmUmJVbi9QSW8ycERzOTBJcnFMemhyRGkrYmpQV251SzJqRjVxTVIxcEphNExLVFFTcVEwU0xzNjRBVE5JcG9XMGMzV1h6Y3hOdHBVSlZPaDBmVlRTaVZwYyt5K2g3Z1JjcTJGdWpoVkh0QjI0QVVBa3RSTjJ1NXJCYTA3bVF4R25QRnBpMUN3RWFtY2ZFYXJwTXpEMnpkNU54b203cVQ3bjlYVElFQkJNeWUrRW5Ia0xZamRabDZvTkpuSTJDUEpxVnh4YlBxcjFhbUFFYWpWTTdvNElPMnpWc3JaV1VPZEtFdW1vbkRvM3MzcnZJeXRmOERDL1pZZVZBYWhXODFXbDNyS1JIbEZqNjRrR3djek5iK1RQb25OS1lBNm9IV3FLNkFCTzhoRTk5bFh3bmNBQlc3d09pSkkvcUZiN3drODNNRFJEWEZtVWFyajdtV3NYTjF6S0JsN1oycFZsOFNJR2x2MGMvUG9yWHhWTHdIb04xcEhMemMyR1BWUG11cmo0TXYwa2FHdnY4a2lrQVhJVDJJUWJReGp2NmVDNEFDTEM2K09yRUZnaldrcTdFZkZzRFEraUgwRk9ncDBGT2dwMEJQZ1o0Q1BRVjZDdlFVNkNuUVU2Q25RRStCbmdJOUJYb0s5QlJvandML0Q2UnN6Vm1oeVJ0YUFBQUFBRWxGVGtTdVFtQ0NcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwidXJsKCNwYXR0ZXJuNilcIiBkPVwiTTAgMEgzMlYzMkgwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0dGVybiBpZD1cInBhdHRlcm42XCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1c2UgdHJhbnNmb3JtPVwic2NhbGUoLjAwNzgxKVwiIHhsaW5rSHJlZj1cIiNpbWFnZTZcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2U2XCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFaYmtsRVFWUjRBZTFkQzV4ZFIxbmZxMVVSeFlwUHJCV0xvQkxmMGxnQlJZSU56WjQ1bXdCaThDMml5S05TYk1tZU9adFdaUVhrVWZwREl3UnF3UW9WaTIzVlV0SW0zVDNmN0UzYUpGaENhSnZVMHFaSmt5YWtUWm9teExSNWJqZVgzMzltenViZXZXZG16dU9lZTgvZFRYNi8vTzdkYzgrWk0vUE5OOTk4ai8vM3pjREEyWDluS1hDV0FtY3BNRWNvMEtpTkxxaWZNN3FnL3B3cmxtNzhibnlPTHIzNU8wZEhSNzl0amhCZzdneHo2ZEtidjMzNUcrZ0h3MFVUUHg5NDRoTE94RnU0VCsvakxMcUJNMXJEbVZnYk1CS2hSLzhUZXVLZnVTZmVGYkxvZGNHUWVGbkE2aTk0MjRWZi9ZNjVRNjFaTWxLczduQW9lbUV3T01GQ1J2L0VHZDNMR2UzbmpJNXpScWM1bzRiai95bk82RkRJNlA4NG8wOXpqMTQvTWxpL0FPM09FaExOem1Id0pldWZGM2pqdjhHOTZCODVvKzJjMFFuSFJMc1lJZjc5SkdlMFE3WTdKQzdDdGpFN0tkaW5vNUlUUHpqQnVCL2RFVEw2L3c1TmVqejVNejhQY1o4K3o3M281ZEFiK3BSa3M2UGJtSUJ3TVBwTjdrVzNjVVpIUzU3NFZrYnc2S21RaVkrTitQUlRBd09OMnV5Z2FCK05nbnYxOHptakQzS1BudXJxeExmcUQ2YzVFMXU1SC8zT1pkN3E3K29qOHZWdlY2R0lEZnUwTUdEMGxaUUtYZXZLYlozQVR2MTJoRE82ZXJtMytvZjdsN0o5MFBQaFM4YStoek42TjJmaXlRNnNlbWo2UjNSYlQzQkcrN1Ewd1ZZeWxhUDlaN0VWalN5cXY2UVBTTmwvWGNUcTRuNzA4WnlhUFV5L3c1elJnNXpSYXBpR29VOS9QRHhFcndoWjlJdkxGNCs5bFB2UnZJQ04vd29mSEwrWSt5SU1HZjBYOStrQnp1aVpqTXl3WVhpUWZxbi9LRnpoSHN2OTNxZGJjcXhNVFBvOUVNOHdEK0hZU2J0WFk2dTVjZ245YU9pSnhaeUovODRrZFR6YVBPSkZ2MXBoa3ZaUDErRFE0WXh1ejdEZlEzenZDUmw5Ym1Rb1duRDU2K3ZmWDFSTEI5Tkkvd0tqV3pOSWhFM3dQdllQcFN2WTB5c1gzZmxqMnNSTHE2eGhMMThKd3BmaHdoMWR2T3E1Z1JmOUtmZWpSMUp1Q3hQdnVXVHNKeXBJMnVwM0NTdVhlL1RabEN2L3VHU1VJWEZSTjl5MVVsZGdOSkZtU3dxWStBODRxcXBQOFFyMUVDSlhCV3hvTXNWS2V6eGs5SjV1RTdsSkwzblcwVWU0a1pjaktGVWhFbGU3SzlEUXVVOVBPd2pia0ZyNjRQakZ2UXJqRGw4eTlpT2MwWCtta0FUNzRidW9OdFVyMGp0b3o1elJvODdKWi9RMWhHeDczVzJwcC9qUkhTbjZ1d0ZXU0svN1crbjNqL2gzUHo5ZzlLVVV4SHg0WkpCK3JTcUQ0WU1UUDhzOTJ1em85MVRJeFB0N0phMnFRaXRMUHhvMTd0T2xuQkU4ZERhdC93RDNKNVpZR3VySlQ5S0JwREFIdHI3dnFZTFU2Z21CWEMrRkp5NkY2RDhac09odnFxaFFZV1dISG5ITzdJb3JySUswemlnWHpXYk43d2pyYWpldmJmWGd0MXN2ODFaL1gxVUhydHpWZ3F3U3pLT25BbS84MVZVZFEwLzZCWEJGaXJEdWpuN3dzWE9mWGdNNG1aVUpmTHJsckJUUXJDWnRmaFpkYnlVWW81UGNGNWYzaERzenZoVGpDUmhkNnhqUGZqNGtMc3JZOU95OG5iUHgrWnpSQVJ2QmdOcUZoZEF2RkFpSEpuNlpNM3JjTWFacnE2akxkSlhHSUVEZ1JSKzFFWW96K21iQWFMQ3JIU3Y0TXJpak5URFZwdE5zUTZDcjRLdjYrM0hnNlZ5YVArTHkvWWpDaGJubkNDR2ZDcGg0YTMvUFlNSGVjNC8reUdFMkhReVorSzJDcituSjQ4ZzJrb0VndTA5alRUOHlkMGNJaXRDcWp2UGJ4T1NxZmlZUXRpNEhXbmxQTURUKzB4MGhhTDgxTXV5UC9RSm5oUGk5aVFHZXFhTEhMd3VkNGZ2bmpPNjNqSEZ5em00RGdSZjl1U09LdGdrNWZWa0lYc1Y3UTQvKzNzSUFEY0ROeWdDdlZKRVcwMzNTNG4rVmpUQUluRXcvME1kZk5KUU1zUEZrU2VmVEE4QWU5dkVRczNjZCt4NXdlMGFpTU5vSFd6cDd5OVY3UW00RENsMmN6QUNNRGxVcHN0a1ZDaUpyMXdIdnZxdmJDSit5Qmk1OUhZdytZV0gycVlEUlg1ZjEva3EySzFPNlRDS1JVU05nNGtPVjdIak9UZ1VzZXFQZDNJMXVuRE5ld1hCaGRDNzNhS05wUlNDN04vRHBWVGxwWGNuSEpJalVuc080WWJaSVBPY0VZUDhQR1gzRHhBQ2MwY044eWZoNXpvYjY2QWJBeGdJbXZtNGNNMkRtWHYzOFBocFMvcTRpV2NQaEhCbUhGeTMvRzZyM3BMUjZmQXRPQUtubXMwVHBkVkpmMXVpeGwybFo2V3lrejI0QVdvZ3pXbUdVQUl5T2gzNjBxTStHbGIyN0tRZ3hpY3liN0MyM1BvRm9IQ0p0a0RZaGkvNVFNcDFIdnd2Z2lVcmg3bjVCQjgzNENIc241VHFjN2hlOFF5dWxNLzZsMHJ2RldzdEtPRHpNSm40OVk3Tk50emRxU00vbVh2UUJuYjdWbk9yOXJDNGZzeW53NlczZHp1WEhOZ0QzTjk2TmltUlMxMkYwTEtaRndPZ1RUUU9ablY5bHRxMnF2SlhzRlBGbzczSkdQNU5uOURDakVEdlF5cGFyRXRoa3lLSXhwSWJuZVZmUlorRDZ2V0pJL0xnc1I4Zm8zem1qYlp6UloyWTlaRHp3eElzZEhzQnQrU3lBUm8xRHhMdGgyYTJNNTlGbXJNcWlFMXJrZVFrZVdUSitIcXlqMmM4QUtNREE2R0FzOWhJKzc4MFRBTkxKbW1teWlWb1pBTTRvVkJaYkdKMWJaQkxQUHB1U0FyS2lsNjNpQmh4RUdUTnBnUmZRVlQvYko5ZmliV3hpdnVPaFQvL0ttWGd2WjlHby9QVEZWVWc0RFJtOW5mdjBaa2dYYU9taEwxNEppYkdNaVo4RW95cHp0ZnNLWlVweVYrODJFTkVhQS9BRlpmVUJxRnpDanRRTU1qRVE5QWxvN2lkVXdxcDgxMDdPNkQ3T2FGWGcwOStGTEhvVHlzMkFNVVlYMUwrM2FFR0s2czFjaDNvMFBDVGVZRENESlBHUkY1ZzFOcTV4QlM2bHp6UzVuYm9lV3hnN0E0L3FZQXFnZ2JDdncvTHBFUG42djVuUXA5L25qTXo1OUQ3ZGtpVW9vdjBLSzV2RWVhY210QlB0bklETFcxb2JYdlRPRVgvaVFnVnRuOE5iaGdhQldrcXdSVGRtMFlSbFNwbXEyOU9KQ1N1ekRZd1oyVUliVU9ZT0dVN3dDL1Qva3M0NEFzN0VuMWhMdnZqMCtVd01zS0IrVHFEczZESW5yOU50VHdFdUhqRDZJclpFVlROZ2prZ0Zsd1FBakRvTEE0RC9PSXVDaW00QmFSZ0gxY3loVEw0Yk9SSlp4NTV4L2ZYKzlzQ2ozN1BxQUV6Y2xFVUhrQXlBd283RkMwVkRMNEZiTnY2UGN3VXdPYWhWWU5teUREaS9kT1puTTRQZy9UdVErajZySFVJNGVNRldBQUppTWFzVklGT3lHWDI1Z0JSQUlPWTZKS0FnYlZ1SHExOGIrcEVQcFRWazlGY0FxTUpWcXd0R0lwYXhSV0lhVkIyalRqSUkydHFCT2dPcXZOd3MyeHJVa1MzbVF4eWdNZWRKbTladTRLd2xYZlVLRkZ1SEY0Kzl5QzBmOVRsRGkxYzlGMHlIbFFya2txeFF4cUliWlVWU2ovWnlaREpubHdETjBnRGZJUkh1aDg2a0NsMjZlOWNYZDBpSXRMWDZsMWl2SENuWmhnTnZvRDRhSmluVU9wTzRUWCtMSjFIcVBkdmIydS9HdGdWM01nSlprQnBhTVVWQ0NFclZGdkZSWUJ1NkhXSHNyRnRqZXk4cmNFV21UZHV4Y2ZjdFcxei9vVHhkeFVwQlNEV0RQckFiSzZ3TXhRdVRoWEZnUzVFSFVlSE1JaXZqTzNXSmZhZzEyTzBRZHA1NXNENmpzNEZ0K1FBN2lwUldoU1FJbVBnemZVZ1VGTG1tMVM2L1l6VWVnc2RSNFE3SzMyUEJZSklaWko2ZzNDcDI1MVFzSjBOR0VRcExsTUcwMW9ucjFJK3lzS0kxU1VJOFdUeEczNmpKOXlDQXcramZPTEI0UHQwdGo0ano2Um9aME9tUmV4WUtMcllKRlhnU1czUHFDN3ZoL3E1czBpejJRcE1pQjc4NGZPVUpLek5lcVVjN1dWRVRLd1hCSmJ4WDlhbjhGWjl1c1RScU9tUG9VbDFmTUt2aWVBeEZ0U3FXVXRhb3dkOGRNcnJaVkNzZkUrSUFSelpnQXFVajRteTRxMUhEdmc1VFU1NDlaSXVUdEc5bk1CbFg0N0NMbmxNQ29rMmJZanRnd2dEM1p1cVVFeFdjMFIxc2VrOS9YUWVpcVg2KzlqZEFSMHB2T1FEVk5FU3Y2RmtJR3VKVjJjTDB6V25SYnBuRUVVLzh0dmE0eFdKL3htYytVN0MvSmp5NXQ1Q1FFdCtnVGtmSmNnemVOdmhZdXM0RXNxYS9UOWNrZ0R3Mm1hcDZ5Zk41N0JXMGRnSllrVXlpdVhGVkpaTFFtMU1DWE9NRnRGc1YxT2lTbmlQM0xnbWxTb3p2N3pNZGwzTEZvanQvSUdEMDFXbHBNWE52OCtscFNJbTVNZFcyVVRacThEWnF1RnM2TDZkSGU0RTBMbDBTU0Zlb0NzT2EvT0JBeUx3OWFYaFNFVlNuZjhXYzIvN3AwWWVUbnAyTDEyREZhTlFUWUdqdHRHcS90Z2ZwOTZYUkNtQkl6WldteWRlZE5KYyswUXFqMlcwTGJPQmNCRXdZWjYxUmcrTktBMHJTS0lnN1NxbXVCc1N1TnVQTXNDN05rVGg2WFlFZDJrY0ZaNCtqaHQ1dTVCQzBQem0zcnlEZERXYTJEVmZaSkNXMmRMUzJzcXJvTGE2eWhYT2JYbjRVUG5BVElGSXFqL1lRN2tuNDZlZjJkQ2VQWHVwUXZ2aGtPaStpV051aGFxU05tanpIUng2MTZ0eUhEZ1IrZEprTDNnM3dReFBEdE8xdHlKOEQweVdUb1QrdWdnYncxaUcrSVZQQkZrYm5RZ2NxMm50RVRIV0pYYmNIMGFNdkZDNnhyL2VmeDJ3VHBuL2JqZjA5elNDeFJ6a2laSStPRE5ZdktFcXM3ai9mcUdIQ05mN3hWbXlGbkJFVXVPMGhpLzRYNVc4UWp5aXE0MEM2Y21XQ3UwNVlPUVdZZXU3ajlLVFBXcDJSMTdaS1p6REV6dEFUWGxxQ1kyVTRpaWllTWxrU2FkL1I3ZnVreHM3RUgyaTNybG5KWlhRWWdTcVllVVg2aUpYTlBmb1hPOHhPU3V3RFFEaGxmaGU0QnR5VElueTVKM3RGNzBaTnV6Nk5qSVV5OFNZOUl2TmdTbjVBcHFoNTlMY1pqcFp0S0gvSStQd2lYWU5KanBOVVppekdkcHA2dERtemcwMkthVWN0ZjV6MEFSUk1ua0VBSWFSejl0czdER3RDdGkxZW1hZnRiajZETFE5NkQyZVVoRUZJSHRzWiszMFRjQkpGK2l0cklqRGE1R0tDd0JlZlRLMVh3WlVyWStobk9wbzBrR09oTDRiVDdQbEpBNVR2VUxINnBMYmxOU1J1NXQ2L2tsNWF3alY5NklYMWdBajc1RVRYcDU0WVEvODFtTlZXZXhuMFBLaGlCb1pHbWk5ckREOHdhYWJKT1kzOXB5Z3dRV2JnMnFIWHV5b1I4bXdtVHROM1JFSlRIQkZqb21GOGZYL1JhcUZZaE1ndmNKbUgyRmFkUUZPdCtObEZpa2NiWWRvMDBTTFhWNFdRSWNDa1ltSWtmVjZkVjhyazZsU0doelRNYlplai8wbGphcmtHc3k3RGF4TnYxYmpJTHpyNmNoeXd1Y1FHNG92eWlIVDdBWTc3Y1RwV2ZIK1JUNGgzRFp4c0lVakxJUHpvRWV4elJkNVQxclA2bExBc29kdmtjZnFDaWtwVGpGR0RjbXgxR0tGOGZzVUl2c1VQdGtxZTBpTHc2WnBPN3N2eTJEajNVV3ZYVkZFS0JMNVltc0lNUzU3MFZxbVhxenBLTzJQakJGWVJPdnAwd2lnRmRQS0dqYVB2NzNSVlN6aEZjRFpReTZwdkpRNEkrRmhIZmR2dGxNdDF4WjN1WnQzYW1obGppM0ZWWnV5WlBOcWUwZGNjOUZ6WDVpR0VKaXFSdE8zRWp6dUtuUGZFTUcvR1ByYmREakFvZDdxYW94dE1nTk8yQnJ0MGdUTjZiVTd6TDZacC9OblJlc0Y2RzdlNWlnKzM0UzUwRlMrYnkvZkxDRWFVUVZzWmFmU2kyeHhjZTBpZXdBR0hpeTlDR1ovd29wZWIwRWRsOUhObW16ZzUzRkg3T0o1Z3gyZDBReWV6ZndDTmgrdlpSazhzOXBaM0lrM0tFdTA3YVFON3ppUk1uci8xYWpLZnJ0RXVtYWEwSTJrZCtsN1V2NTZuejlJRHFEQjhqZ20yYmdWSGtUaWI1LzIyWjNTU2pDMVc4TkMwSlNlUnZiNjR6c1F4TXFoUmNoVnZSTGxVQnE2VldDWkNINFU5RHRlb2pTaGwvS2FCcnNnRE5QWE5jVjJzTFVPS0lTaGxyVktPZEhoL1lvbWtDVGlCVzdOMmFHWHBXTE9CZ1FGZFNzNVdTOUJHekNrVW1YQTZPanJNQmRCTGRIaldDWlJKWUpMOXFiMXptZnZkcUtrc0pETmpTazhyUXRUQWxwdE84SmFIT0hUcHlITW9vcHhGbjBvZ2xHM2ltMytibE9IUERzVGRzOUJiNjA5WmkxVWVRbEpJbWVhdGRGUGJFM0x2a2NVNU5lRERvRFdLclZBcXNoQ2t5TDNhcFprRys5WTg4YzNmZDNFL21sZWtEMW1mMVJYUTBnYURJS20ramtybUxVcFkxcGVtdUIrbW5qVWR6Nk85MHJ5Mm5lTURkQTUwaEJUdkszeUxka1BmVzBBQ0tFYndvZzhVN2t6S0JsRGZtTHVqY2NBSG9GejhmUUdqajZnSVlIY3cvSHBCTlMrUTV1L0hFUGNaa0ZtMFJpVkd2RGNsTFFyZnBuV0FMSlpBODJDYXZvdTEzY0VTeUVMVnl4eWVOeGs0QXhnV3pwNHlSWDdTQkxob0NqMWdBSjQydzZvN25oM3NrZFNOZE5jNjZGcDlDR2YxcEh0ci9ydGswUXN6N1dLRzNON0xXQWFBSU5aVDJuMjZHd3lBUW9aeGg1cy9ENXF5ZmZPVHpmeWtPdUdqSTVXNUhzdU1nREYzSy9FWDVieWlMeGpvRnROd1NwMkMyaDF4bjlSUkRSMHpudFNHOHdyQUFLYlkvK1B3ZGlVMVhNYTEwQk9MTGM2b21LanVUNXpFVmJMZlFtZnNPQlEvc2JWSTFaTk8wQmlCTys3Ulo4Mk1LcDRFQTVneWZmWVVoU3hsR1FTQUVadzFaUm9uU3lVM0E2QXNhOGJTODVuNjZVOWN5Qm01Y0FBbk9CUHZ5Tkp1V2ZjNllQaEh3UUNKWmhmODNOM00wcEhsWGR5UnJEUU1zS0lzeDVVNitpWWFNNjhvdFpYS1F0RVZPWXdpOUtKM1d2bzdDUVl3K1l6M0wvUG81OHJpektSMkF4WmRZWkZJYVNiL0NUaEFrdG91ZWszNy9wRVNiNUtZY2YvMmw1S2ZsM01BaU9OWUdPRDBnQ2xKQTE3QVlpZDVaZSt4am1mZlkrbHdUT1NrejlOQUdKWGh0NERUaHZ0MHFiM0FoVno5WUk2cnkzYnlaS0dzd3hmd0xDU0FDVkU2MllzOFBZMXlkZTJ4YlF3QXNWdU8rWWZDVHRFYlRlN3lWbVlWNjAySnNWa21yWlAzd3ZuVTJzY1dpKzhZR0FCVnE5c0lpbXZBazNleU0rbmFhdFFRSk5HcFZZbjZ5WXorbnVKZWRGdFpDcXMrN3NaVzR6Q20zYjVPNFNYVDBjbDlsd3hXTWZyU0RIckYvY1huZ1FGMWNKS0JBVHlxZDhlcjFqNFlqUnIrakQ1dUxpbmQ2amlZSkdUUlNCa2hWZlJJQXorM1d3Z1lFL05rNE5HVjNmYjB0Vk90OVlyT0h0cGk3TDhmUFlKQlltOHpoVFAzRk0xamErMVN0cit3bitzQ2krK0FQWXVxNGhvM3NCSkFFSWo4Y29qZXFPbFlmNXJKYjNBbWJpclQ5TXhHdFROM0k5aGpyY2NBVDZBR2c1cDg4Sk13STg0MDJjdHZqUm9ZUXFHU3kvT3VnYUVDUmtNNnN6ZGU0Y1pQUUszTDJuNktVbHNuK1pnV04yRGkxdzZvZ2tSa2pHY2pveVJQSmUraW5lL0Y4d3FUSUkrM01TbkdNeGxoSi9JY2U5RlgxenVsMldwUEhuMUdWa3lYK2VZb1RXNVFCQkVyZ0didWVtRy8vdzRSRG4zQ2pWQ2UxcGNPQUJwZTFYSHJVMVgzVytaMTU3U3JYenNMakJvMzZ0TzRLbjlVbFJCcCtvWGdrWWJGbTV4aU0xZitFVmtOcGN2b296Ump3VDNTYjhIb2c1YkpiNkFDK2JSazE5d0MwTUxNZ2NaL0grU0Q0eGVuN1VDLzNBZEN3V3VuWWRUR0JUQ0RMa2U1TDY0cXcrSFVLYnJKK1ZTbm1NVHpOL1B6TktUZDlQc1VLcGZXekJob3kwUGdtRzZETHFjN1dNSVhqRVY3eVhBb1E4dFlMWDhmUlg1QzFaSlVtc2tEaUR4bjBmV1dNV0QxZjZNTk9xZFRuUXpZUUVtZ0U5d1hsNWNWYUdrZVJKbmZzZXFESWZFeVpWSWE0eUJKRFBFTWtMWlZubnpRVFFOckhCVkd4VTF0ZFFrMHZzM29GUVJIcVFqaCtLdkxuS0F5MjVZSnNDcVgzcFdXUHBNQkR1T2N3amFpbGRuWkhHMGplTWNaUFdoYi9TZ1dZVlRxZGRHR0pLL2JHWUtnNWt5WG80UTVhTkh5Q0JSWTVDQnFsS3g5Zk8zYndlTUFnSFF5SzdxbGN4MzZRNWZ4ZGRVSWFIQlVkRjlRZjA3aWErRlpjK1dWYWU1YU4yMUNKTFpVall1WU5BQXlkU1dQekJrODB0WHNSNHVxdnUxSmlCcWpGU2xDMWR0TnhieW5ad3hWcDAwaDRoYlI0dEZHRkNXb0luSGd6WU4zRG9raU9vRXpyWVlmU3pwNHo4YUxuMk0wVGRiU3ZtRHlkY1RQWmNJZVRlWFZWUjRrbWFIakpwb2ZQUUtsd3loU1NodDJjc055NGdmckYyaGd5YllVS3lLZThPbFA0Q0J3Rm1FM0UyS1NSK08rcWxGVUt5MmdubmhjVTVucU9xbUtsM1JYeTRwdjN4dFY0ejQ5TFpNekY0Kzl0SnpBakpzUTBNd2gybkRHSHBDdWx1QldUSkNrejlNUStiQ0dxcTdzZ2M0YWxnN1QzWVZRd2xqWFpNWXB3RlJLb1ZIR2hJUzBRRm5VNVlqZWRjTkpvaEN2OWZOUkkxK1hzWWYvUGcweDRqNDNmeDRKR1gwdWErUlRGV2VxdjZDYmpLOUw3UDJGRmUvZnNsakYrdHk1Q1RnQmt3Tm0zZEtnMVdtQ0NkaURKRTlvM2NnODd0UnFrbHkvTURvWHlpZFNtemtqaUw2SEMxYnBtTVR4YlNHTDNwUjFHNE9PSWN2YitQU0FRdDZPejhmUmVXWHBSR0EybEgzVm1Wd21LSDh6VXlOTXZiNnd4YWFxaHNyRERtYzBibVVFM0l0NlE5dGdkdURFTUxTRHVuK3dOTURGOEZpQk9lSVFMejRoeW5GZGN2bVM4Zk53UDlLYjVMbThYdlJSWGNRS2hSbHREcXMwL1lURTJzVjllbDkyR0JsU3I4Zm42ME1jNG5laFBTVFkzSVdEdEJBaGxNeHZNcmZjdTVxOFEzcjF3UEJNdklVeldwZmhlTndwUU9RZ2pWTyt5bjRiZk12YWhzNHJZdkVjdkZNUTB3K3JXcmxpTGJ4eHlPdUgrSldNb2tyRnJOT0hLbUl2ZjBKYkpNYVlkZ2JwaE1sQ3J0NWVtWWJ1Ui9PeWltNXRWcjdPSVJYQkRFZmtQUmlQUjh0azBzdVF1QWlpR0F5SGNqdlEzakhCVUxyaGlzYzFNSTNVWlFiSEw5WnU2aldxdjVURmQzRUM0Sm5zakczbmdRRTBDSXlnTHMwU2MzNi9mSUlCZDNOZlhBZmxLWTlUUjlyYUhpRVpORThSQzVob3FCU09PbjRQU1FiM0NDbGJXTlg0djRFakowSnR0d2poSGpQbGF6Z1kvZ2tFZWFhamZJNDV6Znd6Ukxhc0orVFI1cHlhZHJjWkJudmxnOUpPeG9wZlVEOG44NkRoWC9mRWkzV0tWZEd0cDZ6eG40S0VEbng2VlZhcGxvY2VVaHB3Rm8zaU1JUUNtbmRaeE1CcTM4Yzl1aFBGa2lDNWloQkZ4MGhXNTF5UlpZMHhibmRLU2cxZmhMTGFSNjdaelBrUWlLckxvd0I0Z0FCRUwxY0hkQVNVc2IwYkVUdDQ4TEMvNWh4YXkyT1Flakp2VVJYU3doRzVMbzliUERsbGZvTEpkNFZNZkV5WmVPVmhKRnVJa2ZRSEdBR3JKR0RpcmRBOHVUb2ROSXZTa29kUVN0RlNUcC9ib1hsajByRlBsMldHWWZ2QVVUYmNFKy9pVEt5VkRKZmY3NUJuekhnR3VzR1cwS2QvZ00raVNobElramV3Nm1CMzZrTVVWdWxTWlRDUGlqSUVwQXVVby9zRG1lZ1FqV0svZzliY2kvZzhsQ3hBcnBFTEFOQ3N6aFoycElzN3pXWVRVMkRTdDhQbkFMZTdjbEgzY01VblNZR2theENkcXU3UCtQelFpLzZTTS9vMDk2TTdkTFFSVzhZdWJlTEFOTVRrWXQvZUM0K2l6QXJ5YUtPYWJGb0I5eXpNSTFsbXBWSW5palZxWVByaHhXTXZVa0cwNk9OQVRtbkd4NWpnQzRHNE5rM3V6T3ZZWG5BWTk2TnFPNHMrQmFjWFhQT2daeEtkKytoYW80WkJvR3FGVExNZWlsNG9JZWwrTkUvYXZuNDBEMy9qdkRzWjVGaXkvbm5kY0NsM2xvQ05HdXg2TUQ0a29hNkRqTU1jVnNEZmdSUTJiSk5TWS9lb0xyL0xaSmZvQnU3UmgxR3hEZm9HYUtCTXVUNVk2WjBsNE94dERicFM3TzBFaytBL3RpL0Y1R2NuZXZiTy9ObVJuYVZBbFNud0xjZUI4SUpkN1BKNkFBQUFBRWxGVGtTdVFtQ0NcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwidXJsKCNwYXR0ZXJuMClcIiBkPVwiTTAgMEgzMlYzMkgwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICA8cGF0dGVybiBpZD1cInBhdHRlcm4wXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1c2UgdHJhbnNmb3JtPVwic2NhbGUoLjAwNzgxKVwiIHhsaW5rSHJlZj1cIiNpbWFnZTBcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2UwXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEyOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgICB4bGlua0hyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FDQVlBQUFERFBtSExBQUFVd1VsRVFWUjRBZTJkQjlRc1JaWEgvN2NNSU1ncUtCbEJGQ09nQ0FoR1JEQWdDaXBHRkZFTUdQQ3NLN0l1dUhwY0krYWNjODRaVkJBVFNYeUtnSUtBaXJvb09UeVNQS0xnK1gzbjlyTytmajFUMVQwOU05MHpYNTB6WjNwNk9sVGRlNnZxNWl2TlRqTkphMHJhUk5MOUpEMUcwbjZTWGgxQytKeVpIVzltWjVuWnVXWjJpWmxkYm1aWCt1Y3lNN3ZJelA1dVptZVkyVkVoaEE5Sk9sRFMzcEllTHVuZWt0YVR0TnJzZ0t6Zkl3bVMxcEcwbGFROVFMU1pIV0ZtcDV2WkJXWjJsWmxkYjJZM21kbk5EVC8vTkxOcm5WZ2dqcE5EQ0YrVmRJQ2tYU1hkVmRKdEpVRjhTMjBDRUxpMXBNMGs3UlpDT05UTWZtMW1GNXJaZFEwUjNKUXdJS29Wdm1MOFJOSXJKRDFFMGdhU2JqRUJPTXpWS3dBb3kvb2VJWVRQbU5tZnpleWFDU004UlNnUUJDdk9hU0dFdC91V3dYYXh0REtNUUtyczUvY1BJYnpaek03MHBUaUZpSzc4L3c4ek8wblNmMHZhV3RMcUk4Qmg3bTVsWDkvZHpMNXRac3RIM01PblRSRHdFQmZBaEVyYVdkSmFjNGZOR2dOZVc5S1R6T3hvMzErbmpieTIzNC9FOFgyWFR2NmpCbHhtL2xLV2VtYjhUenU0dDdkTkJEenZhak03WE5JdWttNHo4OWdkTXNCYlN0b2VzY3JNMkRQSEFlejRtU3pIU0FzZzRBb3pRL1puaStHYjJRbFhQNnJZR0w4dmRYeEZDT0ZUemlNZzBzNVYyOURsOXZQSGdQZ2J6T3hTTS91am1SMXJadDhJSWJ4ZjBzc2w3U1ZwSjBrN1FueVN0dlh2Qnpqbi9qUkpyd3doZk5qTXZ1WEtJNTdEODNodUNxbE4vajliMG45SlduY2VLQUE1L2xGbWRvS1pNU09iQUt4OEQ4OUJzM2RTQ09HTGt2WjN4RzdrU2hwV21pYU4rMkRhTm5iTjRuNHVodjdTek03ejFhTGNsNmEvSWE2Zk94SGVxa2xuKzNBUEZQNWFYM2FiQXFxNEQ3a2JwQjhYUXZnL1NkdTVWbkRjU2hpV2FoaTRlMGw2Z1VzcXFKZlJGaFo5RytYN2toREM2MXpsM0FlY1p2VVJaY2o5ek94SFpuYmppSUJpbno0MWhQQWVkQVErUTZlcGJHRkYyMVRTczJEc2ZHVVlkV1VEUmtmNStLWTV0aXprcGk1aU9YdXlHMkdhemd4bU80YWE3L29ldnI2a0xqSk5LSHUyY3NYVnFTMm9wLzhxNlJsOU5qNWhKRG5JRFNsTmtBL2l6d2toZk53WnRiNW8weUJPYkFMN205bXlFVVhicTBJSWI1QjArOVJNNjlyLzY0WVFQakRDTEVCNzlsRzM5RFZsNHJvQUU3U2ErN25ScXFuQjZvWVF3aGVjR2UzQ21KSjkyTlRNdnQ2UXk4ZWc4azFKTzBpYUpXNFlCdmpsTHBvMjRSRllEWStRZExjazlLZDh3VjNON01nR2pCNUFPVVVTY3ZnYVV4N0R1RjRQUTdkRkNPRWpybGRvc2kwZUsybkxjWFZ3MU9mZXpjeCsxZ0Q1YU1RKzZOejBxSDNvdy8yc2JMdVpHZnFFSmxMUk10Y2VkbXFzekh4MCtYV3ArZ3lmOVloVDg5WTJSSnh0eUNULzBsM1VPZ0d6VGR3VnF3N3kwWHo5b012TDJZUWdXNGpKK0R2VWdSL1hIdU11YVJQcWF2VnI3aGhDK0hKTm0vMEtKQVJKZDZ4KzVGeWUzZHA1cDdwYkF1WmxSTTZwdERWOUNhdkQxVjdtWGpKOWtla25DZGoxUXdnZnE2bFd2Z243eERRY1RaRE5ENnpaMlF2Y1RYdmMrdnBKSXEzdGR5RUI0ZDJNZVRwM1M3ak83U0VURlpzZlg5T29jdzdlUGt0T2tsbjBBa1A4NHBxaUlpc3JJdlJFMm4zTTdBODFLUFJjU1U5WVFuNHQzTEJLUHNjdG5ya3J3Vmx1QnEvMW9yb1gzOEhNRHF1Qi9JdWNNbnR2MWFvTHFOTDFxSVRyK2dGaVU5aTM1a3FBdHZBT3BYZTM5aE9xUEtTR1o4d1Y3cHpSUmN0ZGEwREplQkJ1NFM5dHlLZ0JjL3dPY0dITFdRbXdHN3grWE1FcE81dlp4WmtkdVJibmp4blQ1MmZnZXRFbElBL3ZKL1FkdUo4MWJUQjNyNnpCY0Yvb0RxZE4zMWQ1My9ydXJwMURoWWdtT0R2aTdUdXZqUURTNXhJNkp1bmdGdmdmUk83MzFWQWRIOTJtbm9VbEhMdCtycElDM3piODhlYTFyWTBOMzcyTWZ5anBkaTBCWWwweisxN21DbnlEcEZlMVFIZ0xYY2VkNjV6TUYvKy9tM0piR25QdkhyTjVDT0VyYmdwbjltUFdiclBkQzVlNFRGemdVUVQvTVZLN2pYdkM1aXo5VjB0NjBVaHY2Ky9OU0RrN3VyY3pzTHErelJsWUFzdmpQSlloaVJNUFNSc3Bud0ZNVEJZSEdrTDQwZ3piOGtzNFdQUVRKbTB2TS90TE5ETi9KSWxRdDNHMFcva1drNk9DdjJRVWh2QjJadmJEYUZEREtPNlBrdTQ1anRGMi9Ka3d1cWpFaVRBcTRJUGk2NEZqN3ZjR1dBT2pkeGJ2cnZvK3JDbER2cWVIVVZVOU5ENkh5SWVjTzI5dEF4eFpTdUlaekJmaTd5UjBINC9JM0FvdTk0RFVXdmhoOXVQSEh5TjYwREhMWFZ1Y2JxMU9UdkhpTGQxOFcxNkd5Ull5TmsxY2FieTNEaUc4TnhOSEJLUFdjclZqNzhkQmN4RFNpL09YU25wRXFXT3ovQlBsemlQSkJGSUJtL01sUFhUQ2c3OUhac3pGY3M5UGtOVTlPUCt2VlF5d1FQcktiNXhCK2h5NGtBV05mMStFRHdQS25hcUExaHREQ0c4Y2x3cjIzMTJvUE1MYk9LbWpjU1k5eS9WdXUweVZMeXBIb216bm9SWEtuVUZoN0dqZXBoWGRpeHQram00QXZRU3A3b1kySXpneGMvWVRpWnRGVVVQZjJQMC9VZTZRdzJEUUxHTWlrRWR3bXUyQUlmMkxWMndDVDRlMmpUM1Azc3FiQmhBRDh1V0RoejZwLzMrV2xUdFZNUGxuQ09FdFUxcjZZd2h2N2tFblZYMk16NTJZWWxJZm14bkxob1dyRmxjWjk3WUh4eWgzeUZjVUszZGlRQmJIeDBraVdIWGFMWGZsdmhJTDVhRE9vbUg2eElBWlh3eVk3eFdTbmpyb0lUTndIdVhPS3pKazdJdVJDRG8wWG13MlJGSEh1RnJsMkMyMWxYcUtPM3NTeGxWdUtqMzB0eDJoK25IQUh1WE9oektDV2xuNjN5R3BTNEdyYXhCQ1g4SlZGUzVQRytSS1RyaFNNZ05uQ09IZGJaa1p4NEhCRVo2NWxTdDNDTVNzQWx4OGpzZ2M4aHgxclQwdEkzWE5WVlVyRjN2SVd6TUdqdUtIaEVxejFJWXBkMktrRjhmQVlQZU9BbUFMTS90YkNvOGVtTFBJVHhObno5K2tiaVRod1JpdFhOT0FLY3FkNXcxUTdoUUlqNy94ZG5wdmgxM2RWdmZzWm5HZnE0NS9VWFpTSlRRcGg0Rmc4TFBTVU82OHNXYU93bDk3NHVvdXd3QjM4cktOb2t3RTUwbTZSenlJSjJUdUhiT2k5NzlMUXJsVEJoaS8wYWZ2R1FPdG84ZG9jbVB6ZE5WWXJsc1VTSktwL2NQbVQ5cjJQamYydlFkNGJINFZZQWFkWStrbmgwRWZOSjg0OEZZWnF4YU56VlB3TFBBQmE1blpqelAyL3lON252WWM1UTRaeTFMS25VV0FjcmlRK3AxMGNIMW9tSW1KMks0YVIzd08weldKdklReElSbWY3bkp2SHdCUTFVZVVPM2cya3hjNEJrTE9NUTRWeERYMnFiMGtZNXdrNTFnZ2F2WU1hdXdNQThZMVBkbi9xcEJFSm80YzVVN2wrQW5aN3FISit6RWxUNldxc1dIRUl0bm1RcXIyUVdiTzRrWXVUcG9TcTZBLzVYTW9kNDZxbWNDaUdEUGZhRDAzbi9JWW1yeCsyd3hHRUpYKzAzazRZZ05wMHVPQmw0OVpMcWFXaWFJQkJPb3FkOHJqNVRlR2s0bUZYRGNZNDdCYnNBNmVuY0FwNnV4MzhwQlhaY3dRckY0TERNT3d0M2JrdjdyS25TcmszK3hHazc1bU1pR0tLTWRKNUhDRkVENmZvQlFBUko1ZXVPaXV0M1ZDQ0cvSzlHYXVSTHpEQW9NSk5RSDcyakFNL1NRRHI4dGtaaWVtTGd3aGZMb0hCaUNVTy9neUR2TGNHWWJ3K0QrTUpmdjBGZlBlNytEQnBQRzRxbzcvQkFIa0dBOFc5b3FPQWdYYjlrTThIMi9WSUd1ZDgzQ3FXYWpsZzV0WWF1em5RUUNVUXhsNm9hVC82U2p5NlJZenY2Z05mSnlYZWZtRngrbVJyWnNQRlVZSGZWZ0JNWVNkNVBsNDc5N2hzZGJwMnQ0Wk5vSExJUUNLS0EwamdCczdIdlFKYndLRGlyS0hiejZVZXVGRFdoYUNWa2kzUHVoRERCK2ZJbzNMSWpOcEhZaDM3RnFDU0ZNWnlsZEFBQ2tSa0hDbjUzUnNjRXZkU1VOZ2x3d0huK3NnZ0pRSERBVHc3UFQ3bHE3b0dBUWVtckc2WDU5REFHd0JMK3pZNEphNms0WUFqSEZLdzNzREJKQVNtMjd5OHVqcFZ5NWQwU1VJc0FLa0NHQmhDOGh4QkgxYmwwWTJRbDlnOEdBR1NWUk5GRy94Z1FFc21FRytZNFlSSnJMNHdGUVdEQ2JudXF3cGZIaEdEZWFyV1FHU0dVQzhjTk1JY08vTXJSUzF3UGZodDJaMmN2UkJEQ3craUlXeHlGaUlrbnhUNUlHaWw4dklCU1RwdnAwWjJhb2R3U0tZa2dLV1F3QXBVekI2OGM5UEtPbkJxc05vNzh3YW5vMTdtTWliKzkvSmtoN1djWmpnL0pMYTNzK0ZBS2lObXhvNGhaeTZGQVRSaEN5ZWtyRW5wdUJBb1F2c0lsczA2Y0NFNzNsK0JsN1BoQUN3bDZjR1RoYVFrYkpOVFhqdzVkZFIwaWJIT2pZTURsZWpYMDhGVjVaZlBLM2Y3dkU4YkR6OGR3TFd3SGRsRUFDUk1IV1RIVTlyN09YM3J1NDFERlBBR1BZL1NhK3A4TjFscGk4ZTkycG05cDBNdkg2SG0vQWZTKzBWWjNZMEZDb2U5S0JqWE43ckZHQW9Fd0xPTUkvcitINWZIdnM2YnRzb2p5WCtqVVBJb2R4SThZZVVQWUJxSDFUTTdsc2o0QlZ1UHg1NDdqSEJGYVM5M2Fadmc4YVhnVHpGaVhHVDJITXZ4bmIvaktnZ0x1NWJVTWhxdUR4bHFMcXJDSUl5TEVnK0cvY1ErWFFaTFdBcXlSZVRlbHN1eGkzOGpBUzEzQ3pwTlQwREJza3VranFPaW5GVHlKS0N6U2g4K3Rxb1Y1eXk4ZnkrSVBBMU04dTl3akQwd1MwTXBOMnBvWVBJMzl6dzFXZVJsMFFmK0VkVXJXenh1YVBpTEMvL20zSEQ3NmFZQ2F2T1RBUUFoMmJNZ0JnWXpCYWlmM2JxZ2V0YkNoWWJaUWI2VUx0eFpkczlJNUNBeEZEYnJieWp1d2VQcmhrQmhIS0hmTHF6NGduMDRJeXRqL1MraTZLZHlFTi9YbUlWd0NwSTlZc3VON0tjb2F1UFovZXdZNnFZRXZRNVMxVk15VzgwYk16OFJ4bS9SYVhveVExOGJNYU5CSWgyMVdIeWxoN2xuSXFOTDRCRGtxZURPanllSmhOdGJUUERIN0lZNDZCdnl0Q3Z3dVRtOEFFd1NWMWRLbmV0VVdlUFVQZkg5MHk1azBNUWlQUkpKMSswdjFVUGUxaUc3SWgzME11cWJwN3l1ZHo4K2F3T1VIOGZlSmttSU0yWnhJUzg3VnoxOEEzTjdQY1p5OGRQT3hZbVJod2c5WFpUU3ovS0haSmI5eVhPdndwSHc4NkJ2OTlsNEkrQTEvV3FIa1EweWRzekhrQ1dyQzZsaWQwcFE1TjVwZXU5KzJyUXFzSlgrUndxL1J6dkxzTGRLeE5GOGtDS1E2WlVpRGlJZkx3RCtYSHA3M29aTVhCd3ZNL3ZrUktyak5pYzM3Zk5MT2xMTmRkZGhqMlFxRkxjb1FaeGo4VjVTcEpObXhtRWlxbW9PY3lTZVlwbjhwNlZZSTlCdUVQM241UDk1RmNlQURQb09Rdm5LVUNRMGlPekNwQWxlNXFBZmRDUS9INFFCUW10NTZHUUZmNE9uOG1ZdE9oeHFHZVViR1RWU0NtRldBa1FwYVlWUWsxaXl5TUhEUG9hejRCVnllZ2tSOSsvQzlEOEpVVS9nb0J6SndSWnBqNDVBTGpGRnJEd0RkTTRqS0VZRXl4WitsbWxVT0V1Nmc5NkFBOWtuZVZVOWpGWXFTbjh4UW80bE9GU09QWm1HL1BnckMvUGVQRFpVM0NOM3NITXpxM28yMW1rZ2VzSWN4b2phWnpIMkhCeXZKMlEzR29WdElLcnpFazlEbVZST21aU3ZuS29PZzhySVI5KzVmZ3gxT2tkSitMYWVEWU0rOUVsV0t3eTgvMy83OFdtMzl5WFkxVkxpb1NzRks1V3pYMXUwK3RnT0VsNkVFY3pYMDlXRUVtYk5YMW9UKzhERmk4YnNBMldpUUQ4UExySk9Na2dtbHV1bkNUS2QycnlraHIza1Bvc3ptWnlsZk1naEhITlc2TTZTQXlMTXRMajM0MW1md0ZRWXN4emVBRnk2YjUvakxsMHNWWitLMXJ1eUhaTnhISWZjdmNXc0d6cisvWm05bzBJRmpHeXk4Y3d4WlY2Lzl6T1VFVHlzNWt2dTZ6c1pKRDdrb3pyOW8vaTNFNTFCOVZwNmlBeXVqeVdTNUNBV1ByamJiQ005Slcvd1YwYkFUMHNOK2RrRWdFKzlGdTFQUFQ3bU5sZlhUbEZoTktXTFQrL1Q0OURWVjlWdVhRbDBpTThvYTF0QlJkUTNTRUpsV3ZjZ2UrMzZEdTRsdWYxeDVMM2laNWxLMjJic1BEMVQ2YjBjd0lncXd0ZTNLMnRramdhSGg5UlY0enc4akVSSnpnY3R1RTVSRGtYL05kZjdVbWcyZ1pxWDU1SGRaTXZaY0lmZkZES3RuVTNOeXFLNXhnYzZBQ0ppQThjTWFJWWxmU1BKZTA5WjhxZE1sSENoK0hsWEtYNUxFOCtmcFBZZTZqRnIveUMzTitGdTNYSzhhTG9GRXdoeWFYWVF1bzJVcjRkSU9sQmRXK2NzZXRSM2NMMEplMzh2anBReFp4NFA1eGt4dEx3T3ZsNWphV0k1WnY0czdwN0VXbGF1bGlYYnl4QUhmQlFnbFBZQW5QRThHTFN3U1MzdnZTWCsvZkFHa29JT29iTS9zUUdSRkIrN3p6OVpnWS9NOVBLVnlEL3o1UDBkYVRHUUNxaXVPaFlRUVJQR2VmU05FUFV3Y3pmMTh3dXJySFNvdTU5MWlSaGdCTUNsVWFIZWVQRUJNQXhmdmpQblhIWHJGRnhRQmFXRjlaZ3RvRXI5cEEzVHdPdU9HV2dra3g2RDBXVWpFL2FJUjN6S2g0VmFXM2RUNDVqM0xwekRIREY1RUlGLzRWcFptL1pyQ1pUU01kUjZ1QlV1bEZia0p1QjUxQzEvSU9SdXJ0QWNPcjdpQzdBRVhrOVYwTlZEQWhSOG1lU3RwOXo1aERwYUJ2UFhaZ3JYaGN3eEFkaVVYemZOQ2ZDOWcyemNQM0ZtUmZrL25sck9ORTgzY3orRkcyUkJYSlQzeWRLMnJwckFLTWthNU5VYkVUb1VwSUdhcTZyTCtnYURITDdzMmtJNFQwTjh4Yitwc3Q1aS9EWG8vSkdpb0xMLzhOSW51NnJ3U3hINytDc3VwY25ycXE3NUFNejB2VjFPVDN0d2dUQWZJdmhxSTUwVUJERXRlUzM4OUN6UGllbUxLOEV5UGJic05JMW5QWEFrbHEvaTBxK2wxL1NwZCtZTG5FbnE2TW5LSWlBNzBzOWNRUFVudTNLM0NVQWVGK3dneEE3OGRyTVdJc1lCc1V4UnFDdlQ4RGxyblh3clJ0QytIQk5qV0V4YUw2aCt2UFpLMzNQbTVUbmNSdUFZTWJEMHh4c1ptZGxSQzdINDQ2UC8rR3gvTmhHZXRsQUdwNjhPWkZHOGNEall3amhJbGQ0WU9Za3QzOVhtVVdVT1R1RUVON21wVnViN1BQRjJQL3Vmbys5M3dwWkJuRmxJdGYrS0FBQk1HakpUcEQwVW5kM0F1RFRiamkrTU52M29leWNGMjF1d3Y4VWlHZmJQTVpONFYwbDlFWXczOFRMdU5jeGJ4WkFLWDlEU0JlYUdlYlAvVjJoUkN3Z1MrKzRHKy9BNUVvS1dZdzIzM1NmeVZ5SGpmSlk0dC9MUXdqdm5tWFhOOXk0U2Q1TUNIcFRCakVHR01jUXczS3lZM2hRNkw0dVJkekZVN3V6aE5hZFNWeFBYMG1rdEw1ejM0Ulc3Y003ek93VXowZlUxaGg0empKSnUvZWM2YzJlZkJ1Nm0xTlZqRjhad1hWL1F4REV5eEU0UWFMbzc3SW5reFVkelp1a1BUMVM1cEdTK093R1VVcDZoaGZJUEJqR3krc1FJODZlN2p3TUJaaEczY0txeGdLalMvL216Z0VHcHdleVdoSHdrUlBnV0FXOHV1ZEFJRDcxNkJ2aUQrZkdnZHhoL1lPZm9mcklqdlB1SjRGMmpQdzJCRHJXY1RJWkJ0d3UvN2ZDdlhieGtwcEhHOGpBYllJeWJCaEhqbW1vTGVzeTB1a2JNeDd1bnRMMDh4alBPQkR4NVQ4Z0JGYUV3ejM3MXlnaTFiU0pncjRqclpDTEdONkRzUzIxVEFnZ1gyOVAwS21ablpaUkJISGF5STdmejFhR1ZJSVdrNklNYlFUSlpJSnQ5aTVEa1lRbzlrU1Bqam16bzd3Q1VzTHByckhjdzVNeE5vbUptRDBNdGpnaWxEQzRrdTNtZGdZeWd5Tkt3dEhITTNBU3h3UnJFRFI3dkplVFE2VGNZRUxLcUJaQjJ0OUhNYnZ3SFVBTit5VGZLc2djUmxsWWlBTFJNaXVNZWdqeHNJZFRmcFhTTXhSaFFnSDBBMm9SU1dLV1UwQVNaVkZkUlZOL29kN2hub01FOWxwbUllNVNwRVU1aU9KUFhoeVQyc0JVU1dYV1h1VGFROVRTZk5Ba3dxeUI1RCs0cHZMSUVNS25KUDJucEYwOUxKMnRDQVBYekNEOFgweVBSR25ZUi9qZEFBQUFBRWxGVGtTdVFtQ0NcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=