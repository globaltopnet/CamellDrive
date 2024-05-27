function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { processColor } from 'react-native';
import UIMenuView from './UIMenuView';
import { objectHash } from './utils';
function processAction(action) {
  return {
    ...action,
    imageColor: processColor(action.imageColor),
    titleColor: processColor(action.titleColor),
    subactions: action.subactions?.map(subAction => processAction(subAction))
  };
}
const MenuView = ({
  actions,
  ...props
}) => {
  const processedActions = actions.map(action => processAction(action));
  const hash = useMemo(() => {
    return objectHash(processedActions);
  }, [processedActions]);
  return /*#__PURE__*/React.createElement(UIMenuView, _extends({}, props, {
    actions: processedActions,
    actionsHash: hash
  }));
};
export { MenuView };
//# sourceMappingURL=index.js.map