import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Navbar from './Navbar';
import EditorNavbar from './editorNavbar/EditorNavbar';
import SiteThemePanel from './panels/SiteThemePanel';
import SectionPanel from './panels/SectionPanel';
import ContainerPanel from './panels/ContainerPanel';
import CraftEditor from './editor/CraftEditor';
import SidePanel from './SidePanel';
import { darkModeState } from '../../atoms/themeAtoms';

const MainLayout: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (panelName: string) => {
    setOpenPanel(openPanel === panelName ? null : panelName);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />
      <EditorNavbar />
      <div className="flex flex-grow relative">
        <SidePanel togglePanel={togglePanel} activePanel={openPanel} />
        {/* Conditionally Render Panels */}
        <SiteThemePanel isOpen={openPanel === 'SiteTheme'} togglePanel={() => togglePanel('SiteTheme')} />
        <SectionPanel isOpen={openPanel === 'Section'} togglePanel={() => togglePanel('Section')} />
        <ContainerPanel isOpen={openPanel === 'Container'} togglePanel={() => togglePanel('Container')} />
        {/* Main Content Area with Craft.js Editor */}
        <div className="flex-1 relative p-4">
          <CraftEditor />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
