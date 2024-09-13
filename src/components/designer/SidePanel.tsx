// src/components/SidePanel.tsx
import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

interface SidePanelProps {
  isPanelOpen: boolean;
  isDarkMode: boolean;
  togglePanel: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isPanelOpen, isDarkMode, togglePanel }) => {
  return (
    <div
      className={`absolute top-0 left-48 transform ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'} w-64 h-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg z-10 p-4 transition-transform duration-700 ease-in-out`}
    >
      {/* Close Icon at the Top Right */}
      <button onClick={togglePanel} className="absolute top-2 right-2">
        <XCircleIcon className={`w-6 h-6 ${isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`} />
      </button>
      <p>Panel content here...</p>
    </div>
  );
};

export default SidePanel;
