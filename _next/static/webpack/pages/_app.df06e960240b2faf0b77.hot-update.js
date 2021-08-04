webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_asset_icons_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/asset/icons/in */ "./public/asset/icons/in.tsx");
/* harmony import */ var _public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/asset/icons/gmail */ "./public/asset/icons/gmail.tsx");
/* harmony import */ var _public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/asset/icons/facebook */ "./public/asset/icons/facebook.tsx");
/* harmony import */ var _public_asset_icons_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/asset/icons/github */ "./public/asset/icons/github.tsx");


var _jsxFileName = "E:\\portfolio\\client\\components\\navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];







var Navbar = function Navbar() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  return __jsx("div", {
    className: "fixed z-50 w-full p-4 text-white md:p-8 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative z-30 flex items-center justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "font-serif text-2xl italic font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "Hai Cao")), __jsx("button", {
    className: "menu focus:outline-none",
    onClick: function onClick(click) {
      setActive(!isActive);
      click.currentTarget.classList.toggle('opened');
    },
    "aria-label": "Main Menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 100 100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("path", {
    className: "line line1",
    d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }), __jsx("path", {
    className: "line line2",
    d: "M 20,50 H 80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }), __jsx("path", {
    className: "line line3",
    d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "duration-300 origin-top transform  ".concat(isActive ? 'scale-y-100' : 'scale-y-0', "   bg-cod-gray-500 h-full fixed top-0 left-0 w-full z-20 bg-opacity-70"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "flex flex-col items-center justify-center h-full space-y-12 text-3xl transform opacity-0 ".concat(isActive ? 'fade-in' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "HOME"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "PORTFOLIO"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "BLOG"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "ABOUT"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "CONTACT"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx(_public_asset_icons_in__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }), __jsx(_public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }), __jsx(_public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }), __jsx(_public_asset_icons_github__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }))))));
};

