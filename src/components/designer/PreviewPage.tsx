import React from 'react';
import { Editor, Frame } from '@craftjs/core';
import Container from './editor/Container';
import { Section } from './editor/Section';
import Surface from './editor/Surface';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../atoms/editorSaveDataAtom';
import lz from 'lzutf8';
import { cloneDeep } from 'lodash';
import { ExportModeContext } from '../../context/ExportModeContext';

export const PreviewPage: React.FC = () => {
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const clonedDecodedSavedData = cloneDeep(JSON.parse(lz.decompress(lz.decodeBase64(editorSaveData.editorState))));

  return (
    <ExportModeContext.Provider value={true}>
      <div
        style={{
          overflow: 'auto', // Allow scrolling
        }}
      >
        <Editor
          resolver={{
            Container,
            Section,
            Surface,
          }}
          enabled={false} // Disable editor mode to prevent editing
        >
          <Frame data={clonedDecodedSavedData}></Frame>
        </Editor>
      </div>
    </ExportModeContext.Provider>
  );
};
