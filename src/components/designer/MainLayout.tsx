// src/components/MainLayout.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SidePanel from './SidePanel';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const MainLayout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-grow relative">
        <div className={`relative z-20 w-48 bg-${isDarkMode ? 'gray-800' : 'white'} border-r border-gray-300 p-4`}>
          <button
            onClick={togglePanel}
            className="flex items-center w-full mb-4 p-2 rounded hover:bg-blue-100 transition-all duration-300"
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
            <span className="ml-2 flex-grow text-left">Site Theme</span>
          </button>
          <button
            onClick={togglePanel}
            className="flex items-center w-full p-2 rounded hover:bg-blue-100 transition-all duration-300"
          >
            <span className="icon">📄</span>
            <span className="ml-2 flex-grow text-left">Section</span>
          </button>
        </div>

        <SidePanel isPanelOpen={isPanelOpen} isDarkMode={isDarkMode} togglePanel={togglePanel} />

        {/* Main Content Area */}
        <div className="flex-1 relative p-4">
          <div>Main editor area...</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
