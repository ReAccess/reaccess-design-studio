import React from 'react';
import { useSetRecoilState } from 'recoil';
import { handleExportState } from '../../../atoms/handleExportAtoms';

const SaveButton: React.FC = () => {
  const setTriggerExport = useSetRecoilState(handleExportState);

  const handleSave = () => {
    setTriggerExport(true); 
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
