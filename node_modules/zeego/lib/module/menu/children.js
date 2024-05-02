/**
 * Credit to geist-ui/react for this file, it's copied from there.
 */
import React, { Children, isValidElement, cloneElement } from 'react';
export function flattenChildrenKeyless(children) {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child) => {
    if (child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }

    flatChildren.push(child);
    return flatChildren;
  }, []);
}
export function flattenChildren(children) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return Children.toArray(children).reduce((acc, node, nodeIndex) => {
    if (node.type === React.Fragment) {
      acc.push.apply(acc, flattenChildren(node.props.children, depth + 1, keys.concat(node.key || nodeIndex)));
    } else {
      if ( /*#__PURE__*/isValidElement(node)) {
        acc.push( /*#__PURE__*/cloneElement(node, {
          key: keys.concat(String(node.key)).join('.')
        }));
      } else if (typeof node === 'string' || typeof node === 'number') {
        acc.push(node);
      }
    }

    return acc;
  }, []);
}
export const pickChildren = (_children, targetChild) => {
  const children = flattenChildren(_children);
  const target = [];
  const withoutTargetChildren = React.Children.map(children, item => {
    if (! /*#__PURE__*/isValidElement(item)) return item;

    if (isInstanceOfComponent(item, targetChild)) {
      // @ts-expect-error
      target.push( /*#__PURE__*/cloneElement(item));
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
export const isInstanceOfComponent = (element, targetElement) => {
  var _type;

  const matches = (element === null || element === void 0 ? void 0 : element.type) === targetElement || typeof (element === null || element === void 0 ? void 0 : element.type) == 'function' && (element === null || element === void 0 ? void 0 : (_type = element.type) === null || _type === void 0 ? void 0 : _type.displayName) === targetElement.displayName;
  return matches;
};
//# sourceMappingURL=children.js.map