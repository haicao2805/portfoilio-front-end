_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/about"],{

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

/***/ "./components/icon/csharp.tsx":
/*!************************************!*\
  !*** ./components/icon/csharp.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\csharp.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "40",
    fill: "none",
    viewBox: "0 0 36 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#A179DC",
    d: "M35.496 11.73c0-.671-.144-1.264-.434-1.773-.285-.5-.712-.92-1.284-1.251-4.726-2.725-9.456-5.441-14.18-8.169-1.274-.735-2.51-.708-3.773.037C13.944 1.684 4.526 7.08 1.72 8.704.564 9.374.002 10.397.002 11.729 0 17.208.002 22.688 0 28.168c0 .656.138 1.237.415 1.738.285.516.718.947 1.304 1.286 2.806 1.625 12.225 7.02 14.105 8.13 1.265.746 2.5.772 3.774.037 4.724-2.728 9.455-5.444 14.181-8.17.586-.338 1.018-.77 1.304-1.284.277-.501.415-1.082.415-1.739 0 0 0-10.957-.002-16.436z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#280068",
    d: "M17.803 19.895L.415 29.906c.285.516.718.947 1.304 1.286 2.806 1.625 12.225 7.02 14.105 8.13 1.265.746 2.5.772 3.774.037 4.724-2.728 9.455-5.444 14.181-8.17.586-.338 1.018-.77 1.304-1.284l-17.28-10.01z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#390091",
    d: "M35.496 11.73c0-.671-.144-1.264-.434-1.773l-17.259 9.938 17.28 10.01c.277-.501.414-1.082.415-1.739 0 0 0-10.957-.002-16.436z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M28.04 16.152v1.871h1.872v-1.871h.936v1.871h1.871v.936h-1.871v1.871h1.871v.936h-1.871v1.871h-.936v-1.871h-1.871v1.871h-.936v-1.871h-1.871v-.936h1.871V18.96h-1.871v-.936h1.871v-1.871h.936zm1.872 2.807h-1.871v1.871h1.871V18.96z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M17.841 6.754a13.19 13.19 0 0111.425 6.59l-.022-.037-5.743 3.306a6.567 6.567 0 00-5.585-3.235h-.075a6.57 6.57 0 105.726 9.791l-.028.049 5.734 3.321a13.19 13.19 0 01-11.285 6.603h-.147A13.189 13.189 0 014.647 19.948c0-7.287 5.907-13.194 13.194-13.194z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H35.556V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/docker.tsx":
/*!************************************!*\
  !*** ./components/icon/docker.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\docker.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "40",
    fill: "none",
    viewBox: "0 0 48 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#364548",
    fillRule: "evenodd",
    d: "M7.183 32.367v-3.044c0-.4.25-.72.665-.72h.114c.414 0 .663.32.663.72v6.408c0 1.562-.772 2.806-2.117 3.598a3.976 3.976 0 01-2.036.555h-.286c-1.563 0-2.805-.773-3.598-2.117a3.965 3.965 0 01-.555-2.036v-.286c0-1.563.772-2.805 2.116-3.599a3.962 3.962 0 012.037-.555h.286c1.057 0 1.955.41 2.711 1.076zm-5.709 3.22c0 1.13.547 1.978 1.536 2.52.4.218.834.336 1.29.336 1.109 0 1.93-.523 2.497-1.462.264-.437.386-.914.386-1.422 0-.979-.463-1.742-1.251-2.31a2.69 2.69 0 00-1.603-.516c-1.208 0-2.077.61-2.598 1.694a2.648 2.648 0 00-.257 1.16zm12.151-4.296h.2c1.67 0 2.94.81 3.745 2.268.322.583.494 1.22.494 1.886v.286c0 1.562-.77 2.807-2.118 3.598a3.985 3.985 0 01-2.035.555h-.286c-1.563 0-2.805-.773-3.598-2.117a3.965 3.965 0 01-.555-2.036v-.286c0-1.563.775-2.801 2.116-3.598a3.943 3.943 0 012.037-.556zm-2.712 4.297c0 1.096.538 1.901 1.463 2.468.435.266.913.387 1.42.387 1.084 0 1.884-.55 2.44-1.463a2.68 2.68 0 00.386-1.421c0-1.02-.49-1.797-1.33-2.361a2.68 2.68 0 00-1.524-.465c-1.208 0-2.077.61-2.598 1.694a2.642 2.642 0 00-.257 1.16zm13.143-2.74c-.218-.102-.625-.135-.86-.144-1.204-.046-2.076.633-2.587 1.695a2.636 2.636 0 00-.257 1.16c0 1.234.648 2.099 1.75 2.626.403.192.923.228 1.363.228.386 0 .933-.237 1.277-.4l.06-.028h.266l.03.006c.327.068.574.276.574.629v.142c0 .878-1.604 1.079-2.216 1.122-2.16.149-3.774-1.037-4.39-3.097a3.731 3.731 0 01-.155-1.086v-.285c0-1.563.776-2.801 2.116-3.597a3.945 3.945 0 012.037-.556h.286a3.67 3.67 0 012.11.65l.052.037.033.054a.759.759 0 01.127.38v.143c0 .368-.275.566-.607.63l-.028.005h-.085c-.215 0-.704-.223-.896-.313zm4.675.977c.56-.561 1.122-1.12 1.69-1.672.158-.154.758-.805.994-.805h.258l.03.006c.328.069.575.277.575.63v.142c0 .242-.283.522-.438.687-.331.35-.68.69-1.019 1.034l-1.741 1.768c.75.751 1.498 1.503 2.242 2.26.206.21.411.42.614.632.072.076.178.17.238.274a.59.59 0 01.104.326v.148l-.009.035c-.08.329-.29.594-.654.594h-.114c-.239 0-.508-.27-.672-.424-.336-.317-.661-.651-.991-.975l-1.107-1.087v1.737c0 .4-.25.721-.664.721h-.113c-.414 0-.664-.321-.664-.721V29.35c0-.4.25-.72.664-.72h.113c.414 0 .664.32.664.72v4.474zm17.965-2.477h.143c.432 0 .72.291.72.721 0 .597-.57.75-1.063.75-.648 0-1.266.392-1.712.831-.556.549-.8 1.251-.8 2.024v3.489c0 .4-.25.721-.664.721h-.114c-.414 0-.664-.32-.664-.721v-3.69c0-1.417.69-2.573 1.84-3.384a3.963 3.963 0 012.314-.74zM36.45 38.263c.525.184 1.123.157 1.661.064.275-.117.98-.425 1.238-.38l.04.007.038.018c.158.077.309.186.39.346.188.378.097.757-.273.97l-.123.072c-1.368.79-2.822.68-4.185-.057-.651-.353-1.15-.875-1.518-1.513l-.086-.149c-.877-1.52-.759-3.119.231-4.564.342-.5.788-.886 1.31-1.188l.198-.114c1.288-.743 2.668-.692 3.99-.04.711.35 1.287.874 1.684 1.561l.072.124c.288.5-.086.935-.471 1.233-.448.345-.9.76-1.329 1.13l-2.867 2.48zm-1.238-.87c1.07-.916 2.14-1.834 3.207-2.755.364-.314.764-.64 1.126-.971-.29-.366-.775-.63-1.187-.787-.832-.317-1.651-.21-2.414.23-.998.576-1.423 1.494-1.386 2.636.015.45.136.883.375 1.266.084.134.178.261.28.382zM27.435 8.51h4.253v4.348h2.15c.994 0 2.015-.176 2.956-.495a7.57 7.57 0 001.437-.65c-.601-.783-.907-1.773-.998-2.748-.122-1.328.146-3.055 1.044-4.094l.447-.517.533.429c1.34 1.077 2.469 2.583 2.668 4.3 1.615-.475 3.511-.363 4.935.459l.584.337-.307.6c-1.204 2.35-3.722 3.078-6.183 2.949-3.682 9.172-11.7 13.514-21.42 13.514-5.022 0-9.63-1.877-12.254-6.333l-.043-.073-.382-.778c-.887-1.96-1.182-4.11-.982-6.256l.06-.644h3.638V8.51h4.253V4.257h8.507V.004h5.104V8.51z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#22A0C8",
    fillRule: "evenodd",
    d: "M41.215 10.12c.285-2.217-1.374-3.958-2.403-4.785-1.185 1.37-1.37 4.962.49 6.475-1.037.922-3.224 1.757-5.464 1.757H6.58c-.217 2.338.193 4.49 1.13 6.333l.31.567c.197.333.411.655.643.965a36.16 36.16 0 003.1.076c1.857-.041 3.373-.26 4.522-.659a.328.328 0 01.215.619 8.886 8.886 0 01-.477.15c-.905.258-1.875.432-3.127.509.075.001-.077.01-.077.01-.043.004-.097.01-.14.012-.492.028-1.024.034-1.567.034-.595 0-1.18-.012-1.835-.045l-.016.011c2.27 2.553 5.822 4.084 10.274 4.084 9.42 0 17.412-4.176 20.95-13.552 2.511.257 4.924-.383 6.021-2.525-1.748-1.01-3.996-.688-5.29-.037",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#37B1D9",
    fillRule: "evenodd",
    d: "M41.215 10.12c.285-2.217-1.374-3.958-2.403-4.785-1.185 1.37-1.37 4.962.49 6.475-1.037.922-3.224 1.757-5.464 1.757H8.193c-.11 3.58 1.218 6.298 3.568 7.94 1.858-.04 3.374-.26 4.523-.658a.327.327 0 01.215.619 8.973 8.973 0 01-.477.15 14.95 14.95 0 01-3.21.531l-.03-.029c3.206 1.645 7.855 1.639 13.185-.408 5.976-2.296 11.538-6.67 15.418-11.674a4.748 4.748 0 00-.17.081",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1B81A5",
    fillRule: "evenodd",
    d: "M6.63 16.407c.17 1.253.536 2.425 1.08 3.493l.31.567c.196.333.41.655.642.965a36.17 36.17 0 003.1.075c1.857-.04 3.373-.26 4.522-.658a.327.327 0 01.215.619 8.949 8.949 0 01-.477.15c-.905.258-1.953.443-3.204.52l-.162.005c-.492.028-1.018.045-1.562.045-.594 0-1.202-.011-1.856-.045 2.27 2.553 5.844 4.09 10.296 4.09 8.065 0 15.083-3.062 19.155-9.826H6.63z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1D91B4",
    fillRule: "evenodd",
    d: "M8.439 16.407c.482 2.199 1.64 3.925 3.323 5.1 1.857-.04 3.373-.26 4.522-.658a.327.327 0 01.214.619 8.974 8.974 0 01-.476.15c-.905.258-1.975.443-3.227.52 3.206 1.644 7.842 1.62 13.172-.427 3.224-1.238 6.327-3.082 9.111-5.304H8.438z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#23A3C2",
    fillRule: "evenodd",
    d: "M10.28 9.22h3.685v3.686H10.28V9.219zm.306.307h.291v3.072h-.29V9.527zm.547 0h.303v3.072h-.303V9.527zm.558 0h.303v3.072h-.303V9.527zm.56 0h.302v3.072h-.303V9.527zm.558 0h.302v3.072h-.302V9.527zm.558 0h.291v3.072h-.29V9.527zm1.165-4.56h3.687v3.685h-3.687V4.966zm.308.306h.29v3.072h-.29V5.273zm.547 0h.302v3.072h-.302V5.273zm.558 0h.302v3.072h-.302V5.273zm.559 0h.302v3.072h-.302V5.273zm.558 0h.303v3.072h-.303V5.273zm.559 0h.29v3.072h-.29V5.273z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#34BBDE",
    fillRule: "evenodd",
    d: "M14.532 9.22h3.687v3.686h-3.687V9.219zm.308.307h.29v3.072h-.29V9.527zm.547 0h.302v3.072h-.302V9.527zm.558 0h.302v3.072h-.302V9.527zm.559 0h.302v3.072h-.302V9.527zm.558 0h.303v3.072h-.303V9.527zm.559 0h.29v3.072h-.29V9.527z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#23A3C2",
    fillRule: "evenodd",
    d: "M18.786 9.22h3.686v3.686h-3.686V9.219zm.307.307h.29v3.072h-.29V9.527zm.547 0h.302v3.072h-.302V9.527zm.558 0h.303v3.072h-.303V9.527zm.559 0h.302v3.072h-.302V9.527zm.558 0h.303v3.072h-.303V9.527zm.559 0h.291v3.072h-.291V9.527z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#34BBDE",
    fillRule: "evenodd",
    d: "M18.786 4.966h3.686v3.686h-3.686V4.966zm.307.307h.29v3.072h-.29V5.273zm.547 0h.302v3.072h-.302V5.273zm.558 0h.303v3.072h-.303V5.273zm.56 0h.302v3.072h-.303V5.273zm.558 0h.302v3.072h-.302V5.273zm.558 0h.291v3.072h-.29V5.273zM23.04 9.22h3.687v3.687h-3.687V9.219zm.307.308h.291v3.072h-.29V9.527zm.547 0h.303v3.072h-.303V9.527zm.559 0h.302v3.072h-.302V9.527zm.558 0h.303v3.072h-.303V9.527zm.559 0h.303v3.072h-.303V9.527zm.559 0h.29v3.072h-.29V9.527z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#23A3C2",
    fillRule: "evenodd",
    d: "M23.04 4.966h3.686v3.686h-3.687V4.966zm.306.307h.291v3.072h-.29V5.273zm.547 0h.303v3.072h-.303V5.273zm.559 0h.302v3.072h-.302V5.273zm.558 0h.303v3.072h-.303V5.273zm.559 0h.303v3.072h-.303V5.273zm.559 0h.29v3.072h-.29V5.273z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#34BBDE",
    fillRule: "evenodd",
    d: "M23.04.713h3.686v3.686h-3.687V.713zm.306.307h.291v3.072h-.29V1.02zm.547 0h.303v3.072h-.303V1.02zm.559 0h.302v3.072h-.302V1.02zm.558 0h.303v3.072h-.303V1.02zm.559 0h.303v3.072h-.303V1.02zm.559 0h.29v3.072h-.29V1.02z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#23A3C2",
    fillRule: "evenodd",
    d: "M27.293 9.22h3.686v3.686h-3.686V9.219zm.306.307h.292v3.072H27.6V9.527zm.547 0h.303v3.072h-.302V9.527zm.56 0h.302v3.072h-.303V9.527zm.558 0h.302v3.072h-.302V9.527zm.558 0h.303v3.072h-.303V9.527zm.559 0h.29v3.072h-.29V9.527z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#D3ECEC",
    fillRule: "evenodd",
    d: "M17.988 18.883a1.017 1.017 0 11.027 2.034 1.017 1.017 0 01-.027-2.035z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#364548",
    fillRule: "evenodd",
    d: "M17.988 19.17c.093 0 .182.018.264.05a.297.297 0 10.409.4.728.728 0 11-.673-.45zM0 16.776h47.308c-1.03-.261-3.26-.614-2.892-1.964-1.873 2.167-6.39 1.52-7.53.452-1.269 1.84-8.66 1.14-9.175-.293-1.591 1.867-6.523 1.867-8.114 0-.516 1.434-7.906 2.134-9.176.292-1.14 1.07-5.656 1.716-7.53-.451.368 1.35-1.86 1.703-2.891 1.964",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#BDD9D7",
    fillRule: "evenodd",
    d: "M20.691 26.211c-2.518-1.195-3.9-2.82-4.67-4.593-.935.267-2.06.437-3.367.51-.492.028-1.01.042-1.553.042-.626 0-1.286-.018-1.98-.055 2.31 2.309 5.152 4.086 10.413 4.118.388 0 .774-.008 1.157-.022",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#D3ECEC",
    fillRule: "evenodd",
    d: "M16.957 23.254a8.832 8.832 0 01-.935-1.637c-.936.267-2.06.438-3.367.512.897.487 2.18.938 4.302 1.125",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/dotnet.tsx":
/*!************************************!*\
  !*** ./components/icon/dotnet.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\dotnet.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "40",
    fill: "none",
    viewBox: "0 0 64 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#621EE5",
    d: "M3.228 20.367a1.78 1.78 0 00-.578-.404 1.697 1.697 0 00-.689-.142 1.692 1.692 0 00-1.266.541 1.717 1.717 0 00-.385.582 1.909 1.909 0 00-.131.689c-.005.237.04.47.131.688.092.217.223.415.39.582a1.693 1.693 0 001.267.53 1.752 1.752 0 001.266-.53c.172-.162.304-.36.395-.577.09-.218.136-.45.136-.689a1.732 1.732 0 00-.537-1.27zm21.195-4.108a24.61 24.61 0 00.162 3.4h-.061c-.142-.278-.456-.794-.937-1.548L12.04 0H8.535v23.12h2.694V6.406a23.746 23.746 0 00-.126-3.173h.101c.193.507.44.992.735 1.448l11.86 18.44h3.318V0h-2.694v16.259zm20.962 4.321h-9.522v-8.01h8.332v-2.44h-8.332V2.45h8.94V0h-11.7v23.12H45.37l.015-2.54zM47.446 0v2.45h6.635v20.67h2.694V2.45h6.71V0H47.446zM21.04 28.869a5.086 5.086 0 00-1.783 1.199 5.673 5.673 0 00-1.535 4.134 5.414 5.414 0 001.368 3.805 4.714 4.714 0 003.636 1.457 6.222 6.222 0 002.938-.622l.01-1.179c-.841.491-1.798.734-2.77.709a3.58 3.58 0 01-2.796-1.154 4.41 4.41 0 01-1.064-3.107c-.06-1.2.35-2.373 1.14-3.274a3.916 3.916 0 011.347-.961 3.893 3.893 0 011.626-.31 5.032 5.032 0 012.532.634v-1.27a6.201 6.201 0 00-2.532-.446 5.492 5.492 0 00-2.117.385zm12.625 3.623a3.403 3.403 0 00-2.643-1.053 3.73 3.73 0 00-1.525.248c-.486.187-.927.47-1.301.83a4.127 4.127 0 00-.826 1.392 4.017 4.017 0 00-.223 1.604 3.968 3.968 0 00.998 2.828 3.49 3.49 0 002.694 1.128 3.638 3.638 0 001.5-.278 3.546 3.546 0 001.25-.875 4.077 4.077 0 001.023-2.915 4.188 4.188 0 00-.947-2.91zm-.926 5.197a2.226 2.226 0 01-1.808.764 2.34 2.34 0 01-1.849-.784c-.485-.601-.73-1.36-.684-2.131a3.295 3.295 0 01.684-2.206c.228-.263.511-.47.83-.613.32-.136.67-.202 1.014-.187a2.239 2.239 0 011.813.79c.46.636.684 1.412.633 2.196.05.769-.172 1.543-.633 2.17zm5.87-5.693c-.38.339-.659.78-.796 1.27v-1.589h-1.266v7.61h1.266v-3.88a3.41 3.41 0 01.517-2.004c.137-.218.319-.4.542-.527.223-.126.47-.202.724-.207.324-.025.648.06.922.243v-1.255a2.047 2.047 0 00-.72-.101 1.787 1.787 0 00-1.19.44zm9.318 3.142a4.028 4.028 0 00-.81-2.687 2.893 2.893 0 00-1.043-.749c-.4-.167-.831-.243-1.261-.217a3.23 3.23 0 00-2.533 1.118 4.156 4.156 0 00-.998 2.89 4.238 4.238 0 00.922 2.914c.32.35.714.623 1.15.805.435.182.912.258 1.383.238a4.403 4.403 0 002.643-.724v-1.144a3.804 3.804 0 01-2.355.85 2.35 2.35 0 01-1.798-.688 2.822 2.822 0 01-.643-1.953h5.353l-.01-.653zm-5.353-.354c.066-.602.33-1.169.744-1.61a1.956 1.956 0 011.459-.621 1.721 1.721 0 011.393.581c.354.471.532 1.048.506 1.635l-4.102.015z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H63.546V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/express.tsx":
/*!*************************************!*\
  !*** ./components/icon/express.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\express.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "138",
    height: "40",
    fill: "none",
    viewBox: "0 0 138 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M.895 31.041V15.744h19.098v-.894H.896V.895H21.2V0H0v31.936h21.38v-.895H.895zM38.6 8.946l-7.917 10.421-7.737-10.421h-1.163l8.364 11.092-9.17 11.898h1.074l8.633-11.227 8.677 11.227h1.118l-9.214-11.898 8.409-11.092H38.6zm4.563 30.862V25.495h.09c.536 2.087 1.594 3.765 3.175 5.032 1.58 1.267 3.593 1.9 6.038 1.9 1.58 0 2.982-.32 4.205-.96a8.944 8.944 0 003.063-2.617c.82-1.104 1.447-2.386 1.88-3.847.431-1.461.648-2.997.648-4.607 0-1.73-.224-3.325-.671-4.786-.448-1.461-1.096-2.728-1.946-3.802a8.95 8.95 0 00-3.086-2.505c-1.208-.596-2.572-.894-4.093-.894-1.163 0-2.244.171-3.243.514a8.68 8.68 0 00-2.661 1.454 9.842 9.842 0 00-2.013 2.214c-.566.85-.999 1.782-1.297 2.796h-.09V8.945h-.894v30.862h.895zm9.303-8.23c-2.803 0-5.054-.962-6.754-2.885-1.7-1.923-2.55-4.689-2.55-8.297 0-1.49.21-2.907.627-4.25.417-1.341 1.021-2.519 1.811-3.533a8.698 8.698 0 012.93-2.415c1.163-.596 2.475-.895 3.936-.895 1.491 0 2.796.299 3.914.895a7.936 7.936 0 012.773 2.438c.73 1.029 1.282 2.206 1.655 3.533s.56 2.736.56 4.227a15.94 15.94 0 01-.515 4.003c-.343 1.327-.873 2.52-1.588 3.578a8.64 8.64 0 01-2.751 2.595c-1.118.67-2.467 1.006-4.048 1.006zm14.716.358V18.92c0-1.252.179-2.475.537-3.668a8.987 8.987 0 011.654-3.153c.746-.91 1.693-1.625 2.84-2.147 1.149-.522 2.513-.738 4.093-.649V8.41c-1.371-.03-2.572.12-3.6.447-1.03.328-1.916.775-2.662 1.342a6.86 6.86 0 00-1.789 1.99 8.899 8.899 0 00-.984 2.438h-.09v-5.68h-.894v22.99h.895zM77.424 20.62h19.234c.06-1.58-.097-3.102-.47-4.563-.373-1.46-.97-2.758-1.79-3.89-.82-1.134-1.878-2.043-3.175-2.73-1.297-.685-2.84-1.028-4.63-1.028a9.259 9.259 0 00-3.756.805 9.345 9.345 0 00-3.22 2.348c-.925 1.029-1.67 2.289-2.237 3.78-.567 1.49-.85 3.19-.85 5.099 0 1.7.194 3.287.581 4.763.388 1.476.984 2.759 1.79 3.847a8.071 8.071 0 003.108 2.527c1.267.597 2.796.88 4.585.85 2.624 0 4.83-.738 6.62-2.214 1.789-1.476 2.847-3.556 3.175-6.24h-.894c-.388 2.535-1.38 4.436-2.975 5.703-1.595 1.267-3.6 1.901-6.016 1.901-1.64 0-3.026-.283-4.16-.85a7.535 7.535 0 01-2.773-2.326c-.715-.984-1.245-2.14-1.587-3.466-.343-1.327-.53-2.766-.56-4.316zm18.339-.895H77.424c.09-1.61.388-3.056.895-4.339.507-1.282 1.17-2.378 1.99-3.287a8.319 8.319 0 012.863-2.08 8.649 8.649 0 013.511-.716c1.491 0 2.803.276 3.936.828a8.127 8.127 0 012.84 2.259c.76.954 1.335 2.065 1.722 3.332.388 1.267.582 2.602.582 4.003zm19.457-3.98h.894c0-2.565-.745-4.429-2.236-5.592-1.491-1.163-3.519-1.744-6.083-1.744-1.431 0-2.639.179-3.623.537-.984.357-1.789.82-2.415 1.386-.627.567-1.074 1.193-1.342 1.879-.269.686-.403 1.342-.403 1.968 0 1.252.224 2.251.671 2.997.447.745 1.148 1.327 2.102 1.744a16.12 16.12 0 002.237.805c.835.239 1.804.492 2.907.76.984.24 1.953.478 2.907.716.955.239 1.797.56 2.528.962.73.402 1.326.917 1.789 1.543.462.626.693 1.446.693 2.46 0 .984-.231 1.819-.693 2.505a5.594 5.594 0 01-1.767 1.677 7.866 7.866 0 01-2.393.94c-.88.193-1.737.29-2.572.29-2.713 0-4.793-.604-6.239-1.811-1.447-1.208-2.17-3.109-2.17-5.703h-.894c0 2.892.782 5.01 2.348 6.351 1.565 1.342 3.884 2.013 6.955 2.013.984 0 1.976-.112 2.975-.335a8.275 8.275 0 002.683-1.096 6.069 6.069 0 001.924-1.968c.492-.805.738-1.79.738-2.953 0-1.103-.217-1.997-.649-2.683a5.434 5.434 0 00-1.7-1.7 9.01 9.01 0 00-2.37-1.05 138.5 138.5 0 00-2.662-.739 465.623 465.623 0 00-3.287-.85 19.972 19.972 0 01-2.617-.85c-.775-.328-1.394-.797-1.856-1.409-.462-.61-.693-1.483-.693-2.616 0-.209.059-.582.179-1.118.119-.537.402-1.081.85-1.633.447-.552 1.133-1.044 2.057-1.476.924-.432 2.192-.649 3.802-.649 1.103 0 2.11.12 3.019.358.91.239 1.692.619 2.348 1.14a5.192 5.192 0 011.521 1.991c.358.805.537 1.79.537 2.952zm20.709 0h.894c0-2.565-.745-4.429-2.236-5.592-1.491-1.163-3.519-1.744-6.083-1.744-1.431 0-2.639.179-3.623.537-.984.357-1.789.82-2.415 1.386-.626.567-1.074 1.193-1.342 1.879-.268.686-.403 1.342-.403 1.968 0 1.252.224 2.251.671 2.997.448.745 1.148 1.327 2.102 1.744.657.298 1.402.567 2.237.805.835.239 1.804.492 2.907.76.984.24 1.953.478 2.908.716.954.239 1.796.56 2.527.962.73.402 1.327.917 1.789 1.543.462.626.693 1.446.693 2.46 0 .984-.231 1.819-.693 2.505a5.584 5.584 0 01-1.767 1.677 7.866 7.866 0 01-2.393.94c-.88.193-1.737.29-2.572.29-2.713 0-4.793-.604-6.239-1.811-1.447-1.208-2.17-3.109-2.17-5.703h-.894c0 2.892.783 5.01 2.348 6.351 1.566 1.342 3.884 2.013 6.955 2.013.984 0 1.976-.112 2.975-.335a8.266 8.266 0 002.683-1.096 6.059 6.059 0 001.924-1.968c.492-.805.738-1.79.738-2.953 0-1.103-.217-1.997-.649-2.683a5.434 5.434 0 00-1.7-1.7 8.996 8.996 0 00-2.37-1.05c-.88-.254-1.767-.5-2.661-.739a479.08 479.08 0 00-3.288-.85 20.021 20.021 0 01-2.617-.85c-.775-.328-1.394-.797-1.856-1.409-.462-.61-.693-1.483-.693-2.616 0-.209.06-.582.179-1.118.119-.537.402-1.081.85-1.633.447-.552 1.133-1.044 2.057-1.476.925-.432 2.192-.649 3.802-.649 1.103 0 2.11.12 3.019.358.91.239 1.692.619 2.348 1.14a5.192 5.192 0 011.521 1.991c.358.805.537 1.79.537 2.952z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H137.45V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/github.tsx":
/*!************************************!*\
  !*** ./components/icon/github.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\github.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M20 3.745a16.667 16.667 0 00-5.27 32.479c.832.146 1.145-.354 1.145-.792 0-.396-.02-1.708-.02-3.104-4.188.771-5.272-1.02-5.605-1.958a6.061 6.061 0 00-1.708-2.354c-.584-.313-1.417-1.084-.021-1.104a3.334 3.334 0 012.562 1.708 3.561 3.561 0 004.854 1.375c.073-.848.45-1.64 1.063-2.23-3.708-.416-7.583-1.854-7.583-8.229a6.486 6.486 0 011.708-4.479 5.99 5.99 0 01.167-4.416s1.395-.438 4.583 1.708c2.727-.75 5.606-.75 8.333 0 3.188-2.167 4.584-1.708 4.584-1.708a5.989 5.989 0 01.166 4.416 6.448 6.448 0 011.709 4.48c0 6.395-3.896 7.812-7.605 8.229a3.949 3.949 0 011.125 3.083c0 2.23-.02 4.02-.02 4.583 0 .438.312.959 1.145.792A16.676 16.676 0 0020 3.744z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/java.tsx":
/*!**********************************!*\
  !*** ./components/icon/java.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\java.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "41",
    fill: "none",
    viewBox: "0 0 30 41",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#F44336",
    d: "M14.65 21.23c-.998-1.608-1.722-2.942-2.725-5.454C10.229 11.533 22.239 7.699 17.37.332c2.11 5.089-7.577 8.235-8.477 12.473-.823 3.898 5.752 8.426 5.757 8.426z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#F44336",
    d: "M14.878 13.603c-.192 2.516 2.229 3.857 2.299 5.695.056 1.496-1.447 2.743-1.447 2.743s2.728-.537 3.579-2.818c.944-2.534-1.834-4.27-1.548-6.298.267-1.938 6.03-5.543 6.03-5.543s-8.48.562-8.913 6.22z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1565C0",
    d: "M23.083 21.388c1.754-.394 3.233.723 3.233 2.01 0 2.9-4.02 5.642-4.02 5.642s6.224-.742 6.224-5.505c0-3.15-3.057-3.936-5.437-2.147zm-2.954 2.34s1.94-1.383 2.457-1.902c-4.762 1.01-15.637 1.146-15.637.269 0-.81 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.18c0 2.39 10.175 2.561 17.445 1.09z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1565C0",
    d: "M18.935 25.903c-4.51 1.5-12.814 1.02-10.354-.992-1.198 0-2.974.962-2.974 1.888 0 1.857 8.982 3.291 15.63.572l-2.302-1.468z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1565C0",
    d: "M9.686 29.071c-1.636 0-2.695 1.054-2.695 1.822 0 2.391 9.76 2.632 13.627.205l-2.458-1.632c-2.89 1.27-10.146 1.445-8.474-.395z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1565C0",
    d: "M27.28 32.964c0-.936-1.055-1.377-1.433-1.588 2.228 5.373-22.316 4.956-22.316 1.784 0-.72 1.807-1.427 3.477-1.093l-1.42-.839C2.26 30.706 0 32.17 0 33.35c0 5.503 27.28 5.238 27.28-.385z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#1565C0",
    d: "M30 34.936c-4.146 4.095-14.66 5.587-25.231 3.057 10.572 4.503 25.18 1.967 25.23-3.057z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/jest.tsx":
/*!**********************************!*\
  !*** ./components/icon/jest.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\jest.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "37",
    height: "40",
    fill: "none",
    viewBox: "0 0 37 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#C63D14",
    d: "M33.951 19.694a3.723 3.723 0 00-4.114-3.702L34.95.909H13.22l5.106 15.07a3.723 3.723 0 00-1.357 7.264 16.263 16.263 0 01-2.927 3.684c-1.543 1.455-3.308 2.558-5.217 3.238-2.274-1.167-3.347-3.765-2.378-6.042.109-.257.22-.518.327-.777a3.724 3.724 0 10-2.986-.577c-.921 2.099-2.276 4.294-2.698 6.84-.506 3.05-.001 6.287 2.636 8.115 6.144 4.258 12.813-2.64 19.844-4.373 2.548-.629 5.346-.527 7.59-1.828 1.687-.976 2.798-2.594 3.114-4.411.311-1.795-.143-3.582-1.188-5.031.54-.646.866-1.478.866-2.387zm-12.13.014l.001-.014c0-1.35-.719-2.532-1.795-3.185l4.065-8.219 4.071 8.306a3.72 3.72 0 00-1.658 3.098l.002.081-4.685-.067z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M34.86 19.694a4.639 4.639 0 00-3.776-4.551L36.22 0H11.95l5.142 15.173a4.64 4.64 0 00-3.626 4.521c0 1.659.877 3.116 2.19 3.934a15.516 15.516 0 01-2.24 2.637c-1.36 1.285-2.878 2.26-4.513 2.9-1.648-1.035-2.344-2.986-1.62-4.686l.056-.133.106-.25a4.64 4.64 0 003.112-4.375 4.638 4.638 0 00-4.633-4.632 4.638 4.638 0 00-4.632 4.632c0 1.29.53 2.457 1.382 3.297-.154.33-.317.665-.484 1.008C1.41 25.628.526 27.444.192 29.46c-.664 4.004.407 7.205 3.015 9.013C4.79 39.569 6.397 40 8.015 40c3.046 0 6.127-1.53 9.14-3.027 2.17-1.078 4.415-2.193 6.632-2.74.825-.203 1.674-.325 2.572-.455 1.782-.257 3.624-.523 5.256-1.468 1.892-1.096 3.187-2.934 3.554-5.043.314-1.81-.065-3.623-.987-5.161.43-.703.678-1.529.678-2.412zm-1.818 0a2.817 2.817 0 01-2.814 2.814 2.817 2.817 0 01-2.814-2.814 2.817 2.817 0 012.814-2.813 2.817 2.817 0 012.814 2.813zm.64-17.875L29.148 15.19a4.564 4.564 0 00-.574.178l-4.479-9.136-4.491 9.082a4.59 4.59 0 00-.6-.163L14.488 1.82h19.195zM18.099 16.88a2.817 2.817 0 012.814 2.813 2.817 2.817 0 01-2.814 2.814 2.817 2.817 0 01-2.814-2.814 2.817 2.817 0 012.814-2.813zm-12.175.026a2.817 2.817 0 012.814 2.814 2.817 2.817 0 01-2.814 2.814 2.817 2.817 0 01-2.814-2.814 2.817 2.817 0 012.814-2.814zm27.453 10.05c-.274 1.576-1.248 2.954-2.673 3.78-1.328.769-2.92.998-4.605 1.241-.902.13-1.836.265-2.748.49-2.41.594-4.746 1.754-7.005 2.876-4.519 2.245-8.422 4.184-12.103 1.633-2.695-1.868-2.571-5.325-2.257-7.22.291-1.755 1.078-3.371 1.839-4.935.132-.27.26-.535.385-.798.378.15.779.253 1.197.3-.774 2.557.444 5.337 3.001 6.65l.35.18.37-.132c2.022-.72 3.885-1.875 5.537-3.434a17.255 17.255 0 002.74-3.313 4.638 4.638 0 005.326-4.58c0-1.374-.601-2.61-1.554-3.459l2.911-5.887 2.941 6a4.619 4.619 0 00-1.434 3.345 4.638 4.638 0 004.633 4.633c.981 0 1.892-.308 2.642-.83a5.653 5.653 0 01.507 3.46z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/mongodb.tsx":
/*!*************************************!*\
  !*** ./components/icon/mongodb.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\mongodb.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "40",
    fill: "none",
    viewBox: "0 0 18 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#10AA50",
    d: "M17.634 15.918c-2.107-9.296-6.5-11.77-7.62-13.52A19.897 19.897 0 018.79 0c-.06.826-.168 1.346-.87 1.972C6.51 3.23.524 8.107.02 18.67c-.469 9.848 7.24 15.92 8.259 16.549.783.385 1.737.008 2.202-.346 3.716-2.55 8.794-9.35 7.157-18.954",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#B8C4C2",
    d: "M9.109 29.974c-.195 2.438-.334 3.854-.826 5.247 0 0 .323 2.32.55 4.779h.804c.192-1.731.485-3.45.877-5.146-1.04-.512-1.366-2.74-1.405-4.88z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#12924F",
    d: "M10.513 34.854c-1.051-.486-1.355-2.76-1.402-4.88.26-3.497.336-7.005.227-10.51-.055-1.838.026-17.03-.453-19.255a18.49 18.49 0 001.13 2.187c1.12 1.751 5.514 4.226 7.62 13.522 1.64 9.588-3.41 16.37-7.122 18.936z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/mysql.tsx":
/*!***********************************!*\
  !*** ./components/icon/mysql.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\mysql.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#00678C",
    fillRule: "evenodd",
    d: "M36.845 31.158c-2.176-.06-3.864.162-5.278.757-.407.164-1.061.164-1.115.676.218.215.244.568.435.866.326.54.898 1.27 1.415 1.648l1.74 1.244c1.061.648 2.258 1.027 3.292 1.676.598.379 1.197.865 1.795 1.271.305.217.49.569.871.703v-.082c-.19-.242-.245-.593-.435-.865l-.817-.783c-.788-1.055-1.768-1.975-2.829-2.73-.87-.596-2.774-1.407-3.128-2.407l-.053-.06c.597-.06 1.304-.27 1.876-.433.926-.243 1.769-.19 2.72-.432l1.306-.38v-.242c-.49-.486-.843-1.135-1.36-1.594-1.386-1.19-2.91-2.353-4.489-3.326-.843-.54-1.931-.892-2.829-1.351-.327-.163-.87-.244-1.06-.514-.492-.594-.763-1.378-1.117-2.082l-2.23-4.704c-.49-1.054-.79-2.109-1.387-3.082-2.803-4.596-5.85-7.38-10.53-10.111-1.005-.568-2.202-.812-3.475-1.11l-2.04-.108c-.436-.19-.87-.703-1.252-.947-1.55-.973-5.55-3.082-6.693-.303-.734 1.757 1.089 3.487 1.708 4.38.463.622 1.06 1.325 1.388 2.027.183.46.244.947.435 1.434.435 1.19.843 2.514 1.414 3.623.305.568.625 1.164 1.006 1.677.218.303.6.433.68.92-.38.54-.407 1.35-.625 2.027-.98 3.055-.598 6.84.789 9.09.436.675 1.463 2.163 2.857 1.594 1.224-.486.951-2.027 1.305-3.379.082-.324.027-.54.19-.758v.061l1.116 2.244c.843 1.325 2.313 2.704 3.536 3.624.653.486 1.17 1.325 1.985 1.622v-.082h-.053c-.164-.242-.409-.352-.626-.54-.49-.487-1.034-1.082-1.415-1.623-1.142-1.513-2.148-3.19-3.046-4.92-.436-.838-.817-1.757-1.17-2.595-.164-.325-.164-.812-.436-.974-.408.594-1.006 1.11-1.306 1.839-.517 1.162-.571 2.595-.761 4.082-.11.027-.061 0-.11.06-.87-.215-1.17-1.108-1.496-1.864-.815-1.92-.952-5.002-.245-7.219.19-.568 1.008-2.352.681-2.893-.164-.514-.707-.81-1.007-1.217a10.9 10.9 0 01-.979-1.73c-.652-1.514-.978-3.19-1.686-4.704-.328-.703-.898-1.433-1.361-2.082-.517-.73-1.087-1.244-1.496-2.108-.136-.303-.326-.784-.108-1.11.053-.216.163-.302.38-.35.353-.304 1.36.08 1.714.242 1.006.406 1.85.784 2.693 1.35.38.271.79.785 1.279.92h.572c.87.19 1.85.061 2.665.304 1.441.46 2.747 1.135 3.918 1.866a24.036 24.036 0 018.487 9.247c.326.622.462 1.19.762 1.838.572 1.326 1.28 2.677 1.85 3.975.572 1.271 1.115 2.57 1.931 3.624.409.568 2.04.865 2.774 1.162.545.243 1.388.46 1.878.758.925.567 1.85 1.216 2.72 1.838.435.324 1.795 1 1.877 1.54l.003-.015zM9.102 7.664a4.349 4.349 0 00-1.115.135v.06h.054c.218.433.599.73.87 1.11l.627 1.297.053-.06c.382-.27.572-.703.572-1.352-.163-.189-.19-.378-.326-.567-.163-.27-.517-.406-.735-.622v-.001z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H40V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/nestjs.tsx":
/*!************************************!*\
  !*** ./components/icon/nestjs.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\nestjs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#E0234E",
    d: "M23.235 0c-.285 0-.55.062-.795.145.52.353.805.82.948 1.348.01.073.03.125.04.197.01.063.02.125.02.187.042.913-.234 1.027-.427 1.566a2.25 2.25 0 00.142 2.043c.031.073.072.156.123.228-.388-2.624 1.763-3.018 2.16-3.837.03-.715-.55-1.193-1.009-1.524A2.222 2.222 0 0023.235 0zm3.24.591c-.04.239-.01.176-.02.3-.01.084-.01.188-.02.27a2.28 2.28 0 01-.072.25c-.02.082-.05.165-.081.248-.04.083-.072.156-.112.239-.03.041-.051.083-.082.124l-.06.094c-.052.072-.103.145-.154.207-.06.062-.112.135-.183.187v.01c-.061.052-.122.114-.194.166-.214.166-.458.29-.683.446-.07.052-.142.093-.203.156a1.489 1.489 0 00-.194.165c-.071.063-.122.125-.184.198-.05.062-.112.134-.152.207a2.65 2.65 0 00-.143.218c-.04.083-.071.155-.112.238-.03.083-.061.156-.082.239-.03.093-.05.176-.071.259-.01.042-.01.093-.02.135-.01.041-.01.083-.02.124 0 .083-.01.177-.01.26 0 .062 0 .124.01.186 0 .083.01.166.03.26.01.082.03.165.05.248.031.083.052.166.082.25.02.051.051.103.072.144l-2.344-.922a24.835 24.835 0 00-1.182-.312l-.642-.155a18.618 18.618 0 00-1.855-.28c-.02 0-.03-.01-.051-.01a17.904 17.904 0 00-1.824-.094 19.063 19.063 0 00-3.2.28c-.153.02-.306.052-.459.083-.316.062-.621.135-.917.207l-.458.125c-.153.062-.296.135-.439.197l-.336.156c-.02.01-.04.01-.05.02-.103.052-.194.094-.286.145a4.479 4.479 0 00-.387.197c-.072.032-.143.073-.204.104a.914.914 0 01-.092.052c-.092.052-.183.104-.265.156a2.559 2.559 0 00-.244.155c-.072.052-.143.094-.204.145-.01.01-.02.01-.03.021a2.358 2.358 0 00-.194.145l-.02.021-.154.124c-.02.01-.04.032-.06.042-.052.041-.103.093-.154.135-.01.02-.03.03-.04.041-.062.063-.123.114-.184.177-.01 0-.01.01-.02.02-.061.052-.123.114-.184.177-.01.01-.01.02-.02.02a2.415 2.415 0 00-.153.166c-.02.021-.05.042-.071.062-.051.063-.112.125-.174.187-.01.02-.03.031-.04.052-.082.083-.153.166-.235.249l-.03.031a6.06 6.06 0 01-.52.508 5.808 5.808 0 01-.57.457c-.204.145-.398.27-.612.394a6.163 6.163 0 01-.642.31 7.273 7.273 0 01-.663.25c-.428.093-.866.27-1.243.3-.081 0-.173.021-.255.031-.091.021-.173.042-.254.063-.082.03-.163.062-.245.093-.081.031-.163.073-.244.114-.072.052-.153.093-.225.145a1.677 1.677 0 00-.203.177c-.072.052-.143.124-.204.186-.061.073-.123.135-.174.208-.05.083-.112.155-.152.238a1.838 1.838 0 00-.143.239c-.04.093-.082.176-.112.27-.03.082-.061.176-.092.269-.02.083-.04.166-.05.249 0 .01-.011.02-.011.031-.02.093-.02.218-.03.28-.01.073-.021.135-.021.207a.6.6 0 00.01.135c.01.073.02.135.041.197.02.063.04.125.071.187v.01c.03.063.072.125.112.187.041.062.082.124.133.187.05.052.112.114.173.166.061.062.122.114.194.166.244.217.305.29.621.456.051.031.102.052.163.083.01 0 .02.01.031.01 0 .021 0 .031.01.052.01.083.03.166.051.249.02.093.051.176.082.249.03.062.05.124.081.187.01.02.02.041.03.051.042.083.082.156.123.229l.153.217c.05.063.112.135.173.197.061.063.122.114.194.177 0 0 .01.01.02.01.061.052.122.104.184.145.071.052.142.094.224.135.071.042.153.083.234.114.061.031.133.052.204.073.01.01.02.01.04.02.042.01.093.021.133.032-.03.56-.04 1.089.041 1.275.092.208.54-.425.989-1.15-.062.715-.102 1.555 0 1.804.112.259.723-.55 1.253-1.442 7.225-1.7 13.819 3.38 14.512 10.558-.133-1.12-1.488-1.743-2.11-1.587-.306.767-.825 1.752-1.66 2.364.07-.684.04-1.39-.103-2.074a6.756 6.756 0 01-1.264 2.614c-.968.072-1.936-.405-2.445-1.12-.041-.032-.051-.094-.082-.135a1.87 1.87 0 01-.081-.218.872.872 0 01-.062-.218c-.01-.073-.01-.145-.01-.228v-.156c.01-.072.03-.145.051-.217.02-.073.041-.146.072-.218.04-.073.07-.145.122-.218.173-.498.173-.902-.143-1.14a1.152 1.152 0 00-.193-.104c-.041-.01-.092-.032-.133-.042-.03-.01-.05-.02-.081-.031-.072-.02-.143-.042-.214-.052a.765.765 0 00-.214-.031 1.635 1.635 0 00-.225-.02c-.05 0-.102.01-.153.01a.78.78 0 00-.224.03c-.071.011-.142.021-.214.042-.071.021-.142.042-.214.073-.071.031-.132.062-.204.093-.06.031-.122.073-.193.104-2.375 1.576-.958 5.268.662 6.336-.611.114-1.233.25-1.406.384l-.02.02c.438.27.896.499 1.375.696a33.26 33.26 0 001.651.498v.01a9.69 9.69 0 002.568.187c4.515-.322 8.214-3.817 8.887-8.422l.06.27c.031.187.072.384.093.58v.011c.02.094.03.187.04.27v.041c.01.094.02.187.02.27.01.114.021.228.021.342v.166c0 .052.01.114.01.166 0 .062-.01.125-.01.187V28c0 .073-.01.135-.01.207 0 .042 0 .083-.01.135 0 .073-.01.145-.01.228-.01.031-.01.063-.01.094l-.031.238c0 .031 0 .063-.01.094-.01.103-.031.197-.041.3V29.318c-.02.093-.041.197-.062.29v.032l-.06.28c0 .01-.01.03-.01.041-.021.094-.042.187-.072.28v.031c-.03.104-.061.197-.082.29-.01.011-.01.021-.01.021l-.092.312c-.04.103-.071.197-.112.3-.04.104-.071.208-.112.301-.04.104-.081.197-.122.3h-.01c-.041.094-.082.198-.133.291a.508.508 0 01-.03.073c-.01.01-.01.02-.02.03a9.777 9.777 0 01-2.864 3.485c-.082.052-.163.114-.245.177-.02.02-.05.03-.071.052-.072.051-.143.103-.224.155l.03.062h.01l.428-.062h.01c.265-.041.53-.093.795-.145.072-.01.153-.031.225-.052l.142-.031c.072-.01.143-.031.214-.042.061-.02.122-.03.184-.051a19.08 19.08 0 002.955-.996A16.382 16.382 0 0118.465 40a16.503 16.503 0 003.476-.612 16.338 16.338 0 009.63-7.83 16.71 16.71 0 01-2.742 6.669 16.11 16.11 0 002.721-2.303 16.55 16.55 0 004.29-8.815c.347 1.639.45 3.33.296 4.999 7.358-10.443.612-21.27-2.211-24.122-.01-.021-.02-.032-.02-.052-.01.01-.01.01-.01.02 0-.01 0-.01-.01-.02 0 .124-.011.249-.021.373-.03.239-.061.467-.102.695-.051.228-.112.456-.173.684a8.761 8.761 0 01-.245.664 8.961 8.961 0 01-.306.633 7.897 7.897 0 01-.785 1.151 7.693 7.693 0 01-.478.518 6.588 6.588 0 01-.296.26c-.081.072-.153.134-.234.207-.184.145-.367.28-.571.405a7.013 7.013 0 01-.601.352c-.214.104-.428.197-.642.29a7.068 7.068 0 01-.663.218 8.103 8.103 0 01-.682.156c-.235.041-.47.062-.693.083a7.69 7.69 0 01-.49.02c-.234 0-.468-.02-.692-.04a5.078 5.078 0 01-.694-.105 5.081 5.081 0 01-.682-.176h-.01c.224-.02.448-.041.672-.083a7.286 7.286 0 001.345-.373c.225-.083.439-.187.642-.29.214-.104.408-.218.612-.343.193-.135.387-.27.57-.415.184-.145.357-.3.52-.466.173-.156.326-.332.48-.509.152-.186.295-.373.427-.56.02-.03.04-.072.061-.103A7.192 7.192 0 0031 9.386c.072-.218.122-.446.173-.675.041-.238.082-.466.102-.694.02-.239.041-.477.041-.706 0-.166-.01-.331-.02-.497-.02-.239-.051-.467-.082-.695a7.654 7.654 0 00-.153-.695c-.071-.218-.142-.446-.224-.664a7.22 7.22 0 00-.285-.643 11.783 11.783 0 00-.347-.612 11.439 11.439 0 00-.407-.57 21.807 21.807 0 00-.47-.529c-.08-.083-.172-.176-.264-.26a18.761 18.761 0 00-1.417-1.016 1.884 1.884 0 00-.203-.103c-.337-.218-.653-.332-.968-.436z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/nginx.tsx":
/*!***********************************!*\
  !*** ./components/icon/nginx.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\nginx.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "52",
    height: "40",
    fill: "none",
    viewBox: "0 0 52 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M29.393 40a2.52 2.52 0 01-1.708-.668 2.495 2.495 0 01-1.655.639H26a2.518 2.518 0 01-1.754-.773 2.503 2.503 0 01-.726-1.766v-.261l-.685 1.383-.29.586c-.245.5-.756.82-1.32.82h-5.837c-.529 0-1.017-.291-1.278-.744l-.296-.535-.79-1.388v.174a2.514 2.514 0 01-2.51 2.51 2.491 2.491 0 01-1.777-.738l-3.712-3.712v1.94a2.514 2.514 0 01-2.51 2.51A2.515 2.515 0 010 37.467v-8.016a2.518 2.518 0 012.51-2.515 2.49 2.49 0 011.777.738l3.718 3.717v-1.94a2.514 2.514 0 012.51-2.51 2.514 2.514 0 012.508 2.51v.215l.779-1.412.285-.528c.255-.47.749-.773 1.29-.773h6.081c.564 0 1.069.32 1.313.82l.29.592c.018.023.023.052.035.075l.424 1.017c0-.64.262-1.272.726-1.743a2.54 2.54 0 011.755-.772h.029c.61 0 1.214.238 1.684.668a2.494 2.494 0 011.679-.645 2.514 2.514 0 012.51 2.51v1.945l3.717-3.718c.47-.47 1.11-.737 1.778-.737.33 0 .65.064.958.192.261.104.5.255.703.44a2.474 2.474 0 011.667-.632c.668 0 1.296.255 1.778.732l2.242 2.23 2.242-2.23a2.52 2.52 0 011.778-.732c.673 0 1.307.261 1.777.743.982.982.976 2.58-.006 3.555l-2.23 2.22 2.219 2.213c.981.981.987 2.573.005 3.555-.47.476-1.109.743-1.777.743a2.491 2.491 0 01-1.777-.738l-2.231-2.224-2.225 2.213a2.5 2.5 0 01-1.778.732 2.556 2.556 0 01-1.655-.622c-.441.4-1.034.65-1.685.65a2.514 2.514 0 01-2.509-2.509V35.55l-3.718 3.718a2.513 2.513 0 01-1.783.732zm10.526-5.263l1.272-1.266-1.272-1.267v2.533z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#090",
    d: "M10.52 38.52c-.273 0-.54-.106-.744-.309L3.561 31.99v5.478a1.045 1.045 0 11-2.091 0V29.45c0-.424.255-.807.65-.97a1.046 1.046 0 011.145.227l6.21 6.215v-5.472a1.045 1.045 0 112.09 0v8.01a1.048 1.048 0 01-1.045 1.058zm4.868-10.103l-.29.54-2.231 4.055-.29.511.29.512 2.23 3.926.302.535h5.844l.29-.593 1.668-3.363.749-1.522h-1.69l-4.264.017c-.558-.011-1.069.5-1.069 1.046 0 .558.511 1.057 1.069 1.046l2.573-.018-.627 1.272H16.63l-1.644-2.88 1.655-2.992h3.52l.82 1.684h2.114l-1.33-3.195-.29-.592h-6.088v.011zM26.03 28.4c-.552.006-1.046.511-1.04 1.063v2.742h2.103v-2.742c.005-.558-.506-1.075-1.063-1.063zm3.369 10.136c-.581 0-1.046-.47-1.046-1.045v-8.016a1.045 1.045 0 112.091 0v5.477l6.216-6.215c.302-.302.75-.39 1.144-.227.395.163.65.546.65.97v8.01a1.045 1.045 0 11-2.09 0v-5.483l-6.222 6.222a1.05 1.05 0 01-.743.307zm16.846-5.065l3.264-3.259a1.054 1.054 0 00.006-1.487 1.053 1.053 0 00-1.487-.006l-3.27 3.265-3.271-3.265a1.043 1.043 0 00-1.487.006 1.048 1.048 0 000 1.487l3.264 3.26-3.258 3.246A1.053 1.053 0 0040 38.205c.197.198.465.314.743.308.268 0 .535-.104.744-.308l3.265-3.253 3.264 3.253a1.05 1.05 0 001.487 0 1.043 1.043 0 00-.005-1.487l-3.253-3.247zM26.03 38.507c-.552-.005-1.046-.51-1.04-1.063v-4.397h2.103v4.397c.005.558-.506 1.07-1.063 1.063z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M35.672 28.37a4.079 4.079 0 01-2.87-1.202L19.647 14.017v10.247a4.114 4.114 0 01-4.107 4.107 4.11 4.11 0 01-4.107-4.107V4.107c0-1.667.993-3.154 2.533-3.793.5-.21 1.028-.314 1.568-.314 1.098 0 2.132.43 2.904 1.202L31.6 14.354V4.107A4.11 4.11 0 0135.701 0a4.114 4.114 0 014.107 4.107V24.27a4.114 4.114 0 01-4.107 4.106h-.029v-.005z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#090",
    d: "M35.702 26.906a2.648 2.648 0 01-1.871-.772l-15.643-15.65v13.78a2.641 2.641 0 01-2.643 2.642 2.645 2.645 0 01-2.643-2.643V4.107c0-1.075.644-2.034 1.632-2.446a2.63 2.63 0 012.881.575l15.643 15.65V4.105a2.642 2.642 0 012.644-2.642 2.641 2.641 0 012.642 2.643v20.162a2.637 2.637 0 01-2.642 2.637z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H51.275V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/redis.tsx":
/*!***********************************!*\
  !*** ./components/icon/redis.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\redis.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("path", {
    fill: "#A41E11",
    d: "M38.432 29.294c-2.135 1.113-13.192 5.66-15.546 6.886-2.354 1.227-3.661 1.215-5.521.327-1.86-.889-13.626-5.642-15.747-6.655-1.06-.507-1.616-.934-1.616-1.337v-4.043s15.32-3.335 17.793-4.222c2.474-.888 3.33-.92 5.436-.149s14.69 3.041 16.77 3.804v3.987c0 .4-.48.848-1.567 1.404l-.002-.002z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#D82C20",
    d: "M38.432 25.25c-2.135 1.113-13.191 5.659-15.546 6.886-2.354 1.226-3.661 1.215-5.521.326-1.86-.889-13.626-5.641-15.747-6.655-2.12-1.014-2.163-1.71-.082-2.526l16.258-6.294c2.473-.887 3.33-.92 5.436-.149s13.096 5.145 15.175 5.92c2.078.773 2.16 1.388.025 2.502l.002-.01z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#A41E11",
    d: "M38.432 22.7c-2.135 1.113-13.192 5.66-15.546 6.886-2.354 1.227-3.661 1.215-5.521.327-1.86-.889-13.626-5.642-15.747-6.655-1.06-.507-1.616-.933-1.616-1.336v-4.044s15.32-3.335 17.793-4.222c2.474-.888 3.33-.92 5.436-.149s14.69 3.042 16.77 3.804v3.987c0 .4-.48.848-1.567 1.404l-.002-.002z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#D82C20",
    d: "M38.432 18.657c-2.135 1.113-13.191 5.66-15.546 6.886-2.354 1.227-3.661 1.215-5.521.327-1.86-.89-13.626-5.642-15.747-6.656-2.12-1.013-2.163-1.71-.082-2.525l16.258-6.294c2.473-.888 3.33-.92 5.436-.148 2.106.77 13.096 5.146 15.177 5.906 2.08.76 2.16 1.39.025 2.503z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#A41E11",
    d: "M38.432 15.863c-2.135 1.113-13.192 5.659-15.546 6.887-2.354 1.228-3.661 1.215-5.521.326-1.86-.888-13.626-5.64-15.747-6.655-1.06-.507-1.616-.933-1.616-1.336V11.04s15.32-3.335 17.793-4.223c2.474-.887 3.33-.92 5.436-.148 2.106.77 14.69 3.041 16.77 3.803v3.988c0 .4-.48.848-1.567 1.403h-.002z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#D82C20",
    d: "M38.432 11.818c-2.135 1.114-13.191 5.66-15.546 6.886-2.354 1.227-3.661 1.216-5.521.327-1.86-.889-13.626-5.641-15.747-6.655-2.12-1.014-2.163-1.71-.082-2.526l16.258-6.293c2.473-.888 3.33-.92 5.436-.149s13.096 5.146 15.177 5.907c2.08.76 2.16 1.389.025 2.502v.001z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M20.999 10.151l-1.254-2.084-4.002-.36L18.73 6.63l-.896-1.655 2.795 1.093 2.636-.864-.713 1.71L25.24 7.92l-3.465.36-.775 1.87zM14.323 14.3l9.267-1.424-2.799 4.106-6.469-2.682zM11.824 12.803c2.736 0 4.955-.86 4.955-1.92s-2.219-1.92-4.955-1.92-4.954.86-4.954 1.92 2.218 1.92 4.954 1.92z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#7A0C00",
    d: "M34.822 10.603l-5.482 2.165-.004-4.333 5.486 2.168z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#AD2115",
    d: "M29.341 12.768l-.594.234-5.478-2.166 6.069-2.4.003 4.332z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0H40V40H0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/socket.tsx":
/*!************************************!*\
  !*** ./components/icon/socket.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\socket.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#010101",
    d: "M15.07 1.154C20.112-.14 25.684.614 30.13 3.358c5.6 3.35 9.256 9.684 9.35 16.205.204 6.586-3.228 13.116-8.745 16.698-6.14 4.13-14.632 4.288-20.902.362C3.443 32.81-.288 25.117.67 17.73c.772-7.804 6.8-14.688 14.4-16.576z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M14.298 4.344C23.824.53 35.508 7.572 36.494 17.786c1.535 9.19-6.093 18.53-15.405 18.8-8.856.884-17.414-6.623-17.665-15.516-.66-7.2 4.084-14.344 10.874-16.726z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#010101",
    d: "M15.256 19.014c4.27-3.488 8.447-7.098 12.81-10.484-2.29 3.517-4.643 6.986-6.931 10.502-1.963.01-3.926.01-5.88-.018zm3.61 1.944c1.971 0 3.934 0 5.897.028-4.298 3.47-8.456 7.107-12.828 10.484 2.288-3.517 4.642-6.995 6.93-10.512z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/sqlserver.tsx":
/*!***************************************!*\
  !*** ./components/icon/sqlserver.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\sqlserver.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "40",
    fill: "none",
    viewBox: "0 0 50 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "url(#paint0_linear)",
    d: "M33.535 12.728l-5.463 1.789-4.757 2.1-1.329.353c-.339.326-.691.651-1.084.976-.42.366-.814.692-1.112.936a9.007 9.007 0 00-1.084 1.07c-.38.475-.678.976-.8 1.356-.23.691-.122 1.396.326 2.047.555.826 1.68 1.667 2.982 2.236.664.298 1.789.664 2.63.881 1.395.353 4.106.746 5.597.8.299.014.705.014.719 0 .027-.027.27-.46.528-1.017.922-1.87 1.573-3.632 1.939-5.123.217-.909.38-2.115.501-3.552.027-.406.04-1.748.014-2.196a18.16 18.16 0 00-.204-1.938c-.013-.081-.027-.163-.013-.163.014-.013.068-.027.745-.216l-.135-.34zm-1.247.732c.054 0 .176 1.274.217 2.073.013.163 0 .285 0 .285-.027 0-.692-.393-1.18-.691a34.93 34.93 0 01-1.314-.881c-.041-.027-.041-.027.298-.15.57-.203 1.925-.636 1.979-.636zm-2.792.921c.04 0 .135.055.366.19.854.529 2.006 1.18 2.507 1.396.15.068.163.04-.176.285-.745.515-1.694 1.017-2.833 1.518a3.899 3.899 0 01-.38.163c-.013 0 .014-.109.055-.23.27-1.03.433-2.075.447-2.901-.027-.42-.027-.42.014-.42zm-.57.217c.027.027.014.95-.027 1.207-.068.596-.19 1.165-.38 1.802-.04.15-.08.285-.094.285-.014.027-.583-.529-.773-.745a5.4 5.4 0 01-.759-1.112c-.095-.19-.244-.556-.23-.556.067-.054 2.25-.894 2.263-.88zm-2.697 1.057c.027.014.054.082.068.15.135.366.433.894.69 1.22.286.366.652.772.95 1.03.095.081.19.162.203.176.027.027.027.027-.637.271a50.81 50.81 0 01-2.602.908c-.23.081-.461.15-.692.23-.04.014-.027-.013.082-.176.488-.759 1.22-2.236 1.626-3.293.068-.177.136-.366.15-.407.013-.054.04-.081.094-.108.027.013.054 0 .068 0zm-.827.34c.014.013-.203.447-.407.853-.406.787-.84 1.546-1.423 2.48a4.36 4.36 0 01-.203.326c-.027.027-.027.027-.095-.108a3.642 3.642 0 01-.312-.963c-.068-.325-.054-.88.027-1.233.055-.258.055-.258.177-.312.501-.257 2.209-1.057 2.236-1.044zm7.116.298v.176c0 .921-.095 2.182-.244 3.104-.027.162-.04.298-.054.298 0 0-.122-.027-.257-.068a10.002 10.002 0 01-1.898-.813c-.407-.217-.99-.583-.963-.596l.38-.204c.813-.42 1.586-.88 2.264-1.328.257-.163.637-.447.718-.515l.054-.054zm-10.234 1.22c.014 0 .014.027-.013.176-.014.108-.04.311-.04.447-.028.597.067 1.044.365 1.654.081.162.15.312.15.312-.028.027-2.766.826-3.62 1.057-.257.068-.474.135-.501.135-.027.014-.027 0-.027-.067.094-.61.555-1.397 1.206-2.074.434-.448.773-.705 1.355-1.044.42-.217 1.058-.583 1.125-.597-.013 0-.013 0 0 0zm6.439 1.152s.108.054.217.122c.88.515 2.114.99 3.158 1.233l.095.027-.136.068c-.555.312-2.358 1.057-4.202 1.749-.27.095-.528.203-.582.216-.055.028-.095.028-.095.028s.067-.15.162-.326c.515-.962 1.03-2.141 1.302-2.955.054-.095.081-.162.081-.162zm-.65.217s-.028.094-.068.19a27.014 27.014 0 01-1.437 2.887c-.15.27-.285.488-.285.488s-.122-.068-.271-.163c-.881-.542-1.654-1.193-2.155-1.844l-.068-.095.38-.108A27.098 27.098 0 0027.8 18.99c.122-.054.258-.108.271-.108zm4.08 1.423c0 .095-.204.949-.38 1.559-.15.515-.271.921-.502 1.64-.095.311-.19.57-.19.57s-.027 0-.054-.015a16.487 16.487 0 01-3.361-.948c-.285-.122-.705-.299-.732-.326-.014-.013.244-.122.555-.257 1.885-.827 3.823-1.749 4.5-2.155a.804.804 0 01.163-.068zm-9.421.325c.013.014-.515.76-1.247 1.79-.258.365-.556.785-.665.935-.108.162-.284.406-.379.555l-.176.271-.19-.162a7.055 7.055 0 01-.773-.786c-.352-.448-.596-.909-.69-1.329-.042-.203-.042-.298 0-.311.067-.014 1.165-.272 2.195-.516.57-.135 1.233-.284 1.477-.352.244-.054.434-.095.448-.095zm.528.204l.136.149a7.965 7.965 0 001.938 1.585c.136.068.23.136.217.15-.027.027-2.548.921-3.727 1.314-.651.23-1.193.42-1.207.42l-.081-.054-.068-.054.122-.176c.393-.556.881-1.18 1.938-2.453l.732-.881zm3.294 2.358s.19.068.407.15c.542.202.962.324 1.532.474a18.21 18.21 0 002.317.406c.095.014.136.014.122.027-.027.014-.637.217-1.084.366a257.634 257.634 0 01-5.273 1.546c-.04.013-.176-.028-.176-.041 0-.014.095-.136.217-.271a26.215 26.215 0 001.68-2.25c.136-.244.258-.407.258-.407zm-.732.014s-.284.474-.8 1.287c-.216.34-.46.732-.555.868-.082.135-.204.339-.271.46l-.122.217-.068-.013c-.15-.04-1.193-.407-1.464-.515a9.19 9.19 0 01-.962-.447c-.326-.177-.746-.448-.705-.448.013 0 .569-.162 1.26-.339 1.803-.488 2.806-.772 3.47-.99.109-.053.217-.08.217-.08zm5.137 1.206c.028.04-.65 1.898-.894 2.48-.054.136-.068.163-.109.163-.067 0-1.043-.135-1.626-.23-1.03-.163-2.752-.461-3.185-.556l-.095-.027.61-.136c1.328-.298 1.951-.46 2.602-.65a17.833 17.833 0 002.426-.936c.136-.054.244-.108.271-.108z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "url(#paint1_linear)",
    d: "M27.896 0c-.095-.013-1.559.515-2.507.895-1.274.515-2.264 1.016-2.874 1.45-.23.163-.515.448-.556.556a.484.484 0 00-.027.136l.556.528 1.315.42 3.13.556 3.58.61.04-.312h-.027l-.474-.067-.095-.163a30.5 30.5 0 01-1.342-2.643 12.583 12.583 0 01-.597-1.668C27.951.014 27.937 0 27.896 0zm-.068.204c.014 0 .028.122.041.257.068.583.204 1.139.407 1.735.149.461.149.434-.027.38-.42-.122-2.305-.448-3.674-.637-.217-.028-.406-.055-.406-.068-.014-.014.99-.542 1.423-.746.57-.257 2.128-.894 2.236-.921zM23.843 2.06l.163.054c.881.298 3.077.718 4.297.813l.257.027s-.108.068-.257.136c-.583.298-1.234.65-1.68.935-.137.081-.258.15-.272.15a2.97 2.97 0 01-.19-.028L26 4.121l-.407-.407c-.732-.705-1.301-1.247-1.518-1.464l-.23-.19zm-.162.122l.583.732c.311.406.637.786.704.88.068.082.122.163.122.163-.013.014-.84-.149-1.274-.244-.447-.108-.637-.149-.908-.244l-.23-.067v-.055c0-.27.352-.691.948-1.111l.055-.054zm4.947.99c.014 0 .04.04.081.148.136.312.583 1.139.692 1.301.027.055.095.055-.488-.04-1.396-.23-1.844-.298-1.844-.312 0 0 .041-.027.095-.068a8.688 8.688 0 001.26-.867 1.98 1.98 0 01.204-.163c-.013 0 0 0 0 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "url(#paint2_radial)",
    d: "M21.986 2.833s-.095.149 0 .366c.055.135.217.298.393.46 0 0 1.844 1.79 2.06 2.048 1.017 1.179 1.465 2.33 1.505 3.917.027 1.03-.162 1.925-.65 2.968-.854 1.87-2.67 3.945-5.463 6.236l.407-.136c.257-.203.623-.407 1.464-.867 1.951-1.071 4.134-2.047 6.818-3.05 3.863-1.45 10.22-3.159 13.84-3.714l.379-.055-.054-.094a11.701 11.701 0 00-.827-1.166c-.786-.99-1.749-1.776-2.928-2.44-1.613-.908-3.714-1.613-6.371-2.142-.502-.095-1.6-.284-2.494-.42a291.91 291.91 0 01-4.46-.732 33.438 33.438 0 01-1.68-.312 9.945 9.945 0 01-1.098-.298c-.326-.095-.746-.217-.84-.57zm1.071 1.044s.068.027.163.054c.162.054.366.122.596.176.176.054.366.095.542.15.244.067.461.121.461.121.027.027.448 1.37.583 1.87.054.19.095.367.095.367s-.054-.068-.108-.163c-.488-.854-1.247-1.708-2.129-2.413a8.525 8.525 0 01-.203-.162zm2.033.555c.027 0 .109.014.217.041a59.44 59.44 0 002.765.529c.136.027.244.04.244.054 0 .013-.054.04-.108.068a13.11 13.11 0 00-.868.515 8.145 8.145 0 00-1.382 1.152s-.027-.068-.04-.163c-.15-.57-.462-1.423-.746-2.02-.055-.08-.095-.176-.082-.176-.013 0-.013 0 0 0zm3.565.678c.027.014.068.15.15.461.148.596.216 1.274.203 1.898-.014.176-.014.339-.027.352l-.014.04-.217-.067c-.447-.136-1.166-.352-1.776-.529-.352-.095-.637-.176-.637-.19 0-.027.515-.542.732-.731.42-.366 1.56-1.247 1.586-1.234zm.285.04c.013-.013 1.708.285 2.48.435.57.108 1.41.284 1.464.311.027.014-.067.054-.339.176a19.2 19.2 0 00-2.71 1.464c-.217.136-.394.258-.394.258s-.013-.122-.013-.258c0-.786-.163-1.572-.447-2.25-.014-.067-.041-.122-.041-.135zm4.392.868c.013.014-.041.353-.095.542-.15.61-.556 1.532-1.044 2.386-.081.15-.163.271-.176.285-.014 0-.122-.054-.244-.136-.475-.284-1.03-.542-1.613-.786-.163-.068-.312-.122-.312-.136-.027-.027 1.301-.908 2.006-1.328.556-.339 1.464-.84 1.478-.827zm.311.054c.041 0 .787.204 1.18.326.976.284 2.087.691 2.806 1.03l.298.136-.217.054c-1.776.406-3.294.88-4.758 1.477-.122.054-.23.095-.23.095-.014 0 .027-.095.081-.217.447-.935.732-1.911.8-2.751.027-.082.04-.15.04-.15zm-7.482 1.722c.014-.014.583.122.895.217.474.135 1.464.46 1.464.488 0 0-.109.095-.244.217-.543.447-1.058.921-1.681 1.531-.19.177-.339.326-.352.326-.014 0-.014-.027-.014-.055.095-.69.068-1.585-.054-2.494 0-.135-.014-.23-.014-.23zm12.064.014c.014.013-.271.433-.434.677-.244.353-.61.827-1.437 1.857-.433.542-.921 1.166-1.084 1.37-.163.203-.298.379-.312.379 0 0-.054-.068-.122-.163a8.598 8.598 0 00-1.667-1.843 2.256 2.256 0 00-.312-.244c-.04-.027-.081-.068-.081-.068 0-.014.705-.312 1.233-.529.936-.38 2.21-.84 3.159-1.125.515-.176 1.057-.325 1.057-.311zm.325.08a.73.73 0 01.23.123 13.785 13.785 0 012.766 2.074c.217.217.759.772.745.786l-.406.027c-1.735.136-3.958.502-6.1 1.017-.149.027-.271.067-.285.067-.013 0 .15-.162.353-.352 1.26-1.206 1.83-1.979 2.508-3.335a3.17 3.17 0 01.19-.406c-.014 0-.014 0 0 0zm-9.203.936c.054.014.596.271 1.003.461l.962.502s-.19.108-.434.23c-.772.393-1.437.759-2.141 1.18l-.366.216c-.014 0-.014-.014.095-.217a9.148 9.148 0 00.84-2.277c.013-.054.027-.095.04-.095zm-.53.109c.014.013-.121.515-.216.8-.163.528-.46 1.179-.732 1.68-.068.122-.163.285-.217.38l-.108.162-.23-.217a3.235 3.235 0 00-.773-.569c-.109-.054-.204-.108-.204-.122 0-.027.705-.678 1.247-1.139.393-.338 1.22-.989 1.234-.975zm3.281 1.341l.203.136c.461.298 1.003.705 1.424 1.057.23.19.691.597.786.705l.054.054-.339.095c-1.897.529-3.348.99-5.056 1.613-.19.068-.352.122-.366.122-.027 0-.04.027.38-.366 1.084-1.003 2.06-2.114 2.779-3.185l.135-.23zm-.867.217c.013.014-.556.8-.895 1.261a58.166 58.166 0 01-1.613 2.02c-.203.244-.38.447-.393.447-.014 0-.014-.054-.014-.15 0-.5-.122-1.03-.352-1.49-.095-.19-.108-.23-.095-.258.081-.067 1.274-.759 2.047-1.165.501-.272 1.301-.678 1.315-.665zm-5.219 1.274c.014 0 .108.055.217.109.258.15.502.312.705.474.013.014-.095.095-.244.204-.393.284-.99.732-1.329 1.003-.366.284-.38.298-.338.23.27-.42.406-.65.555-.949.122-.27.258-.582.353-.867.027-.109.067-.204.081-.204zm1.396 1.098c.027 0 .04.028.163.204.23.352.42.827.46 1.206l.014.082-.569.216a50.426 50.426 0 00-2.575 1.071c-.177.082-.488.23-.692.325-.203.109-.366.177-.366.177s.122-.095.285-.217c1.233-.895 2.304-1.884 3.104-2.86.081-.109.163-.204.176-.204zm-.637.15c.014.013-.46.555-.773.88a14.06 14.06 0 01-2.561 2.074c-.122.082-.23.15-.244.163-.027.014.013-.027.433-.488.271-.298.475-.542.719-.84.163-.204.19-.23.407-.393.596-.461 1.992-1.41 2.02-1.396z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    d: "M8.879 30.119c-.082 0-.15.013-.23.013-1.546.081-2.576.76-3.186 2.088-.515 1.192-.46 2.765 0 3.958.542 1.179 1.423 1.802 2.887 2.033.312.054.515.217 1.125.922l.746.867h1.342l-.895-.895c-.488-.488-.895-.921-.895-.962 0-.04.19-.122.42-.19.76-.23 1.383-.813 1.817-1.708.352-.718.407-.935.46-1.83.136-2.656-1.26-4.31-3.591-4.296zm1.18 6.94c-.652.311-1.6.38-2.224.149-.637-.23-1.26-.895-1.545-1.654-.312-.827-.271-2.345.095-3.023.569-1.084 1.328-1.586 2.426-1.586 1.627 0 2.562 1.003 2.684 2.874.095 1.572-.434 2.752-1.437 3.24zm23.191-4.677c-.569 0-.99.23-1.287.678l-.23.352v-.921h-.977v5.544h.976v-1.776c0-1.627.014-1.816.244-2.25.312-.61.854-.908 1.37-.773l.352.095v-.962l-.448.013zm-5.72-.054c-.19 0-.393.027-.596.068-1.301.339-2.033 1.586-1.993 2.873 0 1.071.204 1.613.732 2.183 1.058.867 2.02.935 3.321.474l.461-.203v-.868l-.46.244c-1.044.461-1.844.461-2.481-.081-.407-.407-.583-.908-.665-1.464h3.931v-.745c0-1.532-.921-2.495-2.25-2.481zm-1.586 2.44s.15-.949.678-1.328c.258-.177.556-.272.854-.272.298 0 .583.095.827.285.488.38.583 1.315.583 1.315h-2.942zM2.44 33.765C1.383 33.128.91 32.667.976 32.125c.163-1.505 2.02-1.302 3.05-.732l.014-1.017s-.57-.244-1.383-.257c-1.247-.014-2.06.393-2.44 1.233-.555 1.234-.067 2.169 1.722 3.199 1.003.583 1.45 1.084 1.45 1.64 0 1.139-1.369 1.532-2.792.827-.298-.15-.542-.271-.556-.271-.054.325-.027 1.098-.027 1.098s.434.176 1.084.312c1.627.325 3.09-.434 3.24-1.668.108-1.165-.312-1.775-1.898-2.724zm39.445-1.437c-.19 0-.393.027-.597.068-1.3.339-2.033 1.586-1.992 2.873 0 1.071.203 1.613.732 2.17 1.057.867 2.02.948 3.334.474l.461-.204v-.867l-.46.244c-1.058.46-1.844.46-2.481-.082-.407-.406-.583-.894-.664-1.463h3.917v-.746c0-1.532-.922-2.494-2.25-2.467zm-1.6 2.426s.15-.948.678-1.328a1.41 1.41 0 01.84-.271c.285 0 .583.095.827.285.488.379.583 1.314.583 1.314h-2.928zm-17.865-.976c-1.057-.637-1.518-1.098-1.464-1.64.163-1.504 2.02-1.301 3.05-.732l.014-1.016s-.57-.244-1.383-.258c-1.247-.013-2.06.393-2.44 1.234-.556 1.233-.054 2.168 1.722 3.199 1.003.582 1.436 1.084 1.436 1.626 0 1.139-1.369 1.545-2.792.827a7.231 7.231 0 00-.556-.271c-.054.325-.027 1.098-.027 1.098s.434.176 1.085.312c1.626.325 3.09-.434 3.24-1.668.121-1.152-.299-1.762-1.885-2.71zm25.185-1.41c-.57 0-1.003.231-1.288.678l-.23.353v-.922h-.976v5.544h.976v-1.762c0-1.627.013-1.816.244-2.25.312-.61.854-.908 1.369-.76l.352.096v-.963l-.447-.013zm-32.938 1.383v-3.538h-.976v7.822h4.134v-.922H14.68l-.013-3.362zm22.731 1.098l-.813 2.101-.773-2.114-.786-2.345h-1.003c.65 1.843 1.355 3.727 2.074 5.544.312.013.623 0 .935 0l1.098-2.752 1.112-2.806h-.963a79.557 79.557 0 00-.88 2.372zm-20.454-6.764a.521.521 0 00.393-.162.521.521 0 00.163-.393.521.521 0 00-.163-.393.565.565 0 00-.393-.15.501.501 0 00-.393.163.542.542 0 00-.163.393c0 .163.054.298.163.393.095.095.23.15.393.15zm-.352-.908a.46.46 0 01.352-.135.48.48 0 01.352.135.492.492 0 010 .705.48.48 0 01-.352.136.48.48 0 01-.352-.136.492.492 0 01-.15-.352.555.555 0 01.15-.353zm.23.407h.068c.04 0 .095.04.122.122l.081.176h.122l-.095-.19c-.04-.081-.081-.122-.122-.135a.258.258 0 00.136-.068c.027-.027.04-.081.04-.122a.174.174 0 00-.054-.136c-.04-.04-.108-.054-.203-.054h-.204v.705h.095l.014-.298zm0-.325h.095c.068 0 .108.013.135.027.027.013.027.04.027.095 0 .08-.054.122-.149.122h-.108v-.244zm-16.225.257c0-.244-.014-.434-.014-.542.027.122.055.217.082.285l.948 2.1h.163l.949-2.128c.027-.054.054-.149.081-.27h.014c-.014.216-.027.392-.027.542v1.857h.325v-2.766h-.407l-.88 1.939c-.028.081-.082.19-.136.338H1.68c-.013-.08-.068-.19-.122-.325l-.854-1.938H.272v2.765h.311l.014-1.857zm3.212.014h.285v1.721h-.285V27.53zm.136-.638a.204.204 0 00.149-.054c.04-.04.068-.081.068-.149 0-.054-.014-.108-.068-.149a.204.204 0 00-.15-.054.204.204 0 00-.148.054.218.218 0 00-.068.15c0 .067.014.108.068.148.04.041.095.054.149.054zm2.128 2.386v-.298a.828.828 0 01-.488.176.624.624 0 01-.488-.203.775.775 0 01-.19-.542c0-.244.068-.434.19-.57a.644.644 0 01.488-.203c.163 0 .325.054.474.15v-.34a1.001 1.001 0 00-.46-.095c-.312 0-.57.095-.746.299-.176.19-.271.46-.271.786 0 .284.081.528.258.705a.89.89 0 00.677.284c.23-.013.407-.054.556-.149zm.8-.908c0-.23.054-.407.149-.542.095-.109.19-.176.325-.176.109 0 .19.013.244.067v-.325a.63.63 0 00-.19-.027.474.474 0 00-.298.108.67.67 0 00-.217.34h-.013v-.407H6.56v1.979h.312V28.37zm1.816 1.044c.298 0 .542-.095.718-.285.177-.19.272-.447.272-.759 0-.325-.082-.57-.244-.76-.163-.189-.394-.27-.692-.27-.298 0-.542.095-.718.257-.19.19-.285.461-.285.8 0 .298.082.542.258.732.162.19.393.285.691.285zm-.447-1.6a.654.654 0 01.474-.19c.204 0 .353.068.475.19a.892.892 0 01.176.57c0 .244-.054.433-.163.555-.108.136-.271.204-.474.204a.625.625 0 01-.488-.204c-.122-.135-.176-.311-.176-.555-.014-.244.04-.434.176-.57zm2.806 1.437a.528.528 0 00.04-.773 1 1 0 00-.366-.216 1.694 1.694 0 01-.298-.163.256.256 0 01-.081-.203c0-.082.027-.15.095-.19a.391.391 0 01.257-.081c.176 0 .312.04.447.135v-.312a.871.871 0 00-.42-.095c-.203 0-.38.055-.501.163a.488.488 0 00-.19.407c0 .149.04.27.122.352.068.081.19.15.352.217.163.068.271.136.326.19a.246.246 0 01.081.19c0 .19-.122.284-.38.284a.806.806 0 01-.515-.19v.34a.932.932 0 00.488.121c.23-.013.42-.067.543-.176zm1.504-1.898c-.298 0-.542.095-.718.258-.19.19-.285.46-.285.8 0 .298.082.542.258.732.176.19.406.284.704.284.299 0 .543-.095.719-.284.176-.19.271-.448.271-.76 0-.325-.081-.569-.244-.758-.176-.19-.407-.272-.705-.272zm.624 1.03c0 .245-.055.434-.163.556-.108.136-.271.204-.474.204a.624.624 0 01-.488-.204c-.122-.135-.177-.311-.177-.555 0-.258.068-.448.19-.583a.654.654 0 01.475-.19c.19 0 .352.068.46.19.122.135.177.325.177.583zm.854.99h.311v-1.708h.461v-.271h-.46v-.298c0-.271.108-.42.325-.42.081 0 .149.013.203.054v-.285c-.054-.027-.135-.027-.23-.027a.562.562 0 00-.42.163c-.136.122-.204.284-.204.515v.325h-.339v.271h.34l.013 1.681zm1.3-.542c0 .38.177.583.516.583a.512.512 0 00.298-.068v-.271a.333.333 0 01-.203.068c-.109 0-.176-.027-.23-.082-.041-.054-.068-.149-.068-.284v-1.112h.501v-.271h-.501v-.583c-.109.04-.217.068-.312.095v.475h-.339v.27h.339v1.18zm33.956 3.646a.565.565 0 00-.393-.149.501.501 0 00-.393.163.542.542 0 00-.163.393c0 .162.054.284.163.393a.59.59 0 00.393.149.521.521 0 00.393-.163.521.521 0 00.162-.393.46.46 0 00-.162-.393zm-.04.746a.46.46 0 01-.353.135.48.48 0 01-.353-.135.492.492 0 01-.149-.353.48.48 0 01.136-.352.46.46 0 01.352-.136.48.48 0 01.352.136c.095.095.15.217.15.352a.48.48 0 01-.136.353zm-.286-.326a.426.426 0 00.136-.067c.027-.028.04-.082.04-.122a.174.174 0 00-.054-.136c-.04-.04-.108-.054-.203-.054h-.203v.705h.095v-.299h.067c.041 0 .082.041.122.122l.082.177h.122l-.095-.19c-.04-.081-.082-.122-.109-.136zm-.067-.067h-.109v-.23h.095a.29.29 0 01.136.026c.027.014.027.04.027.095-.014.081-.055.109-.15.109zM31.23 27.313h.095v-.705h.23v-.095H31v.095h.23v.705zm.528-.529v-.163c0 .041.014.068.027.082l.272.61h.04l.271-.61c.014-.014.014-.04.027-.082V27.313h.095v-.8h-.108l-.244.556c0 .013-.027.054-.04.108h-.014c0-.027-.014-.054-.041-.095l-.244-.556h-.122v.8h.095l-.014-.542z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("linearGradient", {
    id: "paint0_linear",
    x1: "21.902",
    x2: "23.878",
    y1: "24.578",
    y2: "23.411",
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("stop", {
    stopColor: "#909CA9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#EDEDEE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx("linearGradient", {
    id: "paint1_linear",
    x1: "21.947",
    x2: "23.538",
    y1: "2.577",
    y2: "2.577",
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("stop", {
    stopColor: "#939FAB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#DCDEE1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  })), __jsx("radialGradient", {
    id: "paint2_radial",
    cx: "0",
    cy: "0",
    r: "1",
    gradientTransform: "matrix(-2.0266 -.30443 .60902 -4.05421 29.969 9.859)",
    gradientUnits: "userSpaceOnUse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("stop", {
    stopColor: "#EE352C",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#A91D22",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/icon/typescript.tsx":
/*!****************************************!*\
  !*** ./components/icon/typescript.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\icon\\typescript.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    viewBox: "0 0 40 40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("path", {
    fill: "#3178C6",
    d: "M36.094 0H3.906A3.906 3.906 0 000 3.906v32.188A3.906 3.906 0 003.906 40h32.188A3.906 3.906 0 0040 36.094V3.906A3.906 3.906 0 0036.094 0z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M24.766 31.797v3.906c.632.328 1.406.57 2.265.734.86.164 1.797.242 2.735.242.937 0 1.797-.086 2.656-.265a6.74 6.74 0 002.187-.86c.633-.414 1.172-.937 1.485-1.64.312-.703.554-1.485.554-2.5 0-.711-.109-1.328-.32-1.875a3.68 3.68 0 00-.937-1.406 6.204 6.204 0 00-1.407-1.094 17.455 17.455 0 00-1.875-.938c-.515-.21-.937-.414-1.406-.617-.406-.203-.758-.406-1.015-.61-.29-.21-.508-.429-.665-.655a1.372 1.372 0 01-.234-.782c0-.265.07-.508.211-.726.141-.22.336-.399.586-.555.25-.156.562-.273.937-.36a5.458 5.458 0 011.25-.124c.329 0 .672.024 1.016.073a8.695 8.695 0 012.188.61c.343.156.664.335.937.538v-3.671a9.657 9.657 0 00-1.953-.508 15.66 15.66 0 00-2.422-.164c-.937 0-1.797.101-2.656.297a6.183 6.183 0 00-2.188.937c-.633.422-1.093.938-1.484 1.64-.367.657-.547 1.407-.547 2.345 0 1.171.336 2.187 1.016 2.968.672.86 1.718 1.485 3.047 2.11.539.218 1.015.437 1.484.648.469.211.86.43 1.172.656.336.227.601.477.781.742.195.266.297.579.297.938 0 .25-.061.484-.18.703a1.537 1.537 0 01-.554.563c-.25.156-.555.28-.938.375a5.708 5.708 0 01-1.328.132c-.86 0-1.719-.148-2.5-.445a7.426 7.426 0 01-2.344-1.328l.149-.034zm-6.563-9.61h5v-3.203H9.22v3.203h5v14.297h3.984V22.187z",
    clipRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
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
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\seoHead.tsx",
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

/***/ "./components/tooltip.tsx":
/*!********************************!*\
  !*** ./components/tooltip.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\components\\tooltip.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


var TooltipDropBox = function TooltipDropBox(_ref) {
  var content = _ref.content,
      position = _ref.position,
      children = _ref.children,
      maxLength = _ref.maxLength;
  return __jsx("div", {
    className: "relative tooltip",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, children, content.length > maxLength && __jsx("div", {
    className: "absolute z-10 p-2 text-white hidden md:block duration-300 transform translate-y-4 opacity-0 invisible ".concat(position, " bg-gray-900 content"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, content));
};

_c = TooltipDropBox;
/* harmony default export */ __webpack_exports__["default"] = (TooltipDropBox);

