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
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative z-30 flex items-center justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "font-serif text-2xl italic font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 100 100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("path", {
    className: "line line1",
    d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }), __jsx("path", {
    className: "line line2",
    d: "M 20,50 H 80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }), __jsx("path", {
    className: "line line3",
    d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "duration-300 origin-top transform  ".concat(isActive ? ' scale-y-100' : 'scale-y-0', "   bg-cod-gray-500 h-full fixed top-0 left-0 w-full z-20 bg-opacity-70"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "flex flex-col items-center justify-center h-full space-y-12 text-3xl transform ".concat(isActive ? '' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "HOME"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "PORTFOLIO"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "BLOG"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "ABOUT"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "CONTACT"))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLEtBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxTQURzQzs7QUFFdkQsU0FDSTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBREosRUFJSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUVJLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFXO0FBQ2hCRCxlQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0FFLFdBQUssQ0FBQ0MsYUFBTixDQUFvQkMsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFFBQXJDO0FBQ0gsS0FMTDtBQU1JLGtCQUFXLFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUE2QixLQUFDLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FSSixDQUpKLENBREosRUEwQkk7QUFDSSxhQUFTLCtDQUNMTCxRQUFRLEdBQUcsY0FBSCxHQUFvQixXQUR2QiwyRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSSxhQUFTLDJGQUFvRkEsUUFBUSxHQUFHLEVBQUgsR0FBUSxFQUFwRyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLENBTEosQ0ExQkosQ0FESjtBQTBDSCxDQTVDRDs7R0FBTUYsTTs7S0FBQUEsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZTkyZGI0ZTExMDYxMmNlM2U2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJQcm9wcyB7fVxyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxOYXZiYXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB3LWZ1bGwgcC00IHRleHQtd2hpdGUgbWQ6cC04IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC0yeGwgaXRhbGljIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5IYWkgQ2FvPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjbGljaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2suY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNYWluIE1lbnVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGxpbmUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDIwLDI5LjAwMDA0NiBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSwyOS4wMDAwNDYgOTQuNDk4ODM5LDI4LjgxNzM1MiA5NC41MzI5ODcsNjYuNzExMzMxIDk0LjU0MzE0Miw3Ny45ODA2NzMgOTAuOTY2MDgxLDgxLjY3MDI0NiA4NS4yNTkxNzMsODEuNjY4OTk3IDc5LjU1MjI2MSw4MS42Njc3NTEgNzUuMDAwMjExLDc0Ljk5OTk0MiA3NS4wMDAyMTEsNzQuOTk5OTQyIEwgMjUuMDAwMDIxLDI1LjAwMDA1OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmUgbGluZTJcIiBkPVwiTSAyMCw1MCBIIDgwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUgbGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gMjAsNzAuOTk5OTU0IEggODAuMDAwMjMxIEMgODAuMDAwMjMxLDcwLjk5OTk1NCA5NC40OTg4MzksNzEuMTgyNjQ4IDk0LjUzMjk4NywzMy4yODg2NjkgOTQuNTQzMTQyLDIyLjAxOTMyNyA5MC45NjYwODEsMTguMzI5NzU0IDg1LjI1OTE3MywxOC4zMzEwMDMgNzkuNTUyMjYxLDE4LjMzMjI0OSA3NS4wMDAyMTEsMjUuMDAwMDU4IDc1LjAwMDIxMSwyNS4wMDAwNTggTCAyNS4wMDAwMjEsNzQuOTk5OTQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHVyYXRpb24tMzAwIG9yaWdpbi10b3AgdHJhbnNmb3JtICAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJyBzY2FsZS15LTEwMCcgOiAnc2NhbGUteS0wJ1xyXG4gICAgICAgICAgICAgICAgfSAgIGJnLWNvZC1ncmF5LTUwMCBoLWZ1bGwgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCB6LTIwIGJnLW9wYWNpdHktNzBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHNwYWNlLXktMTIgdGV4dC0zeGwgdHJhbnNmb3JtICR7aXNBY3RpdmUgPyAnJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5IT01FPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+UE9SVEZPTElPPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+QkxPRzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkFCT1VUPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+Q09OVEFDVDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=