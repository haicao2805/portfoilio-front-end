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
    className: "flex space-x-4",
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
  }), __jsx("a", {
    href: "https://www.facebook.com/profile.php?id=100009261397293",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  })), __jsx(_public_asset_icons_github__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLEtBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxTQURzQzs7QUFFdkQsU0FDSTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBREosRUFJSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUVJLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFXO0FBQ2hCRCxlQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0FFLFdBQUssQ0FBQ0MsYUFBTixDQUFvQkMsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFFBQXJDO0FBQ0gsS0FMTDtBQU1JLGtCQUFXLFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUE2QixLQUFDLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FSSixDQUpKLENBREosRUEwQkk7QUFDSSxhQUFTLCtDQUNMTCxRQUFRLEdBQUcsYUFBSCxHQUFtQixXQUR0QiwyRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFDSSxhQUFTLHFHQUNMQSxRQUFRLEdBQUcsU0FBSCxHQUFlLEVBRGxCLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUksYUFBUyxFQUFDLDZFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1JO0FBQUksYUFBUyxFQUFDLDZFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosRUFPSTtBQUFJLGFBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFRSTtBQUFJLGFBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkosRUFTSTtBQUFJLGFBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFHLFFBQUksRUFBQyx5REFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FISixFQU1JLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosQ0FWSixDQUxKLENBMUJKLENBREo7QUF3REgsQ0ExREQ7O0dBQU1GLE07O0tBQUFBLE07QUE0RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmU4YjE5NzU5NGQyOWNkNDZiMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEluTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvaW4nO1xyXG5pbXBvcnQgR21haWxMb2dvIGZyb20gJy4uL3B1YmxpYy9hc3NldC9pY29ucy9nbWFpbCc7XHJcbmltcG9ydCBGYWNlYm9va0xvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2ZhY2Vib29rJztcclxuaW1wb3J0IEdpdGh1YkxvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2dpdGh1Yic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmJhclByb3BzIHt9XHJcblxyXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PE5hdmJhclByb3BzPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHctZnVsbCBwLTQgdGV4dC13aGl0ZSBtZDpwLTggXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTJ4bCBpdGFsaWMgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhhaSBDYW88L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51IGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljay5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1haW4gTWVudVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUgbGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0gMjAsMjkuMDAwMDQ2IEggODAuMDAwMjMxIEMgODAuMDAwMjMxLDI5LjAwMDA0NiA5NC40OTg4MzksMjguODE3MzUyIDk0LjUzMjk4Nyw2Ni43MTEzMzEgOTQuNTQzMTQyLDc3Ljk4MDY3MyA5MC45NjYwODEsODEuNjcwMjQ2IDg1LjI1OTE3Myw4MS42Njg5OTcgNzkuNTUyMjYxLDgxLjY2Nzc1MSA3NS4wMDAyMTEsNzQuOTk5OTQyIDc1LjAwMDIxMSw3NC45OTk5NDIgTCAyNS4wMDAwMjEsMjUuMDAwMDU4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwibGluZSBsaW5lMlwiIGQ9XCJNIDIwLDUwIEggODBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBsaW5lM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAyMCw3MC45OTk5NTQgSCA4MC4wMDAyMzEgQyA4MC4wMDAyMzEsNzAuOTk5OTU0IDk0LjQ5ODgzOSw3MS4xODI2NDggOTQuNTMyOTg3LDMzLjI4ODY2OSA5NC41NDMxNDIsMjIuMDE5MzI3IDkwLjk2NjA4MSwxOC4zMjk3NTQgODUuMjU5MTczLDE4LjMzMTAwMyA3OS41NTIyNjEsMTguMzMyMjQ5IDc1LjAwMDIxMSwyNS4wMDAwNTggNzUuMDAwMjExLDI1LjAwMDA1OCBMIDI1LjAwMDAyMSw3NC45OTk5NDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkdXJhdGlvbi0zMDAgb3JpZ2luLXRvcCB0cmFuc2Zvcm0gICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyAnc2NhbGUteS0xMDAnIDogJ3NjYWxlLXktMCdcclxuICAgICAgICAgICAgICAgIH0gICBiZy1jb2QtZ3JheS01MDAgaC1mdWxsIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgei0yMCBiZy1vcGFjaXR5LTcwYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHNwYWNlLXktMTIgdGV4dC0zeGwgdHJhbnNmb3JtIG9wYWNpdHktMCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdmYWRlLWluJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOnRleHQteWVsbG93LTUwMFwiPkhPTUU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5QT1JURk9MSU88L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5CTE9HPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6dGV4dC15ZWxsb3ctNTAwXCI+QUJPVVQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5DT05UQUNUPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbkxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbWFpbExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvZmlsZS5waHA/aWQ9MTAwMDA5MjYxMzk3MjkzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdpdGh1YkxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==