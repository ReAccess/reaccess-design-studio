import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { editorLoadingState, editorSaveDataState, editorWorkingState } from '../atoms/editorSaveDataAtom';
import { EditorSaveData } from '../interfaces/editorSaveData';
import lz from 'lzutf8';

export const useInitializeEditorData = () => {
  const setEditorSaveData = useSetRecoilState(editorSaveDataState);
  const setEditorWorkingState = useSetRecoilState(editorWorkingState);
  const setLoading = useSetRecoilState(editorLoadingState);

  useEffect(() => {
    // Simulate fetching from a "server" with a delay
    const fetchEditorSaveData = async () => {
      return new Promise<EditorSaveData>((resolve) => {
        setTimeout(() => {
          const savedData = localStorage.getItem('editorSaveData');
          if (savedData) {
            const editorSaveData: EditorSaveData = JSON.parse(savedData);
            resolve(editorSaveData);
          } else {
            resolve({
              editorState: '{}',
              theme: {
                name: 'Oceanic Blue',
                description: 'A calm, ocean-inspired palette with soothing blues and greens.',
                colors: ['#1E90FF', '#00BFFF', '#20B2AA', '#3CB371'],
              },
            });
          }
        }, 2000);
      });
    };

    const initializeEditorData = async () => {
      setLoading(true);
      const data = await fetchEditorSaveData();

      // Save the compressed state in the saveData atom
      setEditorSaveData(data);
      
      // Decompress the state and set it in the workingState atom
      const decompressedEditorState = lz.decompress(lz.decodeBase64(data.editorState));
      setEditorWorkingState(decompressedEditorState);

      setLoading(false);
    };

    initializeEditorData();
  }, [setEditorSaveData, setEditorWorkingState, setLoading]);
};
