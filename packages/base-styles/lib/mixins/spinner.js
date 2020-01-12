"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spinner = void 0;

var spinner = function spinner(_ref) {
  var border = _ref.border,
      topBorder = _ref.topBorder,
      width = _ref.width,
      height = _ref.height;
  return "\n  border: ".concat(border, ";\n  border-top: ").concat(topBorder, ";\n  border-radius: 50%;\n  width: ").concat(width, "rem;\n  height: ").concat(height, "rem;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n");
};

exports.spinner = spinner;
//# sourceMappingURL=spinner.js.map