import React from 'react';
import { useNode } from '@craftjs/core';

const Surface: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className="w-full h-full border border-dashed border-gray-300 flex flex-col items-center justify-center"
      style={{ minHeight: '500px' }}
    >
      {children}
    </div>
  );
};

export default Surface;
