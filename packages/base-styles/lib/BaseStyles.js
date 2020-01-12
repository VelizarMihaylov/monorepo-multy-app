"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _mixins = require("./mixins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyles = function BaseStyles(_ref) {
  var styles = _ref.styles;
  return _react.default.createElement(_core.Global, {
    styles: (0, _core.css)(_templateObject(), _mixins.normalize, _mixins.baseTypography, styles || '')
  });
};

exports.BaseStyles = BaseStyles;
BaseStyles.propTypes = {
  styles: _propTypes.default.string
};
//# sourceMappingURL=BaseStyles.js.map