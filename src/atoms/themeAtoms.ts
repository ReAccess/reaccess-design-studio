import { atom } from 'recoil';

// Atom for managing dark/light mode
export const darkModeState = atom<boolean>({
  key: 'darkModeState', // Unique key for this atom
  default: false, // Default value (light mode)
});
