// src/components/designer/panels/PanelHeader.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PanelHeader: React.FC<{ title: string; onClose: () => void; isDarkMode: boolean }> = ({
  title,
  onClose,
  isDarkMode,
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 ${
        isDarkMode
          ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white'
          : 'bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800'
      }`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={onClose} className="ml-4">
        <XMarkIcon
          className={`w-6 h-6 ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-200`}
        />
      </button>
    </div>
  );
};

export default PanelHeader;
