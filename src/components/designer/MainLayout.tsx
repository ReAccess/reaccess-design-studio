import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
import PageDesignPanel from './panels/PageDesignPanel';
import { useInitializeEditorData } from '../../hooks/useInitializeEditorData';
import CustomDragLayer from './editor/CustomDragLayer';

const MainLayout: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);
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
      
      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          <EditorNavbar />
          <div className="flex flex-grow overflow-hidden transition-all duration-700 ease-in-out">
            {/* Side Panel for dragging components */}
            <SidePanel togglePanel={togglePanel} activePanel={openPanel} />
            
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
              <ContainerPanel isOpen={true} togglePanel={() => togglePanel('Container', '25rem')} />
            )}

            {/* Main Content Area with Craft.js Editor */}
            <div className="flex-grow">
              <CustomDragLayer />
              <CraftEditor /> {/* This is where the main editor is */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
