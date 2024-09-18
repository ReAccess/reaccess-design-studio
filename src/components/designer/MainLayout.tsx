import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { previewModeState } from '../../atoms/previewAtoms';
import Navbar from './navbar/Navbar';
import EditorNavbar from './editorNavbar/EditorNavbar';
import SiteThemePanel from './panels/SiteThemePanel';
import SectionPanel from './panels/SectionPanel';
import ContainerPanel from './panels/ContainerPanel';
import CraftEditor from './editor/CraftEditor';
import SidePanel from './SidePanel';
import { darkModeState } from '../../atoms/themeAtoms';
import { PreviewPage } from './PreviewPage';

const MainLayout: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  const isPreviewMode = useRecoilValue(previewModeState);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (panelName: string) => {
    setOpenPanel(openPanel === panelName ? null : panelName);
  };

  const panelWidth = openPanel ? '18rem' : '0'; // Width of the side panel when open

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />

      {/* Show Preview Page if in preview mode */}
      {isPreviewMode ? (
        <PreviewPage />
      ) : (
        <>
          <EditorNavbar />
          <div className="flex flex-grow relative transition-all duration-700 ease-in-out">
            <SidePanel togglePanel={togglePanel} activePanel={openPanel} />

            {/* Panels */}
            <div
              className={`absolute top-0 left-16 h-full transition-transform duration-700 ease-in-out ${
                openPanel === 'SiteTheme' ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ width: panelWidth }}
            >
              <SiteThemePanel isOpen={openPanel === 'SiteTheme'} togglePanel={() => togglePanel('SiteTheme')} />
            </div>
            <div
              className={`absolute top-0 left-16 h-full transition-transform duration-700 ease-in-out ${
                openPanel === 'Section' ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ width: panelWidth }}
            >
              <SectionPanel isOpen={openPanel === 'Section'} togglePanel={() => togglePanel('Section')} />
            </div>
            <div
              className={`absolute top-0 left-16 h-full transition-transform duration-700 ease-in-out ${
                openPanel === 'Container' ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ width: panelWidth }}
            >
              <ContainerPanel isOpen={openPanel === 'Container'} togglePanel={() => togglePanel('Container')} />
            </div>

            {/* Main Content Area with Craft.js Editor */}
            <div
              className={`flex-grow relative p-4 transition-all duration-700 ease-in-out`}
              style={{ marginLeft: panelWidth }}
            >
              <CraftEditor />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
