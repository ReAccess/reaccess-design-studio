import React, { useState } from 'react';
import { Frame, Element, useEditor } from '@craftjs/core';
import Surface from './Surface';
import { useDocumentDragEvents } from '../../../hooks/useDocumentDragEvents';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce';
import { useRecoilValue } from 'recoil';
import { editorWorkingState } from '../../../atoms/editorSaveDataAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';

const CraftEditor: React.FC = () => {
  const { query } = useEditor(() => ({ }));

  // Use uncompressed working state
  const workingEditorState = useRecoilValue(editorWorkingState);

  const [isAlignedCenter, setIsAlignedCenter] = useState(false);

  // Use the save hook with debounce for other save operations
  const debouncedSave = useSaveWithDebounce(200);

  // Handle the drag event and determine alignment
  const handleDrag = (xPosition: number) => {
    const editorElement = document.querySelector('.craft-editor');
    const editorWidth = editorElement ? editorElement.clientWidth : 0;
    const centerPosition = editorWidth / 2;
    const threshold = 10;

    if (Math.abs(xPosition - centerPosition) < threshold) {
      setIsAlignedCenter(true);
    } else {
      setIsAlignedCenter(false);
    }
  };

  const handleDrop = () => {
    setIsAlignedCenter(false);

    setTimeout(() => {
      const serializedNodes = query.serialize();
      debouncedSave(serializedNodes); // Perform the save with debounce
    }, 100);
  };

  useDocumentDragEvents(handleDrag, handleDrop);

  return (
    <div className="relative h-full p-4 overflow-y-auto craft-editor">
      {/* Purple center alignment guide */}
      {isAlignedCenter && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-purple-600 z-20"></div>
      )}

      <ExportModeContext.Provider value={false}>
        <Frame data={workingEditorState}>
          <Element is={Surface} canvas>
            {/* Main editor drop surface */}
          </Element>
        </Frame>
      </ExportModeContext.Provider>
    </div>
  );
};

export default CraftEditor;
