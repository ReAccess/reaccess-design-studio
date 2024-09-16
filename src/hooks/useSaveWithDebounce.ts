// src/hooks/useSaveWithDebounce.ts
import { useMemo } from 'react';
import { useDebounce } from './useDebounce';
import lz from 'lzutf8';

// Custom hook to handle save operation with debounce
export const useSaveWithDebounce = (delay: number) => {
  const save = (serializedNodes: any) => {
    const compressedSerializedNodes = lz.encodeBase64(lz.compress(serializedNodes));
    localStorage.setItem("editorState", compressedSerializedNodes);
  };

  const debouncedSave = useDebounce(save, delay);

  return useMemo(() => debouncedSave, [debouncedSave]);
};
