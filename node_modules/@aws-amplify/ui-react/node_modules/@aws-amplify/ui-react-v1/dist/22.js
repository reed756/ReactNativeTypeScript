(this["webpackJsonpaws_amplify_react"] = this["webpackJsonpaws_amplify_react"] || []).push([[22],{

/***/ "../amplify-ui-components/dist/esm-es5/amplify-icon.entry.js":
/*!*******************************************************************!*\
  !*** ../amplify-ui-components/dist/esm-es5/amplify-icon.entry.js ***!
  \*******************************************************************/
/*! exports provided: amplify_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_icon", function() { return AmplifyIcon; });
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-83f2275b.js */ "../amplify-ui-components/dist/esm-es5/index-83f2275b.js");
/* harmony import */ var _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-c10e1d4d.js */ "../amplify-ui-components/dist/esm-es5/icons-c10e1d4d.js");


var amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

var AmplifyIcon = function () {
  function AmplifyIcon(hostRef) {
    Object(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
  }

  AmplifyIcon.prototype.validateName = function (newValue) {
    var isBlank = typeof newValue == null;

    if (isBlank) {
      throw new Error('name: required');
    }
  }; // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes


  AmplifyIcon.prototype.render = function () {
    return _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_1__["i"][this.name]();
  };

  Object.defineProperty(AmplifyIcon, "watchers", {
    get: function get() {
      return {
        "name": ["validateName"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return AmplifyIcon;
}();

AmplifyIcon.style = amplifyIconCss;


/***/ })

}]);
//# sourceMappingURL=22.js.map