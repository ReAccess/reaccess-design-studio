import React from 'react';
import { Frame, Element } from '@craftjs/core';
import Surface from './Surface';
import { useRecoilValue } from 'recoil';
import { editorWorkingState } from '../../../atoms/editorSaveDataAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';
import { deviceWidthState } from '../../../atoms/deviceWidthState';

const CraftEditor: React.FC = () => {
  const workingEditorState = useRecoilValue(editorWorkingState);
  const deviceWidth = useRecoilValue(deviceWidthState);

  return (
    <div className="relative h-full p-4 overflow-y-auto craft-editor">
      <div
        style={{
          width: deviceWidth,
          margin: '0 auto',
          height: '1000px', // Set a consistent height
          position: 'relative', // Needed for absolute positioning
        }}
      >
        <ExportModeContext.Provider value={false}>
          <Frame data={workingEditorState}>
            <Element is={Surface} canvas id="root">
              {/* Main editor drop surface */}
            </Element>
          </Frame>
        </ExportModeContext.Provider>
      </div>
    </div>
  );
};

export default CraftEditor;
