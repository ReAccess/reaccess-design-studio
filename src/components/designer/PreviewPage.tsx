import React from 'react';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../atoms/editorSaveDataAtom';
import lz from 'lzutf8';
import Navbar from './navbar/Navbar';
import { Frame } from '@craftjs/core';
import { darkModeState } from '../../atoms/themeAtoms';

export const PreviewPage: React.FC = () => {
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const isDarkMode = useRecoilValue(darkModeState);

  const json: string = editorSaveData ? lz.decompress(lz.decodeBase64(editorSaveData.editorState)) : '{}';

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar />
      <div className="flex-grow w-full">
        {/* Center the content using the Surface */}
        <Frame data={json} />
      </div>
    </div>
  );
};
