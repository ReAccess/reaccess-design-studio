import { atom } from 'recoil';
import { Theme } from '../interfaces/editorSaveData';

export const themePreviewState = atom<Theme | null>({
  key: 'themePreviewState',
  default: null, // No preview theme initially
});
