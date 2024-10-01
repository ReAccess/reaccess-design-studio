import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableItemProps {
  children: React.ReactNode;
  itemType: string;
  itemData?: any;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ children, itemType, itemData }) => {
  const [{ isDragging }, drag] = useDrag({
    type: itemType,
    item: { type: itemType, ...itemData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
