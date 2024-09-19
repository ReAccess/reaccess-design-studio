import React from 'react';
import {
  AdjustmentsHorizontalIcon,
  DocumentIcon,
  ArchiveBoxIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';

interface SidePanelProps {
  togglePanel: (panelName: string) => void;
  activePanel: string | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, activePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);

  const baseButtonClasses =
    'relative flex items-center justify-center w-12 h-12 mb-4 p-2 rounded-full transition-all duration-300 text-gray-600';

  return (
    <div
      className={`relative z-20 w-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r border-gray-300 p-2 flex flex-col items-center`}
    >
      {/* Current View Button */}
      <div className="group relative">
        <button
          onClick={() => togglePanel('')}
          className={`flex items-center justify-center w-12 h-12 mb-4 p-2 rounded-full ${
            !activePanel ? 'bg-blue-200 text-blue-500' : 'hover:scale-110 hover:bg-blue-300 hover:text-blue-600'
          }`}
        >
          <EyeIcon className="w-8 h-8" />
        </button>
        {/* Floating Label */}
        <span
          style={{ top: '40%' }} // Inline style for correct alignment
          className={`absolute left-16 transform -translate-y-1/2 px-4 py-2.5 rounded-md text-sm font-medium shadow-lg ${
            activePanel === '' ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          } transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
          }`}
        >
          Current View
        </span>
      </div>

      {/* Site Theme Button */}
      <div className="group relative">
        <button
          onClick={() => togglePanel('SiteTheme')}
          className={`${baseButtonClasses} ${
            activePanel === 'SiteTheme'
              ? 'bg-yellow-200 text-yellow-500'
              : 'hover:scale-110 hover:bg-yellow-300 hover:text-yellow-600'
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
              ? 'bg-[#008080] text-white'
              : 'hover:scale-110 hover:bg-[#008080]/80 hover:text-white'
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
              ? 'bg-purple-200 text-purple-500'
              : 'hover:scale-110 hover:bg-purple-300 hover:text-purple-600'
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
