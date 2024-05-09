"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenChildren = flattenChildren;
exports.flattenChildrenKeyless = flattenChildrenKeyless;
exports.pickChildren = exports.isInstanceOfComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Credit to geist-ui/react for this file, it's copied from there.
 */
function flattenChildrenKeyless(children) {
  const childrenArray = _react.default.Children.toArray(children);

  return childrenArray.reduce((flatChildren, child) => {
    if (child.type === _react.default.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}

function flattenChildren(children) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return _react.Children.toArray(children).reduce((acc, node, nodeIndex) => {
    if (node.type === _react.default.Fragment) {
      acc.push.apply(acc, flattenChildren(node.props.children, depth + 1, keys.concat(node.key || nodeIndex)));
    } else {
      if ( /*#__PURE__*/(0, _react.isValidElement)(node)) {
        acc.push( /*#__PURE__*/(0, _react.cloneElement)(node, {
          key: keys.concat(String(node.key)).join('.')
        }));
      } else if (typeof node === 'string' || typeof node === 'number') {
        acc.push(node);
      }
    }

    return acc;
  }, []);
}

const pickChildren = (_children, targetChild) => {
  const children = flattenChildren(_children);
  const target = [];

  const withoutTargetChildren = _react.default.Children.map(children, item => {
    if (! /*#__PURE__*/(0, _react.isValidElement)(item)) return item;

    if (isInstanceOfComponent(item, targetChild)) {
      // @ts-expect-error
      target.push( /*#__PURE__*/(0, _react.cloneElement)(item));
      return null;
    }

    return item;
  });

  const targetChildren = target.length >= 0 ? target : undefined;
  return {
    targetChildren,
    withoutTargetChildren
  };
};

exports.pickChildren = pickChildren;

const isInstanceOfComponent = (element, targetElement) => {
  var _type;

  const matches = (element === null || element === void 0 ? void 0 : element.type) === targetElement || typeof (element === null || element === void 0 ? void 0 : element.type) == 'function' && (element === null || element === void 0 ? void 0 : (_type = element.type) === null || _type === void 0 ? void 0 : _type.displayName) === targetElement.displayName;
  return matches;
};

exports.isInstanceOfComponent = isInstanceOfComponent;
//# sourceMappingURL=children.js.map