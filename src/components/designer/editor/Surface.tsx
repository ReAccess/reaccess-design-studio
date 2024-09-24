import React, { useContext } from 'react';
import { useNode } from '@craftjs/core';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';

  const Surface: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  // Get the current theme from either the preview or saved state
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const previewTheme = useRecoilValue(themePreviewState);
  const isExportMode = useContext(ExportModeContext);

  // Use preview theme if it's available, otherwise use the saved theme
  const backgroundColor = previewTheme?.colors[0] || editorSaveData.theme.colors[0];

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className={`relative w-full flex flex-col items-start justify-start ${!isExportMode ? 'border border-gray-300 shadow-2xl' : ''
        }`}
      style={{
        minHeight: !isExportMode ? 'calc(100vh - 130px)' : '100vh', // Ensure the surface takes up the full viewport height
        backgroundColor: backgroundColor, // Apply the preview or saved theme's background color
        paddingBottom: '20px',
        boxShadow: !isExportMode ? '0 10px 20px rgba(0, 0, 0, 0.1), 0 0px 20px rgba(0, 0, 0, 0.1)' : '',
      }}
    >
      {/* Dotted alignment lines */}
      {!isExportMode &&
        <>
          <div
            className="export-ignore absolute top-0 left-[10%] h-full z-10"
            style={{
              backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
              backgroundPosition: 'left',
              backgroundSize: '2px 12px',
              width: '2px',
            }}
          ></div>
          <div
            className="export-ignore absolute top-0 right-[10%] h-full z-10"
            style={{
              backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
              backgroundPosition: 'right',
              backgroundSize: '2px 12px',
              width: '2px',
            }}
          ></div>
        </>
      }
      {children}
    </div>
  );
};

export default Surface;
