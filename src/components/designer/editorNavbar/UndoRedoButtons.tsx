// src/components/designer/editorNavbar/UndoRedoButtons.tsx
import React from 'react';
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';

const UndoRedoButtons: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <button className="p-1 rounded hover:bg-gray-200 transition-all duration-200">
        <ArrowUturnLeftIcon className="w-5 h-5 text-gray-600 hover:text-blue-500" />
      </button>
      <button className="p-1 rounded hover:bg-gray-200 transition-all duration-200">
        <ArrowUturnRightIcon className="w-5 h-5 text-gray-600 hover:text-blue-500" />
      </button>
    </div>
  );
};

export default UndoRedoButtons;
