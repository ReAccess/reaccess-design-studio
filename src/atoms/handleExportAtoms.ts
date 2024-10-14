import { atom } from 'recoil';

export const handleExportState = atom({
  key: 'handleExportState',
  default: false, // Initially, export is off
});