_s(Navbar, "NIDogoy7bmTp1+ctz7hxf3NMsLg=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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

/***/ "./public/asset/icons/facebook.tsx":
/*!*****************************************!*\
  !*** ./public/asset/icons/facebook.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\facebook.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none",
    viewBox: "0 0 48 48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#3B5998",
    d: "M24 0c13.255 0 24 10.746 24 24 0 13.256-10.745 24-24 24C10.744 48 0 37.255 0 24 0 10.746 10.745 0 24 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M26.922 16.522h3.093v-4.569H26.38v.017c-4.405.156-5.308 2.632-5.388 5.233h-.009v2.282h-3v4.474h3v11.994h4.521V23.96h3.704l.715-4.474h-4.417v-1.378c0-.88.585-1.585 1.417-1.585z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }));
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

/***/ "./public/asset/icons/github.tsx":
/*!***************************************!*\
  !*** ./public/asset/icons/github.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\github.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none",
    viewBox: "0 0 48 48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#000",
    d: "M23.997.5C10.746.5 0 11.288 0 24.596 0 35.24 6.876 44.27 16.416 47.459c1.2.222 1.638-.522 1.638-1.161 0-.573-.021-2.088-.033-4.098-6.675 1.455-8.085-3.231-8.085-3.231-1.089-2.784-2.664-3.525-2.664-3.525-2.181-1.494.162-1.464.162-1.464 2.409.17 3.675 2.484 3.675 2.484 2.142 3.68 5.619 2.619 6.987 2 .216-1.556.837-2.618 1.524-3.221-5.328-.61-10.932-2.676-10.932-11.907 0-2.631.936-4.782 2.472-6.468-.249-.61-1.071-3.06.234-6.375 0 0 2.016-.648 6.6 2.469 1.914-.534 3.966-.801 6.009-.81 2.037.012 4.092.276 6.009.813 4.581-3.117 6.594-2.47 6.594-2.47 1.308 3.319.486 5.767.24 6.376 1.539 1.686 2.466 3.837 2.466 6.468 0 9.255-5.61 11.292-10.956 11.889.861.744 1.629 2.214 1.629 4.46 0 3.223-.03 5.82-.03 6.61 0 .645.432 1.395 1.65 1.158A24.097 24.097 0 0048 24.596C48 11.288 37.254.5 23.997.5z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
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

/***/ "./public/asset/icons/gmail.tsx":
/*!**************************************!*\
  !*** ./public/asset/icons/gmail.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\portfolio\\client\\public\\asset\\icons\\gmail.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none",
    viewBox: "0 0 48 48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#ECE5DD",
    d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#D9CBBD",
    d: "M24 0c-1.061 0-2.106.07-3.13.203C32.645 1.737 41.74 11.806 41.74 24s-9.095 22.263-20.87 23.797c1.024.133 2.069.203 3.13.203 13.255 0 24-10.745 24-24S37.255 0 24 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#CD2900",
    d: "M34.144 16.843c-2.362-3.376-6.085-5.313-10.213-5.313a12.368 12.368 0 00-8.96 3.807l-.546.566-4.827-4.14.597-.637a18.815 18.815 0 016.127-4.355 18.652 18.652 0 017.609-1.606c3.11 0 6.182.763 8.886 2.207a18.885 18.885 0 016.76 6.137l.222.332a.458.458 0 01-.148.65l-4.7 2.77a.458.458 0 01-.607-.133l-.2-.285z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#FFCE00",
    d: "M7.498 33.194A18.814 18.814 0 015.096 24c0-4.261 1.394-8.284 4.031-11.633l.539-.684 4.827 4.14-.479.627A12.343 12.343 0 0011.461 24c0 2.064.518 4.11 1.496 5.918l.376.693-5.409 3.342-.426-.759z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#40A459",
    d: "M23.93 42.835a18.844 18.844 0 01-15.57-8.249l-.492-.721 5.41-3.344.453.643a12.5 12.5 0 0010.2 5.305c3.36 0 6.633-1.39 8.977-3.816l.546-.566 4.822 4.135-.596.637a18.813 18.813 0 01-6.131 4.365 18.653 18.653 0 01-7.618 1.61z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#1D81CE",
    d: "M33.387 32.166l.477-.626a12.396 12.396 0 001.802-3.314h-9.242a.458.458 0 01-.458-.458v-5.45c0-.252.205-.457.457-.457h16.288l.055 2.15a18.631 18.631 0 01-4.019 11.606l-.538.686-4.822-4.137z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#000",
    d: "M43.496 23.98l-.053-2.087a.783.783 0 00-.783-.763H26.018a.783.783 0 00-.783.783v6.26c0 .433.35.784.783.784h8.558a11.763 11.763 0 01-10.645 6.782c-6.473 0-11.74-5.266-11.74-11.739 0-6.473 5.267-11.739 11.74-11.739 4.095 0 7.829 2.081 9.988 5.568a.783.783 0 001.063.262l5.395-3.18a.782.782 0 00.27-1.082 19.69 19.69 0 00-6.99-6.809 19.566 19.566 0 00-9.726-2.585C13.142 4.435 4.366 13.212 4.366 24c0 10.789 8.776 19.565 19.565 19.565 10.788 0 19.565-8.777 19.565-19.565v-.02zM23.931 6c6.065 0 11.597 2.966 14.952 7.974l-4.055 2.39a13.223 13.223 0 00-10.897-5.668c-3.748 0-7.14 1.558-9.56 4.061l-3.567-3.06C14.091 8.194 18.76 6 23.931 6zM9.783 12.884l3.568 3.06A13.235 13.235 0 0010.626 24c0 2.284.58 4.435 1.597 6.315l-3.997 2.47A17.889 17.889 0 015.93 24c0-4.192 1.44-8.053 3.852-11.116zM23.93 42c-6.178 0-11.638-3.129-14.88-7.884l3.998-2.471c2.41 3.42 6.389 5.66 10.882 5.66 3.685 0 7.119-1.529 9.577-4.072l3.563 3.056C33.784 39.8 29.11 42 23.93 42zm14.16-6.899l-3.563-3.056a13.236 13.236 0 001.95-3.61.782.782 0 00-.738-1.043H26.8v-4.696h15.097l.034 1.314A17.91 17.91 0 0138.09 35.1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#ECE5DD",
    d: "M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#D9CBBD",
    d: "M24 0c-1.061 0-2.106.07-3.13.203C32.645 1.737 41.74 11.806 41.74 24s-9.095 22.263-20.87 23.797c1.024.133 2.069.203 3.13.203 13.255 0 24-10.745 24-24S37.255 0 24 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#CD2900",
    d: "M34.144 16.843c-2.362-3.376-6.085-5.313-10.213-5.313a12.368 12.368 0 00-8.96 3.807l-.546.566-4.827-4.14.597-.637a18.815 18.815 0 016.127-4.355 18.652 18.652 0 017.609-1.606c3.11 0 6.182.763 8.886 2.207a18.885 18.885 0 016.76 6.137l.222.332a.458.458 0 01-.148.65l-4.7 2.77a.458.458 0 01-.607-.133l-.2-.285z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#FFCE00",
    d: "M7.498 33.194A18.814 18.814 0 015.096 24c0-4.261 1.394-8.284 4.031-11.633l.539-.684 4.827 4.14-.479.627A12.343 12.343 0 0011.461 24c0 2.064.518 4.11 1.496 5.918l.376.693-5.409 3.342-.426-.759z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#40A459",
    d: "M23.93 42.835a18.844 18.844 0 01-15.57-8.249l-.492-.721 5.41-3.344.453.643a12.5 12.5 0 0010.2 5.305c3.36 0 6.633-1.39 8.977-3.816l.546-.566 4.822 4.135-.596.637a18.813 18.813 0 01-6.131 4.365 18.653 18.653 0 01-7.618 1.61z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("path", {
    fill: "#1D81CE",
    d: "M33.387 32.166l.477-.626a12.396 12.396 0 001.802-3.314h-9.242a.458.458 0 01-.458-.458v-5.45c0-.252.205-.457.457-.457h15.895c.219 0 .397.174.403.393l.045 1.756a18.632 18.632 0 01-4.019 11.607l-.538.686-4.822-4.137z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXQvaWNvbnMvZmFjZWJvb2sudHN4Iiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvYXNzZXQvaWNvbnMvZ2l0aHViLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2Fzc2V0L2ljb25zL2dtYWlsLnRzeCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJSZWFjdCIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiY2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLE1BQTRDLEdBQUcsU0FBL0NBLE1BQStDLEdBQU07QUFBQTs7QUFBQSx3QkFDekJDLDhDQUFBLENBQWUsS0FBZixDQUR5QjtBQUFBO0FBQUEsTUFDaERDLFFBRGdEO0FBQUEsTUFDdENDLFNBRHNDOztBQUV2RCxTQUNJO0FBQUssYUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FESixFQUlJO0FBQ0ksYUFBUyxFQUFDLHlCQURkO0FBRUksV0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVc7QUFDaEJELGVBQVMsQ0FBQyxDQUFDRCxRQUFGLENBQVQ7QUFDQUUsV0FBSyxDQUFDQyxhQUFOLENBQW9CQyxT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a0RIOztLQW5EUUEsSTtBQXFETUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZjA2ZTk2MDI0MGIyZmFmMGI3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW5Mb2dvIGZyb20gJy4uL3B1YmxpYy9hc3NldC9pY29ucy9pbic7XHJcbmltcG9ydCBHbWFpbExvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2dtYWlsJztcclxuaW1wb3J0IEZhY2Vib29rTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvZmFjZWJvb2snO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvZ2l0aHViJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFyUHJvcHMge31cclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TmF2YmFyUHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1mdWxsIHAtNCB0ZXh0LXdoaXRlIG1kOnAtOCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsIGl0YWxpYyBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SGFpIENhbzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWFpbiBNZW51XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBsaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAyMCwyOS4wMDAwNDYgSCA4MC4wMDAyMzEgQyA4MC4wMDAyMzEsMjkuMDAwMDQ2IDk0LjQ5ODgzOSwyOC44MTczNTIgOTQuNTMyOTg3LDY2LjcxMTMzMSA5NC41NDMxNDIsNzcuOTgwNjczIDkwLjk2NjA4MSw4MS42NzAyNDYgODUuMjU5MTczLDgxLjY2ODk5NyA3OS41NTIyNjEsODEuNjY3NzUxIDc1LjAwMDIxMSw3NC45OTk5NDIgNzUuMDAwMjExLDc0Ljk5OTk0MiBMIDI1LjAwMDAyMSwyNS4wMDAwNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsaW5lIGxpbmUyXCIgZD1cIk0gMjAsNTAgSCA4MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGxpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDIwLDcwLjk5OTk1NCBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSw3MC45OTk5NTQgOTQuNDk4ODM5LDcxLjE4MjY0OCA5NC41MzI5ODcsMzMuMjg4NjY5IDk0LjU0MzE0MiwyMi4wMTkzMjcgOTAuOTY2MDgxLDE4LjMyOTc1NCA4NS4yNTkxNzMsMTguMzMxMDAzIDc5LjU1MjI2MSwxOC4zMzIyNDkgNzUuMDAwMjExLDI1LjAwMDA1OCA3NS4wMDAyMTEsMjUuMDAwMDU4IEwgMjUuMDAwMDIxLDc0Ljk5OTk0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGR1cmF0aW9uLTMwMCBvcmlnaW4tdG9wIHRyYW5zZm9ybSAgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdzY2FsZS15LTEwMCcgOiAnc2NhbGUteS0wJ1xyXG4gICAgICAgICAgICAgICAgfSAgIGJnLWNvZC1ncmF5LTUwMCBoLWZ1bGwgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCB6LTIwIGJnLW9wYWNpdHktNzBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgc3BhY2UteS0xMiB0ZXh0LTN4bCB0cmFuc2Zvcm0gb3BhY2l0eS0wICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ2ZhZGUtaW4nIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6dGV4dC15ZWxsb3ctNTAwXCI+SE9NRTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOnRleHQteWVsbG93LTUwMFwiPlBPUlRGT0xJTzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOnRleHQteWVsbG93LTUwMFwiPkJMT0c8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5BQk9VVDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOnRleHQteWVsbG93LTUwMFwiPkNPTlRBQ1Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbkxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbWFpbExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaXRodWJMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMzQjU5OThcIiBkPVwiTTI0IDBjMTMuMjU1IDAgMjQgMTAuNzQ2IDI0IDI0IDAgMTMuMjU2LTEwLjc0NSAyNC0yNCAyNEMxMC43NDQgNDggMCAzNy4yNTUgMCAyNCAwIDEwLjc0NiAxMC43NDUgMCAyNCAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjYuOTIyIDE2LjUyMmgzLjA5M3YtNC41NjlIMjYuMzh2LjAxN2MtNC40MDUuMTU2LTUuMzA4IDIuNjMyLTUuMzg4IDUuMjMzaC0uMDA5djIuMjgyaC0zdjQuNDc0aDN2MTEuOTk0aDQuNTIxVjIzLjk2aDMuNzA0bC43MTUtNC40NzRoLTQuNDE3di0xLjM3OGMwLS44OC41ODUtMS41ODUgMS40MTctMS41ODV6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMDAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjMuOTk3LjVDMTAuNzQ2LjUgMCAxMS4yODggMCAyNC41OTYgMCAzNS4yNCA2Ljg3NiA0NC4yNyAxNi40MTYgNDcuNDU5YzEuMi4yMjIgMS42MzgtLjUyMiAxLjYzOC0xLjE2MSAwLS41NzMtLjAyMS0yLjA4OC0uMDMzLTQuMDk4LTYuNjc1IDEuNDU1LTguMDg1LTMuMjMxLTguMDg1LTMuMjMxLTEuMDg5LTIuNzg0LTIuNjY0LTMuNTI1LTIuNjY0LTMuNTI1LTIuMTgxLTEuNDk0LjE2Mi0xLjQ2NC4xNjItMS40NjQgMi40MDkuMTcgMy42NzUgMi40ODQgMy42NzUgMi40ODQgMi4xNDIgMy42OCA1LjYxOSAyLjYxOSA2Ljk4NyAyIC4yMTYtMS41NTYuODM3LTIuNjE4IDEuNTI0LTMuMjIxLTUuMzI4LS42MS0xMC45MzItMi42NzYtMTAuOTMyLTExLjkwNyAwLTIuNjMxLjkzNi00Ljc4MiAyLjQ3Mi02LjQ2OC0uMjQ5LS42MS0xLjA3MS0zLjA2LjIzNC02LjM3NSAwIDAgMi4wMTYtLjY0OCA2LjYgMi40NjkgMS45MTQtLjUzNCAzLjk2Ni0uODAxIDYuMDA5LS44MSAyLjAzNy4wMTIgNC4wOTIuMjc2IDYuMDA5LjgxMyA0LjU4MS0zLjExNyA2LjU5NC0yLjQ3IDYuNTk0LTIuNDcgMS4zMDggMy4zMTkuNDg2IDUuNzY3LjI0IDYuMzc2IDEuNTM5IDEuNjg2IDIuNDY2IDMuODM3IDIuNDY2IDYuNDY4IDAgOS4yNTUtNS42MSAxMS4yOTItMTAuOTU2IDExLjg4OS44NjEuNzQ0IDEuNjI5IDIuMjE0IDEuNjI5IDQuNDYgMCAzLjIyMy0uMDMgNS44Mi0uMDMgNi42MSAwIC42NDUuNDMyIDEuMzk1IDEuNjUgMS4xNThBMjQuMDk3IDI0LjA5NyAwIDAwNDggMjQuNTk2QzQ4IDExLjI4OCAzNy4yNTQuNSAyMy45OTcuNXpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0VDRTVERFwiIGQ9XCJNMjQgNDhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0UzM3LjI1NSAwIDI0IDAgMCAxMC43NDUgMCAyNHMxMC43NDUgMjQgMjQgMjR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEOUNCQkRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yNCAwYy0xLjA2MSAwLTIuMTA2LjA3LTMuMTMuMjAzQzMyLjY0NSAxLjczNyA0MS43NCAxMS44MDYgNDEuNzQgMjRzLTkuMDk1IDIyLjI2My0yMC44NyAyMy43OTdjMS4wMjQuMTMzIDIuMDY5LjIwMyAzLjEzLjIwMyAxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRTMzcuMjU1IDAgMjQgMHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNDRDI5MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0zNC4xNDQgMTYuODQzYy0yLjM2Mi0zLjM3Ni02LjA4NS01LjMxMy0xMC4yMTMtNS4zMTNhMTIuMzY4IDEyLjM2OCAwIDAwLTguOTYgMy44MDdsLS41NDYuNTY2LTQuODI3LTQuMTQuNTk3LS42MzdhMTguODE1IDE4LjgxNSAwIDAxNi4xMjctNC4zNTUgMTguNjUyIDE4LjY1MiAwIDAxNy42MDktMS42MDZjMy4xMSAwIDYuMTgyLjc2MyA4Ljg4NiAyLjIwN2ExOC44ODUgMTguODg1IDAgMDE2Ljc2IDYuMTM3bC4yMjIuMzMyYS40NTguNDU4IDAgMDEtLjE0OC42NWwtNC43IDIuNzdhLjQ1OC40NTggMCAwMS0uNjA3LS4xMzNsLS4yLS4yODV6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZDRTAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNy40OTggMzMuMTk0QTE4LjgxNCAxOC44MTQgMCAwMTUuMDk2IDI0YzAtNC4yNjEgMS4zOTQtOC4yODQgNC4wMzEtMTEuNjMzbC41MzktLjY4NCA0LjgyNyA0LjE0LS40NzkuNjI3QTEyLjM0MyAxMi4zNDMgMCAwMDExLjQ2MSAyNGMwIDIuMDY0LjUxOCA0LjExIDEuNDk2IDUuOTE4bC4zNzYuNjkzLTUuNDA5IDMuMzQyLS40MjYtLjc1OXpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0MEE0NTlcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMy45MyA0Mi44MzVhMTguODQ0IDE4Ljg0NCAwIDAxLTE1LjU3LTguMjQ5bC0uNDkyLS43MjEgNS40MS0zLjM0NC40NTMuNjQzYTEyLjUgMTIuNSAwIDAwMTAuMiA1LjMwNWMzLjM2IDAgNi42MzMtMS4zOSA4Ljk3Ny0zLjgxNmwuNTQ2LS41NjYgNC44MjIgNC4xMzUtLjU5Ni42MzdhMTguODEzIDE4LjgxMyAwIDAxLTYuMTMxIDQuMzY1IDE4LjY1MyAxOC42NTMgMCAwMS03LjYxOCAxLjYxelwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzFEODFDRVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMzLjM4NyAzMi4xNjZsLjQ3Ny0uNjI2YTEyLjM5NiAxMi4zOTYgMCAwMDEuODAyLTMuMzE0aC05LjI0MmEuNDU4LjQ1OCAwIDAxLS40NTgtLjQ1OHYtNS40NWMwLS4yNTIuMjA1LS40NTcuNDU3LS40NTdoMTYuMjg4bC4wNTUgMi4xNWExOC42MzEgMTguNjMxIDAgMDEtNC4wMTkgMTEuNjA2bC0uNTM4LjY4Ni00LjgyMi00LjEzN3pcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMwMDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk00My40OTYgMjMuOThsLS4wNTMtMi4wODdhLjc4My43ODMgMCAwMC0uNzgzLS43NjNIMjYuMDE4YS43ODMuNzgzIDAgMDAtLjc4My43ODN2Ni4yNmMwIC40MzMuMzUuNzg0Ljc4My43ODRoOC41NThhMTEuNzYzIDExLjc2MyAwIDAxLTEwLjY0NSA2Ljc4MmMtNi40NzMgMC0xMS43NC01LjI2Ni0xMS43NC0xMS43MzkgMC02LjQ3MyA1LjI2Ny0xMS43MzkgMTEuNzQtMTEuNzM5IDQuMDk1IDAgNy44MjkgMi4wODEgOS45ODggNS41NjhhLjc4My43ODMgMCAwMDEuMDYzLjI2Mmw1LjM5NS0zLjE4YS43ODIuNzgyIDAgMDAuMjctMS4wODIgMTkuNjkgMTkuNjkgMCAwMC02Ljk5LTYuODA5IDE5LjU2NiAxOS41NjYgMCAwMC05LjcyNi0yLjU4NUMxMy4xNDIgNC40MzUgNC4zNjYgMTMuMjEyIDQuMzY2IDI0YzAgMTAuNzg5IDguNzc2IDE5LjU2NSAxOS41NjUgMTkuNTY1IDEwLjc4OCAwIDE5LjU2NS04Ljc3NyAxOS41NjUtMTkuNTY1di0uMDJ6TTIzLjkzMSA2YzYuMDY1IDAgMTEuNTk3IDIuOTY2IDE0Ljk1MiA3Ljk3NGwtNC4wNTUgMi4zOWExMy4yMjMgMTMuMjIzIDAgMDAtMTAuODk3LTUuNjY4Yy0zLjc0OCAwLTcuMTQgMS41NTgtOS41NiA0LjA2MWwtMy41NjctMy4wNkMxNC4wOTEgOC4xOTQgMTguNzYgNiAyMy45MzEgNnpNOS43ODMgMTIuODg0bDMuNTY4IDMuMDZBMTMuMjM1IDEzLjIzNSAwIDAwMTAuNjI2IDI0YzAgMi4yODQuNTggNC40MzUgMS41OTcgNi4zMTVsLTMuOTk3IDIuNDdBMTcuODg5IDE3Ljg4OSAwIDAxNS45MyAyNGMwLTQuMTkyIDEuNDQtOC4wNTMgMy44NTItMTEuMTE2ek0yMy45MyA0MmMtNi4xNzggMC0xMS42MzgtMy4xMjktMTQuODgtNy44ODRsMy45OTgtMi40NzFjMi40MSAzLjQyIDYuMzg5IDUuNjYgMTAuODgyIDUuNjYgMy42ODUgMCA3LjExOS0xLjUyOSA5LjU3Ny00LjA3MmwzLjU2MyAzLjA1NkMzMy43ODQgMzkuOCAyOS4xMSA0MiAyMy45MyA0MnptMTQuMTYtNi44OTlsLTMuNTYzLTMuMDU2YTEzLjIzNiAxMy4yMzYgMCAwMDEuOTUtMy42MS43ODIuNzgyIDAgMDAtLjczOC0xLjA0M0gyNi44di00LjY5NmgxNS4wOTdsLjAzNCAxLjMxNEExNy45MSAxNy45MSAwIDAxMzguMDkgMzUuMXpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0VDRTVERFwiIGQ9XCJNMjQgNDhjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0UzM3LjI1NSAwIDI0IDAgMCAxMC43NDUgMCAyNHMxMC43NDUgMjQgMjQgMjR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNEOUNCQkRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yNCAwYy0xLjA2MSAwLTIuMTA2LjA3LTMuMTMuMjAzQzMyLjY0NSAxLjczNyA0MS43NCAxMS44MDYgNDEuNzQgMjRzLTkuMDk1IDIyLjI2My0yMC44NyAyMy43OTdjMS4wMjQuMTMzIDIuMDY5LjIwMyAzLjEzLjIwMyAxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRTMzcuMjU1IDAgMjQgMHpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNDRDI5MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0zNC4xNDQgMTYuODQzYy0yLjM2Mi0zLjM3Ni02LjA4NS01LjMxMy0xMC4yMTMtNS4zMTNhMTIuMzY4IDEyLjM2OCAwIDAwLTguOTYgMy44MDdsLS41NDYuNTY2LTQuODI3LTQuMTQuNTk3LS42MzdhMTguODE1IDE4LjgxNSAwIDAxNi4xMjctNC4zNTUgMTguNjUyIDE4LjY1MiAwIDAxNy42MDktMS42MDZjMy4xMSAwIDYuMTgyLjc2MyA4Ljg4NiAyLjIwN2ExOC44ODUgMTguODg1IDAgMDE2Ljc2IDYuMTM3bC4yMjIuMzMyYS40NTguNDU4IDAgMDEtLjE0OC42NWwtNC43IDIuNzdhLjQ1OC40NTggMCAwMS0uNjA3LS4xMzNsLS4yLS4yODV6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZDRTAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNy40OTggMzMuMTk0QTE4LjgxNCAxOC44MTQgMCAwMTUuMDk2IDI0YzAtNC4yNjEgMS4zOTQtOC4yODQgNC4wMzEtMTEuNjMzbC41MzktLjY4NCA0LjgyNyA0LjE0LS40NzkuNjI3QTEyLjM0MyAxMi4zNDMgMCAwMDExLjQ2MSAyNGMwIDIuMDY0LjUxOCA0LjExIDEuNDk2IDUuOTE4bC4zNzYuNjkzLTUuNDA5IDMuMzQyLS40MjYtLjc1OXpcIlxyXG4gICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIiM0MEE0NTlcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMy45MyA0Mi44MzVhMTguODQ0IDE4Ljg0NCAwIDAxLTE1LjU3LTguMjQ5bC0uNDkyLS43MjEgNS40MS0zLjM0NC40NTMuNjQzYTEyLjUgMTIuNSAwIDAwMTAuMiA1LjMwNWMzLjM2IDAgNi42MzMtMS4zOSA4Ljk3Ny0zLjgxNmwuNTQ2LS41NjYgNC44MjIgNC4xMzUtLjU5Ni42MzdhMTguODEzIDE4LjgxMyAwIDAxLTYuMTMxIDQuMzY1IDE4LjY1MyAxOC42NTMgMCAwMS03LjYxOCAxLjYxelwiXHJcbiAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzFEODFDRVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMzLjM4NyAzMi4xNjZsLjQ3Ny0uNjI2YTEyLjM5NiAxMi4zOTYgMCAwMDEuODAyLTMuMzE0aC05LjI0MmEuNDU4LjQ1OCAwIDAxLS40NTgtLjQ1OHYtNS40NWMwLS4yNTIuMjA1LS40NTcuNDU3LS40NTdoMTUuODk1Yy4yMTkgMCAuMzk3LjE3NC40MDMuMzkzbC4wNDUgMS43NTZhMTguNjMyIDE4LjYzMiAwIDAxLTQuMDE5IDExLjYwN2wtLjUzOC42ODYtNC44MjItNC4xMzd6XCJcclxuICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=