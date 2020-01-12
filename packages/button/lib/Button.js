"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _baseStyles = require("@fui-components/base-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", "rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styled.default.button(_templateObject(), _baseStyles.colours.white, _baseStyles.colours.blue, (0, _baseStyles.gridUnits)(0.25));

var Button = function Button(_ref) {
  var text = _ref.text;
  return _react.default.createElement(StyledButton, null, text);
};

exports.Button = Button;
Button.propTypes = {
  text: _propTypes.default.string
};
//# sourceMappingURL=Button.js.map