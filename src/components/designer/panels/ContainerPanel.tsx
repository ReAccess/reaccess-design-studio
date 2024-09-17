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
  const isDarkMode = useRecoilValue(darkModeState); // Use Recoil state

  return (
    <div
      className={`absolute top-0 left-16 transform ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } w-72 h-full ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-lg z-10 transition-all duration-700 ease-in-out`}
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
