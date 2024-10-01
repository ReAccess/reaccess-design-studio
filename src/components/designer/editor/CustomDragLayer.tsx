import React from 'react';
import { useDragLayer } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { zoomLevelState } from '../../../atoms/zoomLevelAtom';
import ContainerPreview from './ContainerPreview';

const CustomDragLayer: React.FC = () => {
  const zoomLevel = useRecoilValue(zoomLevelState);

  const {
    itemType,
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor) => ({
    itemType: monitor.getItemType(),
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getClientOffset(),
  }));

  if (!isDragging || !currentOffset || itemType !== 'CONTAINER') {
    return null;
  }

  const { background, borderRadius } = item;

  const style: React.CSSProperties = {
    position: 'fixed',
    top: currentOffset.y,
    left: currentOffset.x,
    pointerEvents: 'none',
    transform: `scale(${zoomLevel})`,
    transformOrigin: 'top left',
    zIndex: 100,
  };

  return (
    <div style={style}>
      <ContainerPreview
        background={background}
        borderRadius={borderRadius}
        width="400px"
        height="250px"
      />
    </div>
  );
};

export default CustomDragLayer;
