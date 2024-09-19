import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';

import CurrentViewButton from './CurrentViewButton';
import SiteThemeButton from './SiteThemeButton';
import SectionButton from './SectionButton';
import ContainerButton from './ContainerButton';
import PageDesignButton from './PageDesignButton';

interface SidePanelProps {
  togglePanel: (panelName: string) => void;
  activePanel: string | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, activePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <div
      className={`relative z-20 w-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r border-gray-300 p-2 flex flex-col items-center`}
    >
      <CurrentViewButton onClick={() => togglePanel('')} active={!activePanel} darkMode={isDarkMode} />
      <SiteThemeButton onClick={() => togglePanel('SiteTheme')} active={activePanel === 'SiteTheme'} darkMode={isDarkMode} />
      <PageDesignButton onClick={() => togglePanel('PageDesign')} active={activePanel === 'PageDesign'} darkMode={isDarkMode} />
      <SectionButton onClick={() => togglePanel('Section')} active={activePanel === 'Section'} darkMode={isDarkMode} />
      <ContainerButton onClick={() => togglePanel('Container')} active={activePanel === 'Container'} darkMode={isDarkMode} />
    </div>
  );
};

export default SidePanel;
