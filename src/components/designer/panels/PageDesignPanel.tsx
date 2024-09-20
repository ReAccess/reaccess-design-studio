import React from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import { darkModeState } from '../../../atoms/themeAtoms';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';

interface PageDesignPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const PageDesignPanel: React.FC<PageDesignPanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = useRecoilValue(panelSizeState);

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ width: panelWidth, flexBasis: panelWidth }}
    >
      <PanelHeader title="Page Design" onClose={togglePanel} themeColor={'bg-green-200'} />
      <div className="p-4">Page Design panel content here...</div>
    </div>
  );
};

export default PageDesignPanel;
