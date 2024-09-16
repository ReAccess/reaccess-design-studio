// src/hooks/useDebounce.ts
import { useMemo, useRef } from 'react';
import { debounce } from 'lodash';

// Custom hook to debounce a function
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const debouncedFunction = useMemo(
    () =>
      debounce((...args: any[]) => {
        callbackRef.current(...args);
      }, delay),
    [delay]
  );

  return debouncedFunction;
};
