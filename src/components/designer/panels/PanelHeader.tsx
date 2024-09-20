import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';

const PanelHeader: React.FC<{ title: string; onClose: () => void; themeColor: string }> = ({ title, onClose, themeColor }) => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <div
      className={`flex items-center justify-between p-2 ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white' : `bg-gradient-to-r ${themeColor} to-white text-gray-800`}`}
      style={{
        height: '3rem',
      }}
    >
      <h2
        className="text-lg font-semibold"
        style={{
          textShadow: isDarkMode
            ? '1px 1px 2px rgba(0, 0, 0, 0.5)' // Dark shadow for white text
            : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Light shadow for dark text
        }}
      >
        {title}
      </h2>
      <button onClick={onClose} className="ml-4">
        <XMarkIcon
          className={`w-5 h-5 ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-200`}
        />
      </button>
    </div>
  );
};

export default PanelHeader;
