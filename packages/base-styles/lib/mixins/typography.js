"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseTypography = exports.regular = exports.bold = exports.fitToBaselineGrid = exports.fontSizeForScale = exports.fontStack = void 0;

var _baselineGrid = require("./baseline-grid");

var _colours = require("./colours");

var fontSizeToScale = {
  '-1': 0.75,
  '0': 1,
  '1': 1.777,
  '2': 1.333
};
var fontStack = "\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n  sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n";
exports.fontStack = fontStack;

var fontSizeForScale = function fontSizeForScale(scale) {
  return fontSizeToScale[scale.toString()] || fontSizeToScale[0];
};

exports.fontSizeForScale = fontSizeForScale;

var fitToBaselineGrid = function fitToBaselineGrid(scale) {
  var fontSize = fontSizeForScale(scale);
  return "\n    font-size: ".concat(fontSize, "rem;\n    line-height:").concat(_baselineGrid.gridLineHeight, "em;\n    margin: 0 0 ").concat(_baselineGrid.gridLineHeight, "rem 0;\n  ");
};

exports.fitToBaselineGrid = fitToBaselineGrid;
var bold = 600;
exports.bold = bold;
var regular = 400;
exports.regular = regular;
var baseTypography = "\n  html {\n    font-size: 75%;\n    @media (min-width: ".concat(_baselineGrid.mobileBreakpointInPx, "px) {\n        font-size: 100%;\n      }\n  }\n\n  body {\n    color: ").concat(_colours.colours.blue, ";\n    ").concat(fontStack, "\n    ").concat(fitToBaselineGrid(0), "\n    margin-bottom: 0px;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n    font-kerning: normal;\n    hyphens: manual;\n    -moz-font-feature-settings: \"kern\", \"liga\", \"clig\", \"calt\";\n    -ms-font-feature-settings: \"kern\", \"liga\", \"clig\", \"calt\";\n    -webkit-font-feature-settings: \"kern\", \"liga\", \"clig\", \"calt\";\n    font-feature-settings: \"kern\", \"liga\", \"clig\", \"calt\";  \n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: ").concat(_colours.colours.blue, ";\n    ").concat(fontStack, "\n    text-rendering: optimizeLegibility;\n    font-weight: unset;\n  }\n\n  h1 {\n    ").concat(fitToBaselineGrid(1), "    \n  }\n\n  h2 {\n    ").concat(fitToBaselineGrid(2), "    \n  }\n\n  ul, ol {\n    padding-left: 0;\n    margin: 0;\n  }\n\n  a {\n    color: ").concat(_colours.colours.purple, ";    \n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n");
exports.baseTypography = baseTypography;
//# sourceMappingURL=typography.js.map