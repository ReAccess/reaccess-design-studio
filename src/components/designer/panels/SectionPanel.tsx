import React from 'react';
import { useEditor } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import DraggableItem from '../editor/DraggableItem';
import { darkModeState } from '../../../atoms/themeAtoms';
import { Section } from '../editor/Section';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';

interface SectionPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SectionPanel: React.FC<SectionPanelProps> = ({ isOpen, togglePanel }) => {
  const { connectors } = useEditor();
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = useRecoilValue(panelSizeState);

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ width: panelWidth, flexBasis: panelWidth }}
    >
      <PanelHeader title="Add Section" onClose={togglePanel} />
      <div className="p-4">
        {/* Draggable Item for the Section */}
        <DraggableItem refFn={(ref) => connectors.create(ref as HTMLElement, <Section />)}>
          <span className="icon">📄</span>
          <span className="ml-2">Section</span>
        </DraggableItem>
      </div>
    </div>
  );
};

export default SectionPanel;
