"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _codegenNativeComponent = _interopRequireDefault(require("react-native/Libraries/Utilities/codegenNativeComponent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
  Caution, those below are not just typescript types.
  Codegen is using them to create the corresponding C++ data types.

  Codegen doesn't play very well with reusing the same type within a type,
  OR with extending types in an interface, so for now we'll just keep some duplicate
  types here, to avoid issues while `pod install` takes place.
*/
var _default = exports.default = (0, _codegenNativeComponent.default)('MenuView');
//# sourceMappingURL=UIMenuNativeComponent.js.map