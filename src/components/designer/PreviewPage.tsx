import React from 'react';
import { Frame } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import { editorWorkingState } from '../../atoms/editorSaveDataAtom';
import { deviceWidthState } from '../../atoms/deviceWidthState';

export const PreviewPage: React.FC = () => {
  const workingEditorState = useRecoilValue(editorWorkingState);
  const deviceWidth = useRecoilValue(deviceWidthState);

  return (
    <div
      style={{
        //overflow: 'auto', // Allow scrolling
        width: '100%',
        margin: '0 auto',
        //height: '1000px', // Same height as in CraftEditor
        position: 'relative',
      }}
    >
      <Frame data={workingEditorState} />
    </div>
  );
};
