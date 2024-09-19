import { atom } from 'recoil';
import { EditorSaveData } from '../interfaces/editorSaveData';

// Atom to hold the uncompressed working state
export const editorWorkingState = atom({
  key: 'editorWorkingState',
  default: '{}', // Default uncompressed editor state
});

// Atom to hold the compressed save state (for storing or syncing with server)
export const editorSaveDataState = atom<EditorSaveData>({
  key: 'editorSaveDataState',
  default: {
    editorState: '{}', // default compressed editor state
    theme: {
      name: 'Oceanic Blue',
      description: 'A calm, ocean-inspired palette with soothing blues and greens.',
      colors: ['#1E90FF', '#00BFFF', '#20B2AA', '#3CB371'],
    },
  },
});

// Atom to hold the loading state of the editor
export const editorLoadingState = atom<boolean>({
  key: 'editorLoadingState',
  default: true, // Initially set to loading
});