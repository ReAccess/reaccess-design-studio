import React from 'react';
import { useNode } from '@craftjs/core';

interface SurfaceProps {
  isExportMode?: boolean; // Flag to remove borders/shadows during export
}

const Surface: React.FC<React.PropsWithChildren<SurfaceProps>> = ({ children, isExportMode = false }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className={`relative w-full h-full flex flex-col items-start justify-start ${
        !isExportMode ? 'border border-gray-300 shadow-2xl' : ''
      }`}
      style={{
        minHeight: '500px',
        backgroundColor: "#ffffff",
        boxShadow: !isExportMode ? '0 10px 20px rgba(0, 0, 0, 0.1), 0 0px 20px rgba(0, 0, 0, 0.1)' : '',
      }}
    >
      {children}
    </div>
  );
};

export default Surface;