var _c;

$RefreshReg$(_c, "TooltipDropBox");

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CData%5CMyProject%5Cportfoilio-front-end%5Cpages%5Cabout.tsx!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CData%5CMyProject%5Cportfoilio-front-end%5Cpages%5Cabout.tsx ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/about",
      function () {
        return __webpack_require__(/*! ./pages/about.tsx */ "./pages/about.tsx");
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

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_seoHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/seoHead */ "./components/seoHead.tsx");
/* harmony import */ var _components_icon_csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icon/csharp */ "./components/icon/csharp.tsx");
/* harmony import */ var _components_icon_docker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icon/docker */ "./components/icon/docker.tsx");
/* harmony import */ var _components_icon_dotnet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icon/dotnet */ "./components/icon/dotnet.tsx");
/* harmony import */ var _components_icon_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icon/express */ "./components/icon/express.tsx");
/* harmony import */ var _components_icon_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icon/github */ "./components/icon/github.tsx");
/* harmony import */ var _components_icon_java__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/icon/java */ "./components/icon/java.tsx");
/* harmony import */ var _components_icon_jest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/icon/jest */ "./components/icon/jest.tsx");
/* harmony import */ var _components_icon_mongodb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/icon/mongodb */ "./components/icon/mongodb.tsx");
/* harmony import */ var _components_icon_mysql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/icon/mysql */ "./components/icon/mysql.tsx");
/* harmony import */ var _components_icon_nestjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/icon/nestjs */ "./components/icon/nestjs.tsx");
/* harmony import */ var _components_icon_nginx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/icon/nginx */ "./components/icon/nginx.tsx");
/* harmony import */ var _components_icon_redis__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/icon/redis */ "./components/icon/redis.tsx");
/* harmony import */ var _components_icon_socket__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/icon/socket */ "./components/icon/socket.tsx");
/* harmony import */ var _components_icon_sqlserver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/icon/sqlserver */ "./components/icon/sqlserver.tsx");
/* harmony import */ var _components_icon_typescript__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/icon/typescript */ "./components/icon/typescript.tsx");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/tooltip */ "./components/tooltip.tsx");
var _jsxFileName = "C:\\Data\\MyProject\\portfoilio-front-end\\pages\\about.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



















