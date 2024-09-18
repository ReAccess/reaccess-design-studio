import React, { useState } from 'react';
import { Frame, Element, useEditor } from '@craftjs/core';
import Surface from './Surface';
import { useDocumentDragEvents } from './../../../hooks/useDocumentDragEvents';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce';

const CraftEditor: React.FC = () => {
  const { query, state } = useEditor((state) => ({
    state: state,
  }));
  const [isAlignedCenter, setIsAlignedCenter] = useState(false);

  // Handle the drag event and determine alignment
  const handleDrag = (xPosition: number) => {
    const editorElement = document.querySelector('.craft-editor');
    const editorWidth = editorElement ? editorElement.clientWidth : 0;
    const centerPosition = editorWidth / 2;
    const threshold = 10; // Adjust for sensitivity

    if (Math.abs(xPosition - centerPosition) < threshold) {
      setIsAlignedCenter(true); // Show purple center guide
    } else {
      setIsAlignedCenter(false); // Hide center guide
    }
  };

   // Use the save hook with debounce for other save operations
   const debouncedSave = useSaveWithDebounce(200); 

  // Reset alignment when drop happens
  const handleDrop = () => {
    setIsAlignedCenter(false);
    console.log("Element placed on design surface:", state.nodes);
    // Add a small delay to ensure the state is updated after the drop
    setTimeout(() => {
      const serializedNodes = query.serialize();
      debouncedSave(serializedNodes); // Perform the save with debounce
    }, 100);
  };

  // Use the drag event listener hook
  useDocumentDragEvents(handleDrag, handleDrop);

  return (
    <div className="relative h-full craft-editor">
      {/* Dotted alignment lines */}
      <div
        className="absolute top-0 left-[10%] h-full z-10"
        style={{
          backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
          backgroundPosition: 'left',
          backgroundSize: '2px 12px',
          width: '2px',
        }}
      ></div>
      <div
        className="absolute top-0 right-[10%] h-full z-10"
        style={{
          backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
          backgroundPosition: 'right',
          backgroundSize: '2px 12px',
          width: '2px',
        }}
      ></div>

      {/* Purple center alignment guide */}
      {isAlignedCenter && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-purple-600 z-20"></div>
      )}

      <Frame>
        <Element is={Surface} canvas>
          {/* Main editor drop surface */}
        </Element>
      </Frame>
    </div>
  );
};

export default CraftEditor;
