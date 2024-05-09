import { useRef, useMemo, useEffect } from 'react';
/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/use-callback-ref/src/useCallbackRef.tsx
 *
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */

function useStableCallback(callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }); // https://github.com/facebook/react/issues/19240

  return useMemo(() => function () {
    var _callbackRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
  }, []);
}

export { useStableCallback };
//# sourceMappingURL=use-stable-callback.js.map