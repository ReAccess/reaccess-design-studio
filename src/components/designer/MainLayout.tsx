// src/components/designer/MainLayout.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SiteThemePanel from './panels/SiteThemePanel';
import SectionPanel from './panels/SectionPanel';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const MainLayout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null); // Track which panel is open

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePanel = (panelName: string) => {
    setOpenPanel(openPanel === panelName ? null : panelName); // Toggle between opening/closing a specific panel
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-grow relative">
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
            className="flex items-center w-full p-2 rounded hover:bg-blue-100 transition-all duration-300"
          >
            <span className="icon">📄</span>
            <span className="ml-2 flex-grow text-left">Section</span>
          </button>
        </div>

        {/* Conditionally Render Panels */}
        <SiteThemePanel isOpen={openPanel === 'SiteTheme'} isDarkMode={isDarkMode} togglePanel={() => togglePanel('SiteTheme')} />
        <SectionPanel isOpen={openPanel === 'Section'} isDarkMode={isDarkMode} togglePanel={() => togglePanel('Section')} />

        {/* Main Content Area */}
        <div className="flex-1 relative p-4">
          <div>Main editor area...</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
