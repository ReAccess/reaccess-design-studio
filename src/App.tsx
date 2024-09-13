import React, { useState } from 'react';
import { AdjustmentsHorizontalIcon, XCircleIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Top Navbar */}
      <div className={`w-full h-12 bg-${isDarkMode ? 'gray-800' : 'white'} border-b border-gray-300 flex items-center justify-between p-4`}>
        <h1 className="text-lg font-bold">ReAccess Design Studio</h1>
        <button onClick={toggleTheme} className="text-sm border px-2 py-1 rounded">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex flex-grow relative">
        {/* Left Navbar */}
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

        {/* Overlaying Panel */}
        <div
          className={`absolute top-0 left-48 transform ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'} w-64 h-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg z-10 p-4 transition-transform duration-700 ease-in-out`}
        >
          {/* Close Icon at the Top Right */}
          <button onClick={togglePanel} className="absolute top-2 right-2">
            <XCircleIcon className={`w-6 h-6 ${isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors duration-200`} />
          </button>
          <p>Panel content here...</p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative p-4">
          <div>Main editor area...</div>
        </div>
      </div>
    </div>
  );
};

export default App;
