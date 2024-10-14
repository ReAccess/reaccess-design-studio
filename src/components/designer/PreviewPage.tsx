import React from 'react';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState, editorWorkingState } from '../../atoms/editorSaveDataAtom';
import { deviceWidthState } from '../../atoms/deviceWidthState';
import lz from 'lzutf8';
import { ExportModeContext } from '../../context/ExportModeContext';
import { Frame } from '@craftjs/core';
import Navbar from './navbar/Navbar';
import { darkModeState } from '../../atoms/themeAtoms';

export const PreviewPage: React.FC = () => {
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const deviceWidth = useRecoilValue(deviceWidthState);
  const workingEditorState = useRecoilValue(editorWorkingState);
  const isDarkMode = useRecoilValue(darkModeState);

  const json : string = editorSaveData ? lz.decompress(lz.decodeBase64(editorSaveData.editorState)) : '{}';

  return (
    // // <div
    // //   style={{
    // //     //overflow: 'auto', // Allow scrolling
    // //     width: '100%',
    // //     margin: '0 auto',
    // //     //height: '1000px', // Same height as in CraftEditor
    // //     position: 'relative',
    // //   }}
    // // >
    //   <Frame data={json} />
    // // </div>
    <div className={`flex flex-col h-screen overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />
      {/* <ExportModeContext.Provider value={true}> */}
        <Frame data={json}>
        </Frame>
      {/* </ExportModeContext.Provider> */}
    </div>
  );
};
