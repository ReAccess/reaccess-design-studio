import { atom } from 'recoil';

export const deviceWidthState = atom<string>({
  key: 'deviceWidthState',
  default: '1200px', // Default to 1200px width (desktop)
});
