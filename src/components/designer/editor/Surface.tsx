import React from 'react';
import { useNode } from '@craftjs/core';

const Surface: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className="w-full h-full border border-dashed border-gray-300 flex flex-col items-start justify-start"
      style={{ minHeight: '500px', backgroundColor: "#ffffff" }} // White background for surface
    >
      {children}
    </div>
  );
};

export default Surface;
