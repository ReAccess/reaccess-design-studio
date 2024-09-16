// src/components/designer/editor/DraggableItem.tsx
import React, { useState } from 'react';

interface DraggableItemProps {
  children: React.ReactNode;
  refFn: (ref: HTMLElement | null) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ children, refFn }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={refFn}
      className={`p-3 mb-3 rounded-md cursor-pointer flex items-center gap-2 transition-transform duration-300 ${
        isHovered ? 'transform scale-105 shadow-lg' : ''
      }`}
      style={{ background: 'linear-gradient(145deg, #4a4a4a, #383838)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
