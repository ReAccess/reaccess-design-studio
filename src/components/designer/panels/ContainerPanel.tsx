import React from 'react';
import { useEditor } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import DraggableItem from '../editor/DraggableItem';
import { darkModeState } from '../../../atoms/themeAtoms';

interface ContainerPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const ContainerPanel: React.FC<ContainerPanelProps> = ({ isOpen, togglePanel }) => {
  const { connectors } = useEditor();
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
      <PanelHeader title="Add Container" onClose={togglePanel} />
      <div className="p-4">
        {/* Draggable Item for the Container */}
        <DraggableItem refFn={(ref) => connectors.create(ref as HTMLElement, <div className="p-4">New Container</div>)}>
          <span className="icon">📦</span>
          <span className="ml-2">Container</span>
        </DraggableItem>
      </div>
    </div>
  );
};

export default ContainerPanel;
