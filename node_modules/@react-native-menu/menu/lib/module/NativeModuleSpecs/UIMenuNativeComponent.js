import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
/*
  Caution, those below are not just typescript types.
  Codegen is using them to create the corresponding C++ data types.

  Codegen doesn't play very well with reusing the same type within a type,
  OR with extending types in an interface, so for now we'll just keep some duplicate
  types here, to avoid issues while `pod install` takes place.
*/

export default codegenNativeComponent('MenuView');
//# sourceMappingURL=UIMenuNativeComponent.js.map