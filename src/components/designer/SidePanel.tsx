// src/components/designer/SidePanel.tsx
import React from 'react';
import { AdjustmentsHorizontalIcon, DocumentIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

interface SidePanelProps {
  togglePanel: (panelName: string) => void;
  isDarkMode: boolean;
}

const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, isDarkMode }) => {
  return (
    <div className={`relative z-20 w-48 bg-${isDarkMode ? 'gray-800' : 'white'} border-r border-gray-300 p-4`}>
      <button
        onClick={() => togglePanel('SiteTheme')}
        className="flex items-center w-full mb-4 p-2 rounded hover:bg-blue-100 transition-all duration-300"
      >
        <AdjustmentsHorizontalIcon className="w-5 h-5" />
        <span className="ml-2 flex-grow text-left">Site Theme</span>
      </button>
      <button
        onClick={() => togglePanel('Section')}
        className="flex items-center w-full mb-4 p-2 rounded hover:bg-blue-100 transition-all duration-300"
      >
        <DocumentIcon className="w-5 h-5" />
        <span className="ml-2 flex-grow text-left">Section</span>
      </button>
      <button
        onClick={() => togglePanel('Container')}
        className="flex items-center w-full p-2 rounded hover:bg-blue-100 transition-all duration-300"
      >
        <ArchiveBoxIcon className="w-5 h-5" />
        <span className="ml-2 flex-grow text-left">Container</span>
      </button>
    </div>
  );
};

export default SidePanel;
