import { useMemo } from 'react';
import { useDebounce } from './useDebounce';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editorSaveDataState, editorWorkingState } from '../atoms/editorSaveDataAtom';
import { EditorSaveData, Theme } from '../interfaces/editorSaveData';
import lz from 'lzutf8';

export const useSaveWithDebounce = (delay: number, theme?: Theme) => {
  //const [currentEditorSaveData, setEditorSaveData] = useRecoilState(editorSaveDataState);
  const setEditorWorkingState = useSetRecoilState(editorWorkingState);

  const save = (serializedNodes: any) => {
    // Set the uncompressed state to the atom for immediate usage
    setEditorWorkingState(serializedNodes);

    // // Compress the state for saving
    // const compressedSerializedNodes = lz.encodeBase64(lz.compress(serializedNodes));

    // // Create the save object
    // const saveData: EditorSaveData = {
    //   editorState: compressedSerializedNodes,
    //   theme: theme || currentEditorSaveData.theme,
    // };

    // // Set the compressed save data to the atom for future saving to server/localStorage
    // setEditorSaveData(saveData);
  };

  const debouncedSave = useDebounce(save, delay);

  return useMemo(() => debouncedSave, [debouncedSave]);
};
