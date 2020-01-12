"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Button = require("../Button");

var _baseStyles = _interopRequireDefault(require("@fui-components/base-styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonStory = function ButtonStory() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_baseStyles.default, null), _react.default.createElement(_Button.Button, {
    text: "Hello"
  }));
};

(0, _react2.storiesOf)('Button', module).add('Button  Story', ButtonStory);
//# sourceMappingURL=Button.stories.js.map