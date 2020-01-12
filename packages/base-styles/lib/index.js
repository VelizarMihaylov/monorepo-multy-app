"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _BaseStyles = require("./BaseStyles");

var _mixins = require("./mixins");

Object.keys(_mixins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mixins[key];
    }
  });
});
var _default = _BaseStyles.BaseStyles;
exports.default = _default;
//# sourceMappingURL=index.js.map