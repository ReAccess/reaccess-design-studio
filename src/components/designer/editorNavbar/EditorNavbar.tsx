import React from 'react';
import PublishButton from './PublishButton';
import SaveButton from './SaveButton';
import UndoRedoButtons from './UndoRedoButtons';
import ZoomButton from './ZoomButton';
import ViewButtons from './ViewButtons';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';

const EditorNavbar: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <div className={`w-full h-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-end px-4 shadow-sm space-x-4 border-b border-gray-300`}>
     {/* View Buttons for Desktop and Mobile */}
     <ViewButtons />

      {/* Zoom Button */}
      <ZoomButton />

      {/* Vertical Divider */}
      <div className="h-6 w-px bg-gray-300" />

      {/* Undo and Redo Buttons */}
      <UndoRedoButtons />

      {/* Vertical Divider */}
      <div className="h-6 w-px bg-gray-300" />

      {/* Save Button */}
      <SaveButton />

      {/* Vertical Divider */}
      <div className="h-6 w-px bg-gray-300" />

      {/* Publish Button */}
      <PublishButton />
    </div>
  );
};

export default EditorNavbar;
