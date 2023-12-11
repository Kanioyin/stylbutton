/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var StyleManager = /*#__PURE__*/function () {
  function StyleManager() {
    _classCallCheck(this, StyleManager);
    this.currentStyle = 'default';
    this.styles = {
      "default": 'style/style.css',
      alt: 'style/style2.css',
      tird: 'style/style2.css'
    };
  }
  _createClass(StyleManager, [{
    key: "applyStyle",
    value: function applyStyle(styleName) {
      var newStyle = this.styles[styleName];
      if (newStyle) {
        this.removeOldStyle();
        this.loadNewStyle(newStyle);
        this.hideCurrentStyleLink();
        this.currentStyle = styleName;
      }
    }
  }, {
    key: "removeOldStyle",
    value: function removeOldStyle() {
      var oldStyleLink = document.getElementById('style-link');
      if (oldStyleLink) {
        oldStyleLink.remove();
      }
    }
  }, {
    key: "loadNewStyle",
    value: function loadNewStyle(stylePath) {
      var head = document.head;
      var link = document.createElement('link');
      link.id = 'style-link';
      link.rel = 'stylesheet';
      link.href = stylePath;
      head.appendChild(link);
    }
  }, {
    key: "hideCurrentStyleLink",
    value: function hideCurrentStyleLink() {
      var currentStyleLink = document.getElementById("".concat(this.currentStyle));
      console.log(this.currentStyle);
      for (var key in this.styles) {
        if (this.styles.hasOwnProperty(key)) {
          var iter = document.getElementById("".concat(key));
          iter.style.display = "block";
        }
      }
      if (currentStyleLink) {
        currentStyleLink.style.display = 'none';
      }
    }
  }]);
  return StyleManager;
}();
var styleManager = new StyleManager();
window.onload = function () {
  var _a, _b, _c;
  (_a = document.getElementById('default')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    styleManager.applyStyle('default');
  });
  (_b = document.getElementById('alt')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    styleManager.applyStyle('alt');
  });
  (_c = document.getElementById('tird')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    styleManager.applyStyle('tird');
  });
};
})();

/******/ })()
;