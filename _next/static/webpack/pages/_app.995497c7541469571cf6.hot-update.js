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
    className: "flex flex-col items-center justify-center h-full space-y-8 text-2xl transform opacity-0 ".concat(isActive ? 'fade-in' : ''),
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
      lineNumber: 47,
      columnNumber: 21
    }
  }, "HOME"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "PORTFOLIO"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "BLOG"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "ABOUT"), __jsx("li", {
    className: "duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "CONTACT"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "flex space-x-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/cao-ch%C3%AD-h%E1%BA%A3i-127033219/?fbclid=IwAR2MRUuXuliROnVhJW_yaXSGkFe7nEvv9hDSHfK8OfnQrmlgPj_odj5saJc",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_in__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "mailTo:haicao2805@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_gmail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/profile.php?id=100009261397293",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_facebook__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "https://github.com/haicao2805",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx(_public_asset_icons_github__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsIlJlYWN0IiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJjbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxNQUE0QyxHQUFHLFNBQS9DQSxNQUErQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ3pCQyw4Q0FBQSxDQUFlLEtBQWYsQ0FEeUI7QUFBQTtBQUFBLE1BQ2hEQyxRQURnRDtBQUFBLE1BQ3RDQyxTQURzQzs7QUFFdkQsU0FDSTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBREosRUFJSTtBQUNJLGFBQVMsRUFBQyx5QkFEZDtBQUVJLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFXO0FBQ2hCRCxlQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0FFLFdBQUssQ0FBQ0MsYUFBTixDQUFvQkMsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLFFBQXJDO0FBQ0gsS0FMTDtBQU1JLGtCQUFXLFdBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJO0FBQUssU0FBSyxFQUFDLElBQVg7QUFBZ0IsVUFBTSxFQUFDLElBQXZCO0FBQTRCLFdBQU8sRUFBQyxhQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUE2QixLQUFDLEVBQUMsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFDSSxhQUFTLEVBQUMsWUFEZDtBQUVJLEtBQUMsRUFBQyx3T0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FSSixDQUpKLENBREosRUEwQkk7QUFDSSxhQUFTLCtDQUNMTCxRQUFRLEdBQUcsYUFBSCxHQUFtQixXQUR0QiwyRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFDSSxhQUFTLG9HQUE2RkEsUUFBUSxHQUFHLFNBQUgsR0FBZSxFQUFwSCxDQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFJLGFBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosRUFJSTtBQUFJLGFBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLEVBS0k7QUFBSSxhQUFTLEVBQUMsNkVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUk7QUFBSSxhQUFTLEVBQUMsNkVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLEVBT0k7QUFBSSxhQUFTLEVBQUMsNkVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksRUFBQyxzSUFEVDtBQUVJLFVBQU0sRUFBQyxTQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKLEVBT0k7QUFBRyxRQUFJLEVBQUMsNkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosRUFVSTtBQUFHLFFBQUksRUFBQyx5REFBUjtBQUFrRSxVQUFNLEVBQUMsU0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosRUFhSTtBQUFHLFFBQUksRUFBQywrQkFBUjtBQUF3QyxVQUFNLEVBQUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBYkosQ0FESixDQVJKLENBTEosQ0ExQkosQ0FESjtBQStESCxDQWpFRDs7R0FBTUYsTTs7S0FBQUEsTTtBQW1FU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45OTU0OTdjNzU0MTQ2OTU3MWNmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW5Mb2dvIGZyb20gJy4uL3B1YmxpYy9hc3NldC9pY29ucy9pbic7XHJcbmltcG9ydCBHbWFpbExvZ28gZnJvbSAnLi4vcHVibGljL2Fzc2V0L2ljb25zL2dtYWlsJztcclxuaW1wb3J0IEZhY2Vib29rTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvZmFjZWJvb2snO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tICcuLi9wdWJsaWMvYXNzZXQvaWNvbnMvZ2l0aHViJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFyUHJvcHMge31cclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8TmF2YmFyUHJvcHM+ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1mdWxsIHAtNCB0ZXh0LXdoaXRlIG1kOnAtOCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsIGl0YWxpYyBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SGFpIENhbzwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2xpY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTWFpbiBNZW51XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZSBsaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAyMCwyOS4wMDAwNDYgSCA4MC4wMDAyMzEgQyA4MC4wMDAyMzEsMjkuMDAwMDQ2IDk0LjQ5ODgzOSwyOC44MTczNTIgOTQuNTMyOTg3LDY2LjcxMTMzMSA5NC41NDMxNDIsNzcuOTgwNjczIDkwLjk2NjA4MSw4MS42NzAyNDYgODUuMjU5MTczLDgxLjY2ODk5NyA3OS41NTIyNjEsODEuNjY3NzUxIDc1LjAwMDIxMSw3NC45OTk5NDIgNzUuMDAwMjExLDc0Ljk5OTk0MiBMIDI1LjAwMDAyMSwyNS4wMDAwNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsaW5lIGxpbmUyXCIgZD1cIk0gMjAsNTAgSCA4MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lIGxpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDIwLDcwLjk5OTk1NCBIIDgwLjAwMDIzMSBDIDgwLjAwMDIzMSw3MC45OTk5NTQgOTQuNDk4ODM5LDcxLjE4MjY0OCA5NC41MzI5ODcsMzMuMjg4NjY5IDk0LjU0MzE0MiwyMi4wMTkzMjcgOTAuOTY2MDgxLDE4LjMyOTc1NCA4NS4yNTkxNzMsMTguMzMxMDAzIDc5LjU1MjI2MSwxOC4zMzIyNDkgNzUuMDAwMjExLDI1LjAwMDA1OCA3NS4wMDAyMTEsMjUuMDAwMDU4IEwgMjUuMDAwMDIxLDc0Ljk5OTk0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGR1cmF0aW9uLTMwMCBvcmlnaW4tdG9wIHRyYW5zZm9ybSAgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdzY2FsZS15LTEwMCcgOiAnc2NhbGUteS0wJ1xyXG4gICAgICAgICAgICAgICAgfSAgIGJnLWNvZC1ncmF5LTUwMCBoLWZ1bGwgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCB6LTIwIGJnLW9wYWNpdHktNzBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgc3BhY2UteS04IHRleHQtMnhsIHRyYW5zZm9ybSBvcGFjaXR5LTAgJHtpc0FjdGl2ZSA/ICdmYWRlLWluJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOnRleHQteWVsbG93LTUwMFwiPkhPTUU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5QT1JURk9MSU88L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5CTE9HPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAgaG92ZXI6dGV4dC15ZWxsb3ctNTAwXCI+QUJPVVQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCBob3Zlcjp0ZXh0LXllbGxvdy01MDBcIj5DT05UQUNUPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jYW8tY2glQzMlQUQtaCVFMSVCQSVBM2ktMTI3MDMzMjE5Lz9mYmNsaWQ9SXdBUjJNUlV1WHVsaVJPblZoSldfeWFYU0drRmU3bkV2djloRFNIZks4T2ZuUXJtbGdQal9vZGo1c2FKY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWxUbzpoYWljYW8yODA1QGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbWFpbExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvZmlsZS5waHA/aWQ9MTAwMDA5MjYxMzk3MjkzXCIgdGFyZ2V0PVwiX19ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGFpY2FvMjgwNVwiIHRhcmdldD1cIl9fYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9