var About = function About() {
  // const [currentSlide, setSlide] = React.useState(0);
  // React.useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setSlide(currentSlide + 1);
  //         if (currentSlide >= 3) {
  //             setSlide(0);
  //         }
  //     }, 3000);
  //     return () => {
  //         clearInterval(intervalId);
  //     };
  // }, [currentSlide]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_components_seoHead__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Cao Chi Hai | About Me",
    canonical: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "z-10 flex flex-col items-center justify-center flex-1 fade-in-instantly md:flex-row md:w-4/5 md:mx-auto md:space-x-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-48 h-64 overflow-hidden rounded-tl-3xl rounded-br-3xl md:flex-1 md:h-166 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "absolute w-full h-full duration-300 opacity-100  ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/asset/images/slide1.jpg",
    alt: "Cao Chi Hai",
    className: "absolute block object-cover w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "p-2 space-y-4 text-white md:flex-1 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "hidden text-4xl font-semibold text-center md:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "About Me"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "font-medium text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Back Ground"), __jsx("p", {
    className: "opacity-80",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Hi, my name is Cao Chi Hai. I\u2019m a Vietnamese back-end developer living and working in Ho Chi Minh city, Viet Nam. I have learned Software Enginnering at FPT university.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "font-medium text-2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "Skill"), __jsx("div", {
    className: "space-y-4 mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "space-y-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, "Languages:"), __jsx("div", {
    className: "flex space-x-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Typescript",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx(_components_icon_typescript__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "C#",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx(_components_icon_csharp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Java",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx(_components_icon_java__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "space-y-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, "Frameworks:"), __jsx("div", {
    className: "flex space-x-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "NestJS",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 33
    }
  }, __jsx(_components_icon_nestjs__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "ExpressJS",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx(_components_icon_express__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: ".Net",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 37
    }
  }, __jsx(_components_icon_dotnet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Socket.io",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, __jsx(_components_icon_socket__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Jest",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, __jsx(_components_icon_jest__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "space-y-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "Databases:"), __jsx("div", {
    className: "flex space-x-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "SQL Server",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, __jsx(_components_icon_sqlserver__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "MySQL",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, __jsx(_components_icon_mysql__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "MongoDB",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, __jsx(_components_icon_mongodb__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Redis",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx(_components_icon_redis__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  })))), __jsx("div", {
    className: "space-y-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, "Others:"), __jsx("div", {
    className: "flex space-x-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Github",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, __jsx(_components_icon_github__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Docker",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  }, __jsx(_components_icon_docker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  })), __jsx(_components_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], {
    content: "Nginx",
    maxLength: 0,
    position: "bottom-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx(_components_icon_nginx__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 41
    }
  })))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }))));
};

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CData%5CMyProject%5Cportfoilio-front-end%5Cpages%5Cabout.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL2hlbHBlcnMvc3RyaW5nLmhlbHBlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL2NzaGFycC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbi9kb2NrZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb24vZG90bmV0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL2V4cHJlc3MudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb24vZ2l0aHViLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL2phdmEudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb24vamVzdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbi9tb25nb2RiLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL215c3FsLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL25lc3Rqcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbi9uZ2lueC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbi9yZWRpcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaWNvbi9zb2NrZXQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ljb24vc3Fsc2VydmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pY29uL3R5cGVzY3JpcHQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Nlb0hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rvb2x0aXAudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC50c3giXSwibmFtZXMiOlsiY2FwaXRhbGl6ZSIsInN0ciIsInNwbGl0IiwibWFwIiwiaXRlbSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwidHJ1bmNhdGVDb250ZW50IiwibWF4TGVuZ3RoIiwibmV3U3RyIiwidHJpbSIsImxlbmd0aCIsIkljb24iLCJTZW9IZWFkIiwidGl0bGUiLCJpc0luZGV4UGFnZSIsImlzRm9sbG93UGFnZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwiaW1hZ2VVcmwiLCJtZXRhSW5kZXhQYWdlIiwibWV0YUlzRm9sbG93UGFnZSIsIm1ldGFSb2JvdHMiLCJwYWdlVGl0bGUiLCJwcm9jZXNzIiwiZW52IiwiRkJfQVBQX0lEIiwiVG9vbHRpcERyb3BCb3giLCJjb250ZW50IiwicG9zaXRpb24iLCJjaGlsZHJlbiIsIkFtcFN0YXRlQ29udGV4dCIsIlJlYWN0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsImlzSW5BbXBNb2RlIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNoaWxkIiwibGlzdCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsImtleXMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInByb3BzIiwidW5pcXVlIiwiYyIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50IiwiQWJvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFpQjtBQUN2QyxTQUFPQSxHQUFHLENBQ0xDLEtBREUsQ0FDSSxHQURKLEVBRUZDLEdBRkUsQ0FFRSxVQUFDQyxJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEtBQStCRixJQUFJLENBQUNHLEtBQUwsQ0FBVyxDQUFYLENBQXpDO0FBQUEsR0FGRixFQUdGQyxJQUhFLENBR0csR0FISCxDQUFQO0FBSUgsQ0FMTTtBQU9BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1IsR0FBRCxFQUFjUyxTQUFkLEVBQW9DO0FBQy9ELE1BQU1DLE1BQU0sR0FBR1YsR0FBRyxDQUFDTSxLQUFKLENBQVUsQ0FBVixFQUFhRyxTQUFiLEVBQXdCRSxJQUF4QixFQUFmO0FBRUEs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OztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Qzs7QUFFbkM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFB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QURKO0FBK0dILENBOUhEOztLQUFNQSxLO0FBZ0lTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgICAuc3BsaXQoJyAnKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpKVxyXG4gICAgICAgIC5qb2luKCcgJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVDb250ZW50ID0gKHN0cjogc3RyaW5nLCBtYXhMZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RyID0gc3RyLnNsaWNlKDAsIG1heExlbmd0aCkudHJpbSgpO1xyXG5cclxuICAgIHJldHVybiBzdHIubGVuZ3RoIDw9IG1heExlbmd0aCA/IHN0ciA6IG5ld1N0ciArICcuLi4nO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgNDBcIlxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNBMTc5RENcIlxyXG4gICAgICAgICAgZD1cIk0zNS40OTYgMTEuNzNjMC0uNjcxLS4xNDQtMS4yNjQtLjQzNC0xLjc3My0uMjg1LS41LS43MTItLjkyLTEuMjg0LTEuMjUxLTQuNzI2LTIuNzI1LTkuNDU2LTUuNDQxLTE0LjE4LTguMTY5LTEuMjc0LS43MzUtMi41MS0uNzA4LTMuNzczLjAzN0MxMy45NDQgMS42ODQgNC41MjYgNy4wOCAxLjcyIDguNzA0LjU2NCA5LjM3NC4wMDIgMTAuMzk3LjAwMiAxMS43MjkgMCAxNy4yMDguMDAyIDIyLjY4OCAwIDI4LjE2OGMwIC42NTYuMTM4IDEuMjM3LjQxNSAxLjczOC4yODUuNTE2LjcxOC45NDcgMS4zMDQgMS4yODYgMi44MDYgMS42MjUgMTIuMjI1IDcuMDIgMTQuMTA1IDguMTMgMS4yNjUuNzQ2IDIuNS43NzIgMy43NzQuMDM3IDQuNzI0LTIuNzI4IDkuNDU1LTUuNDQ0IDE0LjE4MS04LjE3LjU4Ni0uMzM4IDEuMDE4LS43NyAxLjMwNC0xLjI4NC4yNzctLjUwMS40MTUtMS4wODIuNDE1LTEuNzM5IDAgMCAwLTEwLjk1Ny0uMDAyLTE2LjQzNnpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjMjgwMDY4XCJcclxuICAgICAgICAgIGQ9XCJNMTcuODAzIDE5Ljg5NUwuNDE1IDI5LjkwNmMuMjg1LjUxNi43MTguOTQ3IDEuMzA0IDEuMjg2IDIuODA2IDEuNjI1IDEyLjIyNSA3LjAyIDE0LjEwNSA4LjEzIDEuMjY1Ljc0NiAyLjUuNzcyIDMuNzc0LjAzNyA0LjcyNC0yLjcyOCA5LjQ1NS01LjQ0NCAxNC4xODEtOC4xNy41ODYtLjMzOCAxLjAxOC0uNzcgMS4zMDQtMS4yODRsLTE3LjI4LTEwLjAxelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiMzOTAwOTFcIlxyXG4gICAgICAgICAgZD1cIk0zNS40OTYgMTEuNzNjMC0uNjcxLS4xNDQtMS4yNjQtLjQzNC0xLjc3M2wtMTcuMjU5IDkuOTM4IDE3LjI4IDEwLjAxYy4yNzctLjUwMS40MTQtMS4wODIuNDE1LTEuNzM5IDAgMCAwLTEwLjk1Ny0uMDAyLTE2LjQzNnpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgIGQ9XCJNMjguMDQgMTYuMTUydjEuODcxaDEuODcydi0xLjg3MWguOTM2djEuODcxaDEuODcxdi45MzZoLTEuODcxdjEuODcxaDEuODcxdi45MzZoLTEuODcxdjEuODcxaC0uOTM2di0xLjg3MWgtMS44NzF2MS44NzFoLS45MzZ2LTEuODcxaC0xLjg3MXYtLjkzNmgxLjg3MVYxOC45NmgtMS44NzF2LS45MzZoMS44NzF2LTEuODcxaC45MzZ6bTEuODcyIDIuODA3aC0xLjg3MXYxLjg3MWgxLjg3MVYxOC45NnpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgIGQ9XCJNMTcuODQxIDYuNzU0YTEzLjE5IDEzLjE5IDAgMDExMS40MjUgNi41OWwtLjAyMi0uMDM3LTUuNzQzIDMuMzA2YTYuNTY3IDYuNTY3IDAgMDAtNS41ODUtMy4yMzVoLS4wNzVhNi41NyA2LjU3IDAgMTA1LjcyNiA5Ljc5MWwtLjAyOC4wNDkgNS43MzQgMy4zMjFhMTMuMTkgMTMuMTkgMCAwMS0xMS4yODUgNi42MDNoLS4xNDdBMTMuMTg5IDEzLjE4OSAwIDAxNC42NDcgMTkuOTQ4YzAtNy4yODcgNS45MDctMTMuMTk0IDEzLjE5NC0xMy4xOTR6XCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aD5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBIMzUuNTU2VjQwSDB6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiNDhcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA0OCA0MFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzNjQ1NDhcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk03LjE4MyAzMi4zNjd2LTMuMDQ0YzAtLjQuMjUtLjcyLjY2NS0uNzJoLjExNGMuNDE0IDAgLjY2My4zMi42NjMuNzJ2Ni40MDhjMCAxLjU2Mi0uNzcyIDIuODA2LTIuMTE3IDMuNTk4YTMuOTc2IDMuOTc2IDAgMDEtMi4wMzYuNTU1aC0uMjg2Yy0xLjU2MyAwLTIuODA1LS43NzMtMy41OTgtMi4xMTdhMy45NjUgMy45NjUgMCAwMS0uNTU1LTIuMDM2di0uMjg2YzAtMS41NjMuNzcyLTIuODA1IDIuMTE2LTMuNTk5YTMuOTYyIDMuOTYyIDAgMDEyLjAzNy0uNTU1aC4yODZjMS4wNTcgMCAxLjk1NS40MSAyLjcxMSAxLjA3NnptLTUuNzA5IDMuMjJjMCAxLjEzLjU0NyAxLjk3OCAxLjUzNiAyLjUyLjQuMjE4LjgzNC4zMzYgMS4yOS4zMzYgMS4xMDkgMCAxLjkzLS41MjMgMi40OTctMS40NjIuMjY0LS40MzcuMzg2LS45MTQuMzg2LTEuNDIyIDAtLjk3OS0uNDYzLTEuNzQyLTEuMjUxLTIuMzFhMi42OSAyLjY5IDAgMDAtMS42MDMtLjUxNmMtMS4yMDggMC0yLjA3Ny42MS0yLjU5OCAxLjY5NGEyLjY0OCAyLjY0OCAwIDAwLS4yNTcgMS4xNnptMTIuMTUxLTQuMjk2aC4yYzEuNjcgMCAyLjk0LjgxIDMuNzQ1IDIuMjY4LjMyMi41ODMuNDk0IDEuMjIuNDk0IDEuODg2di4yODZjMCAxLjU2Mi0uNzcgMi44MDctMi4xMTggMy41OThhMy45ODUgMy45ODUgMCAwMS0yLjAzNS41NTVoLS4yODZjLTEuNTYzIDAtMi44MDUtLjc3My0zLjU5OC0yLjExN2EzLjk2NSAzLjk2NSAwIDAxLS41NTUtMi4wMzZ2LS4yODZjMC0xLjU2My43NzUtMi44MDEgMi4xMTYtMy41OThhMy45NDMgMy45NDMgMCAwMTIuMDM3LS41NTZ6bS0yLjcxMiA0LjI5N2MwIDEuMDk2LjUzOCAxLjkwMSAxLjQ2MyAyLjQ2OC40MzUuMjY2LjkxMy4zODcgMS40Mi4zODcgMS4wODQgMCAxLjg4NC0uNTUgMi40NC0xLjQ2M2EyLjY4IDIuNjggMCAwMC4zODYtMS40MjFjMC0xLjAyLS40OS0xLjc5Ny0xLjMzLTIuMzYxYTIuNjggMi42OCAwIDAwLTEuNTI0LS40NjVjLTEuMjA4IDAtMi4wNzcuNjEtMi41OTggMS42OTRhMi42NDIgMi42NDIgMCAwMC0uMjU3IDEuMTZ6bTEzLjE0My0yLjc0Yy0uMjE4LS4xMDItLjYyNS0uMTM1LS44Ni0uMTQ0LTEuMjA0LS4wNDYtMi4wNzYuNjMzLTIuNTg3IDEuNjk1YTIuNjM2IDIuNjM2IDAgMDAtLjI1NyAxLjE2YzAgMS4yMzQuNjQ4IDIuMDk5IDEuNzUgMi42MjYuNDAzLjE5Mi45MjMuMjI4IDEuMzYzLjIyOC4zODYgMCAuOTMzLS4yMzcgMS4yNzctLjRsLjA2LS4wMjhoLjI2NmwuMDMuMDA2Yy4zMjcuMDY4LjU3NC4yNzYuNTc0LjYyOXYuMTQyYzAgLjg3OC0xLjYwNCAxLjA3OS0yLjIxNiAxLjEyMi0yLjE2LjE0OS0zLjc3NC0xLjAzNy00LjM5LTMuMDk3YTMuNzMxIDMuNzMxIDAgMDEtLjE1NS0xLjA4NnYtLjI4NWMwLTEuNTYzLjc3Ni0yLjgwMSAyLjExNi0zLjU5N2EzLjk0NSAzLjk0NSAwIDAxMi4wMzctLjU1NmguMjg2YTMuNjcgMy42NyAwIDAxMi4xMS42NWwuMDUyLjAzNy4wMzMuMDU0YS43NTkuNzU5IDAgMDEuMTI3LjM4di4xNDNjMCAuMzY4LS4yNzUuNTY2LS42MDcuNjNsLS4wMjguMDA1aC0uMDg1Yy0uMjE1IDAtLjcwNC0uMjIzLS44OTYtLjMxM3ptNC42NzUuOTc3Yy41Ni0uNTYxIDEuMTIyLTEuMTIgMS42OS0xLjY3Mi4xNTgtLjE1NC43NTgtLjgwNS45OTQtLjgwNWguMjU4bC4wMy4wMDZjLjMyOC4wNjkuNTc1LjI3Ny41NzUuNjN2LjE0MmMwIC4yNDItLjI4My41MjItLjQzOC42ODctLjMzMS4zNS0uNjguNjktMS4wMTkgMS4wMzRsLTEuNzQxIDEuNzY4Yy43NS43NTEgMS40OTggMS41MDMgMi4yNDIgMi4yNi4yMDYuMjEuNDExLjQyLjYxNC42MzIuMDcyLjA3Ni4xNzguMTcuMjM4LjI3NGEuNTkuNTkgMCAwMS4xMDQuMzI2di4xNDhsLS4wMDkuMDM1Yy0uMDguMzI5LS4yOS41OTQtLjY1NC41OTRoLS4xMTRjLS4yMzkgMC0uNTA4LS4yNy0uNjcyLS40MjQtLjMzNi0uMzE3LS42NjEtLjY1MS0uOTkxLS45NzVsLTEuMTA3LTEuMDg3djEuNzM3YzAgLjQtLjI1LjcyMS0uNjY0LjcyMWgtLjExM2MtLjQxNCAwLS42NjQtLjMyMS0uNjY0LS43MjFWMjkuMzVjMC0uNC4yNS0uNzIuNjY0LS43MmguMTEzYy40MTQgMCAuNjY0LjMyLjY2NC43MnY0LjQ3NHptMTcuOTY1LTIuNDc3aC4xNDNjLjQzMiAwIC43Mi4yOTEuNzIuNzIxIDAgLjU5Ny0uNTcuNzUtMS4wNjMuNzUtLjY0OCAwLTEuMjY2LjM5Mi0xLjcxMi44MzEtLjU1Ni41NDktLjggMS4yNTEtLjggMi4wMjR2My40ODljMCAuNC0uMjUuNzIxLS42NjQuNzIxaC0uMTE0Yy0uNDE0IDAtLjY2NC0uMzItLjY2NC0uNzIxdi0zLjY5YzAtMS40MTcuNjktMi41NzMgMS44NC0zLjM4NGEzLjk2MyAzLjk2MyAwIDAxMi4zMTQtLjc0ek0zNi40NSAzOC4yNjNjLjUyNS4xODQgMS4xMjMuMTU3IDEuNjYxLjA2NC4yNzUtLjExNy45OC0uNDI1IDEuMjM4LS4zOGwuMDQuMDA3LjAzOC4wMThjLjE1OC4wNzcuMzA5LjE4Ni4zOS4zNDYuMTg4LjM3OC4wOTcuNzU3LS4yNzMuOTdsLS4xMjMuMDcyYy0xLjM2OC43OS0yLjgyMi42OC00LjE4NS0uMDU3LS42NTEtLjM1My0xLjE1LS44NzUtMS41MTgtMS41MTNsLS4wODYtLjE0OWMtLjg3Ny0xLjUyLS43NTktMy4xMTkuMjMxLTQuNTY0LjM0Mi0uNS43ODgtLjg4NiAxLjMxLTEuMTg4bC4xOTgtLjExNGMxLjI4OC0uNzQzIDIuNjY4LS42OTIgMy45OS0uMDQuNzExLjM1IDEuMjg3Ljg3NCAxLjY4NCAxLjU2MWwuMDcyLjEyNGMuMjg4LjUtLjA4Ni45MzUtLjQ3MSAxLjIzMy0uNDQ4LjM0NS0uOS43Ni0xLjMyOSAxLjEzbC0yLjg2NyAyLjQ4em0tMS4yMzgtLjg3YzEuMDctLjkxNiAyLjE0LTEuODM0IDMuMjA3LTIuNzU1LjM2NC0uMzE0Ljc2NC0uNjQgMS4xMjYtLjk3MS0uMjktLjM2Ni0uNzc1LS42My0xLjE4Ny0uNzg3LS44MzItLjMxNy0xLjY1MS0uMjEtMi40MTQuMjMtLjk5OC41NzYtMS40MjMgMS40OTQtMS4zODYgMi42MzYuMDE1LjQ1LjEzNi44ODMuMzc1IDEuMjY2LjA4NC4xMzQuMTc4LjI2MS4yOC4zODJ6TTI3LjQzNSA4LjUxaDQuMjUzdjQuMzQ4aDIuMTVjLjk5NCAwIDIuMDE1LS4xNzYgMi45NTYtLjQ5NWE3LjU3IDcuNTcgMCAwMDEuNDM3LS42NWMtLjYwMS0uNzgzLS45MDctMS43NzMtLjk5OC0yLjc0OC0uMTIyLTEuMzI4LjE0Ni0zLjA1NSAxLjA0NC00LjA5NGwuNDQ3LS41MTcuNTMzLjQyOWMxLjM0IDEuMDc3IDIuNDY5IDIuNTgzIDIuNjY4IDQuMyAxLjYxNS0uNDc1IDMuNTExLS4zNjMgNC45MzUuNDU5bC41ODQuMzM3LS4zMDcuNmMtMS4yMDQgMi4zNS0zLjcyMiAzLjA3OC02LjE4MyAyLjk0OS0zLjY4MiA5LjE3Mi0xMS43IDEzLjUxNC0yMS40MiAxMy41MTQtNS4wMjIgMC05LjYzLTEuODc3LTEyLjI1NC02LjMzM2wtLjA0My0uMDczLS4zODItLjc3OGMtLjg4Ny0xLjk2LTEuMTgyLTQuMTEtLjk4Mi02LjI1NmwuMDYtLjY0NGgzLjYzOFY4LjUxaDQuMjUzVjQuMjU3aDguNTA3Vi4wMDRoNS4xMDRWOC41MXpcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMyMkEwQzhcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk00MS4yMTUgMTAuMTJjLjI4NS0yLjIxNy0xLjM3NC0zLjk1OC0yLjQwMy00Ljc4NS0xLjE4NSAxLjM3LTEuMzcgNC45NjIuNDkgNi40NzUtMS4wMzcuOTIyLTMuMjI0IDEuNzU3LTUuNDY0IDEuNzU3SDYuNThjLS4yMTcgMi4zMzguMTkzIDQuNDkgMS4xMyA2LjMzM2wuMzEuNTY3Yy4xOTcuMzMzLjQxMS42NTUuNjQzLjk2NWEzNi4xNiAzNi4xNiAwIDAwMy4xLjA3NmMxLjg1Ny0uMDQxIDMuMzczLS4yNiA0LjUyMi0uNjU5YS4zMjguMzI4IDAgMDEuMjE1LjYxOSA4Ljg4NiA4Ljg4NiAwIDAxLS40NzcuMTVjLS45MDUuMjU4LTEuODc1LjQzMi0zLjEyNy41MDkuMDc1LjAwMS0uMDc3LjAxLS4wNzcuMDEtLjA0My4wMDQtLjA5Ny4wMS0uMTQuMDEyLS40OTIuMDI4LTEuMDI0LjAzNC0xLjU2Ny4wMzQtLjU5NSAwLTEuMTgtLjAxMi0xLjgzNS0uMDQ1bC0uMDE2LjAxMWMyLjI3IDIuNTUzIDUuODIyIDQuMDg0IDEwLjI3NCA0LjA4NCA5LjQyIDAgMTcuNDEyLTQuMTc2IDIwLjk1LTEzLjU1MiAyLjUxMS4yNTcgNC45MjQtLjM4MyA2LjAyMS0yLjUyNS0xLjc0OC0xLjAxLTMuOTk2LS42ODgtNS4yOS0uMDM3XCJcclxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCIjMzdCMUQ5XCJcclxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgIGQ9XCJNNDEuMjE1IDEwLjEyYy4yODUtMi4yMTctMS4zNzQtMy45NTgtMi40MDMtNC43ODUtMS4xODUgMS4zNy0xLjM3IDQuOTYyLjQ5IDYuNDc1LTEuMDM3LjkyMi0zLjIyNCAxLjc1Ny01LjQ2NCAxLjc1N0g4LjE5M2MtLjExIDMuNTggMS4yMTggNi4yOTggMy41NjggNy45NCAxLjg1OC0uMDQgMy4zNzQtLjI2IDQuNTIzLS42NThhLjMyNy4zMjcgMCAwMS4yMTUuNjE5IDguOTczIDguOTczIDAgMDEtLjQ3Ny4xNSAxNC45NSAxNC45NSAwIDAxLTMuMjEuNTMxbC0uMDMtLjAyOWMzLjIwNiAxLjY0NSA3Ljg1NSAxLjYzOSAxMy4xODUtLjQwOCA1Ljk3Ni0yLjI5NiAxMS41MzgtNi42NyAxNS40MTgtMTEuNjc0YTQuNzQ4IDQuNzQ4IDAgMDAtLjE3LjA4MVwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzFCODFBNVwiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTYuNjMgMTYuNDA3Yy4xNyAxLjI1My41MzYgMi40MjUgMS4wOCAzLjQ5M2wuMzEuNTY3Yy4xOTYuMzMzLjQxLjY1NS42NDIuOTY1YTM2LjE3IDM2LjE3IDAgMDAzLjEuMDc1YzEuODU3LS4wNCAzLjM3My0uMjYgNC41MjItLjY1OGEuMzI3LjMyNyAwIDAxLjIxNS42MTkgOC45NDkgOC45NDkgMCAwMS0uNDc3LjE1Yy0uOTA1LjI1OC0xLjk1My40NDMtMy4yMDQuNTJsLS4xNjIuMDA1Yy0uNDkyLjAyOC0xLjAxOC4wNDUtMS41NjIuMDQ1LS41OTQgMC0xLjIwMi0uMDExLTEuODU2LS4wNDUgMi4yNyAyLjU1MyA1Ljg0NCA0LjA5IDEwLjI5NiA0LjA5IDguMDY1IDAgMTUuMDgzLTMuMDYyIDE5LjE1NS05LjgyNkg2LjYzelwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzFEOTFCNFwiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTguNDM5IDE2LjQwN2MuNDgyIDIuMTk5IDEuNjQgMy45MjUgMy4zMjMgNS4xIDEuODU3LS4wNCAzLjM3My0uMjYgNC41MjItLjY1OGEuMzI3LjMyNyAwIDAxLjIxNC42MTkgOC45NzQgOC45NzQgMCAwMS0uNDc2LjE1Yy0uOTA1LjI1OC0xLjk3NS40NDMtMy4yMjcuNTIgMy4yMDYgMS42NDQgNy44NDIgMS42MiAxMy4xNzItLjQyNyAzLjIyNC0xLjIzOCA2LjMyNy0zLjA4MiA5LjExMS01LjMwNEg4LjQzOHpcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMyM0EzQzJcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0xMC4yOCA5LjIyaDMuNjg1djMuNjg2SDEwLjI4VjkuMjE5em0uMzA2LjMwN2guMjkxdjMuMDcyaC0uMjlWOS41Mjd6bS41NDcgMGguMzAzdjMuMDcyaC0uMzAzVjkuNTI3em0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y5LjUyN3ptLjU2IDBoLjMwMnYzLjA3MmgtLjMwM1Y5LjUyN3ptLjU1OCAwaC4zMDJ2My4wNzJoLS4zMDJWOS41Mjd6bS41NTggMGguMjkxdjMuMDcyaC0uMjlWOS41Mjd6bTEuMTY1LTQuNTZoMy42ODd2My42ODVoLTMuNjg3VjQuOTY2em0uMzA4LjMwNmguMjl2My4wNzJoLS4yOVY1LjI3M3ptLjU0NyAwaC4zMDJ2My4wNzJoLS4zMDJWNS4yNzN6bS41NTggMGguMzAydjMuMDcyaC0uMzAyVjUuMjczem0uNTU5IDBoLjMwMnYzLjA3MmgtLjMwMlY1LjI3M3ptLjU1OCAwaC4zMDN2My4wNzJoLS4zMDNWNS4yNzN6bS41NTkgMGguMjl2My4wNzJoLS4yOVY1LjI3M3pcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzNEJCREVcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0xNC41MzIgOS4yMmgzLjY4N3YzLjY4NmgtMy42ODdWOS4yMTl6bS4zMDguMzA3aC4yOXYzLjA3MmgtLjI5VjkuNTI3em0uNTQ3IDBoLjMwMnYzLjA3MmgtLjMwMlY5LjUyN3ptLjU1OCAwaC4zMDJ2My4wNzJoLS4zMDJWOS41Mjd6bS41NTkgMGguMzAydjMuMDcyaC0uMzAyVjkuNTI3em0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y5LjUyN3ptLjU1OSAwaC4yOXYzLjA3MmgtLjI5VjkuNTI3elwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzIzQTNDMlwiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTE4Ljc4NiA5LjIyaDMuNjg2djMuNjg2aC0zLjY4NlY5LjIxOXptLjMwNy4zMDdoLjI5djMuMDcyaC0uMjlWOS41Mjd6bS41NDcgMGguMzAydjMuMDcyaC0uMzAyVjkuNTI3em0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y5LjUyN3ptLjU1OSAwaC4zMDJ2My4wNzJoLS4zMDJWOS41Mjd6bS41NTggMGguMzAzdjMuMDcyaC0uMzAzVjkuNTI3em0uNTU5IDBoLjI5MXYzLjA3MmgtLjI5MVY5LjUyN3pcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzNEJCREVcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0xOC43ODYgNC45NjZoMy42ODZ2My42ODZoLTMuNjg2VjQuOTY2em0uMzA3LjMwN2guMjl2My4wNzJoLS4yOVY1LjI3M3ptLjU0NyAwaC4zMDJ2My4wNzJoLS4zMDJWNS4yNzN6bS41NTggMGguMzAzdjMuMDcyaC0uMzAzVjUuMjczem0uNTYgMGguMzAydjMuMDcyaC0uMzAzVjUuMjczem0uNTU4IDBoLjMwMnYzLjA3MmgtLjMwMlY1LjI3M3ptLjU1OCAwaC4yOTF2My4wNzJoLS4yOVY1LjI3M3pNMjMuMDQgOS4yMmgzLjY4N3YzLjY4N2gtMy42ODdWOS4yMTl6bS4zMDcuMzA4aC4yOTF2My4wNzJoLS4yOVY5LjUyN3ptLjU0NyAwaC4zMDN2My4wNzJoLS4zMDNWOS41Mjd6bS41NTkgMGguMzAydjMuMDcyaC0uMzAyVjkuNTI3em0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y5LjUyN3ptLjU1OSAwaC4zMDN2My4wNzJoLS4zMDNWOS41Mjd6bS41NTkgMGguMjl2My4wNzJoLS4yOVY5LjUyN3pcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMyM0EzQzJcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0yMy4wNCA0Ljk2NmgzLjY4NnYzLjY4NmgtMy42ODdWNC45NjZ6bS4zMDYuMzA3aC4yOTF2My4wNzJoLS4yOVY1LjI3M3ptLjU0NyAwaC4zMDN2My4wNzJoLS4zMDNWNS4yNzN6bS41NTkgMGguMzAydjMuMDcyaC0uMzAyVjUuMjczem0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y1LjI3M3ptLjU1OSAwaC4zMDN2My4wNzJoLS4zMDNWNS4yNzN6bS41NTkgMGguMjl2My4wNzJoLS4yOVY1LjI3M3pcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzNEJCREVcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0yMy4wNC43MTNoMy42ODZ2My42ODZoLTMuNjg3Vi43MTN6bS4zMDYuMzA3aC4yOTF2My4wNzJoLS4yOVYxLjAyem0uNTQ3IDBoLjMwM3YzLjA3MmgtLjMwM1YxLjAyem0uNTU5IDBoLjMwMnYzLjA3MmgtLjMwMlYxLjAyem0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1YxLjAyem0uNTU5IDBoLjMwM3YzLjA3MmgtLjMwM1YxLjAyem0uNTU5IDBoLjI5djMuMDcyaC0uMjlWMS4wMnpcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMyM0EzQzJcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0yNy4yOTMgOS4yMmgzLjY4NnYzLjY4NmgtMy42ODZWOS4yMTl6bS4zMDYuMzA3aC4yOTJ2My4wNzJIMjcuNlY5LjUyN3ptLjU0NyAwaC4zMDN2My4wNzJoLS4zMDJWOS41Mjd6bS41NiAwaC4zMDJ2My4wNzJoLS4zMDNWOS41Mjd6bS41NTggMGguMzAydjMuMDcyaC0uMzAyVjkuNTI3em0uNTU4IDBoLjMwM3YzLjA3MmgtLjMwM1Y5LjUyN3ptLjU1OSAwaC4yOXYzLjA3MmgtLjI5VjkuNTI3elwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI0QzRUNFQ1wiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTE3Ljk4OCAxOC44ODNhMS4wMTcgMS4wMTcgMCAxMS4wMjcgMi4wMzQgMS4wMTcgMS4wMTcgMCAwMS0uMDI3LTIuMDM1elwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzM2NDU0OFwiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTE3Ljk4OCAxOS4xN2MuMDkzIDAgLjE4Mi4wMTguMjY0LjA1YS4yOTcuMjk3IDAgMTAuNDA5LjQuNzI4LjcyOCAwIDExLS42NzMtLjQ1ek0wIDE2Ljc3Nmg0Ny4zMDhjLTEuMDMtLjI2MS0zLjI2LS42MTQtMi44OTItMS45NjQtMS44NzMgMi4xNjctNi4zOSAxLjUyLTcuNTMuNDUyLTEuMjY5IDEuODQtOC42NiAxLjE0LTkuMTc1LS4yOTMtMS41OTEgMS44NjctNi41MjMgMS44NjctOC4xMTQgMC0uNTE2IDEuNDM0LTcuOTA2IDIuMTM0LTkuMTc2LjI5Mi0xLjE0IDEuMDctNS42NTYgMS43MTYtNy41My0uNDUxLjM2OCAxLjM1LTEuODYgMS43MDMtMi44OTEgMS45NjRcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNCREQ5RDdcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0yMC42OTEgMjYuMjExYy0yLjUxOC0xLjE5NS0zLjktMi44Mi00LjY3LTQuNTkzLS45MzUuMjY3LTIuMDYuNDM3LTMuMzY3LjUxLS40OTIuMDI4LTEuMDEuMDQyLTEuNTUzLjA0Mi0uNjI2IDAtMS4yODYtLjAxOC0xLjk4LS4wNTUgMi4zMSAyLjMwOSA1LjE1MiA0LjA4NiAxMC40MTMgNC4xMTguMzg4IDAgLjc3NC0uMDA4IDEuMTU3LS4wMjJcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNEM0VDRUNcIlxyXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgZD1cIk0xNi45NTcgMjMuMjU0YTguODMyIDguODMyIDAgMDEtLjkzNS0xLjYzN2MtLjkzNi4yNjctMi4wNi40MzgtMy4zNjcuNTEyLjg5Ny40ODcgMi4xOC45MzggNC4zMDIgMS4xMjVcIlxyXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjY0XCJcclxuICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjQgNDBcIlxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiM2MjFFRTVcIlxyXG4gICAgICAgICAgZD1cIk0zLjIyOCAyMC4zNjdhMS43OCAxLjc4IDAgMDAtLjU3OC0uNDA0IDEuNjk3IDEuNjk3IDAgMDAtLjY4OS0uMTQyIDEuNjkyIDEuNjkyIDAgMDAtMS4yNjYuNTQxIDEuNzE3IDEuNzE3IDAgMDAtLjM4NS41ODIgMS45MDkgMS45MDkgMCAwMC0uMTMxLjY4OWMtLjAwNS4yMzcuMDQuNDcuMTMxLjY4OC4wOTIuMjE3LjIyMy40MTUuMzkuNTgyYTEuNjkzIDEuNjkzIDAgMDAxLjI2Ny41MyAxLjc1MiAxLjc1MiAwIDAwMS4yNjYtLjUzYy4xNzItLjE2Mi4zMDQtLjM2LjM5NS0uNTc3LjA5LS4yMTguMTM2LS40NS4xMzYtLjY4OWExLjczMiAxLjczMiAwIDAwLS41MzctMS4yN3ptMjEuMTk1LTQuMTA4YTI0LjYxIDI0LjYxIDAgMDAuMTYyIDMuNGgtLjA2MWMtLjE0Mi0uMjc4LS40NTYtLjc5NC0uOTM3LTEuNTQ4TDEyLjA0IDBIOC41MzV2MjMuMTJoMi42OTRWNi40MDZhMjMuNzQ2IDIzLjc0NiAwIDAwLS4xMjYtMy4xNzNoLjEwMWMuMTkzLjUwNy40NC45OTIuNzM1IDEuNDQ4bDExLjg2IDE4LjQ0aDMuMzE4VjBoLTIuNjk0djE2LjI1OXptMjAuOTYyIDQuMzIxaC05LjUyMnYtOC4wMWg4LjMzMnYtMi40NGgtOC4zMzJWMi40NWg4Ljk0VjBoLTExLjd2MjMuMTJINDUuMzdsLjAxNS0yLjU0ek00Ny40NDYgMHYyLjQ1aDYuNjM1djIwLjY3aDIuNjk0VjIuNDVoNi43MVYwSDQ3LjQ0NnpNMjEuMDQgMjguODY5YTUuMDg2IDUuMDg2IDAgMDAtMS43ODMgMS4xOTkgNS42NzMgNS42NzMgMCAwMC0xLjUzNSA0LjEzNCA1LjQxNCA1LjQxNCAwIDAwMS4zNjggMy44MDUgNC43MTQgNC43MTQgMCAwMDMuNjM2IDEuNDU3IDYuMjIyIDYuMjIyIDAgMDAyLjkzOC0uNjIybC4wMS0xLjE3OWMtLjg0MS40OTEtMS43OTguNzM0LTIuNzcuNzA5YTMuNTggMy41OCAwIDAxLTIuNzk2LTEuMTU0IDQuNDEgNC40MSAwIDAxLTEuMDY0LTMuMTA3Yy0uMDYtMS4yLjM1LTIuMzczIDEuMTQtMy4yNzRhMy45MTYgMy45MTYgMCAwMTEuMzQ3LS45NjEgMy44OTMgMy44OTMgMCAwMTEuNjI2LS4zMSA1LjAzMiA1LjAzMiAwIDAxMi41MzIuNjM0di0xLjI3YTYuMjAxIDYuMjAxIDAgMDAtMi41MzItLjQ0NiA1LjQ5MiA1LjQ5MiAwIDAwLTIuMTE3LjM4NXptMTIuNjI1IDMuNjIzYTMuNDAzIDMuNDAzIDAgMDAtMi42NDMtMS4wNTMgMy43MyAzLjczIDAgMDAtMS41MjUuMjQ4Yy0uNDg2LjE4Ny0uOTI3LjQ3LTEuMzAxLjgzYTQuMTI3IDQuMTI3IDAgMDAtLjgyNiAxLjM5MiA0LjAxNyA0LjAxNyAwIDAwLS4yMjMgMS42MDQgMy45NjggMy45NjggMCAwMC45OTggMi44MjggMy40OSAzLjQ5IDAgMDAyLjY5NCAxLjEyOCAzLjYzOCAzLjYzOCAwIDAwMS41LS4yNzggMy41NDYgMy41NDYgMCAwMDEuMjUtLjg3NSA0LjA3NyA0LjA3NyAwIDAwMS4wMjMtMi45MTUgNC4xODggNC4xODggMCAwMC0uOTQ3LTIuOTF6bS0uOTI2IDUuMTk3YTIuMjI2IDIuMjI2IDAgMDEtMS44MDguNzY0IDIuMzQgMi4zNCAwIDAxLTEuODQ5LS43ODRjLS40ODUtLjYwMS0uNzMtMS4zNi0uNjg0LTIuMTMxYTMuMjk1IDMuMjk1IDAgMDEuNjg0LTIuMjA2Yy4yMjgtLjI2My41MTEtLjQ3LjgzLS42MTMuMzItLjEzNi42Ny0uMjAyIDEuMDE0LS4xODdhMi4yMzkgMi4yMzkgMCAwMTEuODEzLjc5Yy40Ni42MzYuNjg0IDEuNDEyLjYzMyAyLjE5Ni4wNS43NjktLjE3MiAxLjU0My0uNjMzIDIuMTd6bTUuODctNS42OTNjLS4zOC4zMzktLjY1OS43OC0uNzk2IDEuMjd2LTEuNTg5aC0xLjI2NnY3LjYxaDEuMjY2di0zLjg4YTMuNDEgMy40MSAwIDAxLjUxNy0yLjAwNGMuMTM3LS4yMTguMzE5LS40LjU0Mi0uNTI3LjIyMy0uMTI2LjQ3LS4yMDIuNzI0LS4yMDcuMzI0LS4wMjUuNjQ4LjA2LjkyMi4yNDN2LTEuMjU1YTIuMDQ3IDIuMDQ3IDAgMDAtLjcyLS4xMDEgMS43ODcgMS43ODcgMCAwMC0xLjE5LjQ0em05LjMxOCAzLjE0MmE0LjAyOCA0LjAyOCAwIDAwLS44MS0yLjY4NyAyLjg5MyAyLjg5MyAwIDAwLTEuMDQzLS43NDljLS40LS4xNjctLjgzMS0uMjQzLTEuMjYxLS4yMTdhMy4yMyAzLjIzIDAgMDAtMi41MzMgMS4xMTggNC4xNTYgNC4xNTYgMCAwMC0uOTk4IDIuODkgNC4yMzggNC4yMzggMCAwMC45MjIgMi45MTRjLjMyLjM1LjcxNC42MjMgMS4xNS44MDUuNDM1LjE4Mi45MTIuMjU4IDEuMzgzLjIzOGE0LjQwMyA0LjQwMyAwIDAwMi42NDMtLjcyNHYtMS4xNDRhMy44MDQgMy44MDQgMCAwMS0yLjM1NS44NSAyLjM1IDIuMzUgMCAwMS0xLjc5OC0uNjg4IDIuODIyIDIuODIyIDAgMDEtLjY0My0xLjk1M2g1LjM1M2wtLjAxLS42NTN6bS01LjM1My0uMzU0Yy4wNjYtLjYwMi4zMy0xLjE2OS43NDQtMS42MWExLjk1NiAxLjk1NiAwIDAxMS40NTktLjYyMSAxLjcyMSAxLjcyMSAwIDAxMS4zOTMuNTgxYy4zNTQuNDcxLjUzMiAxLjA0OC41MDYgMS42MzVsLTQuMTAyLjAxNXpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGNsaXBQYXRoPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgMEg2My41NDZWNDBIMHpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxMzhcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMzggNDBcIlxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgICAgZD1cIk0uODk1IDMxLjA0MVYxNS43NDRoMTkuMDk4di0uODk0SC44OTZWLjg5NUgyMS4yVjBIMHYzMS45MzZoMjEuMzh2LS44OTVILjg5NXpNMzguNiA4Ljk0NmwtNy45MTcgMTAuNDIxLTcuNzM3LTEwLjQyMWgtMS4xNjNsOC4zNjQgMTEuMDkyLTkuMTcgMTEuODk4aDEuMDc0bDguNjMzLTExLjIyNyA4LjY3NyAxMS4yMjdoMS4xMThsLTkuMjE0LTExLjg5OCA4LjQwOS0xMS4wOTJIMzguNnptNC41NjMgMzAuODYyVjI1LjQ5NWguMDljLjUzNiAyLjA4NyAxLjU5NCAzLjc2NSAzLjE3NSA1LjAzMiAxLjU4IDEuMjY3IDMuNTkzIDEuOSA2LjAzOCAxLjkgMS41OCAwIDIuOTgyLS4zMiA0LjIwNS0uOTZhOC45NDQgOC45NDQgMCAwMDMuMDYzLTIuNjE3Yy44Mi0xLjEwNCAxLjQ0Ny0yLjM4NiAxLjg4LTMuODQ3LjQzMS0xLjQ2MS42NDgtMi45OTcuNjQ4LTQuNjA3IDAtMS43My0uMjI0LTMuMzI1LS42NzEtNC43ODYtLjQ0OC0xLjQ2MS0xLjA5Ni0yLjcyOC0xLjk0Ni0zLjgwMmE4Ljk1IDguOTUgMCAwMC0zLjA4Ni0yLjUwNWMtMS4yMDgtLjU5Ni0yLjU3Mi0uODk0LTQuMDkzLS44OTQtMS4xNjMgMC0yLjI0NC4xNzEtMy4yNDMuNTE0YTguNjggOC42OCAwIDAwLTIuNjYxIDEuNDU0IDkuODQyIDkuODQyIDAgMDAtMi4wMTMgMi4yMTRjLS41NjYuODUtLjk5OSAxLjc4Mi0xLjI5NyAyLjc5NmgtLjA5VjguOTQ1aC0uODk0djMwLjg2MmguODk1em05LjMwMy04LjIzYy0yLjgwMyAwLTUuMDU0LS45NjItNi43NTQtMi44ODUtMS43LTEuOTIzLTIuNTUtNC42ODktMi41NS04LjI5NyAwLTEuNDkuMjEtMi45MDcuNjI3LTQuMjUuNDE3LTEuMzQxIDEuMDIxLTIuNTE5IDEuODExLTMuNTMzYTguNjk4IDguNjk4IDAgMDEyLjkzLTIuNDE1YzEuMTYzLS41OTYgMi40NzUtLjg5NSAzLjkzNi0uODk1IDEuNDkxIDAgMi43OTYuMjk5IDMuOTE0Ljg5NWE3LjkzNiA3LjkzNiAwIDAxMi43NzMgMi40MzhjLjczIDEuMDI5IDEuMjgyIDIuMjA2IDEuNjU1IDMuNTMzcy41NiAyLjczNi41NiA0LjIyN2ExNS45NCAxNS45NCAwIDAxLS41MTUgNC4wMDNjLS4zNDMgMS4zMjctLjg3MyAyLjUyLTEuNTg4IDMuNTc4YTguNjQgOC42NCAwIDAxLTIuNzUxIDIuNTk1Yy0xLjExOC42Ny0yLjQ2NyAxLjAwNi00LjA0OCAxLjAwNnptMTQuNzE2LjM1OFYxOC45MmMwLTEuMjUyLjE3OS0yLjQ3NS41MzctMy42NjhhOC45ODcgOC45ODcgMCAwMTEuNjU0LTMuMTUzYy43NDYtLjkxIDEuNjkzLTEuNjI1IDIuODQtMi4xNDcgMS4xNDktLjUyMiAyLjUxMy0uNzM4IDQuMDkzLS42NDlWOC40MWMtMS4zNzEtLjAzLTIuNTcyLjEyLTMuNi40NDctMS4wMy4zMjgtMS45MTYuNzc1LTIuNjYyIDEuMzQyYTYuODYgNi44NiAwIDAwLTEuNzg5IDEuOTkgOC44OTkgOC44OTkgMCAwMC0uOTg0IDIuNDM4aC0uMDl2LTUuNjhoLS44OTR2MjIuOTloLjg5NXpNNzcuNDI0IDIwLjYyaDE5LjIzNGMuMDYtMS41OC0uMDk3LTMuMTAyLS40Ny00LjU2My0uMzczLTEuNDYtLjk3LTIuNzU4LTEuNzktMy44OS0uODItMS4xMzQtMS44NzgtMi4wNDMtMy4xNzUtMi43My0xLjI5Ny0uNjg1LTIuODQtMS4wMjgtNC42My0xLjAyOGE5LjI1OSA5LjI1OSAwIDAwLTMuNzU2LjgwNSA5LjM0NSA5LjM0NSAwIDAwLTMuMjIgMi4zNDhjLS45MjUgMS4wMjktMS42NyAyLjI4OS0yLjIzNyAzLjc4LS41NjcgMS40OS0uODUgMy4xOS0uODUgNS4wOTkgMCAxLjcuMTk0IDMuMjg3LjU4MSA0Ljc2My4zODggMS40NzYuOTg0IDIuNzU5IDEuNzkgMy44NDdhOC4wNzEgOC4wNzEgMCAwMDMuMTA4IDIuNTI3YzEuMjY3LjU5NyAyLjc5Ni44OCA0LjU4NS44NSAyLjYyNCAwIDQuODMtLjczOCA2LjYyLTIuMjE0IDEuNzg5LTEuNDc2IDIuODQ3LTMuNTU2IDMuMTc1LTYuMjRoLS44OTRjLS4zODggMi41MzUtMS4zOCA0LjQzNi0yLjk3NSA1LjcwMy0xLjU5NSAxLjI2Ny0zLjYgMS45MDEtNi4wMTYgMS45MDEtMS42NCAwLTMuMDI2LS4yODMtNC4xNi0uODVhNy41MzUgNy41MzUgMCAwMS0yLjc3My0yLjMyNmMtLjcxNS0uOTg0LTEuMjQ1LTIuMTQtMS41ODctMy40NjYtLjM0My0xLjMyNy0uNTMtMi43NjYtLjU2LTQuMzE2em0xOC4zMzktLjg5NUg3Ny40MjRjLjA5LTEuNjEuMzg4LTMuMDU2Ljg5NS00LjMzOS41MDctMS4yODIgMS4xNy0yLjM3OCAxLjk5LTMuMjg3YTguMzE5IDguMzE5IDAgMDEyLjg2My0yLjA4IDguNjQ5IDguNjQ5IDAgMDEzLjUxMS0uNzE2YzEuNDkxIDAgMi44MDMuMjc2IDMuOTM2LjgyOGE4LjEyNyA4LjEyNyAwIDAxMi44NCAyLjI1OWMuNzYuOTU0IDEuMzM1IDIuMDY1IDEuNzIyIDMuMzMyLjM4OCAxLjI2Ny41ODIgMi42MDIuNTgyIDQuMDAzem0xOS40NTctMy45OGguODk0YzAtMi41NjUtLjc0NS00LjQyOS0yLjIzNi01LjU5Mi0xLjQ5MS0xLjE2My0zLjUxOS0xLjc0NC02LjA4My0xLjc0NC0xLjQzMSAwLTIuNjM5LjE3OS0zLjYyMy41MzctLjk4NC4zNTctMS43ODkuODItMi40MTUgMS4zODYtLjYyNy41NjctMS4wNzQgMS4xOTMtMS4zNDIgMS44NzktLjI2OS42ODYtLjQwMyAxLjM0Mi0uNDAzIDEuOTY4IDAgMS4yNTIuMjI0IDIuMjUxLjY3MSAyLjk5Ny40NDcuNzQ1IDEuMTQ4IDEuMzI3IDIuMTAyIDEuNzQ0YTE2LjEyIDE2LjEyIDAgMDAyLjIzNy44MDVjLjgzNS4yMzkgMS44MDQuNDkyIDIuOTA3Ljc2Ljk4NC4yNCAxLjk1My40NzggMi45MDcuNzE2Ljk1NS4yMzkgMS43OTcuNTYgMi41MjguOTYyLjczLjQwMiAxLjMyNi45MTcgMS43ODkgMS41NDMuNDYyLjYyNi42OTMgMS40NDYuNjkzIDIuNDYgMCAuOTg0LS4yMzEgMS44MTktLjY5MyAyLjUwNWE1LjU5NCA1LjU5NCAwIDAxLTEuNzY3IDEuNjc3IDcuODY2IDcuODY2IDAgMDEtMi4zOTMuOTRjLS44OC4xOTMtMS43MzcuMjktMi41NzIuMjktMi43MTMgMC00Ljc5My0uNjA0LTYuMjM5LTEuODExLTEuNDQ3LTEuMjA4LTIuMTctMy4xMDktMi4xNy01LjcwM2gtLjg5NGMwIDIuODkyLjc4MiA1LjAxIDIuMzQ4IDYuMzUxIDEuNTY1IDEuMzQyIDMuODg0IDIuMDEzIDYuOTU1IDIuMDEzLjk4NCAwIDEuOTc2LS4xMTIgMi45NzUtLjMzNWE4LjI3NSA4LjI3NSAwIDAwMi42ODMtMS4wOTYgNi4wNjkgNi4wNjkgMCAwMDEuOTI0LTEuOTY4Yy40OTItLjgwNS43MzgtMS43OS43MzgtMi45NTMgMC0xLjEwMy0uMjE3LTEuOTk3LS42NDktMi42ODNhNS40MzQgNS40MzQgMCAwMC0xLjctMS43IDkuMDEgOS4wMSAwIDAwLTIuMzctMS4wNSAxMzguNSAxMzguNSAwIDAwLTIuNjYyLS43MzkgNDY1LjYyMyA0NjUuNjIzIDAgMDAtMy4yODctLjg1IDE5Ljk3MiAxOS45NzIgMCAwMS0yLjYxNy0uODVjLS43NzUtLjMyOC0xLjM5NC0uNzk3LTEuODU2LTEuNDA5LS40NjItLjYxLS42OTMtMS40ODMtLjY5My0yLjYxNiAwLS4yMDkuMDU5LS41ODIuMTc5LTEuMTE4LjExOS0uNTM3LjQwMi0xLjA4MS44NS0xLjYzMy40NDctLjU1MiAxLjEzMy0xLjA0NCAyLjA1Ny0xLjQ3Ni45MjQtLjQzMiAyLjE5Mi0uNjQ5IDMuODAyLS42NDkgMS4xMDMgMCAyLjExLjEyIDMuMDE5LjM1OC45MS4yMzkgMS42OTIuNjE5IDIuMzQ4IDEuMTRhNS4xOTIgNS4xOTIgMCAwMTEuNTIxIDEuOTkxYy4zNTguODA1LjUzNyAxLjc5LjUzNyAyLjk1MnptMjAuNzA5IDBoLjg5NGMwLTIuNTY1LS43NDUtNC40MjktMi4yMzYtNS41OTItMS40OTEtMS4xNjMtMy41MTktMS43NDQtNi4wODMtMS43NDQtMS40MzEgMC0yLjYzOS4xNzktMy42MjMuNTM3LS45ODQuMzU3LTEuNzg5LjgyLTIuNDE1IDEuMzg2LS42MjYuNTY3LTEuMDc0IDEuMTkzLTEuMzQyIDEuODc5LS4yNjguNjg2LS40MDMgMS4zNDItLjQwMyAxLjk2OCAwIDEuMjUyLjIyNCAyLjI1MS42NzEgMi45OTcuNDQ4Ljc0NSAxLjE0OCAxLjMyNyAyLjEwMiAxLjc0NC42NTcuMjk4IDEuNDAyLjU2NyAyLjIzNy44MDUuODM1LjIzOSAxLjgwNC40OTIgMi45MDcuNzYuOTg0LjI0IDEuOTUzLjQ3OCAyLjkwOC43MTYuOTU0LjIzOSAxLjc5Ni41NiAyLjUyNy45NjIuNzMuNDAyIDEuMzI3LjkxNyAxLjc4OSAxLjU0My40NjIuNjI2LjY5MyAxLjQ0Ni42OTMgMi40NiAwIC45ODQtLjIzMSAxLjgxOS0uNjkzIDIuNTA1YTUuNTg0IDUuNTg0IDAgMDEtMS43NjcgMS42NzcgNy44NjYgNy44NjYgMCAwMS0yLjM5My45NGMtLjg4LjE5My0xLjczNy4yOS0yLjU3Mi4yOS0yLjcxMyAwLTQuNzkzLS42MDQtNi4yMzktMS44MTEtMS40NDctMS4yMDgtMi4xNy0zLjEwOS0yLjE3LTUuNzAzaC0uODk0YzAgMi44OTIuNzgzIDUuMDEgMi4zNDggNi4zNTEgMS41NjYgMS4zNDIgMy44ODQgMi4wMTMgNi45NTUgMi4wMTMuOTg0IDAgMS45NzYtLjExMiAyLjk3NS0uMzM1YTguMjY2IDguMjY2IDAgMDAyLjY4My0xLjA5NiA2LjA1OSA2LjA1OSAwIDAwMS45MjQtMS45NjhjLjQ5Mi0uODA1LjczOC0xLjc5LjczOC0yLjk1MyAwLTEuMTAzLS4yMTctMS45OTctLjY0OS0yLjY4M2E1LjQzNCA1LjQzNCAwIDAwLTEuNy0xLjcgOC45OTYgOC45OTYgMCAwMC0yLjM3LTEuMDVjLS44OC0uMjU0LTEuNzY3LS41LTIuNjYxLS43MzlhNDc5LjA4IDQ3OS4wOCAwIDAwLTMuMjg4LS44NSAyMC4wMjEgMjAuMDIxIDAgMDEtMi42MTctLjg1Yy0uNzc1LS4zMjgtMS4zOTQtLjc5Ny0xLjg1Ni0xLjQwOS0uNDYyLS42MS0uNjkzLTEuNDgzLS42OTMtMi42MTYgMC0uMjA5LjA2LS41ODIuMTc5LTEuMTE4LjExOS0uNTM3LjQwMi0xLjA4MS44NS0xLjYzMy40NDctLjU1MiAxLjEzMy0xLjA0NCAyLjA1Ny0xLjQ3Ni45MjUtLjQzMiAyLjE5Mi0uNjQ5IDMuODAyLS42NDkgMS4xMDMgMCAyLjExLjEyIDMuMDE5LjM1OC45MS4yMzkgMS42OTIuNjE5IDIuMzQ4IDEuMTRhNS4xOTIgNS4xOTIgMCAwMTEuNTIxIDEuOTkxYy4zNTguODA1LjUzNyAxLjc5LjUzNyAyLjk1MnpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGNsaXBQYXRoPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTAgMEgxMzcuNDVWNDBIMHpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDQwIDQwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgZD1cIk0yMCAzLjc0NWExNi42NjcgMTYuNjY3IDAgMDAtNS4yNyAzMi40NzljLjgzMi4xNDYgMS4xNDUtLjM1NCAxLjE0NS0uNzkyIDAtLjM5Ni0uMDItMS43MDgtLjAyLTMuMTA0LTQuMTg4Ljc3MS01LjI3Mi0xLjAyLTUuNjA1LTEuOTU4YTYuMDYxIDYuMDYxIDAgMDAtMS43MDgtMi4zNTRjLS41ODQtLjMxMy0xLjQxNy0xLjA4NC0uMDIxLTEuMTA0YTMuMzM0IDMuMzM0IDAgMDEyLjU2MiAxLjcwOCAzLjU2MSAzLjU2MSAwIDAwNC44NTQgMS4zNzVjLjA3My0uODQ4LjQ1LTEuNjQgMS4wNjMtMi4yMy0zLjcwOC0uNDE2LTcuNTgzLTEuODU0LTcuNTgzLTguMjI5YTYuNDg2IDYuNDg2IDAgMDExLjcwOC00LjQ3OSA1Ljk5IDUuOTkgMCAwMS4xNjctNC40MTZzMS4zOTUtLjQzOCA0LjU4MyAxLjcwOGMyLjcyNy0uNzUgNS42MDYtLjc1IDguMzMzIDAgMy4xODgtMi4xNjcgNC41ODQtMS43MDggNC41ODQtMS43MDhhNS45ODkgNS45ODkgMCAwMS4xNjYgNC40MTYgNi40NDggNi40NDggMCAwMTEuNzA5IDQuNDhjMCA2LjM5NS0zLjg5NiA3LjgxMi03LjYwNSA4LjIyOWEzLjk0OSAzLjk0OSAwIDAxMS4xMjUgMy4wODNjMCAyLjIzLS4wMiA0LjAyLS4wMiA0LjU4MyAwIC40MzguMzEyLjk1OSAxLjE0NS43OTJBMTYuNjc2IDE2LjY3NiAwIDAwMjAgMy43NDR6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICBoZWlnaHQ9XCI0MVwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAzMCA0MVwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNGNDQzMzZcIlxyXG4gICAgICAgIGQ9XCJNMTQuNjUgMjEuMjNjLS45OTgtMS42MDgtMS43MjItMi45NDItMi43MjUtNS40NTRDMTAuMjI5IDExLjUzMyAyMi4yMzkgNy42OTkgMTcuMzcuMzMyYzIuMTEgNS4wODktNy41NzcgOC4yMzUtOC40NzcgMTIuNDczLS44MjMgMy44OTggNS43NTIgOC40MjYgNS43NTcgOC40MjZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI0Y0NDMzNlwiXHJcbiAgICAgICAgZD1cIk0xNC44NzggMTMuNjAzYy0uMTkyIDIuNTE2IDIuMjI5IDMuODU3IDIuMjk5IDUuNjk1LjA1NiAxLjQ5Ni0xLjQ0NyAyLjc0My0xLjQ0NyAyLjc0M3MyLjcyOC0uNTM3IDMuNTc5LTIuODE4Yy45NDQtMi41MzQtMS44MzQtNC4yNy0xLjU0OC02LjI5OC4yNjctMS45MzggNi4wMy01LjU0MyA2LjAzLTUuNTQzcy04LjQ4LjU2Mi04LjkxMyA2LjIyelwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMxNTY1QzBcIlxyXG4gICAgICAgIGQ9XCJNMjMuMDgzIDIxLjM4OGMxLjc1NC0uMzk0IDMuMjMzLjcyMyAzLjIzMyAyLjAxIDAgMi45LTQuMDIgNS42NDItNC4wMiA1LjY0MnM2LjIyNC0uNzQyIDYuMjI0LTUuNTA1YzAtMy4xNS0zLjA1Ny0zLjkzNi01LjQzNy0yLjE0N3ptLTIuOTU0IDIuMzRzMS45NC0xLjM4MyAyLjQ1Ny0xLjkwMmMtNC43NjIgMS4wMS0xNS42MzcgMS4xNDYtMTUuNjM3LjI2OSAwLS44MSAzLjUwNy0xLjYzOCAzLjUwNy0xLjYzOHMtNy43NzMtLjExMi03Ljc3MyAyLjE4YzAgMi4zOSAxMC4xNzUgMi41NjEgMTcuNDQ1IDEuMDl6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzE1NjVDMFwiXHJcbiAgICAgICAgZD1cIk0xOC45MzUgMjUuOTAzYy00LjUxIDEuNS0xMi44MTQgMS4wMi0xMC4zNTQtLjk5Mi0xLjE5OCAwLTIuOTc0Ljk2Mi0yLjk3NCAxLjg4OCAwIDEuODU3IDguOTgyIDMuMjkxIDE1LjYzLjU3MmwtMi4zMDItMS40Njh6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzE1NjVDMFwiXHJcbiAgICAgICAgZD1cIk05LjY4NiAyOS4wNzFjLTEuNjM2IDAtMi42OTUgMS4wNTQtMi42OTUgMS44MjIgMCAyLjM5MSA5Ljc2IDIuNjMyIDEzLjYyNy4yMDVsLTIuNDU4LTEuNjMyYy0yLjg5IDEuMjctMTAuMTQ2IDEuNDQ1LTguNDc0LS4zOTV6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzE1NjVDMFwiXHJcbiAgICAgICAgZD1cIk0yNy4yOCAzMi45NjRjMC0uOTM2LTEuMDU1LTEuMzc3LTEuNDMzLTEuNTg4IDIuMjI4IDUuMzczLTIyLjMxNiA0Ljk1Ni0yMi4zMTYgMS43ODQgMC0uNzIgMS44MDctMS40MjcgMy40NzctMS4wOTNsLTEuNDItLjgzOUMyLjI2IDMwLjcwNiAwIDMyLjE3IDAgMzMuMzVjMCA1LjUwMyAyNy4yOCA1LjIzOCAyNy4yOC0uMzg1elwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMxNTY1QzBcIlxyXG4gICAgICAgIGQ9XCJNMzAgMzQuOTM2Yy00LjE0NiA0LjA5NS0xNC42NiA1LjU4Ny0yNS4yMzEgMy4wNTcgMTAuNTcyIDQuNTAzIDI1LjE4IDEuOTY3IDI1LjIzLTMuMDU3elwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM3XCJcclxuICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzcgNDBcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCIjQzYzRDE0XCJcclxuICAgICAgICBkPVwiTTMzLjk1MSAxOS42OTRhMy43MjMgMy43MjMgMCAwMC00LjExNC0zLjcwMkwzNC45NS45MDlIMTMuMjJsNS4xMDYgMTUuMDdhMy43MjMgMy43MjMgMCAwMC0xLjM1NyA3LjI2NCAxNi4yNjMgMTYuMjYzIDAgMDEtMi45MjcgMy42ODRjLTEuNTQzIDEuNDU1LTMuMzA4IDIuNTU4LTUuMjE3IDMuMjM4LTIuMjc0LTEuMTY3LTMuMzQ3LTMuNzY1LTIuMzc4LTYuMDQyLjEwOS0uMjU3LjIyLS41MTguMzI3LS43NzdhMy43MjQgMy43MjQgMCAxMC0yLjk4Ni0uNTc3Yy0uOTIxIDIuMDk5LTIuMjc2IDQuMjk0LTIuNjk4IDYuODQtLjUwNiAzLjA1LS4wMDEgNi4yODcgMi42MzYgOC4xMTUgNi4xNDQgNC4yNTggMTIuODEzLTIuNjQgMTkuODQ0LTQuMzczIDIuNTQ4LS42MjkgNS4zNDYtLjUyNyA3LjU5LTEuODI4IDEuNjg3LS45NzYgMi43OTgtMi41OTQgMy4xMTQtNC40MTEuMzExLTEuNzk1LS4xNDMtMy41ODItMS4xODgtNS4wMzEuNTQtLjY0Ni44NjYtMS40NzguODY2LTIuMzg3em0tMTIuMTMuMDE0bC4wMDEtLjAxNGMwLTEuMzUtLjcxOS0yLjUzMi0xLjc5NS0zLjE4NWw0LjA2NS04LjIxOSA0LjA3MSA4LjMwNmEzLjcyIDMuNzIgMCAwMC0xLjY1OCAzLjA5OGwuMDAyLjA4MS00LjY4NS0uMDY3elwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgIGQ9XCJNMzQuODYgMTkuNjk0YTQuNjM5IDQuNjM5IDAgMDAtMy43NzYtNC41NTFMMzYuMjIgMEgxMS45NWw1LjE0MiAxNS4xNzNhNC42NCA0LjY0IDAgMDAtMy42MjYgNC41MjFjMCAxLjY1OS44NzcgMy4xMTYgMi4xOSAzLjkzNGExNS41MTYgMTUuNTE2IDAgMDEtMi4yNCAyLjYzN2MtMS4zNiAxLjI4NS0yLjg3OCAyLjI2LTQuNTEzIDIuOS0xLjY0OC0xLjAzNS0yLjM0NC0yLjk4Ni0xLjYyLTQuNjg2bC4wNTYtLjEzMy4xMDYtLjI1YTQuNjQgNC42NCAwIDAwMy4xMTItNC4zNzUgNC42MzggNC42MzggMCAwMC00LjYzMy00LjYzMiA0LjYzOCA0LjYzOCAwIDAwLTQuNjMyIDQuNjMyYzAgMS4yOS41MyAyLjQ1NyAxLjM4MiAzLjI5Ny0uMTU0LjMzLS4zMTcuNjY1LS40ODQgMS4wMDhDMS40MSAyNS42MjguNTI2IDI3LjQ0NC4xOTIgMjkuNDZjLS42NjQgNC4wMDQuNDA3IDcuMjA1IDMuMDE1IDkuMDEzQzQuNzkgMzkuNTY5IDYuMzk3IDQwIDguMDE1IDQwYzMuMDQ2IDAgNi4xMjctMS41MyA5LjE0LTMuMDI3IDIuMTctMS4wNzggNC40MTUtMi4xOTMgNi42MzItMi43NC44MjUtLjIwMyAxLjY3NC0uMzI1IDIuNTcyLS40NTUgMS43ODItLjI1NyAzLjYyNC0uNTIzIDUuMjU2LTEuNDY4IDEuODkyLTEuMDk2IDMuMTg3LTIuOTM0IDMuNTU0LTUuMDQzLjMxNC0xLjgxLS4wNjUtMy42MjMtLjk4Ny01LjE2MS40My0uNzAzLjY3OC0xLjUyOS42NzgtMi40MTJ6bS0xLjgxOCAwYTIuODE3IDIuODE3IDAgMDEtMi44MTQgMi44MTQgMi44MTcgMi44MTcgMCAwMS0yLjgxNC0yLjgxNCAyLjgxNyAyLjgxNyAwIDAxMi44MTQtMi44MTMgMi44MTcgMi44MTcgMCAwMTIuODE0IDIuODEzem0uNjQtMTcuODc1TDI5LjE0OCAxNS4xOWE0LjU2NCA0LjU2NCAwIDAwLS41NzQuMTc4bC00LjQ3OS05LjEzNi00LjQ5MSA5LjA4MmE0LjU5IDQuNTkgMCAwMC0uNi0uMTYzTDE0LjQ4OCAxLjgyaDE5LjE5NXpNMTguMDk5IDE2Ljg4YTIuODE3IDIuODE3IDAgMDEyLjgxNCAyLjgxMyAyLjgxNyAyLjgxNyAwIDAxLTIuODE0IDIuODE0IDIuODE3IDIuODE3IDAgMDEtMi44MTQtMi44MTQgMi44MTcgMi44MTcgMCAwMTIuODE0LTIuODEzem0tMTIuMTc1LjAyNmEyLjgxNyAyLjgxNyAwIDAxMi44MTQgMi44MTQgMi44MTcgMi44MTcgMCAwMS0yLjgxNCAyLjgxNCAyLjgxNyAyLjgxNyAwIDAxLTIuODE0LTIuODE0IDIuODE3IDIuODE3IDAgMDEyLjgxNC0yLjgxNHptMjcuNDUzIDEwLjA1Yy0uMjc0IDEuNTc2LTEuMjQ4IDIuOTU0LTIuNjczIDMuNzgtMS4zMjguNzY5LTIuOTIuOTk4LTQuNjA1IDEuMjQxLS45MDIuMTMtMS44MzYuMjY1LTIuNzQ4LjQ5LTIuNDEuNTk0LTQuNzQ2IDEuNzU0LTcuMDA1IDIuODc2LTQuNTE5IDIuMjQ1LTguNDIyIDQuMTg0LTEyLjEwMyAxLjYzMy0yLjY5NS0xLjg2OC0yLjU3MS01LjMyNS0yLjI1Ny03LjIyLjI5MS0xLjc1NSAxLjA3OC0zLjM3MSAxLjgzOS00LjkzNS4xMzItLjI3LjI2LS41MzUuMzg1LS43OTguMzc4LjE1Ljc3OS4yNTMgMS4xOTcuMy0uNzc0IDIuNTU3LjQ0NCA1LjMzNyAzLjAwMSA2LjY1bC4zNS4xOC4zNy0uMTMyYzIuMDIyLS43MiAzLjg4NS0xLjg3NSA1LjUzNy0zLjQzNGExNy4yNTUgMTcuMjU1IDAgMDAyLjc0LTMuMzEzIDQuNjM4IDQuNjM4IDAgMDA1LjMyNi00LjU4YzAtMS4zNzQtLjYwMS0yLjYxLTEuNTU0LTMuNDU5bDIuOTExLTUuODg3IDIuOTQxIDZhNC42MTkgNC42MTkgMCAwMC0xLjQzNCAzLjM0NSA0LjYzOCA0LjYzOCAwIDAwNC42MzMgNC42MzNjLjk4MSAwIDEuODkyLS4zMDggMi42NDItLjgzYTUuNjUzIDUuNjUzIDAgMDEuNTA3IDMuNDZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDQwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzEwQUE1MFwiXHJcbiAgICAgICAgZD1cIk0xNy42MzQgMTUuOTE4Yy0yLjEwNy05LjI5Ni02LjUtMTEuNzctNy42Mi0xMy41MkExOS44OTcgMTkuODk3IDAgMDE4Ljc5IDBjLS4wNi44MjYtLjE2OCAxLjM0Ni0uODcgMS45NzJDNi41MSAzLjIzLjUyNCA4LjEwNy4wMiAxOC42N2MtLjQ2OSA5Ljg0OCA3LjI0IDE1LjkyIDguMjU5IDE2LjU0OS43ODMuMzg1IDEuNzM3LjAwOCAyLjIwMi0uMzQ2IDMuNzE2LTIuNTUgOC43OTQtOS4zNSA3LjE1Ny0xOC45NTRcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCIjQjhDNEMyXCJcclxuICAgICAgICBkPVwiTTkuMTA5IDI5Ljk3NGMtLjE5NSAyLjQzOC0uMzM0IDMuODU0LS44MjYgNS4yNDcgMCAwIC4zMjMgMi4zMi41NSA0Ljc3OWguODA0Yy4xOTItMS43MzEuNDg1LTMuNDUuODc3LTUuMTQ2LTEuMDQtLjUxMi0xLjM2Ni0yLjc0LTEuNDA1LTQuODh6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzEyOTI0RlwiXHJcbiAgICAgICAgZD1cIk0xMC41MTMgMzQuODU0Yy0xLjA1MS0uNDg2LTEuMzU1LTIuNzYtMS40MDItNC44OC4yNi0zLjQ5Ny4zMzYtNy4wMDUuMjI3LTEwLjUxLS4wNTUtMS44MzguMDI2LTE3LjAzLS40NTMtMTkuMjU1YTE4LjQ5IDE4LjQ5IDAgMDAxLjEzIDIuMTg3YzEuMTIgMS43NTEgNS41MTQgNC4yMjYgNy42MiAxMy41MjIgMS42NCA5LjU4OC0zLjQxIDE2LjM3LTcuMTIyIDE4LjkzNnpcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDQwIDQwXCJcclxuICAgID5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjMDA2NzhDXCJcclxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTM2Ljg0NSAzMS4xNThjLTIuMTc2LS4wNi0zLjg2NC4xNjItNS4yNzguNzU3LS40MDcuMTY0LTEuMDYxLjE2NC0xLjExNS42NzYuMjE4LjIxNS4yNDQuNTY4LjQzNS44NjYuMzI2LjU0Ljg5OCAxLjI3IDEuNDE1IDEuNjQ4bDEuNzQgMS4yNDRjMS4wNjEuNjQ4IDIuMjU4IDEuMDI3IDMuMjkyIDEuNjc2LjU5OC4zNzkgMS4xOTcuODY1IDEuNzk1IDEuMjcxLjMwNS4yMTcuNDkuNTY5Ljg3MS43MDN2LS4wODJjLS4xOS0uMjQyLS4yNDUtLjU5My0uNDM1LS44NjVsLS44MTctLjc4M2MtLjc4OC0xLjA1NS0xLjc2OC0xLjk3NS0yLjgyOS0yLjczLS44Ny0uNTk2LTIuNzc0LTEuNDA3LTMuMTI4LTIuNDA3bC0uMDUzLS4wNmMuNTk3LS4wNiAxLjMwNC0uMjcgMS44NzYtLjQzMy45MjYtLjI0MyAxLjc2OS0uMTkgMi43Mi0uNDMybDEuMzA2LS4zOHYtLjI0MmMtLjQ5LS40ODYtLjg0My0xLjEzNS0xLjM2LTEuNTk0LTEuMzg2LTEuMTktMi45MS0yLjM1My00LjQ4OS0zLjMyNi0uODQzLS41NC0xLjkzMS0uODkyLTIuODI5LTEuMzUxLS4zMjctLjE2My0uODctLjI0NC0xLjA2LS41MTQtLjQ5Mi0uNTk0LS43NjMtMS4zNzgtMS4xMTctMi4wODJsLTIuMjMtNC43MDRjLS40OS0xLjA1NC0uNzktMi4xMDktMS4zODctMy4wODItMi44MDMtNC41OTYtNS44NS03LjM4LTEwLjUzLTEwLjExMS0xLjAwNS0uNTY4LTIuMjAyLS44MTItMy40NzUtMS4xMWwtMi4wNC0uMTA4Yy0uNDM2LS4xOS0uODctLjcwMy0xLjI1Mi0uOTQ3LTEuNTUtLjk3My01LjU1LTMuMDgyLTYuNjkzLS4zMDMtLjczNCAxLjc1NyAxLjA4OSAzLjQ4NyAxLjcwOCA0LjM4LjQ2My42MjIgMS4wNiAxLjMyNSAxLjM4OCAyLjAyNy4xODMuNDYuMjQ0Ljk0Ny40MzUgMS40MzQuNDM1IDEuMTkuODQzIDIuNTE0IDEuNDE0IDMuNjIzLjMwNS41NjguNjI1IDEuMTY0IDEuMDA2IDEuNjc3LjIxOC4zMDMuNi40MzMuNjguOTItLjM4LjU0LS40MDcgMS4zNS0uNjI1IDIuMDI3LS45OCAzLjA1NS0uNTk4IDYuODQuNzg5IDkuMDkuNDM2LjY3NSAxLjQ2MyAyLjE2MyAyLjg1NyAxLjU5NCAxLjIyNC0uNDg2Ljk1MS0yLjAyNyAxLjMwNS0zLjM3OS4wODItLjMyNC4wMjctLjU0LjE5LS43NTh2LjA2MWwxLjExNiAyLjI0NGMuODQzIDEuMzI1IDIuMzEzIDIuNzA0IDMuNTM2IDMuNjI0LjY1My40ODYgMS4xNyAxLjMyNSAxLjk4NSAxLjYyMnYtLjA4MmgtLjA1M2MtLjE2NC0uMjQyLS40MDktLjM1Mi0uNjI2LS41NC0uNDktLjQ4Ny0xLjAzNC0xLjA4Mi0xLjQxNS0xLjYyMy0xLjE0Mi0xLjUxMy0yLjE0OC0zLjE5LTMuMDQ2LTQuOTItLjQzNi0uODM4LS44MTctMS43NTctMS4xNy0yLjU5NS0uMTY0LS4zMjUtLjE2NC0uODEyLS40MzYtLjk3NC0uNDA4LjU5NC0xLjAwNiAxLjExLTEuMzA2IDEuODM5LS41MTcgMS4xNjItLjU3MSAyLjU5NS0uNzYxIDQuMDgyLS4xMS4wMjctLjA2MSAwLS4xMS4wNi0uODctLjIxNS0xLjE3LTEuMTA4LTEuNDk2LTEuODY0LS44MTUtMS45Mi0uOTUyLTUuMDAyLS4yNDUtNy4yMTkuMTktLjU2OCAxLjAwOC0yLjM1Mi42ODEtMi44OTMtLjE2NC0uNTE0LS43MDctLjgxLTEuMDA3LTEuMjE3YTEwLjkgMTAuOSAwIDAxLS45NzktMS43M2MtLjY1Mi0xLjUxNC0uOTc4LTMuMTktMS42ODYtNC43MDQtLjMyOC0uNzAzLS44OTgtMS40MzMtMS4zNjEtMi4wODItLjUxNy0uNzMtMS4wODctMS4yNDQtMS40OTYtMi4xMDgtLjEzNi0uMzAzLS4zMjYtLjc4NC0uMTA4LTEuMTEuMDUzLS4yMTYuMTYzLS4zMDIuMzgtLjM1LjM1My0uMzA0IDEuMzYuMDggMS43MTQuMjQyIDEuMDA2LjQwNiAxLjg1Ljc4NCAyLjY5MyAxLjM1LjM4LjI3MS43OS43ODUgMS4yNzkuOTJoLjU3MmMuODcuMTkgMS44NS4wNjEgMi42NjUuMzA0IDEuNDQxLjQ2IDIuNzQ3IDEuMTM1IDMuOTE4IDEuODY2YTI0LjAzNiAyNC4wMzYgMCAwMTguNDg3IDkuMjQ3Yy4zMjYuNjIyLjQ2MiAxLjE5Ljc2MiAxLjgzOC41NzIgMS4zMjYgMS4yOCAyLjY3NyAxLjg1IDMuOTc1LjU3MiAxLjI3MSAxLjExNSAyLjU3IDEuOTMxIDMuNjI0LjQwOS41NjggMi4wNC44NjUgMi43NzQgMS4xNjIuNTQ1LjI0MyAxLjM4OC40NiAxLjg3OC43NTguOTI1LjU2NyAxLjg1IDEuMjE2IDIuNzIgMS44MzguNDM1LjMyNCAxLjc5NSAxIDEuODc3IDEuNTRsLjAwMy0uMDE1ek05LjEwMiA3LjY2NGE0LjM0OSA0LjM0OSAwIDAwLTEuMTE1LjEzNXYuMDZoLjA1NGMuMjE4LjQzMy41OTkuNzMuODcgMS4xMWwuNjI3IDEuMjk3LjA1My0uMDZjLjM4Mi0uMjcuNTcyLS43MDMuNTcyLTEuMzUyLS4xNjMtLjE4OS0uMTktLjM3OC0uMzI2LS41NjctLjE2My0uMjctLjUxNy0uNDA2LS43MzUtLjYyMnYtLjAwMXpcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aD5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0wIDBINDBWNDBIMHpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSWNvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDQwIDQwXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI0UwMjM0RVwiXHJcbiAgICAgICAgZD1cIk0yMy4yMzUgMGMtLjI4NSAwLS41NS4wNjItLjc5NS4xNDUuNTIuMzUzLjgwNS44Mi45NDggMS4zNDguMDEuMDczLjAzLjEyNS4wNC4xOTcuMDEuMDYzLjAyLjEyNS4wMi4xODcuMDQyLjkxMy0uMjM0IDEuMDI3LS40MjcgMS41NjZhMi4yNSAyLjI1IDAgMDAuMTQyIDIuMDQzYy4wMzEuMDczLjA3Mi4xNTYuMTIzLjIyOC0uMzg4LTIuNjI0IDEuNzYzLTMuMDE4IDIuMTYtMy44MzcuMDMtLjcxNS0uNTUtMS4xOTMtMS4wMDktMS41MjRBMi4yMjIgMi4yMjIgMCAwMDIzLjIzNSAwem0zLjI0LjU5MWMtLjA0LjIzOS0uMDEuMTc2LS4wMi4zLS4wMS4wODQtLjAxLjE4OC0uMDIuMjdhMi4yOCAyLjI4IDAgMDEtLjA3Mi4yNWMtLjAyLjA4Mi0uMDUuMTY1LS4wODEuMjQ4LS4wNC4wODMtLjA3Mi4xNTYtLjExMi4yMzktLjAzLjA0MS0uMDUxLjA4My0uMDgyLjEyNGwtLjA2LjA5NGMtLjA1Mi4wNzItLjEwMy4xNDUtLjE1NC4yMDctLjA2LjA2Mi0uMTEyLjEzNS0uMTgzLjE4N3YuMDFjLS4wNjEuMDUyLS4xMjIuMTE0LS4xOTQuMTY2LS4yMTQuMTY2LS40NTguMjktLjY4My40NDYtLjA3LjA1Mi0uMTQyLjA5My0uMjAzLjE1NmExLjQ4OSAxLjQ4OSAwIDAwLS4xOTQuMTY1Yy0uMDcxLjA2My0uMTIyLjEyNS0uMTg0LjE5OC0uMDUuMDYyLS4xMTIuMTM0LS4xNTIuMjA3YTIuNjUgMi42NSAwIDAwLS4xNDMuMjE4Yy0uMDQuMDgzLS4wNzEuMTU1LS4xMTIuMjM4LS4wMy4wODMtLjA2MS4xNTYtLjA4Mi4yMzktLjAzLjA5My0uMDUuMTc2LS4wNzEuMjU5LS4wMS4wNDItLjAxLjA5My0uMDIuMTM1LS4wMS4wNDEtLjAxLjA4My0uMDIuMTI0IDAgLjA4My0uMDEuMTc3LS4wMS4yNiAwIC4wNjIgMCAuMTI0LjAxLjE4NiAwIC4wODMuMDEuMTY2LjAzLjI2LjAxLjA4Mi4wMy4xNjUuMDUuMjQ4LjAzMS4wODMuMDUyLjE2Ni4wODIuMjUuMDIuMDUxLjA1MS4xMDMuMDcyLjE0NGwtMi4zNDQtLjkyMmEyNC44MzUgMjQuODM1IDAgMDAtMS4xODItLjMxMmwtLjY0Mi0uMTU1YTE4LjYxOCAxOC42MTggMCAwMC0xLjg1NS0uMjhjLS4wMiAwLS4wMy0uMDEtLjA1MS0uMDFhMTcuOTA0IDE3LjkwNCAwIDAwLTEuODI0LS4wOTQgMTkuMDYzIDE5LjA2MyAwIDAwLTMuMi4yOGMtLjE1My4wMi0uMzA2LjA1Mi0uNDU5LjA4My0uMzE2LjA2Mi0uNjIxLjEzNS0uOTE3LjIwN2wtLjQ1OC4xMjVjLS4xNTMuMDYyLS4yOTYuMTM1LS40MzkuMTk3bC0uMzM2LjE1NmMtLjAyLjAxLS4wNC4wMS0uMDUuMDItLjEwMy4wNTItLjE5NC4wOTQtLjI4Ni4xNDVhNC40NzkgNC40NzkgMCAwMC0uMzg3LjE5N2MtLjA3Mi4wMzItLjE0My4wNzMtLjIwNC4xMDRhLjkxNC45MTQgMCAwMS0uMDkyLjA1MmMtLjA5Mi4wNTItLjE4My4xMDQtLjI2NS4xNTZhMi41NTkgMi41NTkgMCAwMC0uMjQ0LjE1NWMtLjA3Mi4wNTItLjE0My4wOTQtLjIwNC4xNDUtLjAxLjAxLS4wMi4wMS0uMDMuMDIxYTIuMzU4IDIuMzU4IDAgMDAtLjE5NC4xNDVsLS4wMi4wMjEtLjE1NC4xMjRjLS4wMi4wMS0uMDQuMDMyLS4wNi4wNDItLjA1Mi4wNDEtLjEwMy4wOTMtLjE1NC4xMzUtLjAxLjAyLS4wMy4wMy0uMDQuMDQxLS4wNjIuMDYzLS4xMjMuMTE0LS4xODQuMTc3LS4wMSAwLS4wMS4wMS0uMDIuMDItLjA2MS4wNTItLjEyMy4xMTQtLjE4NC4xNzctLjAxLjAxLS4wMS4wMi0uMDIuMDJhMi40MTUgMi40MTUgMCAwMC0uMTUzLjE2NmMtLjAyLjAyMS0uMDUuMDQyLS4wNzEuMDYyLS4wNTEuMDYzLS4xMTIuMTI1LS4xNzQuMTg3LS4wMS4wMi0uMDMuMDMxLS4wNC4wNTItLjA4Mi4wODMtLjE1My4xNjYtLjIzNS4yNDlsLS4wMy4wMzFhNi4wNiA2LjA2IDAgMDEtLjUyLjUwOCA1LjgwOCA1LjgwOCAwIDAxLS41Ny40NTdjLS4yMDQuMTQ1LS4zOTguMjctLjYxMi4zOTRhNi4xNjMgNi4xNjMgMCAwMS0uNjQyLjMxIDcuMjczIDcuMjczIDAgMDEtLjY2My4yNWMtLjQyOC4wOTMtLjg2Ni4yNy0xLjI0My4zLS4wODEgMC0uMTczLjAyMS0uMjU1LjAzMS0uMDkxLjAyMS0uMTczLjA0Mi0uMjU0LjA2My0uMDgyLjAzLS4xNjMuMDYyLS4yNDUuMDkzLS4wODEuMDMxLS4xNjMuMDczLS4yNDQuMTE0LS4wNzIuMDUyLS4xNTMuMDkzLS4yMjUuMTQ1YTEuNjc3IDEuNjc3IDAgMDAtLjIwMy4xNzdjLS4wNzIuMDUyLS4xNDMuMTI0LS4yMDQuMTg2LS4wNjEuMDczLS4xMjMuMTM1LS4xNzQuMjA4LS4wNS4wODMtLjExMi4xNTUtLjE1Mi4yMzhhMS44MzggMS44MzggMCAwMC0uMTQzLjIzOWMtLjA0LjA5My0uMDgyLjE3Ni0uMTEyLjI3LS4wMy4wODItLjA2MS4xNzYtLjA5Mi4yNjktLjAyLjA4My0uMDQuMTY2LS4wNS4yNDkgMCAuMDEtLjAxMS4wMi0uMDExLjAzMS0uMDIuMDkzLS4wMi4yMTgtLjAzLjI4LS4wMS4wNzMtLjAyMS4xMzUtLjAyMS4yMDdhLjYuNiAwIDAwLjAxLjEzNWMuMDEuMDczLjAyLjEzNS4wNDEuMTk3LjAyLjA2My4wNC4xMjUuMDcxLjE4N3YuMDFjLjAzLjA2My4wNzIuMTI1LjExMi4xODcuMDQxLjA2Mi4wODIuMTI0LjEzMy4xODcuMDUuMDUyLjExMi4xMTQuMTczLjE2Ni4wNjEuMDYyLjEyMi4xMTQuMTk0LjE2Ni4yNDQuMjE3LjMwNS4yOS42MjEuNDU2LjA1MS4wMzEuMTAyLjA1Mi4xNjMuMDgzLjAxIDAgLjAyLjAxLjAzMS4wMSAwIC4wMjEgMCAuMDMxLjAxLjA1Mi4wMS4wODMuMDMuMTY2LjA1MS4yNDkuMDIuMDkzLjA1MS4xNzYuMDgyLjI0OS4wMy4wNjIuMDUuMTI0LjA4MS4xODcuMDEuMDIuMDIuMDQxLjAzLjA1MS4wNDIuMDgzLjA4Mi4xNTYuMTIzLjIyOWwuMTUzLjIxN2MuMDUuMDYzLjExMi4xMzUuMTczLjE5Ny4wNjEuMDYzLjEyMi4xMTQuMTk0LjE3NyAwIDAgLjAxLjAxLjAyLjAxLjA2MS4wNTIuMTIyLjEwNC4xODQuMTQ1LjA3MS4wNTIuMTQyLjA5NC4yMjQuMTM1LjA3MS4wNDIuMTUzLjA4My4yMzQuMTE0LjA2MS4wMzEuMTMzLjA1Mi4yMDQuMDczLjAxLjAxLjAyLjAxLjA0LjAyLjA0Mi4wMS4wOTMuMDIxLjEzMy4wMzItLjAzLjU2LS4wNCAxLjA4OS4wNDEgMS4yNzUuMDkyLjIwOC41NC0uNDI1Ljk4OS0xLjE1LS4wNjIuNzE1LS4xMDIgMS41NTUgMCAxLjgwNC4xMTIuMjU5LjcyMy0uNTUgMS4yNTMtMS40NDIgNy4yMjUtMS43IDEzLjgxOSAzLjM4IDE0LjUxMiAxMC41NTgtLjEzMy0xLjEyLTEuNDg4LTEuNzQzLTIuMTEtMS41ODctLjMwNi43NjctLjgyNSAxLjc1Mi0xLjY2IDIuMzY0LjA3LS42ODQuMDQtMS4zOS0uMTAzLTIuMDc0YTYuNzU2IDYuNzU2IDAgMDEtMS4yNjQgMi42MTRjLS45NjguMDcyLTEuOTM2LS40MDUtMi40NDUtMS4xMi0uMDQxLS4wMzItLjA1MS0uMDk0LS4wODItLjEzNWExLjg3IDEuODcgMCAwMS0uMDgxLS4yMTguODcyLjg3MiAwIDAxLS4wNjItLjIxOGMtLjAxLS4wNzMtLjAxLS4xNDUtLjAxLS4yMjh2LS4xNTZjLjAxLS4wNzIuMDMtLjE0NS4wNTEtLjIxNy4wMi0uMDczLjA0MS0uMTQ2LjA3Mi0uMjE4LjA0LS4wNzMuMDctLjE0NS4xMjItLjIxOC4xNzMtLjQ5OC4xNzMtLjkwMi0uMTQzLTEuMTRhMS4xNTIgMS4xNTIgMCAwMC0uMTkzLS4xMDRjLS4wNDEtLjAxLS4wOTItLjAzMi0uMTMzLS4wNDItLjAzLS4wMS0uMDUtLjAyLS4wODEtLjAzMS0uMDcyLS4wMi0uMTQzLS4wNDItLjIxNC0uMDUyYS43NjUuNzY1IDAgMDAtLjIxNC0uMDMxIDEuNjM1IDEuNjM1IDAgMDAtLjIyNS0uMDJjLS4wNSAwLS4xMDIuMDEtLjE1My4wMWEuNzguNzggMCAwMC0uMjI0LjAzYy0uMDcxLjAxMS0uMTQyLjAyMS0uMjE0LjA0Mi0uMDcxLjAyMS0uMTQyLjA0Mi0uMjE0LjA3My0uMDcxLjAzMS0uMTMyLjA2Mi0uMjA0LjA5My0uMDYuMDMxLS4xMjIuMDczLS4xOTMuMTA0LTIuMzc1IDEuNTc2LS45NTggNS4yNjguNjYyIDYuMzM2LS42MTEuMTE0LTEuMjMzLjI1LTEuNDA2LjM4NGwtLjAyLjAyYy40MzguMjcuODk2LjQ5OSAxLjM3NS42OTZhMzMuMjYgMzMuMjYgMCAwMDEuNjUxLjQ5OHYuMDFhOS42OSA5LjY5IDAgMDAyLjU2OC4xODdjNC41MTUtLjMyMiA4LjIxNC0zLjgxNyA4Ljg4Ny04LjQyMmwuMDYuMjdjLjAzMS4xODcuMDcyLjM4NC4wOTMuNTh2LjAxMWMuMDIuMDk0LjAzLjE4Ny4wNC4yN3YuMDQxYy4wMS4wOTQuMDIuMTg3LjAyLjI3LjAxLjExNC4wMjEuMjI4LjAyMS4zNDJ2LjE2NmMwIC4wNTIuMDEuMTE0LjAxLjE2NiAwIC4wNjItLjAxLjEyNS0uMDEuMTg3VjI4YzAgLjA3My0uMDEuMTM1LS4wMS4yMDcgMCAuMDQyIDAgLjA4My0uMDEuMTM1IDAgLjA3My0uMDEuMTQ1LS4wMS4yMjgtLjAxLjAzMS0uMDEuMDYzLS4wMS4wOTRsLS4wMzEuMjM4YzAgLjAzMSAwIC4wNjMtLjAxLjA5NC0uMDEuMTAzLS4wMzEuMTk3LS4wNDEuM1YyOS4zMThjLS4wMi4wOTMtLjA0MS4xOTctLjA2Mi4yOXYuMDMybC0uMDYuMjhjMCAuMDEtLjAxLjAzLS4wMS4wNDEtLjAyMS4wOTQtLjA0Mi4xODctLjA3Mi4yOHYuMDMxYy0uMDMuMTA0LS4wNjEuMTk3LS4wODIuMjktLjAxLjAxMS0uMDEuMDIxLS4wMS4wMjFsLS4wOTIuMzEyYy0uMDQuMTAzLS4wNzEuMTk3LS4xMTIuMy0uMDQuMTA0LS4wNzEuMjA4LS4xMTIuMzAxLS4wNC4xMDQtLjA4MS4xOTctLjEyMi4zaC0uMDFjLS4wNDEuMDk0LS4wODIuMTk4LS4xMzMuMjkxYS41MDguNTA4IDAgMDEtLjAzLjA3M2MtLjAxLjAxLS4wMS4wMi0uMDIuMDNhOS43NzcgOS43NzcgMCAwMS0yLjg2NCAzLjQ4NWMtLjA4Mi4wNTItLjE2My4xMTQtLjI0NS4xNzctLjAyLjAyLS4wNS4wMy0uMDcxLjA1Mi0uMDcyLjA1MS0uMTQzLjEwMy0uMjI0LjE1NWwuMDMuMDYyaC4wMWwuNDI4LS4wNjJoLjAxYy4yNjUtLjA0MS41My0uMDkzLjc5NS0uMTQ1LjA3Mi0uMDEuMTUzLS4wMzEuMjI1LS4wNTJsLjE0Mi0uMDMxYy4wNzItLjAxLjE0My0uMDMxLjIxNC0uMDQyLjA2MS0uMDIuMTIyLS4wMy4xODQtLjA1MWExOS4wOCAxOS4wOCAwIDAwMi45NTUtLjk5NkExNi4zODIgMTYuMzgyIDAgMDExOC40NjUgNDBhMTYuNTAzIDE2LjUwMyAwIDAwMy40NzYtLjYxMiAxNi4zMzggMTYuMzM4IDAgMDA5LjYzLTcuODMgMTYuNzEgMTYuNzEgMCAwMS0yLjc0MiA2LjY2OSAxNi4xMSAxNi4xMSAwIDAwMi43MjEtMi4zMDMgMTYuNTUgMTYuNTUgMCAwMDQuMjktOC44MTVjLjM0NyAxLjYzOS40NSAzLjMzLjI5NiA0Ljk5OSA3LjM1OC0xMC40NDMuNjEyLTIxLjI3LTIuMjExLTI0LjEyMi0uMDEtLjAyMS0uMDItLjAzMi0uMDItLjA1Mi0uMDEuMDEtLjAxLjAxLS4wMS4wMiAwLS4wMSAwLS4wMS0uMDEtLjAyIDAgLjEyNC0uMDExLjI0OS0uMDIxLjM3My0uMDMuMjM5LS4wNjEuNDY3LS4xMDIuNjk1LS4wNTEuMjI4LS4xMTIuNDU2LS4xNzMuNjg0YTguNzYxIDguNzYxIDAgMDEtLjI0NS42NjQgOC45NjEgOC45NjEgMCAwMS0uMzA2LjYzMyA3Ljg5NyA3Ljg5NyAwIDAxLS43ODUgMS4xNTEgNy42OTMgNy42OTMgMCAwMS0uNDc4LjUxOCA2LjU4OCA2LjU4OCAwIDAxLS4yOTYuMjZjLS4wODEuMDcyLS4xNTMuMTM0LS4yMzQuMjA3LS4xODQuMTQ1LS4zNjcuMjgtLjU3MS40MDVhNy4wMTMgNy4wMTMgMCAwMS0uNjAxLjM1MmMtLjIxNC4xMDQtLjQyOC4xOTctLjY0Mi4yOWE3LjA2OCA3LjA2OCAwIDAxLS42NjMuMjE4IDguMTAzIDguMTAzIDAgMDEtLjY4Mi4xNTZjLS4yMzUuMDQxLS40Ny4wNjItLjY5My4wODNhNy42OSA3LjY5IDAgMDEtLjQ5LjAyYy0uMjM0IDAtLjQ2OC0uMDItLjY5Mi0uMDRhNS4wNzggNS4wNzggMCAwMS0uNjk0LS4xMDUgNS4wODEgNS4wODEgMCAwMS0uNjgyLS4xNzZoLS4wMWMuMjI0LS4wMi40NDgtLjA0MS42NzItLjA4M2E3LjI4NiA3LjI4NiAwIDAwMS4zNDUtLjM3M2MuMjI1LS4wODMuNDM5LS4xODcuNjQyLS4yOS4yMTQtLjEwNC40MDgtLjIxOC42MTItLjM0My4xOTMtLjEzNS4zODctLjI3LjU3LS40MTUuMTg0LS4xNDUuMzU3LS4zLjUyLS40NjYuMTczLS4xNTYuMzI2LS4zMzIuNDgtLjUwOS4xNTItLjE4Ni4yOTUtLjM3My40MjctLjU2LjAyLS4wMy4wNC0uMDcyLjA2MS0uMTAzQTcuMTkyIDcuMTkyIDAgMDAzMSA5LjM4NmMuMDcyLS4yMTguMTIyLS40NDYuMTczLS42NzUuMDQxLS4yMzguMDgyLS40NjYuMTAyLS42OTQuMDItLjIzOS4wNDEtLjQ3Ny4wNDEtLjcwNiAwLS4xNjYtLjAxLS4zMzEtLjAyLS40OTctLjAyLS4yMzktLjA1MS0uNDY3LS4wODItLjY5NWE3LjY1NCA3LjY1NCAwIDAwLS4xNTMtLjY5NWMtLjA3MS0uMjE4LS4xNDItLjQ0Ni0uMjI0LS42NjRhNy4yMiA3LjIyIDAgMDAtLjI4NS0uNjQzIDExLjc4MyAxMS43ODMgMCAwMC0uMzQ3LS42MTIgMTEuNDM5IDExLjQzOSAwIDAwLS40MDctLjU3IDIxLjgwNyAyMS44MDcgMCAwMC0uNDctLjUyOWMtLjA4LS4wODMtLjE3Mi0uMTc2LS4yNjQtLjI2YTE4Ljc2MSAxOC43NjEgMCAwMC0xLjQxNy0xLjAxNiAxLjg4NCAxLjg4NCAwIDAwLS4yMDMtLjEwM2MtLjMzNy0uMjE4LS42NTMtLjMzMi0uOTY4LS40MzZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiNTJcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA1MiA0MFwiXHJcbiAgICA+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICBkPVwiTTI5LjM5MyA0MGEyLjUyIDIuNTIgMCAwMS0xLjcwOC0uNjY4IDIuNDk1IDIuNDk1IDAgMDEtMS42NTUuNjM5SDI2YTIuNTE4IDIuNTE4IDAgMDEtMS43NTQtLjc3MyAyLjUwMyAyLjUwMyAwIDAxLS43MjYtMS43NjZ2LS4yNjFsLS42ODUgMS4zODMtLjI5LjU4NmMtLjI0NS41LS43NTYuODItMS4zMi44MmgtNS44MzdjLS41MjkgMC0xLjAxNy0uMjkxLTEuMjc4LS43NDRsLS4yOTYtLjUzNS0uNzktMS4zODh2LjE3NGEyLjUxNCAyLjUxNCAwIDAxLTIuNTEgMi41MSAyLjQ5MSAyLjQ5MSAwIDAxLTEuNzc3LS43MzhsLTMuNzEyLTMuNzEydjEuOTRhMi41MTQgMi41MTQgMCAwMS0yLjUxIDIuNTFBMi41MTUgMi41MTUgMCAwMTAgMzcuNDY3di04LjAxNmEyLjUxOCAyLjUxOCAwIDAxMi41MS0yLjUxNSAyLjQ5IDIuNDkgMCAwMTEuNzc3LjczOGwzLjcxOCAzLjcxN3YtMS45NGEyLjUxNCAyLjUxNCAwIDAxMi41MS0yLjUxIDIuNTE0IDIuNTE0IDAgMDEyLjUwOCAyLjUxdi4yMTVsLjc3OS0xLjQxMi4yODUtLjUyOGMuMjU1LS40Ny43NDktLjc3MyAxLjI5LS43NzNoNi4wODFjLjU2NCAwIDEuMDY5LjMyIDEuMzEzLjgybC4yOS41OTJjLjAxOC4wMjMuMDIzLjA1Mi4wMzUuMDc1bC40MjQgMS4wMTdjMC0uNjQuMjYyLTEuMjcyLjcyNi0xLjc0M2EyLjU0IDIuNTQgMCAwMTEuNzU1LS43NzJoLjAyOWMuNjEgMCAxLjIxNC4yMzggMS42ODQuNjY4YTIuNDk0IDIuNDk0IDAgMDExLjY3OS0uNjQ1IDIuNTE0IDIuNTE0IDAgMDEyLjUxIDIuNTF2MS45NDVsMy43MTctMy43MThjLjQ3LS40NyAxLjExLS43MzcgMS43NzgtLjczNy4zMyAwIC42NS4wNjQuOTU4LjE5Mi4yNjEuMTA0LjUuMjU1LjcwMy40NGEyLjQ3NCAyLjQ3NCAwIDAxMS42NjctLjYzMmMuNjY4IDAgMS4yOTYuMjU1IDEuNzc4LjczMmwyLjI0MiAyLjIzIDIuMjQyLTIuMjNhMi41MiAyLjUyIDAgMDExLjc3OC0uNzMyYy42NzMgMCAxLjMwNy4yNjEgMS43NzcuNzQzLjk4Mi45ODIuOTc2IDIuNTgtLjAwNiAzLjU1NWwtMi4yMyAyLjIyIDIuMjE5IDIuMjEzYy45ODEuOTgxLjk4NyAyLjU3My4wMDUgMy41NTUtLjQ3LjQ3Ni0xLjEwOS43NDMtMS43NzcuNzQzYTIuNDkxIDIuNDkxIDAgMDEtMS43NzctLjczOGwtMi4yMzEtMi4yMjQtMi4yMjUgMi4yMTNhMi41IDIuNSAwIDAxLTEuNzc4LjczMiAyLjU1NiAyLjU1NiAwIDAxLTEuNjU1LS42MjJjLS40NDEuNC0xLjAzNC42NS0xLjY4NS42NWEyLjUxNCAyLjUxNCAwIDAxLTIuNTA5LTIuNTA5VjM1LjU1bC0zLjcxOCAzLjcxOGEyLjUxMyAyLjUxMyAwIDAxLTEuNzgzLjczMnptMTAuNTI2LTUuMjYzbDEuMjcyLTEuMjY2LTEuMjcyLTEuMjY3djIuNTMzelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiMwOTBcIlxyXG4gICAgICAgICAgZD1cIk0xMC41MiAzOC41MmMtLjI3MyAwLS41NC0uMTA2LS43NDQtLjMwOUwzLjU2MSAzMS45OXY1LjQ3OGExLjA0NSAxLjA0NSAwIDExLTIuMDkxIDBWMjkuNDVjMC0uNDI0LjI1NS0uODA3LjY1LS45N2ExLjA0NiAxLjA0NiAwIDAxMS4xNDUuMjI3bDYuMjEgNi4yMTV2LTUuNDcyYTEuMDQ1IDEuMDQ1IDAgMTEyLjA5IDB2OC4wMWExLjA0OCAxLjA0OCAwIDAxLTEuMDQ1IDEuMDU4em00Ljg2OC0xMC4xMDNsLS4yOS41NC0yLjIzMSA0LjA1NS0uMjkuNTExLjI5LjUxMiAyLjIzIDMuOTI2LjMwMi41MzVoNS44NDRsLjI5LS41OTMgMS42NjgtMy4zNjMuNzQ5LTEuNTIyaC0xLjY5bC00LjI2NC4wMTdjLS41NTgtLjAxMS0xLjA2OS41LTEuMDY5IDEuMDQ2IDAgLjU1OC41MTEgMS4wNTcgMS4wNjkgMS4wNDZsMi41NzMtLjAxOC0uNjI3IDEuMjcySDE2LjYzbC0xLjY0NC0yLjg4IDEuNjU1LTIuOTkyaDMuNTJsLjgyIDEuNjg0aDIuMTE0bC0xLjMzLTMuMTk1LS4yOS0uNTkyaC02LjA4OHYuMDExek0yNi4wMyAyOC40Yy0uNTUyLjAwNi0xLjA0Ni41MTEtMS4wNCAxLjA2M3YyLjc0MmgyLjEwM3YtMi43NDJjLjAwNS0uNTU4LS41MDYtMS4wNzUtMS4wNjMtMS4wNjN6bTMuMzY5IDEwLjEzNmMtLjU4MSAwLTEuMDQ2LS40Ny0xLjA0Ni0xLjA0NXYtOC4wMTZhMS4wNDUgMS4wNDUgMCAxMTIuMDkxIDB2NS40NzdsNi4yMTYtNi4yMTVjLjMwMi0uMzAyLjc1LS4zOSAxLjE0NC0uMjI3LjM5NS4xNjMuNjUuNTQ2LjY1Ljk3djguMDFhMS4wNDUgMS4wNDUgMCAxMS0yLjA5IDB2LTUuNDgzbC02LjIyMiA2LjIyMmExLjA1IDEuMDUgMCAwMS0uNzQzLjMwN3ptMTYuODQ2LTUuMDY1bDMuMjY0LTMuMjU5YTEuMDU0IDEuMDU0IDAgMDAuMDA2LTEuNDg3IDEuMDUzIDEuMDUzIDAgMDAtMS40ODctLjAwNmwtMy4yNyAzLjI2NS0zLjI3MS0zLjI2NWExLjA0MyAxLjA0MyAwIDAwLTEuNDg3LjAwNiAxLjA0OCAxLjA0OCAwIDAwMCAxLjQ4N2wzLjI2NCAzLjI2LTMuMjU4IDMuMjQ2QTEuMDUzIDEuMDUzIDAgMDA0MCAzOC4yMDVjLjE5Ny4xOTguNDY1LjMxNC43NDMuMzA4LjI2OCAwIC41MzUtLjEwNC43NDQtLjMwOGwzLjI2NS0zLjI1MyAzLjI2NCAzLjI1M2ExLjA1IDEuMDUgMCAwMDEuNDg3IDAgMS4wNDMgMS4wNDMgMCAwMC0uMDA1LTEuNDg3bC0zLjI1My0zLjI0N3pNMjYuMDMgMzguNTA3Yy0uNTUyLS4wMDUtMS4wNDYtLjUxLTEuMDQtMS4wNjN2LTQuMzk3aDIuMTAzdjQuMzk3Yy4wMDUuNTU4LS41MDYgMS4wNy0xLjA2MyAxLjA2M3pcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcclxuICAgICAgICAgIGQ9XCJNMzUuNjcyIDI4LjM3YTQuMDc5IDQuMDc5IDAgMDEtMi44Ny0xLjIwMkwxOS42NDcgMTQuMDE3djEwLjI0N2E0LjExNCA0LjExNCAwIDAxLTQuMTA3IDQuMTA3IDQuMTEgNC4xMSAwIDAxLTQuMTA3LTQuMTA3VjQuMTA3YzAtMS42NjcuOTkzLTMuMTU0IDIuNTMzLTMuNzkzLjUtLjIxIDEuMDI4LS4zMTQgMS41NjgtLjMxNCAxLjA5OCAwIDIuMTMyLjQzIDIuOTA0IDEuMjAyTDMxLjYgMTQuMzU0VjQuMTA3QTQuMTEgNC4xMSAwIDAxMzUuNzAxIDBhNC4xMTQgNC4xMTQgMCAwMTQuMTA3IDQuMTA3VjI0LjI3YTQuMTE0IDQuMTE0IDAgMDEtNC4xMDcgNC4xMDZoLS4wMjl2LS4wMDV6XCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsPVwiIzA5MFwiXHJcbiAgICAgICAgICBkPVwiTTM1LjcwMiAyNi45MDZhMi42NDggMi42NDggMCAwMS0xLjg3MS0uNzcybC0xNS42NDMtMTUuNjV2MTMuNzhhMi42NDEgMi42NDEgMCAwMS0yLjY0MyAyLjY0MiAyLjY0NSAyLjY0NSAwIDAxLTIuNjQzLTIuNjQzVjQuMTA3YzAtMS4wNzUuNjQ0LTIuMDM0IDEuNjMyLTIuNDQ2YTIuNjMgMi42MyAwIDAxMi44ODEuNTc1bDE1LjY0MyAxNS42NVY0LjEwNWEyLjY0MiAyLjY0MiAwIDAxMi42NDQtMi42NDIgMi42NDEgMi42NDEgMCAwMTIuNjQyIDIuNjQzdjIwLjE2MmEyLjYzNyAyLjYzNyAwIDAxLTIuNjQyIDIuNjM3elwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGg+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwSDUxLjI3NVY0MEgwelwiPjwvcGF0aD5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNBNDFFMTFcIlxyXG4gICAgICAgICAgZD1cIk0zOC40MzIgMjkuMjk0Yy0yLjEzNSAxLjExMy0xMy4xOTIgNS42Ni0xNS41NDYgNi44ODYtMi4zNTQgMS4yMjctMy42NjEgMS4yMTUtNS41MjEuMzI3LTEuODYtLjg4OS0xMy42MjYtNS42NDItMTUuNzQ3LTYuNjU1LTEuMDYtLjUwNy0xLjYxNi0uOTM0LTEuNjE2LTEuMzM3di00LjA0M3MxNS4zMi0zLjMzNSAxNy43OTMtNC4yMjJjMi40NzQtLjg4OCAzLjMzLS45MiA1LjQzNi0uMTQ5czE0LjY5IDMuMDQxIDE2Ljc3IDMuODA0djMuOTg3YzAgLjQtLjQ4Ljg0OC0xLjU2NyAxLjQwNGwtLjAwMi0uMDAyelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNEODJDMjBcIlxyXG4gICAgICAgICAgZD1cIk0zOC40MzIgMjUuMjVjLTIuMTM1IDEuMTEzLTEzLjE5MSA1LjY1OS0xNS41NDYgNi44ODYtMi4zNTQgMS4yMjYtMy42NjEgMS4yMTUtNS41MjEuMzI2LTEuODYtLjg4OS0xMy42MjYtNS42NDEtMTUuNzQ3LTYuNjU1LTIuMTItMS4wMTQtMi4xNjMtMS43MS0uMDgyLTIuNTI2bDE2LjI1OC02LjI5NGMyLjQ3My0uODg3IDMuMzMtLjkyIDUuNDM2LS4xNDlzMTMuMDk2IDUuMTQ1IDE1LjE3NSA1LjkyYzIuMDc4Ljc3MyAyLjE2IDEuMzg4LjAyNSAyLjUwMmwuMDAyLS4wMXpcIlxyXG4gICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCIjQTQxRTExXCJcclxuICAgICAgICAgIGQ9XCJNMzguNDMyIDIyLjdjLTIuMTM1IDEuMTEzLTEzLjE5MiA1LjY2LTE1LjU0NiA2Ljg4Ni0yLjM1NCAxLjIyNy0zLjY2MSAxLjIxNS01LjUyMS4zMjctMS44Ni0uODg5LTEzLjYyNi01LjY0Mi0xNS43NDctNi42NTUtMS4wNi0uNTA3LTEuNjE2LS45MzMtMS42MTYtMS4zMzZ2LTQuMDQ0czE1LjMyLTMuMzM1IDE3Ljc5My00LjIyMmMyLjQ3NC0uODg4IDMuMzMtLjkyIDUuNDM2LS4xNDlzMTQuNjkgMy4wNDIgMTYuNzcgMy44MDR2My45ODdjMCAuNC0uNDguODQ4LTEuNTY3IDEuNDA0bC0uMDAyLS4wMDJ6XCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsPVwiI0Q4MkMyMFwiXHJcbiAgICAgICAgICBkPVwiTTM4LjQzMiAxOC42NTdjLTIuMTM1IDEuMTEzLTEzLjE5MSA1LjY2LTE1LjU0NiA2Ljg4Ni0yLjM1NCAxLjIyNy0zLjY2MSAxLjIxNS01LjUyMS4zMjctMS44Ni0uODktMTMuNjI2LTUuNjQyLTE1Ljc0Ny02LjY1Ni0yLjEyLTEuMDEzLTIuMTYzLTEuNzEtLjA4Mi0yLjUyNWwxNi4yNTgtNi4yOTRjMi40NzMtLjg4OCAzLjMzLS45MiA1LjQzNi0uMTQ4IDIuMTA2Ljc3IDEzLjA5NiA1LjE0NiAxNS4xNzcgNS45MDYgMi4wOC43NiAyLjE2IDEuMzkuMDI1IDIuNTAzelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNBNDFFMTFcIlxyXG4gICAgICAgICAgZD1cIk0zOC40MzIgMTUuODYzYy0yLjEzNSAxLjExMy0xMy4xOTIgNS42NTktMTUuNTQ2IDYuODg3LTIuMzU0IDEuMjI4LTMuNjYxIDEuMjE1LTUuNTIxLjMyNi0xLjg2LS44ODgtMTMuNjI2LTUuNjQtMTUuNzQ3LTYuNjU1LTEuMDYtLjUwNy0xLjYxNi0uOTMzLTEuNjE2LTEuMzM2VjExLjA0czE1LjMyLTMuMzM1IDE3Ljc5My00LjIyM2MyLjQ3NC0uODg3IDMuMzMtLjkyIDUuNDM2LS4xNDggMi4xMDYuNzcgMTQuNjkgMy4wNDEgMTYuNzcgMy44MDN2My45ODhjMCAuNC0uNDguODQ4LTEuNTY3IDEuNDAzaC0uMDAyelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNEODJDMjBcIlxyXG4gICAgICAgICAgZD1cIk0zOC40MzIgMTEuODE4Yy0yLjEzNSAxLjExNC0xMy4xOTEgNS42Ni0xNS41NDYgNi44ODYtMi4zNTQgMS4yMjctMy42NjEgMS4yMTYtNS41MjEuMzI3LTEuODYtLjg4OS0xMy42MjYtNS42NDEtMTUuNzQ3LTYuNjU1LTIuMTItMS4wMTQtMi4xNjMtMS43MS0uMDgyLTIuNTI2bDE2LjI1OC02LjI5M2MyLjQ3My0uODg4IDMuMzMtLjkyIDUuNDM2LS4xNDlzMTMuMDk2IDUuMTQ2IDE1LjE3NyA1LjkwN2MyLjA4Ljc2IDIuMTYgMS4zODkuMDI1IDIuNTAydi4wMDF6XCJcclxuICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICBkPVwiTTIwLjk5OSAxMC4xNTFsLTEuMjU0LTIuMDg0LTQuMDAyLS4zNkwxOC43MyA2LjYzbC0uODk2LTEuNjU1IDIuNzk1IDEuMDkzIDIuNjM2LS44NjQtLjcxMyAxLjcxTDI1LjI0IDcuOTJsLTMuNDY1LjM2LS43NzUgMS44N3pNMTQuMzIzIDE0LjNsOS4yNjctMS40MjQtMi43OTkgNC4xMDYtNi40NjktMi42ODJ6TTExLjgyNCAxMi44MDNjMi43MzYgMCA0Ljk1NS0uODYgNC45NTUtMS45MnMtMi4yMTktMS45Mi00Ljk1NS0xLjkyLTQuOTU0Ljg2LTQuOTU0IDEuOTIgMi4yMTggMS45MiA0Ljk1NCAxLjkyelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiM3QTBDMDBcIlxyXG4gICAgICAgICAgZD1cIk0zNC44MjIgMTAuNjAzbC01LjQ4MiAyLjE2NS0uMDA0LTQuMzMzIDUuNDg2IDIuMTY4elwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cIiNBRDIxMTVcIlxyXG4gICAgICAgICAgZD1cIk0yOS4zNDEgMTIuNzY4bC0uNTk0LjIzNC01LjQ3OC0yLjE2NiA2LjA2OS0yLjQuMDAzIDQuMzMyelwiXHJcbiAgICAgICAgPjwvcGF0aD5cclxuICAgICAgPC9nPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGg+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMCAwSDQwVjQwSDB6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA0MCA0MFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMwMTAxMDFcIlxyXG4gICAgICAgIGQ9XCJNMTUuMDcgMS4xNTRDMjAuMTEyLS4xNCAyNS42ODQuNjE0IDMwLjEzIDMuMzU4YzUuNiAzLjM1IDkuMjU2IDkuNjg0IDkuMzUgMTYuMjA1LjIwNCA2LjU4Ni0zLjIyOCAxMy4xMTYtOC43NDUgMTYuNjk4LTYuMTQgNC4xMy0xNC42MzIgNC4yODgtMjAuOTAyLjM2MkMzLjQ0MyAzMi44MS0uMjg4IDI1LjExNy42NyAxNy43M2MuNzcyLTcuODA0IDYuOC0xNC42ODggMTQuNC0xNi41NzZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgZD1cIk0xNC4yOTggNC4zNDRDMjMuODI0LjUzIDM1LjUwOCA3LjU3MiAzNi40OTQgMTcuNzg2YzEuNTM1IDkuMTktNi4wOTMgMTguNTMtMTUuNDA1IDE4LjgtOC44NTYuODg0LTE3LjQxNC02LjYyMy0xNy42NjUtMTUuNTE2LS42Ni03LjIgNC4wODQtMTQuMzQ0IDEwLjg3NC0xNi43MjZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiIzAxMDEwMVwiXHJcbiAgICAgICAgZD1cIk0xNS4yNTYgMTkuMDE0YzQuMjctMy40ODggOC40NDctNy4wOTggMTIuODEtMTAuNDg0LTIuMjkgMy41MTctNC42NDMgNi45ODYtNi45MzEgMTAuNTAyLTEuOTYzLjAxLTMuOTI2LjAxLTUuODgtLjAxOHptMy42MSAxLjk0NGMxLjk3MSAwIDMuOTM0IDAgNS44OTcuMDI4LTQuMjk4IDMuNDctOC40NTYgNy4xMDctMTIuODI4IDEwLjQ4NCAyLjI4OC0zLjUxNyA0LjY0Mi02Ljk5NSA2LjkzLTEwLjUxMnpcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJY29uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTAgNDBcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICBkPVwiTTMzLjUzNSAxMi43MjhsLTUuNDYzIDEuNzg5LTQuNzU3IDIuMS0xLjMyOS4zNTNjLS4zMzkuMzI2LS42OTEuNjUxLTEuMDg0Ljk3Ni0uNDIuMzY2LS44MTQuNjkyLTEuMTEyLjkzNmE5LjAwNyA5LjAwNyAwIDAwLTEuMDg0IDEuMDdjLS4zOC40NzUtLjY3OC45NzYtLjggMS4zNTYtLjIzLjY5MS0uMTIyIDEuMzk2LjMyNiAyLjA0Ny41NTUuODI2IDEuNjggMS42NjcgMi45ODIgMi4yMzYuNjY0LjI5OCAxLjc4OS42NjQgMi42My44ODEgMS4zOTUuMzUzIDQuMTA2Ljc0NiA1LjU5Ny44LjI5OS4wMTQuNzA1LjAxNC43MTkgMCAuMDI3LS4wMjcuMjctLjQ2LjUyOC0xLjAxNy45MjItMS44NyAxLjU3My0zLjYzMiAxLjkzOS01LjEyMy4yMTctLjkwOS4zOC0yLjExNS41MDEtMy41NTIuMDI3LS40MDYuMDQtMS43NDguMDE0LTIuMTk2YTE4LjE2IDE4LjE2IDAgMDAtLjIwNC0xLjkzOGMtLjAxMy0uMDgxLS4wMjctLjE2My0uMDEzLS4xNjMuMDE0LS4wMTMuMDY4LS4wMjcuNzQ1LS4yMTZsLS4xMzUtLjM0em0tMS4yNDcuNzMyYy4wNTQgMCAuMTc2IDEuMjc0LjIxNyAyLjA3My4wMTMuMTYzIDAgLjI4NSAwIC4yODUtLjAyNyAwLS42OTItLjM5My0xLjE4LS42OTFhMzQuOTMgMzQuOTMgMCAwMS0xLjMxNC0uODgxYy0uMDQxLS4wMjctLjA0MS0uMDI3LjI5OC0uMTUuNTctLjIwMyAxLjkyNS0uNjM2IDEuOTc5LS42MzZ6bS0yLjc5Mi45MjFjLjA0IDAgLjEzNS4wNTUuMzY2LjE5Ljg1NC41MjkgMi4wMDYgMS4xOCAyLjUwNyAxLjM5Ni4xNS4wNjguMTYzLjA0LS4xNzYuMjg1LS43NDUuNTE1LTEuNjk0IDEuMDE3LTIuODMzIDEuNTE4YTMuODk5IDMuODk5IDAgMDEtLjM4LjE2M2MtLjAxMyAwIC4wMTQtLjEwOS4wNTUtLjIzLjI3LTEuMDMuNDMzLTIuMDc1LjQ0Ny0yLjkwMS0uMDI3LS40Mi0uMDI3LS40Mi4wMTQtLjQyem0tLjU3LjIxN2MuMDI3LjAyNy4wMTQuOTUtLjAyNyAxLjIwNy0uMDY4LjU5Ni0uMTkgMS4xNjUtLjM4IDEuODAyLS4wNC4xNS0uMDguMjg1LS4wOTQuMjg1LS4wMTQuMDI3LS41ODMtLjUyOS0uNzczLS43NDVhNS40IDUuNCAwIDAxLS43NTktMS4xMTJjLS4wOTUtLjE5LS4yNDQtLjU1Ni0uMjMtLjU1Ni4wNjctLjA1NCAyLjI1LS44OTQgMi4yNjMtLjg4em0tMi42OTcgMS4wNTdjLjAyNy4wMTQuMDU0LjA4Mi4wNjguMTUuMTM1LjM2Ni40MzMuODk0LjY5IDEuMjIuMjg2LjM2Ni42NTIuNzcyLjk1IDEuMDMuMDk1LjA4MS4xOS4xNjIuMjAzLjE3Ni4wMjcuMDI3LjAyNy4wMjctLjYzNy4yNzFhNTAuODEgNTAuODEgMCAwMS0yLjYwMi45MDhjLS4yMy4wODEtLjQ2MS4xNS0uNjkyLjIzLS4wNC4wMTQtLjAyNy0uMDEzLjA4Mi0uMTc2LjQ4OC0uNzU5IDEuMjItMi4yMzYgMS42MjYtMy4yOTMuMDY4LS4xNzcuMTM2LS4zNjYuMTUtLjQwNy4wMTMtLjA1NC4wNC0uMDgxLjA5NC0uMTA4LjAyNy4wMTMuMDU0IDAgLjA2OCAwem0tLjgyNy4zNGMuMDE0LjAxMy0uMjAzLjQ0Ny0uNDA3Ljg1My0uNDA2Ljc4Ny0uODQgMS41NDYtMS40MjMgMi40OGE0LjM2IDQuMzYgMCAwMS0uMjAzLjMyNmMtLjAyNy4wMjctLjAyNy4wMjctLjA5NS0uMTA4YTMuNjQyIDMuNjQyIDAgMDEtLjMxMi0uOTYzYy0uMDY4LS4zMjUtLjA1NC0uODguMDI3LTEuMjMzLjA1NS0uMjU4LjA1NS0uMjU4LjE3Ny0uMzEyLjUwMS0uMjU3IDIuMjA5LTEuMDU3IDIuMjM2LTEuMDQ0em03LjExNi4yOTh2LjE3NmMwIC45MjEtLjA5NSAyLjE4Mi0uMjQ0IDMuMTA0LS4wMjcuMTYyLS4wNC4yOTgtLjA1NC4yOTggMCAwLS4xMjItLjAyNy0uMjU3LS4wNjhhMTAuMDAyIDEwLjAwMiAwIDAxLTEuODk4LS44MTNjLS40MDctLjIxNy0uOTktLjU4My0uOTYzLS41OTZsLjM4LS4yMDRjLjgxMy0uNDIgMS41ODYtLjg4IDIuMjY0LTEuMzI4LjI1Ny0uMTYzLjYzNy0uNDQ3LjcxOC0uNTE1bC4wNTQtLjA1NHptLTEwLjIzNCAxLjIyYy4wMTQgMCAuMDE0LjAyNy0uMDEzLjE3Ni0uMDE0LjEwOC0uMDQuMzExLS4wNC40NDctLjAyOC41OTcuMDY3IDEuMDQ0LjM2NSAxLjY1NC4wODEuMTYyLjE1LjMxMi4xNS4zMTItLjAyOC4wMjctMi43NjYuODI2LTMuNjIgMS4wNTctLjI1Ny4wNjgtLjQ3NC4xMzUtLjUwMS4xMzUtLjAyNy4wMTQtLjAyNyAwLS4wMjctLjA2Ny4wOTQtLjYxLjU1NS0xLjM5NyAxLjIwNi0yLjA3NC40MzQtLjQ0OC43NzMtLjcwNSAxLjM1NS0xLjA0NC40Mi0uMjE3IDEuMDU4LS41ODMgMS4xMjUtLjU5Ny0uMDEzIDAtLjAxMyAwIDAgMHptNi40MzkgMS4xNTJzLjEwOC4wNTQuMjE3LjEyMmMuODguNTE1IDIuMTE0Ljk5IDMuMTU4IDEuMjMzbC4wOTUuMDI3LS4xMzYuMDY4Yy0uNTU1LjMxMi0yLjM1OCAxLjA1Ny00LjIwMiAxLjc0OS0uMjcuMDk1LS41MjguMjAzLS41ODIuMjE2LS4wNTUuMDI4LS4wOTUuMDI4LS4wOTUuMDI4cy4wNjctLjE1LjE2Mi0uMzI2Yy41MTUtLjk2MiAxLjAzLTIuMTQxIDEuMzAyLTIuOTU1LjA1NC0uMDk1LjA4MS0uMTYyLjA4MS0uMTYyem0tLjY1LjIxN3MtLjAyOC4wOTQtLjA2OC4xOWEyNy4wMTQgMjcuMDE0IDAgMDEtMS40MzcgMi44ODdjLS4xNS4yNy0uMjg1LjQ4OC0uMjg1LjQ4OHMtLjEyMi0uMDY4LS4yNzEtLjE2M2MtLjg4MS0uNTQyLTEuNjU0LTEuMTkzLTIuMTU1LTEuODQ0bC0uMDY4LS4wOTUuMzgtLjEwOEEyNy4wOTggMjcuMDk4IDAgMDAyNy44IDE4Ljk5Yy4xMjItLjA1NC4yNTgtLjEwOC4yNzEtLjEwOHptNC4wOCAxLjQyM2MwIC4wOTUtLjIwNC45NDktLjM4IDEuNTU5LS4xNS41MTUtLjI3MS45MjEtLjUwMiAxLjY0LS4wOTUuMzExLS4xOS41Ny0uMTkuNTdzLS4wMjcgMC0uMDU0LS4wMTVhMTYuNDg3IDE2LjQ4NyAwIDAxLTMuMzYxLS45NDhjLS4yODUtLjEyMi0uNzA1LS4yOTktLjczMi0uMzI2LS4wMTQtLjAxMy4yNDQtLjEyMi41NTUtLjI1NyAxLjg4NS0uODI3IDMuODIzLTEuNzQ5IDQuNS0yLjE1NWEuODA0LjgwNCAwIDAxLjE2My0uMDY4em0tOS40MjEuMzI1Yy4wMTMuMDE0LS41MTUuNzYtMS4yNDcgMS43OS0uMjU4LjM2NS0uNTU2Ljc4NS0uNjY1LjkzNS0uMTA4LjE2Mi0uMjg0LjQwNi0uMzc5LjU1NWwtLjE3Ni4yNzEtLjE5LS4xNjJhNy4wNTUgNy4wNTUgMCAwMS0uNzczLS43ODZjLS4zNTItLjQ0OC0uNTk2LS45MDktLjY5LTEuMzI5LS4wNDItLjIwMy0uMDQyLS4yOTggMC0uMzExLjA2Ny0uMDE0IDEuMTY1LS4yNzIgMi4xOTUtLjUxNi41Ny0uMTM1IDEuMjMzLS4yODQgMS40NzctLjM1Mi4yNDQtLjA1NC40MzQtLjA5NS40NDgtLjA5NXptLjUyOC4yMDRsLjEzNi4xNDlhNy45NjUgNy45NjUgMCAwMDEuOTM4IDEuNTg1Yy4xMzYuMDY4LjIzLjEzNi4yMTcuMTUtLjAyNy4wMjctMi41NDguOTIxLTMuNzI3IDEuMzE0LS42NTEuMjMtMS4xOTMuNDItMS4yMDcuNDJsLS4wODEtLjA1NC0uMDY4LS4wNTQuMTIyLS4xNzZjLjM5My0uNTU2Ljg4MS0xLjE4IDEuOTM4LTIuNDUzbC43MzItLjg4MXptMy4yOTQgMi4zNThzLjE5LjA2OC40MDcuMTVjLjU0Mi4yMDIuOTYyLjMyNCAxLjUzMi40NzRhMTguMjEgMTguMjEgMCAwMDIuMzE3LjQwNmMuMDk1LjAxNC4xMzYuMDE0LjEyMi4wMjctLjAyNy4wMTQtLjYzNy4yMTctMS4wODQuMzY2YTI1Ny42MzQgMjU3LjYzNCAwIDAxLTUuMjczIDEuNTQ2Yy0uMDQuMDEzLS4xNzYtLjAyOC0uMTc2LS4wNDEgMC0uMDE0LjA5NS0uMTM2LjIxNy0uMjcxYTI2LjIxNSAyNi4yMTUgMCAwMDEuNjgtMi4yNWMuMTM2LS4yNDQuMjU4LS40MDcuMjU4LS40MDd6bS0uNzMyLjAxNHMtLjI4NC40NzQtLjggMS4yODdjLS4yMTYuMzQtLjQ2LjczMi0uNTU1Ljg2OC0uMDgyLjEzNS0uMjA0LjMzOS0uMjcxLjQ2bC0uMTIyLjIxNy0uMDY4LS4wMTNjLS4xNS0uMDQtMS4xOTMtLjQwNy0xLjQ2NC0uNTE1YTkuMTkgOS4xOSAwIDAxLS45NjItLjQ0N2MtLjMyNi0uMTc3LS43NDYtLjQ0OC0uNzA1LS40NDguMDEzIDAgLjU2OS0uMTYyIDEuMjYtLjMzOSAxLjgwMy0uNDg4IDIuODA2LS43NzIgMy40Ny0uOTkuMTA5LS4wNTMuMjE3LS4wOC4yMTctLjA4em01LjEzNyAxLjIwNmMuMDI4LjA0LS42NSAxLjg5OC0uODk0IDIuNDgtLjA1NC4xMzYtLjA2OC4xNjMtLjEwOS4xNjMtLjA2NyAwLTEuMDQzLS4xMzUtMS42MjYtLjIzLTEuMDMtLjE2My0yLjc1Mi0uNDYxLTMuMTg1LS41NTZsLS4wOTUtLjAyNy42MS0uMTM2YzEuMzI4LS4yOTggMS45NTEtLjQ2IDIuNjAyLS42NWExNy44MzMgMTcuODMzIDAgMDAyLjQyNi0uOTM2Yy4xMzYtLjA1NC4yNDQtLjEwOC4yNzEtLjEwOHpcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MV9saW5lYXIpXCJcclxuICAgICAgICBkPVwiTTI3Ljg5NiAwYy0uMDk1LS4wMTMtMS41NTkuNTE1LTIuNTA3Ljg5NS0xLjI3NC41MTUtMi4yNjQgMS4wMTYtMi44NzQgMS40NS0uMjMuMTYzLS41MTUuNDQ4LS41NTYuNTU2YS40ODQuNDg0IDAgMDAtLjAyNy4xMzZsLjU1Ni41MjggMS4zMTUuNDIgMy4xMy41NTYgMy41OC42MS4wNC0uMzEyaC0uMDI3bC0uNDc0LS4wNjctLjA5NS0uMTYzYTMwLjUgMzAuNSAwIDAxLTEuMzQyLTIuNjQzIDEyLjU4MyAxMi41ODMgMCAwMS0uNTk3LTEuNjY4QzI3Ljk1MS4wMTQgMjcuOTM3IDAgMjcuODk2IDB6bS0uMDY4LjIwNGMuMDE0IDAgLjAyOC4xMjIuMDQxLjI1Ny4wNjguNTgzLjIwNCAxLjEzOS40MDcgMS43MzUuMTQ5LjQ2MS4xNDkuNDM0LS4wMjcuMzgtLjQyLS4xMjItMi4zMDUtLjQ0OC0zLjY3NC0uNjM3LS4yMTctLjAyOC0uNDA2LS4wNTUtLjQwNi0uMDY4LS4wMTQtLjAxNC45OS0uNTQyIDEuNDIzLS43NDYuNTctLjI1NyAyLjEyOC0uODk0IDIuMjM2LS45MjF6TTIzLjg0MyAyLjA2bC4xNjMuMDU0Yy44ODEuMjk4IDMuMDc3LjcxOCA0LjI5Ny44MTNsLjI1Ny4wMjdzLS4xMDguMDY4LS4yNTcuMTM2Yy0uNTgzLjI5OC0xLjIzNC42NS0xLjY4LjkzNS0uMTM3LjA4MS0uMjU4LjE1LS4yNzIuMTVhMi45NyAyLjk3IDAgMDEtLjE5LS4wMjhMMjYgNC4xMjFsLS40MDctLjQwN2MtLjczMi0uNzA1LTEuMzAxLTEuMjQ3LTEuNTE4LTEuNDY0bC0uMjMtLjE5em0tLjE2Mi4xMjJsLjU4My43MzJjLjMxMS40MDYuNjM3Ljc4Ni43MDQuODguMDY4LjA4Mi4xMjIuMTYzLjEyMi4xNjMtLjAxMy4wMTQtLjg0LS4xNDktMS4yNzQtLjI0NC0uNDQ3LS4xMDgtLjYzNy0uMTQ5LS45MDgtLjI0NGwtLjIzLS4wNjd2LS4wNTVjMC0uMjcuMzUyLS42OTEuOTQ4LTEuMTExbC4wNTUtLjA1NHptNC45NDcuOTljLjAxNCAwIC4wNC4wNC4wODEuMTQ4LjEzNi4zMTIuNTgzIDEuMTM5LjY5MiAxLjMwMS4wMjcuMDU1LjA5NS4wNTUtLjQ4OC0uMDQtMS4zOTYtLjIzLTEuODQ0LS4yOTgtMS44NDQtLjMxMiAwIDAgLjA0MS0uMDI3LjA5NS0uMDY4YTguNjg4IDguNjg4IDAgMDAxLjI2LS44NjcgMS45OCAxLjk4IDAgMDEuMjA0LS4xNjNjLS4wMTMgMCAwIDAgMCAwelwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cInVybCgjcGFpbnQyX3JhZGlhbClcIlxyXG4gICAgICAgIGQ9XCJNMjEuOTg2IDIuODMzcy0uMDk1LjE0OSAwIC4zNjZjLjA1NS4xMzUuMjE3LjI5OC4zOTMuNDYgMCAwIDEuODQ0IDEuNzkgMi4wNiAyLjA0OCAxLjAxNyAxLjE3OSAxLjQ2NSAyLjMzIDEuNTA1IDMuOTE3LjAyNyAxLjAzLS4xNjIgMS45MjUtLjY1IDIuOTY4LS44NTQgMS44Ny0yLjY3IDMuOTQ1LTUuNDYzIDYuMjM2bC40MDctLjEzNmMuMjU3LS4yMDMuNjIzLS40MDcgMS40NjQtLjg2NyAxLjk1MS0xLjA3MSA0LjEzNC0yLjA0NyA2LjgxOC0zLjA1IDMuODYzLTEuNDUgMTAuMjItMy4xNTkgMTMuODQtMy43MTRsLjM3OS0uMDU1LS4wNTQtLjA5NGExMS43MDEgMTEuNzAxIDAgMDAtLjgyNy0xLjE2NmMtLjc4Ni0uOTktMS43NDktMS43NzYtMi45MjgtMi40NC0xLjYxMy0uOTA4LTMuNzE0LTEuNjEzLTYuMzcxLTIuMTQyLS41MDItLjA5NS0xLjYtLjI4NC0yLjQ5NC0uNDJhMjkxLjkxIDI5MS45MSAwIDAxLTQuNDYtLjczMiAzMy40MzggMzMuNDM4IDAgMDEtMS42OC0uMzEyIDkuOTQ1IDkuOTQ1IDAgMDEtMS4wOTgtLjI5OGMtLjMyNi0uMDk1LS43NDYtLjIxNy0uODQtLjU3em0xLjA3MSAxLjA0NHMuMDY4LjAyNy4xNjMuMDU0Yy4xNjIuMDU0LjM2Ni4xMjIuNTk2LjE3Ni4xNzYuMDU0LjM2Ni4wOTUuNTQyLjE1LjI0NC4wNjcuNDYxLjEyMS40NjEuMTIxLjAyNy4wMjcuNDQ4IDEuMzcuNTgzIDEuODcuMDU0LjE5LjA5NS4zNjcuMDk1LjM2N3MtLjA1NC0uMDY4LS4xMDgtLjE2M2MtLjQ4OC0uODU0LTEuMjQ3LTEuNzA4LTIuMTI5LTIuNDEzYTguNTI1IDguNTI1IDAgMDEtLjIwMy0uMTYyem0yLjAzMy41NTVjLjAyNyAwIC4xMDkuMDE0LjIxNy4wNDFhNTkuNDQgNTkuNDQgMCAwMDIuNzY1LjUyOWMuMTM2LjAyNy4yNDQuMDQuMjQ0LjA1NCAwIC4wMTMtLjA1NC4wNC0uMTA4LjA2OGExMy4xMSAxMy4xMSAwIDAwLS44NjguNTE1IDguMTQ1IDguMTQ1IDAgMDAtMS4zODIgMS4xNTJzLS4wMjctLjA2OC0uMDQtLjE2M2MtLjE1LS41Ny0uNDYyLTEuNDIzLS43NDYtMi4wMi0uMDU1LS4wOC0uMDk1LS4xNzYtLjA4Mi0uMTc2LS4wMTMgMC0uMDEzIDAgMCAwem0zLjU2NS42NzhjLjAyNy4wMTQuMDY4LjE1LjE1LjQ2MS4xNDguNTk2LjIxNiAxLjI3NC4yMDMgMS44OTgtLjAxNC4xNzYtLjAxNC4zMzktLjAyNy4zNTJsLS4wMTQuMDQtLjIxNy0uMDY3Yy0uNDQ3LS4xMzYtMS4xNjYtLjM1Mi0xLjc3Ni0uNTI5LS4zNTItLjA5NS0uNjM3LS4xNzYtLjYzNy0uMTkgMC0uMDI3LjUxNS0uNTQyLjczMi0uNzMxLjQyLS4zNjYgMS41Ni0xLjI0NyAxLjU4Ni0xLjIzNHptLjI4NS4wNGMuMDEzLS4wMTMgMS43MDguMjg1IDIuNDguNDM1LjU3LjEwOCAxLjQxLjI4NCAxLjQ2NC4zMTEuMDI3LjAxNC0uMDY3LjA1NC0uMzM5LjE3NmExOS4yIDE5LjIgMCAwMC0yLjcxIDEuNDY0Yy0uMjE3LjEzNi0uMzk0LjI1OC0uMzk0LjI1OHMtLjAxMy0uMTIyLS4wMTMtLjI1OGMwLS43ODYtLjE2My0xLjU3Mi0uNDQ3LTIuMjUtLjAxNC0uMDY3LS4wNDEtLjEyMi0uMDQxLS4xMzV6bTQuMzkyLjg2OGMuMDEzLjAxNC0uMDQxLjM1My0uMDk1LjU0Mi0uMTUuNjEtLjU1NiAxLjUzMi0xLjA0NCAyLjM4Ni0uMDgxLjE1LS4xNjMuMjcxLS4xNzYuMjg1LS4wMTQgMC0uMTIyLS4wNTQtLjI0NC0uMTM2LS40NzUtLjI4NC0xLjAzLS41NDItMS42MTMtLjc4Ni0uMTYzLS4wNjgtLjMxMi0uMTIyLS4zMTItLjEzNi0uMDI3LS4wMjcgMS4zMDEtLjkwOCAyLjAwNi0xLjMyOC41NTYtLjMzOSAxLjQ2NC0uODQgMS40NzgtLjgyN3ptLjMxMS4wNTRjLjA0MSAwIC43ODcuMjA0IDEuMTguMzI2Ljk3Ni4yODQgMi4wODcuNjkxIDIuODA2IDEuMDNsLjI5OC4xMzYtLjIxNy4wNTRjLTEuNzc2LjQwNi0zLjI5NC44OC00Ljc1OCAxLjQ3Ny0uMTIyLjA1NC0uMjMuMDk1LS4yMy4wOTUtLjAxNCAwIC4wMjctLjA5NS4wODEtLjIxNy40NDctLjkzNS43MzItMS45MTEuOC0yLjc1MS4wMjctLjA4Mi4wNC0uMTUuMDQtLjE1em0tNy40ODIgMS43MjJjLjAxNC0uMDE0LjU4My4xMjIuODk1LjIxNy40NzQuMTM1IDEuNDY0LjQ2IDEuNDY0LjQ4OCAwIDAtLjEwOS4wOTUtLjI0NC4yMTctLjU0My40NDctMS4wNTguOTIxLTEuNjgxIDEuNTMxLS4xOS4xNzctLjMzOS4zMjYtLjM1Mi4zMjYtLjAxNCAwLS4wMTQtLjAyNy0uMDE0LS4wNTUuMDk1LS42OS4wNjgtMS41ODUtLjA1NC0yLjQ5NCAwLS4xMzUtLjAxNC0uMjMtLjAxNC0uMjN6bTEyLjA2NC4wMTRjLjAxNC4wMTMtLjI3MS40MzMtLjQzNC42NzctLjI0NC4zNTMtLjYxLjgyNy0xLjQzNyAxLjg1Ny0uNDMzLjU0Mi0uOTIxIDEuMTY2LTEuMDg0IDEuMzctLjE2My4yMDMtLjI5OC4zNzktLjMxMi4zNzkgMCAwLS4wNTQtLjA2OC0uMTIyLS4xNjNhOC41OTggOC41OTggMCAwMC0xLjY2Ny0xLjg0MyAyLjI1NiAyLjI1NiAwIDAwLS4zMTItLjI0NGMtLjA0LS4wMjctLjA4MS0uMDY4LS4wODEtLjA2OCAwLS4wMTQuNzA1LS4zMTIgMS4yMzMtLjUyOS45MzYtLjM4IDIuMjEtLjg0IDMuMTU5LTEuMTI1LjUxNS0uMTc2IDEuMDU3LS4zMjUgMS4wNTctLjMxMXptLjMyNS4wOGEuNzMuNzMgMCAwMS4yMy4xMjMgMTMuNzg1IDEzLjc4NSAwIDAxMi43NjYgMi4wNzRjLjIxNy4yMTcuNzU5Ljc3Mi43NDUuNzg2bC0uNDA2LjAyN2MtMS43MzUuMTM2LTMuOTU4LjUwMi02LjEgMS4wMTctLjE0OS4wMjctLjI3MS4wNjctLjI4NS4wNjctLjAxMyAwIC4xNS0uMTYyLjM1My0uMzUyIDEuMjYtMS4yMDYgMS44My0xLjk3OSAyLjUwOC0zLjMzNWEzLjE3IDMuMTcgMCAwMS4xOS0uNDA2Yy0uMDE0IDAtLjAxNCAwIDAgMHptLTkuMjAzLjkzNmMuMDU0LjAxNC41OTYuMjcxIDEuMDAzLjQ2MWwuOTYyLjUwMnMtLjE5LjEwOC0uNDM0LjIzYy0uNzcyLjM5My0xLjQzNy43NTktMi4xNDEgMS4xOGwtLjM2Ni4yMTZjLS4wMTQgMC0uMDE0LS4wMTQuMDk1LS4yMTdhOS4xNDggOS4xNDggMCAwMC44NC0yLjI3N2MuMDEzLS4wNTQuMDI3LS4wOTUuMDQtLjA5NXptLS41My4xMDljLjAxNC4wMTMtLjEyMS41MTUtLjIxNi44LS4xNjMuNTI4LS40NiAxLjE3OS0uNzMyIDEuNjgtLjA2OC4xMjItLjE2My4yODUtLjIxNy4zOGwtLjEwOC4xNjItLjIzLS4yMTdhMy4yMzUgMy4yMzUgMCAwMC0uNzczLS41NjljLS4xMDktLjA1NC0uMjA0LS4xMDgtLjIwNC0uMTIyIDAtLjAyNy43MDUtLjY3OCAxLjI0Ny0xLjEzOS4zOTMtLjMzOCAxLjIyLS45ODkgMS4yMzQtLjk3NXptMy4yODEgMS4zNDFsLjIwMy4xMzZjLjQ2MS4yOTggMS4wMDMuNzA1IDEuNDI0IDEuMDU3LjIzLjE5LjY5MS41OTcuNzg2LjcwNWwuMDU0LjA1NC0uMzM5LjA5NWMtMS44OTcuNTI5LTMuMzQ4Ljk5LTUuMDU2IDEuNjEzLS4xOS4wNjgtLjM1Mi4xMjItLjM2Ni4xMjItLjAyNyAwLS4wNC4wMjcuMzgtLjM2NiAxLjA4NC0xLjAwMyAyLjA2LTIuMTE0IDIuNzc5LTMuMTg1bC4xMzUtLjIzem0tLjg2Ny4yMTdjLjAxMy4wMTQtLjU1Ni44LS44OTUgMS4yNjFhNTguMTY2IDU4LjE2NiAwIDAxLTEuNjEzIDIuMDJjLS4yMDMuMjQ0LS4zOC40NDctLjM5My40NDctLjAxNCAwLS4wMTQtLjA1NC0uMDE0LS4xNSAwLS41LS4xMjItMS4wMy0uMzUyLTEuNDktLjA5NS0uMTktLjEwOC0uMjMtLjA5NS0uMjU4LjA4MS0uMDY3IDEuMjc0LS43NTkgMi4wNDctMS4xNjUuNTAxLS4yNzIgMS4zMDEtLjY3OCAxLjMxNS0uNjY1em0tNS4yMTkgMS4yNzRjLjAxNCAwIC4xMDguMDU1LjIxNy4xMDkuMjU4LjE1LjUwMi4zMTIuNzA1LjQ3NC4wMTMuMDE0LS4wOTUuMDk1LS4yNDQuMjA0LS4zOTMuMjg0LS45OS43MzItMS4zMjkgMS4wMDMtLjM2Ni4yODQtLjM4LjI5OC0uMzM4LjIzLjI3LS40Mi40MDYtLjY1LjU1NS0uOTQ5LjEyMi0uMjcuMjU4LS41ODIuMzUzLS44NjcuMDI3LS4xMDkuMDY3LS4yMDQuMDgxLS4yMDR6bTEuMzk2IDEuMDk4Yy4wMjcgMCAuMDQuMDI4LjE2My4yMDQuMjMuMzUyLjQyLjgyNy40NiAxLjIwNmwuMDE0LjA4Mi0uNTY5LjIxNmE1MC40MjYgNTAuNDI2IDAgMDAtMi41NzUgMS4wNzFjLS4xNzcuMDgyLS40ODguMjMtLjY5Mi4zMjUtLjIwMy4xMDktLjM2Ni4xNzctLjM2Ni4xNzdzLjEyMi0uMDk1LjI4NS0uMjE3YzEuMjMzLS44OTUgMi4zMDQtMS44ODQgMy4xMDQtMi44Ni4wODEtLjEwOS4xNjMtLjIwNC4xNzYtLjIwNHptLS42MzcuMTVjLjAxNC4wMTMtLjQ2LjU1NS0uNzczLjg4YTE0LjA2IDE0LjA2IDAgMDEtMi41NjEgMi4wNzRjLS4xMjIuMDgyLS4yMy4xNS0uMjQ0LjE2My0uMDI3LjAxNC4wMTMtLjAyNy40MzMtLjQ4OC4yNzEtLjI5OC40NzUtLjU0Mi43MTktLjg0LjE2My0uMjA0LjE5LS4yMy40MDctLjM5My41OTYtLjQ2MSAxLjk5Mi0xLjQxIDIuMDItMS4zOTZ6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgZD1cIk04Ljg3OSAzMC4xMTljLS4wODIgMC0uMTUuMDEzLS4yMy4wMTMtMS41NDYuMDgxLTIuNTc2Ljc2LTMuMTg2IDIuMDg4LS41MTUgMS4xOTItLjQ2IDIuNzY1IDAgMy45NTguNTQyIDEuMTc5IDEuNDIzIDEuODAyIDIuODg3IDIuMDMzLjMxMi4wNTQuNTE1LjIxNyAxLjEyNS45MjJsLjc0Ni44NjdoMS4zNDJsLS44OTUtLjg5NWMtLjQ4OC0uNDg4LS44OTUtLjkyMS0uODk1LS45NjIgMC0uMDQuMTktLjEyMi40Mi0uMTkuNzYtLjIzIDEuMzgzLS44MTMgMS44MTctMS43MDguMzUyLS43MTguNDA3LS45MzUuNDYtMS44My4xMzYtMi42NTYtMS4yNi00LjMxLTMuNTkxLTQuMjk2em0xLjE4IDYuOTRjLS42NTIuMzExLTEuNi4zOC0yLjIyNC4xNDktLjYzNy0uMjMtMS4yNi0uODk1LTEuNTQ1LTEuNjU0LS4zMTItLjgyNy0uMjcxLTIuMzQ1LjA5NS0zLjAyMy41NjktMS4wODQgMS4zMjgtMS41ODYgMi40MjYtMS41ODYgMS42MjcgMCAyLjU2MiAxLjAwMyAyLjY4NCAyLjg3NC4wOTUgMS41NzItLjQzNCAyLjc1Mi0xLjQzNyAzLjI0em0yMy4xOTEtNC42NzdjLS41NjkgMC0uOTkuMjMtMS4yODcuNjc4bC0uMjMuMzUydi0uOTIxaC0uOTc3djUuNTQ0aC45NzZ2LTEuNzc2YzAtMS42MjcuMDE0LTEuODE2LjI0NC0yLjI1LjMxMi0uNjEuODU0LS45MDggMS4zNy0uNzczbC4zNTIuMDk1di0uOTYybC0uNDQ4LjAxM3ptLTUuNzItLjA1NGMtLjE5IDAtLjM5My4wMjctLjU5Ni4wNjgtMS4zMDEuMzM5LTIuMDMzIDEuNTg2LTEuOTkzIDIuODczIDAgMS4wNzEuMjA0IDEuNjEzLjczMiAyLjE4MyAxLjA1OC44NjcgMi4wMi45MzUgMy4zMjEuNDc0bC40NjEtLjIwM3YtLjg2OGwtLjQ2LjI0NGMtMS4wNDQuNDYxLTEuODQ0LjQ2MS0yLjQ4MS0uMDgxLS40MDctLjQwNy0uNTgzLS45MDgtLjY2NS0xLjQ2NGgzLjkzMXYtLjc0NWMwLTEuNTMyLS45MjEtMi40OTUtMi4yNS0yLjQ4MXptLTEuNTg2IDIuNDRzLjE1LS45NDkuNjc4LTEuMzI4Yy4yNTgtLjE3Ny41NTYtLjI3Mi44NTQtLjI3Mi4yOTggMCAuNTgzLjA5NS44MjcuMjg1LjQ4OC4zOC41ODMgMS4zMTUuNTgzIDEuMzE1aC0yLjk0MnpNMi40NCAzMy43NjVDMS4zODMgMzMuMTI4LjkxIDMyLjY2Ny45NzYgMzIuMTI1Yy4xNjMtMS41MDUgMi4wMi0xLjMwMiAzLjA1LS43MzJsLjAxNC0xLjAxN3MtLjU3LS4yNDQtMS4zODMtLjI1N2MtMS4yNDctLjAxNC0yLjA2LjM5My0yLjQ0IDEuMjMzLS41NTUgMS4yMzQtLjA2NyAyLjE2OSAxLjcyMiAzLjE5OSAxLjAwMy41ODMgMS40NSAxLjA4NCAxLjQ1IDEuNjQgMCAxLjEzOS0xLjM2OSAxLjUzMi0yLjc5Mi44MjctLjI5OC0uMTUtLjU0Mi0uMjcxLS41NTYtLjI3MS0uMDU0LjMyNS0uMDI3IDEuMDk4LS4wMjcgMS4wOThzLjQzNC4xNzYgMS4wODQuMzEyYzEuNjI3LjMyNSAzLjA5LS40MzQgMy4yNC0xLjY2OC4xMDgtMS4xNjUtLjMxMi0xLjc3NS0xLjg5OC0yLjcyNHptMzkuNDQ1LTEuNDM3Yy0uMTkgMC0uMzkzLjAyNy0uNTk3LjA2OC0xLjMuMzM5LTIuMDMzIDEuNTg2LTEuOTkyIDIuODczIDAgMS4wNzEuMjAzIDEuNjEzLjczMiAyLjE3IDEuMDU3Ljg2NyAyLjAyLjk0OCAzLjMzNC40NzRsLjQ2MS0uMjA0di0uODY3bC0uNDYuMjQ0Yy0xLjA1OC40Ni0xLjg0NC40Ni0yLjQ4MS0uMDgyLS40MDctLjQwNi0uNTgzLS44OTQtLjY2NC0xLjQ2M2gzLjkxN3YtLjc0NmMwLTEuNTMyLS45MjItMi40OTQtMi4yNS0yLjQ2N3ptLTEuNiAyLjQyNnMuMTUtLjk0OC42NzgtMS4zMjhhMS40MSAxLjQxIDAgMDEuODQtLjI3MWMuMjg1IDAgLjU4My4wOTUuODI3LjI4NS40ODguMzc5LjU4MyAxLjMxNC41ODMgMS4zMTRoLTIuOTI4em0tMTcuODY1LS45NzZjLTEuMDU3LS42MzctMS41MTgtMS4wOTgtMS40NjQtMS42NC4xNjMtMS41MDQgMi4wMi0xLjMwMSAzLjA1LS43MzJsLjAxNC0xLjAxNnMtLjU3LS4yNDQtMS4zODMtLjI1OGMtMS4yNDctLjAxMy0yLjA2LjM5My0yLjQ0IDEuMjM0LS41NTYgMS4yMzMtLjA1NCAyLjE2OCAxLjcyMiAzLjE5OSAxLjAwMy41ODIgMS40MzYgMS4wODQgMS40MzYgMS42MjYgMCAxLjEzOS0xLjM2OSAxLjU0NS0yLjc5Mi44MjdhNy4yMzEgNy4yMzEgMCAwMC0uNTU2LS4yNzFjLS4wNTQuMzI1LS4wMjcgMS4wOTgtLjAyNyAxLjA5OHMuNDM0LjE3NiAxLjA4NS4zMTJjMS42MjYuMzI1IDMuMDktLjQzNCAzLjI0LTEuNjY4LjEyMS0xLjE1Mi0uMjk5LTEuNzYyLTEuODg1LTIuNzF6bTI1LjE4NS0xLjQxYy0uNTcgMC0xLjAwMy4yMzEtMS4yODguNjc4bC0uMjMuMzUzdi0uOTIyaC0uOTc2djUuNTQ0aC45NzZ2LTEuNzYyYzAtMS42MjcuMDEzLTEuODE2LjI0NC0yLjI1LjMxMi0uNjEuODU0LS45MDggMS4zNjktLjc2bC4zNTIuMDk2di0uOTYzbC0uNDQ3LS4wMTN6bS0zMi45MzggMS4zODN2LTMuNTM4aC0uOTc2djcuODIyaDQuMTM0di0uOTIySDE0LjY4bC0uMDEzLTMuMzYyem0yMi43MzEgMS4wOThsLS44MTMgMi4xMDEtLjc3My0yLjExNC0uNzg2LTIuMzQ1aC0xLjAwM2MuNjUgMS44NDMgMS4zNTUgMy43MjcgMi4wNzQgNS41NDQuMzEyLjAxMy42MjMgMCAuOTM1IDBsMS4wOTgtMi43NTIgMS4xMTItMi44MDZoLS45NjNhNzkuNTU3IDc5LjU1NyAwIDAwLS44OCAyLjM3MnptLTIwLjQ1NC02Ljc2NGEuNTIxLjUyMSAwIDAwLjM5My0uMTYyLjUyMS41MjEgMCAwMC4xNjMtLjM5My41MjEuNTIxIDAgMDAtLjE2My0uMzkzLjU2NS41NjUgMCAwMC0uMzkzLS4xNS41MDEuNTAxIDAgMDAtLjM5My4xNjMuNTQyLjU0MiAwIDAwLS4xNjMuMzkzYzAgLjE2My4wNTQuMjk4LjE2My4zOTMuMDk1LjA5NS4yMy4xNS4zOTMuMTV6bS0uMzUyLS45MDhhLjQ2LjQ2IDAgMDEuMzUyLS4xMzUuNDguNDggMCAwMS4zNTIuMTM1LjQ5Mi40OTIgMCAwMTAgLjcwNS40OC40OCAwIDAxLS4zNTIuMTM2LjQ4LjQ4IDAgMDEtLjM1Mi0uMTM2LjQ5Mi40OTIgMCAwMS0uMTUtLjM1Mi41NTUuNTU1IDAgMDEuMTUtLjM1M3ptLjIzLjQwN2guMDY4Yy4wNCAwIC4wOTUuMDQuMTIyLjEyMmwuMDgxLjE3NmguMTIybC0uMDk1LS4xOWMtLjA0LS4wODEtLjA4MS0uMTIyLS4xMjItLjEzNWEuMjU4LjI1OCAwIDAwLjEzNi0uMDY4Yy4wMjctLjAyNy4wNC0uMDgxLjA0LS4xMjJhLjE3NC4xNzQgMCAwMC0uMDU0LS4xMzZjLS4wNC0uMDQtLjEwOC0uMDU0LS4yMDMtLjA1NGgtLjIwNHYuNzA1aC4wOTVsLjAxNC0uMjk4em0wLS4zMjVoLjA5NWMuMDY4IDAgLjEwOC4wMTMuMTM1LjAyNy4wMjcuMDEzLjAyNy4wNC4wMjcuMDk1IDAgLjA4LS4wNTQuMTIyLS4xNDkuMTIyaC0uMTA4di0uMjQ0em0tMTYuMjI1LjI1N2MwLS4yNDQtLjAxNC0uNDM0LS4wMTQtLjU0Mi4wMjcuMTIyLjA1NS4yMTcuMDgyLjI4NWwuOTQ4IDIuMWguMTYzbC45NDktMi4xMjhjLjAyNy0uMDU0LjA1NC0uMTQ5LjA4MS0uMjdoLjAxNGMtLjAxNC4yMTYtLjAyNy4zOTItLjAyNy41NDJ2MS44NTdoLjMyNXYtMi43NjZoLS40MDdsLS44OCAxLjkzOWMtLjAyOC4wODEtLjA4Mi4xOS0uMTM2LjMzOEgxLjY4Yy0uMDEzLS4wOC0uMDY4LS4xOS0uMTIyLS4zMjVsLS44NTQtMS45MzhILjI3MnYyLjc2NWguMzExbC4wMTQtMS44NTd6bTMuMjEyLjAxNGguMjg1djEuNzIxaC0uMjg1VjI3LjUzem0uMTM2LS42MzhhLjIwNC4yMDQgMCAwMC4xNDktLjA1NGMuMDQtLjA0LjA2OC0uMDgxLjA2OC0uMTQ5IDAtLjA1NC0uMDE0LS4xMDgtLjA2OC0uMTQ5YS4yMDQuMjA0IDAgMDAtLjE1LS4wNTQuMjA0LjIwNCAwIDAwLS4xNDguMDU0LjIxOC4yMTggMCAwMC0uMDY4LjE1YzAgLjA2Ny4wMTQuMTA4LjA2OC4xNDguMDQuMDQxLjA5NS4wNTQuMTQ5LjA1NHptMi4xMjggMi4zODZ2LS4yOThhLjgyOC44MjggMCAwMS0uNDg4LjE3Ni42MjQuNjI0IDAgMDEtLjQ4OC0uMjAzLjc3NS43NzUgMCAwMS0uMTktLjU0MmMwLS4yNDQuMDY4LS40MzQuMTktLjU3YS42NDQuNjQ0IDAgMDEuNDg4LS4yMDNjLjE2MyAwIC4zMjUuMDU0LjQ3NC4xNXYtLjM0YTEuMDAxIDEuMDAxIDAgMDAtLjQ2LS4wOTVjLS4zMTIgMC0uNTcuMDk1LS43NDYuMjk5LS4xNzYuMTktLjI3MS40Ni0uMjcxLjc4NiAwIC4yODQuMDgxLjUyOC4yNTguNzA1YS44OS44OSAwIDAwLjY3Ny4yODRjLjIzLS4wMTMuNDA3LS4wNTQuNTU2LS4xNDl6bS44LS45MDhjMC0uMjMuMDU0LS40MDcuMTQ5LS41NDIuMDk1LS4xMDkuMTktLjE3Ni4zMjUtLjE3Ni4xMDkgMCAuMTkuMDEzLjI0NC4wNjd2LS4zMjVhLjYzLjYzIDAgMDAtLjE5LS4wMjcuNDc0LjQ3NCAwIDAwLS4yOTguMTA4LjY3LjY3IDAgMDAtLjIxNy4zNGgtLjAxM3YtLjQwN0g2LjU2djEuOTc5aC4zMTJWMjguMzd6bTEuODE2IDEuMDQ0Yy4yOTggMCAuNTQyLS4wOTUuNzE4LS4yODUuMTc3LS4xOS4yNzItLjQ0Ny4yNzItLjc1OSAwLS4zMjUtLjA4Mi0uNTctLjI0NC0uNzYtLjE2My0uMTg5LS4zOTQtLjI3LS42OTItLjI3LS4yOTggMC0uNTQyLjA5NS0uNzE4LjI1Ny0uMTkuMTktLjI4NS40NjEtLjI4NS44IDAgLjI5OC4wODIuNTQyLjI1OC43MzIuMTYyLjE5LjM5My4yODUuNjkxLjI4NXptLS40NDctMS42YS42NTQuNjU0IDAgMDEuNDc0LS4xOWMuMjA0IDAgLjM1My4wNjguNDc1LjE5YS44OTIuODkyIDAgMDEuMTc2LjU3YzAgLjI0NC0uMDU0LjQzMy0uMTYzLjU1NS0uMTA4LjEzNi0uMjcxLjIwNC0uNDc0LjIwNGEuNjI1LjYyNSAwIDAxLS40ODgtLjIwNGMtLjEyMi0uMTM1LS4xNzYtLjMxMS0uMTc2LS41NTUtLjAxNC0uMjQ0LjA0LS40MzQuMTc2LS41N3ptMi44MDYgMS40MzdhLjUyOC41MjggMCAwMC4wNC0uNzczIDEgMSAwIDAwLS4zNjYtLjIxNiAxLjY5NCAxLjY5NCAwIDAxLS4yOTgtLjE2My4yNTYuMjU2IDAgMDEtLjA4MS0uMjAzYzAtLjA4Mi4wMjctLjE1LjA5NS0uMTlhLjM5MS4zOTEgMCAwMS4yNTctLjA4MWMuMTc2IDAgLjMxMi4wNC40NDcuMTM1di0uMzEyYS44NzEuODcxIDAgMDAtLjQyLS4wOTVjLS4yMDMgMC0uMzguMDU1LS41MDEuMTYzYS40ODguNDg4IDAgMDAtLjE5LjQwN2MwIC4xNDkuMDQuMjcuMTIyLjM1Mi4wNjguMDgxLjE5LjE1LjM1Mi4yMTcuMTYzLjA2OC4yNzEuMTM2LjMyNi4xOWEuMjQ2LjI0NiAwIDAxLjA4MS4xOWMwIC4xOS0uMTIyLjI4NC0uMzguMjg0YS44MDYuODA2IDAgMDEtLjUxNS0uMTl2LjM0YS45MzIuOTMyIDAgMDAuNDg4LjEyMWMuMjMtLjAxMy40Mi0uMDY3LjU0My0uMTc2em0xLjUwNC0xLjg5OGMtLjI5OCAwLS41NDIuMDk1LS43MTguMjU4LS4xOS4xOS0uMjg1LjQ2LS4yODUuOCAwIC4yOTguMDgyLjU0Mi4yNTguNzMyLjE3Ni4xOS40MDYuMjg0LjcwNC4yODQuMjk5IDAgLjU0My0uMDk1LjcxOS0uMjg0LjE3Ni0uMTkuMjcxLS40NDguMjcxLS43NiAwLS4zMjUtLjA4MS0uNTY5LS4yNDQtLjc1OC0uMTc2LS4xOS0uNDA3LS4yNzItLjcwNS0uMjcyem0uNjI0IDEuMDNjMCAuMjQ1LS4wNTUuNDM0LS4xNjMuNTU2LS4xMDguMTM2LS4yNzEuMjA0LS40NzQuMjA0YS42MjQuNjI0IDAgMDEtLjQ4OC0uMjA0Yy0uMTIyLS4xMzUtLjE3Ny0uMzExLS4xNzctLjU1NSAwLS4yNTguMDY4LS40NDguMTktLjU4M2EuNjU0LjY1NCAwIDAxLjQ3NS0uMTljLjE5IDAgLjM1Mi4wNjguNDYuMTkuMTIyLjEzNS4xNzcuMzI1LjE3Ny41ODN6bS44NTQuOTloLjMxMXYtMS43MDhoLjQ2MXYtLjI3MWgtLjQ2di0uMjk4YzAtLjI3MS4xMDgtLjQyLjMyNS0uNDIuMDgxIDAgLjE0OS4wMTMuMjAzLjA1NHYtLjI4NWMtLjA1NC0uMDI3LS4xMzUtLjAyNy0uMjMtLjAyN2EuNTYyLjU2MiAwIDAwLS40Mi4xNjNjLS4xMzYuMTIyLS4yMDQuMjg0LS4yMDQuNTE1di4zMjVoLS4zMzl2LjI3MWguMzRsLjAxMyAxLjY4MXptMS4zLS41NDJjMCAuMzguMTc3LjU4My41MTYuNTgzYS41MTIuNTEyIDAgMDAuMjk4LS4wNjh2LS4yNzFhLjMzMy4zMzMgMCAwMS0uMjAzLjA2OGMtLjEwOSAwLS4xNzYtLjAyNy0uMjMtLjA4Mi0uMDQxLS4wNTQtLjA2OC0uMTQ5LS4wNjgtLjI4NHYtMS4xMTJoLjUwMXYtLjI3MWgtLjUwMXYtLjU4M2MtLjEwOS4wNC0uMjE3LjA2OC0uMzEyLjA5NXYuNDc1aC0uMzM5di4yN2guMzM5djEuMTh6bTMzLjk1NiAzLjY0NmEuNTY1LjU2NSAwIDAwLS4zOTMtLjE0OS41MDEuNTAxIDAgMDAtLjM5My4xNjMuNTQyLjU0MiAwIDAwLS4xNjMuMzkzYzAgLjE2Mi4wNTQuMjg0LjE2My4zOTNhLjU5LjU5IDAgMDAuMzkzLjE0OS41MjEuNTIxIDAgMDAuMzkzLS4xNjMuNTIxLjUyMSAwIDAwLjE2Mi0uMzkzLjQ2LjQ2IDAgMDAtLjE2Mi0uMzkzem0tLjA0Ljc0NmEuNDYuNDYgMCAwMS0uMzUzLjEzNS40OC40OCAwIDAxLS4zNTMtLjEzNS40OTIuNDkyIDAgMDEtLjE0OS0uMzUzLjQ4LjQ4IDAgMDEuMTM2LS4zNTIuNDYuNDYgMCAwMS4zNTItLjEzNi40OC40OCAwIDAxLjM1Mi4xMzZjLjA5NS4wOTUuMTUuMjE3LjE1LjM1MmEuNDguNDggMCAwMS0uMTM2LjM1M3ptLS4yODYtLjMyNmEuNDI2LjQyNiAwIDAwLjEzNi0uMDY3Yy4wMjctLjAyOC4wNC0uMDgyLjA0LS4xMjJhLjE3NC4xNzQgMCAwMC0uMDU0LS4xMzZjLS4wNC0uMDQtLjEwOC0uMDU0LS4yMDMtLjA1NGgtLjIwM3YuNzA1aC4wOTV2LS4yOTloLjA2N2MuMDQxIDAgLjA4Mi4wNDEuMTIyLjEyMmwuMDgyLjE3N2guMTIybC0uMDk1LS4xOWMtLjA0LS4wODEtLjA4Mi0uMTIyLS4xMDktLjEzNnptLS4wNjctLjA2N2gtLjEwOXYtLjIzaC4wOTVhLjI5LjI5IDAgMDEuMTM2LjAyNmMuMDI3LjAxNC4wMjcuMDQuMDI3LjA5NS0uMDE0LjA4MS0uMDU1LjEwOS0uMTUuMTA5ek0zMS4yMyAyNy4zMTNoLjA5NXYtLjcwNWguMjN2LS4wOTVIMzF2LjA5NWguMjN2LjcwNXptLjUyOC0uNTI5di0uMTYzYzAgLjA0MS4wMTQuMDY4LjAyNy4wODJsLjI3Mi42MWguMDRsLjI3MS0uNjFjLjAxNC0uMDE0LjAxNC0uMDQuMDI3LS4wODJWMjcuMzEzaC4wOTV2LS44aC0uMTA4bC0uMjQ0LjU1NmMwIC4wMTMtLjAyNy4wNTQtLjA0LjEwOGgtLjAxNGMwLS4wMjctLjAxNC0uMDU0LS4wNDEtLjA5NWwtLjI0NC0uNTU2aC0uMTIydi44aC4wOTVsLS4wMTQtLjU0MnpcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjIxLjkwMlwiXHJcbiAgICAgICAgICB4Mj1cIjIzLjg3OFwiXHJcbiAgICAgICAgICB5MT1cIjI0LjU3OFwiXHJcbiAgICAgICAgICB5Mj1cIjIzLjQxMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5MDlDQTlcIj48L3N0b3A+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0VERURFRVwiPjwvc3RvcD5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDFfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMjEuOTQ3XCJcclxuICAgICAgICAgIHgyPVwiMjMuNTM4XCJcclxuICAgICAgICAgIHkxPVwiMi41NzdcIlxyXG4gICAgICAgICAgeTI9XCIyLjU3N1wiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiM5MzlGQUJcIj48L3N0b3A+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0RDREVFMVwiPjwvc3RvcD5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLTIuMDI2NiAtLjMwNDQzIC42MDkwMiAtNC4wNTQyMSAyOS45NjkgOS44NTkpXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0VFMzUyQ1wiPjwvc3RvcD5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjQTkxRDIyXCI+PC9zdG9wPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEljb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgdmlld0JveD1cIjAgMCA0MCA0MFwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZmlsbD1cIiMzMTc4QzZcIlxyXG4gICAgICAgIGQ9XCJNMzYuMDk0IDBIMy45MDZBMy45MDYgMy45MDYgMCAwMDAgMy45MDZ2MzIuMTg4QTMuOTA2IDMuOTA2IDAgMDAzLjkwNiA0MGgzMi4xODhBMy45MDYgMy45MDYgMCAwMDQwIDM2LjA5NFYzLjkwNkEzLjkwNiAzLjkwNiAwIDAwMzYuMDk0IDB6XCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICBkPVwiTTI0Ljc2NiAzMS43OTd2My45MDZjLjYzMi4zMjggMS40MDYuNTcgMi4yNjUuNzM0Ljg2LjE2NCAxLjc5Ny4yNDIgMi43MzUuMjQyLjkzNyAwIDEuNzk3LS4wODYgMi42NTYtLjI2NWE2Ljc0IDYuNzQgMCAwMDIuMTg3LS44NmMuNjMzLS40MTQgMS4xNzItLjkzNyAxLjQ4NS0xLjY0LjMxMi0uNzAzLjU1NC0xLjQ4NS41NTQtMi41IDAtLjcxMS0uMTA5LTEuMzI4LS4zMi0xLjg3NWEzLjY4IDMuNjggMCAwMC0uOTM3LTEuNDA2IDYuMjA0IDYuMjA0IDAgMDAtMS40MDctMS4wOTQgMTcuNDU1IDE3LjQ1NSAwIDAwLTEuODc1LS45MzhjLS41MTUtLjIxLS45MzctLjQxNC0xLjQwNi0uNjE3LS40MDYtLjIwMy0uNzU4LS40MDYtMS4wMTUtLjYxLS4yOS0uMjEtLjUwOC0uNDI5LS42NjUtLjY1NWExLjM3MiAxLjM3MiAwIDAxLS4yMzQtLjc4MmMwLS4yNjUuMDctLjUwOC4yMTEtLjcyNi4xNDEtLjIyLjMzNi0uMzk5LjU4Ni0uNTU1LjI1LS4xNTYuNTYyLS4yNzMuOTM3LS4zNmE1LjQ1OCA1LjQ1OCAwIDAxMS4yNS0uMTI0Yy4zMjkgMCAuNjcyLjAyNCAxLjAxNi4wNzNhOC42OTUgOC42OTUgMCAwMTIuMTg4LjYxYy4zNDMuMTU2LjY2NC4zMzUuOTM3LjUzOHYtMy42NzFhOS42NTcgOS42NTcgMCAwMC0xLjk1My0uNTA4IDE1LjY2IDE1LjY2IDAgMDAtMi40MjItLjE2NGMtLjkzNyAwLTEuNzk3LjEwMS0yLjY1Ni4yOTdhNi4xODMgNi4xODMgMCAwMC0yLjE4OC45MzdjLS42MzMuNDIyLTEuMDkzLjkzOC0xLjQ4NCAxLjY0LS4zNjcuNjU3LS41NDcgMS40MDctLjU0NyAyLjM0NSAwIDEuMTcxLjMzNiAyLjE4NyAxLjAxNiAyLjk2OC42NzIuODYgMS43MTggMS40ODUgMy4wNDcgMi4xMS41MzkuMjE4IDEuMDE1LjQzNyAxLjQ4NC42NDguNDY5LjIxMS44Ni40MyAxLjE3Mi42NTYuMzM2LjIyNy42MDEuNDc3Ljc4MS43NDIuMTk1LjI2Ni4yOTcuNTc5LjI5Ny45MzggMCAuMjUtLjA2MS40ODQtLjE4LjcwM2ExLjUzNyAxLjUzNyAwIDAxLS41NTQuNTYzYy0uMjUuMTU2LS41NTUuMjgtLjkzOC4zNzVhNS43MDggNS43MDggMCAwMS0xLjMyOC4xMzJjLS44NiAwLTEuNzE5LS4xNDgtMi41LS40NDVhNy40MjYgNy40MjYgMCAwMS0yLjM0NC0xLjMyOGwuMTQ5LS4wMzR6bS02LjU2My05LjYxaDV2LTMuMjAzSDkuMjJ2My4yMDNoNXYxNC4yOTdoMy45ODRWMjIuMTg3elwiXHJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb247XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi9jb21tb24vaGVscGVycy9zdHJpbmcuaGVscGVyJztcclxuZXhwb3J0IGludGVyZmFjZSBTZW9IZWFkUHJvcHMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgaXNJbmRleFBhZ2U/OiBib29sZWFuO1xyXG4gICAgaXNGb2xsb3dQYWdlPzogYm9vbGVhbjtcclxuICAgIGNhbm9uaWNhbDogc3RyaW5nO1xyXG4gICAga2V5d29yZD86IHN0cmluZztcclxuICAgIGltYWdlVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTZW9IZWFkOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxTZW9IZWFkUHJvcHM+ID0gKHtcclxuICAgIHRpdGxlID0gJycsXHJcbiAgICBpc0luZGV4UGFnZSA9IGZhbHNlLFxyXG4gICAgaXNGb2xsb3dQYWdlID0gdHJ1ZSxcclxuICAgIGRlc2NyaXB0aW9uID0gJycsXHJcbiAgICBjYW5vbmljYWwgPSAnJyxcclxuICAgIGltYWdlVXJsID0gJy9hc3NldC9pbWFnZXMvYXZhdGFyLmpwZycsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IG1ldGFJbmRleFBhZ2UgPSBpc0luZGV4UGFnZSA/ICdpbmRleCcgOiAnbm9pbmRleCc7XHJcbiAgICBjb25zdCBtZXRhSXNGb2xsb3dQYWdlID0gaXNGb2xsb3dQYWdlID8gJ2ZvbGxvdycgOiAnbm9mb2xsb3cnO1xyXG4gICAgY29uc3QgbWV0YVJvYm90cyA9IGAke21ldGFJbmRleFBhZ2V9LCR7bWV0YUlzRm9sbG93UGFnZX1gO1xyXG4gICAgY29uc3QgcGFnZVRpdGxlID0gYCR7dGl0bGV9YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJCV09qVmFMTXJRbEREWlNNTlJ0U2NwYnRRVEJPV1N1dVpMb0ZlNkl3alY0XCIgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBjb21tb24gaGVhZGVyICovfVxyXG4gICAgICAgICAgICA8dGl0bGU+e2NhcGl0YWxpemUocGFnZVRpdGxlKX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9e21ldGFSb2JvdHN9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJDYW8gQ2hpIEhhaSwgcG9ydGZvbGlvLCBwZXJzb25hbCBwcm9qZWN0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj17J2h0dHBzOi8vaGFpY2FvLndlYnNpdGUnICsgY2Fub25pY2FsfSByZWw9XCJjYW5vbmljYWxcIiAvPlxyXG4gICAgICAgICAgICB7LyogZ29vZ2xlIGhlYWRlciAqL31cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZVVybH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PXtwcm9jZXNzLmVudi5GQl9BUFBfSUR9IC8+XHJcbiAgICAgICAgICAgIHsvKiB0d2l0dGVyIGhlYWRlciAqL31cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlb0hlYWQ7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIHBvc2l0aW9uOiAndG9wLWZ1bGwnIHwgJ2xlZnQtZnVsbCcgfCAncmlnaHQtZnVsbCcgfCAnYm90dG9tLWZ1bGwnO1xyXG4gICAgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFRvb2x0aXBEcm9wQm94OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxUb29sdGlwUHJvcHM+ID0gKHsgY29udGVudCwgcG9zaXRpb24sIGNoaWxkcmVuLCBtYXhMZW5ndGggfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRvb2x0aXBcIj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICB7Y29udGVudC5sZW5ndGggPiBtYXhMZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHotMTAgcC0yIHRleHQtd2hpdGUgaGlkZGVuIG1kOmJsb2NrIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktNCBvcGFjaXR5LTAgaW52aXNpYmxlICR7cG9zaXRpb259IGJnLWdyYXktOTAwIGNvbnRlbnRgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcERyb3BCb3g7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9hYm91dFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXERhdGFcXFxcTXlQcm9qZWN0XFxcXHBvcnRmb2lsaW8tZnJvbnQtZW5kXFxcXHBhZ2VzXFxcXGFib3V0LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gOTMxOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MzEpO1xuLyoqKioqKi8gfSkoKVxuOyIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDg4MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg4ODApO1xuLyoqKioqKi8gfSkoKVxuOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBIZWFkTWFuYWdlckNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8e1xuICB1cGRhdGVIZWFkPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgbW91bnRlZEluc3RhbmNlcz86IGFueVxuICB1cGRhdGVTY3JpcHRzPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgc2NyaXB0cz86IGFueVxufT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnXS5zb21lKCh1cmwpID0+XG4gICAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjE0LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjE0LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNlb0hlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9zZW9IZWFkJztcclxuaW1wb3J0IENTaGFycEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL2NzaGFycCc7XHJcbmltcG9ydCBEb2NrZXJJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbi9kb2NrZXInO1xyXG5pbXBvcnQgRG90bmV0SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vZG90bmV0JztcclxuaW1wb3J0IEV4cHJlc3NJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbi9leHByZXNzJztcclxuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL2dpdGh1Yic7XHJcbmltcG9ydCBKYXZhSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vamF2YSc7XHJcbmltcG9ydCBKZXN0SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vamVzdCc7XHJcbmltcG9ydCBNb25nb0RCSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vbW9uZ29kYic7XHJcbmltcG9ydCBNeXNxbEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL215c3FsJztcclxuaW1wb3J0IE5lc3RKc0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL25lc3Rqcyc7XHJcbmltcG9ydCBOZ2lueEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL25naW54JztcclxuaW1wb3J0IFJlZGlzSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vcmVkaXMnO1xyXG5pbXBvcnQgU29ja2V0SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vc29ja2V0JztcclxuaW1wb3J0IFNxbFNlcnZlckljb24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uL3NxbHNlcnZlcic7XHJcbmltcG9ydCBUeXBlc2NyaXB0SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb24vdHlwZXNjcmlwdCc7XHJcbmltcG9ydCBUb29sdGlwRHJvcEJveCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2x0aXAnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBYm91dFByb3BzIHt9XHJcblxyXG5jb25zdCBBYm91dDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWJvdXRQcm9wcz4gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgLy8gICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IDMpIHtcclxuICAgIC8vICAgICAgICAgICAgIHNldFNsaWRlKDApO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgMzAwMCk7XHJcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gfSwgW2N1cnJlbnRTbGlkZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNlb0hlYWQgdGl0bGU9XCJDYW8gQ2hpIEhhaSB8IEFib3V0IE1lXCIgY2Fub25pY2FsPVwiL2Fib3V0XCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtMSBmYWRlLWluLWluc3RhbnRseSBtZDpmbGV4LXJvdyBtZDp3LTQvNSBtZDpteC1hdXRvIG1kOnNwYWNlLXgtMTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy00OCBoLTY0IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXRsLTN4bCByb3VuZGVkLWJyLTN4bCBtZDpmbGV4LTEgbWQ6aC0xNjYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGR1cmF0aW9uLTMwMCBvcGFjaXR5LTEwMCAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0L2ltYWdlcy9zbGlkZTEuanBnXCIgYWx0PVwiQ2FvIENoaSBIYWlcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBibG9jayBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBkdXJhdGlvbi0zMDAgICR7Y3VycmVudFNsaWRlID09PSAwID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfSAgYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0L2ltYWdlcy9zbGlkZTEuanBnXCIgYWx0PVwiQ2FvIENoaSBIYWlcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBibG9jayBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHctZnVsbCBoLWZ1bGwgZHVyYXRpb24tMzAwICAgJHtjdXJyZW50U2xpZGUgPT09IDEgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9IGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldC9pbWFnZXMvc2xpZGUyLmpwZ1wiIGFsdD1cIkNhbyBDaGkgSGFpXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmxvY2sgb2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBkdXJhdGlvbi0zMDAgICAke2N1cnJlbnRTbGlkZSA9PT0gMiA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ30gYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0L2ltYWdlcy9zbGlkZTMuanBnXCIgYWx0PVwiQ2FvIENoaSBIYWlcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBibG9jayBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsICBkdXJhdGlvbi0zMDAgICR7Y3VycmVudFNsaWRlID09PSAzID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfSBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXQvaW1hZ2VzL3NsaWRlNC5qcGdcIiBhbHQ9XCJDYW8gQ2hpIEhhaVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJsb2NrIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHNwYWNlLXktNCB0ZXh0LXdoaXRlIG1kOmZsZXgtMSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgbWQ6YmxvY2tcIj5BYm91dCBNZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC0yeGxcIj5CYWNrIEdyb3VuZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGksIG15IG5hbWUgaXMgQ2FvIENoaSBIYWkuIEnigJltIGEgVmlldG5hbWVzZSBiYWNrLWVuZCBkZXZlbG9wZXIgbGl2aW5nIGFuZCB3b3JraW5nIGluIEhvIENoaSBNaW5oIGNpdHksIFZpZXQgTmFtLiBJIGhhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXJuZWQgU29mdHdhcmUgRW5naW5uZXJpbmcgYXQgRlBUIHVuaXZlcnNpdHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LTJ4bFwiPlNraWxsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5MYW5ndWFnZXM6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJUeXBlc2NyaXB0XCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwZXNjcmlwdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJDI1wiIG1heExlbmd0aD17MH0gcG9zaXRpb249XCJib3R0b20tZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENTaGFycEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJKYXZhXCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SmF2YUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPkZyYW1ld29ya3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcERyb3BCb3ggY29udGVudD1cIk5lc3RKU1wiIG1heExlbmd0aD17MH0gcG9zaXRpb249XCJib3R0b20tZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5lc3RKc0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJFeHByZXNzSlNcIiBtYXhMZW5ndGg9ezB9IHBvc2l0aW9uPVwiYm90dG9tLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHByZXNzSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcERyb3BCb3ggY29udGVudD1cIi5OZXRcIiBtYXhMZW5ndGg9ezB9IHBvc2l0aW9uPVwiYm90dG9tLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3RuZXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcERyb3BCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwRHJvcEJveCBjb250ZW50PVwiU29ja2V0LmlvXCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29ja2V0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcERyb3BCb3ggY29udGVudD1cIkplc3RcIiBtYXhMZW5ndGg9ezB9IHBvc2l0aW9uPVwiYm90dG9tLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxKZXN0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5EYXRhYmFzZXM6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJTUUwgU2VydmVyXCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3FsU2VydmVySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcERyb3BCb3ggY29udGVudD1cIk15U1FMXCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlzcWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcERyb3BCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwRHJvcEJveCBjb250ZW50PVwiTW9uZ29EQlwiIG1heExlbmd0aD17MH0gcG9zaXRpb249XCJib3R0b20tZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmdvREJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcERyb3BCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwRHJvcEJveCBjb250ZW50PVwiUmVkaXNcIiBtYXhMZW5ndGg9ezB9IHBvc2l0aW9uPVwiYm90dG9tLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpc0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+T3RoZXJzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwRHJvcEJveCBjb250ZW50PVwiR2l0aHViXCIgbWF4TGVuZ3RoPXswfSBwb3NpdGlvbj1cImJvdHRvbS1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcERyb3BCb3ggY29udGVudD1cIkRvY2tlclwiIG1heExlbmd0aD17MH0gcG9zaXRpb249XCJib3R0b20tZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY2tlckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwRHJvcEJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBEcm9wQm94IGNvbnRlbnQ9XCJOZ2lueFwiIG1heExlbmd0aD17MH0gcG9zaXRpb249XCJib3R0b20tZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5naW54SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBEcm9wQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPk1vcmUgQWJvdXQgTWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51YSB0aGVtIHRob25nIHRpbiBzYXUsIGdpbyBjaHVhIGJpZXQgZ2hpIGdpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=