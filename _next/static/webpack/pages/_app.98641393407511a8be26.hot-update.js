webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");


var _jsxFileName = "E:\\portfolio\\client\\pages\\_app.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */





var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_4__["store"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative flex flex-col min-h-screen overflow-hidden bg-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("video", {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    className: "absolute top-0 left-0 z-0 object-cover w-full h-full",
    poster: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/ec90698a3cfe069cc86cf70708b83203afc064fe.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/628750/ddaba24d87fe20c5e5967e22bcff67e497becd69.webm",
    type: "video/webm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx("source", {
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/93b3c3ec3a9ebe0d0b069ffebb695bfae44fbbb3.mp4",
    type: "video/mp4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx(Component, Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))));
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLEdBQXNDLEdBQUcsU0FBekNBLEdBQXlDLE9BQThCO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDekUsU0FDSSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyw0Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGVBQVcsTUFEZjtBQUVJLFlBQVEsTUFGWjtBQUdJLFNBQUssTUFIVDtBQUlJLFFBQUksTUFKUjtBQUtJLGFBQVMsRUFBQyxzREFMZDtBQU1JLFVBQU0sRUFBQyw0SEFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxPQUFHLEVBQUMsNEhBRFI7QUFFSSxRQUFJLEVBQUMsWUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFZSTtBQUNJLE9BQUcsRUFBQyw0SEFEUjtBQUVJLFFBQUksRUFBQyxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURKLEVBbUJJLE1BQUMsU0FBRCwwSUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkJKLENBREosQ0FESjtBQXlCSCxDQTFCRDs7S0FBTUYsRztBQTRCU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ODY0MTM5MzQwNzUxMWE4YmUyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy90YWlsd2luZC5jc3MnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFByb3BzIHtcclxuICAgIENvbXBvbmVudDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ7XHJcbiAgICBwYWdlUHJvcHM6IGFueTtcclxufVxyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgei0wIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXI9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvMTAzODMwMC9lYzkwNjk4YTNjZmUwNjljYzg2Y2Y3MDcwOGI4MzIwM2FmYzA2NGZlLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ha2FtYWkuc3RlYW1zdGF0aWMuY29tL3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvNjI4NzUwL2RkYWJhMjRkODdmZTIwYzVlNTk2N2UyMmJjZmY2N2U0OTdiZWNkNjkud2VibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvOTNiM2MzZWMzYTllYmUwZDBiMDY5ZmZlYmI2OTViZmFlNDRmYmJiMy5tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9