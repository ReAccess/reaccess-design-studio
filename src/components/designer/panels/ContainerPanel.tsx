import React from 'react';
import { useEditor } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import DraggableItem from '../editor/DraggableItem';
import { darkModeState } from '../../../atoms/themeAtoms';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';
import Container from '../editor/Container';

interface ContainerPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const ContainerPanel: React.FC<ContainerPanelProps> = ({ isOpen, togglePanel }) => {
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
      <PanelHeader title="Add Container" onClose={togglePanel} themeColor={'bg-purple-200'} />
      <div className="p-4">
        <DraggableItem refFn={(ref) => connectors.create(ref as HTMLElement, <Container />)}>
          <span className="icon">📦</span>
          <span className="ml-2">Container</span>
        </DraggableItem>
      </div>
    </div>
  );
};

export default ContainerPanel;
