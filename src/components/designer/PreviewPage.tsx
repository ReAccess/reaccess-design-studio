import React from 'react';
import { Editor, Frame } from '@craftjs/core';
import Container from './editor/Container';
import { Section } from './editor/Section';
import Surface from './editor/Surface';
import { useRecoilValue } from 'recoil';
import { editorWorkingState } from '../../atoms/editorSaveDataAtom';

export const PreviewPage: React.FC = () => {
  const workingEditorState = useRecoilValue(editorWorkingState);

  return (
    <div>
      <Editor
        resolver={{
          Container,
          Section,
          Surface,
        }}
        enabled={false} // Disable editor mode to prevent editing
      >
        <Frame data={workingEditorState}></Frame>
      </Editor>
    </div>
  );
};
