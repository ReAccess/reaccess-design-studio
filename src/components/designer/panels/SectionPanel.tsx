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

  return (
    <div
      className={`absolute top-0 left-16 transform ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } w-72 h-full ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-lg z-10 transition-all duration-700 ease-in-out`}
    >
      <PanelHeader title="Add Section" onClose={togglePanel} />
      <div className="p-4">Section panel content here...</div>
    </div>
  );
};

export default SectionPanel;
