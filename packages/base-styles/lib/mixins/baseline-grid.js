"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridWeight = exports.contentContainer = exports.maxWidthAndUp = exports.desktop = exports.mobile = exports.mobileBreakpointInPx = exports.layoutWidth = exports.gridUnits = exports.baseUnitSize = exports.gridLineHeight = exports.pixelsPerRem = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pixelsPerRem = 16;
exports.pixelsPerRem = pixelsPerRem;
var gridLineHeight = 1.5;
exports.gridLineHeight = gridLineHeight;
var baseUnitSize = 1;
exports.baseUnitSize = baseUnitSize;

var gridUnits = function gridUnits(factor) {
  return factor * baseUnitSize;
};

exports.gridUnits = gridUnits;
var columns = 12;
var gridUnitsPerColumn = 4.5;
var columnWidthInGridUnits = baseUnitSize * gridUnitsPerColumn;
var layoutWidth = columns * columnWidthInGridUnits + (columns + 1) * gridLineHeight;
exports.layoutWidth = layoutWidth;
var tabletBreakpointInPx = 769;
var mobileBreakpointInPx = 415;
exports.mobileBreakpointInPx = mobileBreakpointInPx;

var mobile = function mobile(props) {
  return _defineProperty({}, "@media(min-width: ".concat(mobileBreakpointInPx / pixelsPerRem, "rem)"), props);
};

exports.mobile = mobile;

var desktop = function desktop(desktopStyles) {
  return "\n  @media(min-width: ".concat(tabletBreakpointInPx / pixelsPerRem, "rem) {\n    ").concat(desktopStyles, "\n  }\n");
};

exports.desktop = desktop;

var maxWidthAndUp = function maxWidthAndUp(props) {
  return _defineProperty({}, "@media(min-width: ".concat(layoutWidth, "rem)"), props);
};

exports.maxWidthAndUp = maxWidthAndUp;

var contentContainer = _objectSpread({
  maxWidth: "".concat(layoutWidth, "rem")
}, desktop);

exports.contentContainer = contentContainer;

var gridWeight = function gridWeight() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return "\n  flex: ".concat(weight, " 1 0;\n");
};

exports.gridWeight = gridWeight;
//# sourceMappingURL=baseline-grid.js.map