import React from 'react';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';

const SaveButton: React.FC = () => {
  const editorSaveData = useRecoilValue(editorSaveDataState);

  const handleSave = () => {
    // Save the current editor state to localStorage
    localStorage.setItem('editorSaveData', JSON.stringify(editorSaveData));
    console.log('Editor state saved to localStorage:', editorSaveData);
  };

  return (
    <button
      className="text-sm px-3 py-1 rounded hover:bg-gray-200 transition-all duration-200 text-gray-600 hover:text-blue-500"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SaveButton;
