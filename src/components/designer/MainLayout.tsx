import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { previewModeState } from '../../atoms/previewAtoms';
import { panelSizeState } from '../../atoms/panelSizeAtoms';
import { editorLoadingState } from '../../atoms/editorSaveDataAtom';
import Navbar from './navbar/Navbar';
import EditorNavbar from './editorNavbar/EditorNavbar';
import SiteThemePanel from './panels/SiteThemePanel';
import SectionPanel from './panels/SectionPanel';
import ContainerPanel from './panels/ContainerPanel';
import CraftEditor from './editor/CraftEditor';
import SidePanel from './leftSideNavbar/SidePanel';
import { darkModeState } from '../../atoms/themeAtoms';
import { PreviewPage } from './PreviewPage';
import PageDesignPanel from './panels/PageDesignPanel';
import { useInitializeEditorData } from '../../hooks/useInitializeEditorData';

const MainLayout: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  const isPreviewMode = useRecoilValue(previewModeState);
  const isLoading = useRecoilValue(editorLoadingState);
  const setPanelSize = useSetRecoilState(panelSizeState);
  
  // Initialize editor data
  useInitializeEditorData(); 
  
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (panelName: string, size: string) => {
    setOpenPanel(openPanel === panelName ? null : panelName);
    setPanelSize(size);
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />

      {/* Show loading spinner or shimmer when editor data is loading */}
      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          {/* Replace with your spinner or shimmer */}
          <div className="loader">Loading...</div>
        </div>
      ) : isPreviewMode ? (
        <PreviewPage />
      ) : (
        <>
          <EditorNavbar />
          <div className="flex flex-grow overflow-hidden transition-all duration-700 ease-in-out">
            <SidePanel togglePanel={togglePanel} activePanel={openPanel} />

            {/* Render panels based on openPanel */}
            {openPanel === 'SiteTheme' && (
              <SiteThemePanel isOpen={true} togglePanel={() => togglePanel('SiteTheme', '22rem')} />
            )}
            {openPanel === 'PageDesign' && (
              <PageDesignPanel isOpen={true} togglePanel={() => togglePanel('PageDesign', '25rem')} />
            )}
            {openPanel === 'Section' && (
              <SectionPanel isOpen={true} togglePanel={() => togglePanel('Section', '18rem')} />
            )}
            {openPanel === 'Container' && (
              <ContainerPanel isOpen={true} togglePanel={() => togglePanel('Container', '18rem')} />
            )}

            {/* Main Content Area with Craft.js Editor */}
            <div className={`flex-grow relative p-4 overflow-y-auto transition-all duration-700 ease-in-out`}>
              <CraftEditor />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
