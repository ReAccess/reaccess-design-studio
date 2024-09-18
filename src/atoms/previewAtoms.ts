import { atom } from 'recoil';

export const previewModeState = atom({
  key: 'previewModeState',
  default: false, // Initially, preview mode is off
});
