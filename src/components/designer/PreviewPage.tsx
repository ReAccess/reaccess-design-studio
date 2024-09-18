import React from 'react';
import lz from 'lzutf8';
import { Editor, Frame } from '@craftjs/core';
import Container from './editor/Container';
import { Section } from './editor/Section';
import Surface from './editor/Surface';

export const PreviewPage: React.FC = () => {
  const compressedState = localStorage.getItem('editorState');
  const json = compressedState ? lz.decompress(lz.decodeBase64(compressedState)) : '{}';

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
        <Frame data={json}></Frame>
      </Editor>
    </div>
  );
};
