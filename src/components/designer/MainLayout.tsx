// src/components/designer/MainLayout.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SiteThemePanel from './panels/SiteThemePanel';
import SectionPanel from './panels/SectionPanel';
import ContainerPanel from './panels/ContainerPanel';
import SidePanel from './SidePanel';
import CraftEditor from './editor/CraftEditor';

const MainLayout: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const togglePanel = (panelName: string) => {
    setOpenPanel(openPanel === panelName ? null : panelName);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-grow relative">
        {/* Side Panel */}
        <SidePanel togglePanel={togglePanel} isDarkMode={isDarkMode} />

        {/* Conditionally Render Panels */}
        <SiteThemePanel isOpen={openPanel === 'SiteTheme'} isDarkMode={isDarkMode} togglePanel={() => togglePanel('SiteTheme')} />
        <SectionPanel isOpen={openPanel === 'Section'} isDarkMode={isDarkMode} togglePanel={() => togglePanel('Section')} />
        <ContainerPanel isOpen={openPanel === 'Container'} isDarkMode={isDarkMode} togglePanel={() => togglePanel('Container')} />

        {/* Main Content Area with Craft.js Editor */}
        <div className="flex-1 relative p-4">
          <CraftEditor isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
