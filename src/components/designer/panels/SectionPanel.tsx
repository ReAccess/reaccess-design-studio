import React from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import { darkModeState } from '../../../atoms/themeAtoms';

interface SectionPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SectionPanel: React.FC<SectionPanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = '18rem';

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{
        width: panelWidth,
        flexBasis: panelWidth, // Sets the initial basis for flex sizing
      }}
    >
      <PanelHeader title="Add Section" onClose={togglePanel} />
      <div className="p-4">Section panel content here...</div>
    </div>
  );
};

export default SectionPanel;
