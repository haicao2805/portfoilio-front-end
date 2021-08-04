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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.tsx");


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
    src: "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1038300/d17957ce794db348363a33a29782e070ead89fb9.webm",
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
  })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleOnClick: handleOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "hidden btn-scroll lg:block duration-300 transform ".concat(data.length - 1 === currentSelect ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "SCROLLDOWN"), __jsx("div", {
    className: "hidden btn-scroll-2 lg:block duration-300 transform ".concat(data.length - 1 === currentSelect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full', " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "SCROLLTOP"), __jsx(Component, Object(E_portfolio_client_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    register: scrollBar,
    handleOnClick: handleOnClick,
    currentSelect: currentSelect
  }, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJoYW5kbGVPbkNsaWNrIiwiZGF0YSIsImxlbmd0aCIsImN1cnJlbnRTZWxlY3QiLCJzY3JvbGxCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLEdBQXNDLEdBQUcsU0FBekNBLEdBQXlDLE9BQThCO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDekUsU0FDSSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyw0Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGVBQVcsTUFEZjtBQUVJLFlBQVEsTUFGWjtBQUdJLFNBQUssTUFIVDtBQUlJLFFBQUksTUFKUjtBQUtJLGFBQVMsRUFBQyxzREFMZDtBQU1JLFVBQU0sRUFBQyw0SEFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUk7QUFDSSxPQUFHLEVBQUMsNkhBRFI7QUFFSSxRQUFJLEVBQUMsWUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFZSTtBQUNJLE9BQUcsRUFBQyw0SEFEUjtBQUVJLFFBQUksRUFBQyxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURKLEVBa0JJLE1BQUMsMERBQUQ7QUFBUSxpQkFBYSxFQUFFQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJKLEVBb0JJO0FBQ0ksYUFBUyw4REFDTEMsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQkMsYUFBcEIsR0FBb0MsNEJBQXBDLEdBQW1FLDJCQUQ5RCxNQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJKLEVBMkJJO0FBQ0ksYUFBUyxnRUFDTEYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsQ0FBZCxLQUFvQkMsYUFBcEIsR0FBb0MsMkJBQXBDLEdBQWtFLDRCQUQ3RCxNQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKLEVBa0NJLE1BQUMsU0FBRDtBQUFXLFlBQVEsRUFBRUMsU0FBckI7QUFBZ0MsaUJBQWEsRUFBRUosYUFBL0M7QUFBOEQsaUJBQWEsRUFBRUc7QUFBN0UsS0FBZ0dMLFNBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQ0osQ0FESixDQURKO0FBd0NILENBekNEOztLQUFNRixHO0FBMkNTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg0NmZlNjQzZTIzNzczMjkxZTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwUHJvcHMge1xyXG4gICAgQ29tcG9uZW50OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDtcclxuICAgIHBhZ2VQcm9wczogYW55O1xyXG59XHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIGJnLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB6LTAgb2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcj1cImh0dHBzOi8vY2RuLmFrYW1haS5zdGVhbXN0YXRpYy5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9pdGVtcy8xMDM4MzAwL2VjOTA2OThhM2NmZTA2OWNjODZjZjcwNzA4YjgzMjAzYWZjMDY0ZmUuanBnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmFrYW1haS5zdGVhbXN0YXRpYy5jb20vc3RlYW1jb21tdW5pdHkvcHVibGljL2ltYWdlcy9pdGVtcy8xMDM4MzAwL2QxNzk1N2NlNzk0ZGIzNDgzNjNhMzNhMjk3ODJlMDcwZWFkODlmYjkud2VibVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ2aWRlby93ZWJtXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uYWthbWFpLnN0ZWFtc3RhdGljLmNvbS9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzEwMzgzMDAvOTNiM2MzZWMzYTllYmUwZDBiMDY5ZmZlYmI2OTViZmFlNDRmYmJiMy5tcDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgaGFuZGxlT25DbGljaz17aGFuZGxlT25DbGlja30gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZGVuIGJ0bi1zY3JvbGwgbGc6YmxvY2sgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAtIDEgPT09IGN1cnJlbnRTZWxlY3QgPyAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LWZ1bGwnIDogJ29wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTERPV05cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBidG4tc2Nyb2xsLTIgbGc6YmxvY2sgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCAtIDEgPT09IGN1cnJlbnRTZWxlY3QgPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCcgOiAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNDUk9MTFRPUFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZ2lzdGVyPXtzY3JvbGxCYXJ9IGhhbmRsZU9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9