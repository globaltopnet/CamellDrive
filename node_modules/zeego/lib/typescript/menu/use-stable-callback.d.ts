/**
 * https://github.com/radix-ui/primitives/blob/main/packages/react/use-callback-ref/src/useCallbackRef.tsx
 *
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
declare function useStableCallback<T extends (...args: any[]) => any>(callback: T | undefined): T;
export { useStableCallback };
