import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';
import CurrentViewButton from './CurrentViewButton';
import SiteThemeButton from './SiteThemeButton';
import SectionButton from './SectionButton';
import ContainerButton from './ContainerButton';
import PageDesignButton from './PageDesignButton';

interface SidePanelProps {
  togglePanel: (panelName: string, size: string) => void;
  activePanel: string | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ togglePanel, activePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <div
      className={`relative z-20 w-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-r border-gray-300 p-2 flex flex-col items-center`}
    >
      <CurrentViewButton
        onClick={() => togglePanel('', '0rem')}
        active={!activePanel}
        darkMode={isDarkMode}
      />
      <SiteThemeButton
        onClick={() => togglePanel('SiteTheme', '20rem')}
        active={activePanel === 'SiteTheme'}
        darkMode={isDarkMode}
      />
      <PageDesignButton
        onClick={() => togglePanel('PageDesign', '25rem')}
        active={activePanel === 'PageDesign'}
        darkMode={isDarkMode}
      />
      <SectionButton
        onClick={() => togglePanel('Section', '18rem')}
        active={activePanel === 'Section'}
        darkMode={isDarkMode}
      />
      <ContainerButton
        onClick={() => togglePanel('Container', '18rem')}
        active={activePanel === 'Container'}
        darkMode={isDarkMode}
      />
    </div>
  );
};

export default SidePanel;
