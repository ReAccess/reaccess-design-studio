import React from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import DraggableItem from '../editor/DraggableItem';
import { darkModeState } from '../../../atoms/themeAtoms';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';

interface SectionPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SectionPanel: React.FC<SectionPanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = useRecoilValue(panelSizeState);

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ width: panelWidth, flexBasis: panelWidth }}
    >
      <PanelHeader title="Add Section" onClose={togglePanel} borderColor={'border-l-teal-200'} />
      <div className="p-4">
        <DraggableItem itemType="SECTION">
          <span className="icon">📄</span>
          <span className="ml-2">Section</span>
        </DraggableItem>
      </div>
    </div>
  );
};

export default SectionPanel;
