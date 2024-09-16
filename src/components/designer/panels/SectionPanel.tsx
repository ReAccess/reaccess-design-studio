// src/components/designer/panels/SectionPanel.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';
import { DocumentIcon } from '@heroicons/react/24/outline';
import DraggableItem from '../editor/DraggableItem';
import PanelHeader from './PanelHeader';

interface SectionPanelProps {
  isOpen: boolean;
  isDarkMode: boolean;
  togglePanel: () => void;
}

const SectionPanel: React.FC<SectionPanelProps> = ({ isOpen, isDarkMode, togglePanel }) => {
  const { connectors } = useEditor();

  return (
    <div
      className={`absolute top-0 left-48 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72 h-full ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-lg z-10 transition-transform duration-700 ease-in-out`}
    >
      {/* Panel Header with close icon */}
      <PanelHeader title="Add Section" isDarkMode={isDarkMode} onClose={togglePanel} />

      {/* Draggable Item for the Section */}
      <div className="p-4">
        <DraggableItem refFn={(ref) => connectors.create(ref as HTMLElement, <div className="p-4">New Section</div>)}>
          <DocumentIcon className="w-5 h-5" />
          <span className="ml-2">Section</span>
        </DraggableItem>
      </div>
    </div>
  );
};

export default SectionPanel;
