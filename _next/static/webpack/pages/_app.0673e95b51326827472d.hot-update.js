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
    className: "flex items-center justify-between",
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
    className: "duration-300 origin-top transform  ".concat(isActive ? ' scale-y-100' : 'scale-y-0', " bg-white h-full fixed top-0 left-0 w-full"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "HOME"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "PORTFOLIO"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "BLOG"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "ABOUT"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLEtBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxTQURzQzs7QUFFdkQsU0FDSTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBREosRUFJSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUVJLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFXO0FBQ2hCRCxlQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0FFLFdBQUssQ0FBQ0MsYUFBTixDQUFvQkMsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFFBQXJDO0FBQ0gsS0FMTDtBQU1JLGtCQUFXLFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUE2QixLQUFDLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FSSixDQUpKLENBREosRUEwQkk7QUFDSSxhQUFTLCtDQUF3Q0wsUUFBUSxHQUFHLGNBQUgsR0FBb0IsV0FBcEUsK0NBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLENBSEosQ0ExQkosQ0FESjtBQXdDSCxDQTFDRDs7R0FBTUYsTTs7S0FBQUEsTTtBQTRDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNjczZTk1YjUxMzI2ODI3NDcyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZiYXJQcm9wcyB7fVxyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxOYXZiYXJQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB3LWZ1bGwgcC00IHRleHQtd2hpdGUgbWQ6cC04IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsIGl0YWxpYyBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SGFpIENhbzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWFpbiBNZW51XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBsaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAyMCwyOS4wMDAwNDYgSCA4MC4wMDAyMzEgQyA4MC4wMDAyMzEsMjkuMDAwMDQ2IDk0LjQ5ODgzOSwyOC44MTczNTIgOTQuNTMyOTg3LDY2LjcxMTMzMSA5NC41NDMxNDIsNzcuOTgwNjczIDkwLjk2NjA4MSw4MS42NzAyNDYgODUuMjU5MTczLDgxLjY2ODk5NyA3OS41NTIyNjEsODEuNjY3NzUxIDc1LjAwMDIxMSw3NC45OTk5NDIgNzUuMDAwMjExLDc0Ljk5OTk0MiBMIDI1LjAwMDAyMSwyNS4wMDAwNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsaW5lIGxpbmUyXCIgZD1cIk0gMjAsNTAgSCA4MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGxpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDIwLDcwLjk5OTk1NCBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSw3MC45OTk5NTQgOTQuNDk4ODM5LDcxLjE4MjY0OCA5NC41MzI5ODcsMzMuMjg4NjY5IDk0LjU0MzE0MiwyMi4wMTkzMjcgOTAuOTY2MDgxLDE4LjMyOTc1NCA4NS4yNTkxNzMsMTguMzMxMDAzIDc5LjU1MjI2MSwxOC4zMzIyNDkgNzUuMDAwMjExLDI1LjAwMDA1OCA3NS4wMDAyMTEsMjUuMDAwMDU4IEwgMjUuMDAwMDIxLDc0Ljk5OTk0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGR1cmF0aW9uLTMwMCBvcmlnaW4tdG9wIHRyYW5zZm9ybSAgJHtpc0FjdGl2ZSA/ICcgc2NhbGUteS0xMDAnIDogJ3NjYWxlLXktMCd9IGJnLXdoaXRlIGgtZnVsbCBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5IT01FPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+UE9SVEZPTElPPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+QkxPRzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkFCT1VUPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+Q09OVEFDVDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=