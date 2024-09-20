import React from 'react';
import { useNode } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';

interface SurfaceProps {
  isExportMode?: boolean; // Flag to remove borders/shadows during export
}

const Surface: React.FC<React.PropsWithChildren<SurfaceProps>> = ({ children, isExportMode = false }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  // Get the current theme from either the preview or saved state
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const previewTheme = useRecoilValue(themePreviewState);

  // Use preview theme if it's available, otherwise use the saved theme
  const backgroundColor = previewTheme?.colors[0] || editorSaveData.theme.colors[0];

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className={`relative w-full h-full flex flex-col items-start justify-start ${
        !isExportMode ? 'border border-gray-300 shadow-2xl' : ''
      }`}
      style={{
        minHeight: '500px',
        backgroundColor: backgroundColor, // Apply the preview or saved theme's background color
        boxShadow: !isExportMode ? '0 10px 20px rgba(0, 0, 0, 0.1), 0 0px 20px rgba(0, 0, 0, 0.1)' : '',
      }}
    >
      {children}
    </div>
  );
};

export default Surface;
