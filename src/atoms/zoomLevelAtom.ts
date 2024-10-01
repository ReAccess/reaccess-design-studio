import { atom } from 'recoil';

export const zoomLevelState = atom<number>({
  key: 'zoomLevelState',
  default: 1, // Default zoom level is 1 (100%)
});
