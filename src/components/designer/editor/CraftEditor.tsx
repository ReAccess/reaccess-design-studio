import React from 'react';
import { Frame, Element } from '@craftjs/core';
import { Surface } from './Surface';
import { useRecoilValue } from 'recoil';
import { editorWorkingState } from '../../../atoms/editorSaveDataAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';

const CraftEditor: React.FC = () => {
  const workingEditorState = useRecoilValue(editorWorkingState);

  return (
    <div className="h-full w-full p-4 overflow-y-auto craft-editor">
      <ExportModeContext.Provider value={false}>
        <Frame data={workingEditorState}>
          <Element is={Surface} canvas id="root">
            {/* Main editor drop surface */}
          </Element>
        </Frame>
      </ExportModeContext.Provider>
    </div>
  );
};

export default CraftEditor;
