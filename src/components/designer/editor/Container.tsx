import React from 'react';
import { useNode } from '@craftjs/core';

interface ContainerProps {
  background?: string;
  padding?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  style?: React.CSSProperties;
  top?: number;
  left?: number;
}

const Container: React.FC<ContainerProps> & { craft?: any } = ({
  background = '#ffffff',
  padding = '20px',
  children,
  width = '400px',
  height = '250px',
  borderColor = '#ddd',
  borderRadius = '8px',
  boxShadow = '0',
  style = {},
  top = 0,
  left = 0,
}) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((node) => ({
    selected: node.events.selected,
    hovered: node.events.hovered,
  }));

  const ref = (element: HTMLDivElement | null) => {
    if (element) {
      connect(drag(element));
    }
  };

  return (
    <div
      ref={ref}
      className={`absolute flex flex-col items-stretch p-4 border ${
        selected || hovered ? 'border-2 border-gray-300' : 'border border-gray-300'
      } rounded-lg shadow`}
      style={{
        position: 'absolute',
        top,
        left,
        background,
        padding,
        width,
        minHeight: height,
        boxSizing: 'border-box',
        borderRadius: `${borderRadius}px`,
        boxShadow: `0px 0px ${boxShadow}px rgba(0, 0, 0, 0.3)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Container.craft = {
  props: {
    background: '#ffffff',
    padding: '20px',
    width: '400px',
    height: '250px',
    borderColor: '#ddd',
    borderRadius: '8',
    boxShadow: '0',
    style: {},
    top: 0,
    left: 0,
  },
  related: {
    toolbar: () => <div>Container Toolbar</div>,
  },
  isDeletable: true,
  isDraggable: true,
  isCanvas: true,
};

export default Container;
