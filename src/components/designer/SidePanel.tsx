// src/components/designer/SidePanel.tsx
import React from 'react';
import {
  AdjustmentsHorizontalIcon,
  DocumentIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/outline';

interface SidePanelProps {
  togglePanel: (panelName: string) => void;
  isDarkMode: boolean;
  activePanel: string | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, isDarkMode, activePanel }) => {
  const baseButtonClasses =
    'relative flex items-center justify-center w-12 h-12 mb-4 p-2 rounded-full transition-all duration-300 text-gray-600';

  return (
    <div
      className={`relative z-20 w-16 bg-${isDarkMode ? 'gray-800' : 'white'} border-r border-gray-300 p-2 flex flex-col items-center`}
    >
      {/* Site Theme Button */}
      <div className="group relative">
        <button
          onClick={() => togglePanel('SiteTheme')}
          className={`${baseButtonClasses} ${
            activePanel === 'SiteTheme'
              ? 'bg-blue-200 text-blue-500'
              : 'hover:scale-110 hover:bg-blue-200 hover:text-blue-500'
          }`}
        >
          <AdjustmentsHorizontalIcon className="w-8 h-8" />
        </button>
        {/* Floating Label */}
        <span
          style={{ top: '40%' }} // Inline style for correct alignment
          className={`absolute left-16 transform -translate-y-1/2 px-4 py-2.5 rounded-md text-sm font-medium shadow-lg ${
            activePanel === 'SiteTheme' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          }`}
        >
          Site Theme
        </span>
      </div>

      {/* Section Button */}
      <div className="group relative">
        <button
          onClick={() => togglePanel('Section')}
          className={`${baseButtonClasses} ${
            activePanel === 'Section'
              ? 'bg-green-200 text-green-500'
              : 'hover:scale-110 hover:bg-green-200 hover:text-green-500'
          }`}
        >
          <DocumentIcon className="w-8 h-8" />
        </button>
        {/* Floating Label */}
        <span
          style={{ top: '40%' }} // Inline style for correct alignment
          className={`absolute left-16 transform -translate-y-1/2 px-4 py-2.5 rounded-md text-sm font-medium shadow-lg ${
            activePanel === 'Section' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          }`}
        >
          Section
        </span>
      </div>

      {/* Container Button */}
      <div className="group relative">
        <button
          onClick={() => togglePanel('Container')}
          className={`${baseButtonClasses} ${
            activePanel === 'Container'
              ? 'bg-yellow-200 text-yellow-500'
              : 'hover:scale-110 hover:bg-yellow-200 hover:text-yellow-500'
          }`}
        >
          <ArchiveBoxIcon className="w-8 h-8" />
        </button>
        {/* Floating Label */}
        <span
          style={{ top: '40%' }} // Inline style for correct alignment
          className={`absolute left-16 transform -translate-y-1/2 px-4 py-2.5 rounded-md text-sm font-medium shadow-lg ${
            activePanel === 'Container' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          }`}
        >
          Container
        </span>
      </div>
    </div>
  );
};

export default SidePanel;
