import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

interface DraggableItemProps {
  children: React.ReactNode;
  itemType: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ children, itemType }) => {
  const [{ isDragging }, drag] = useDrag({
    type: itemType,
    item: { type: itemType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [isHovered, setIsHovered] = useState(false);

  // Optional: Style the item differently when dragging
  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      className={`p-3 mb-3 rounded-md cursor-pointer flex items-center gap-2 transition-transform duration-300 ${
        isHovered ? 'transform scale-105 shadow-lg' : ''
      }`}
      style={{
        background: 'linear-gradient(145deg, #4a4a4a, #383838)',
        opacity,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
