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
}

const Container: React.FC<ContainerProps> & { craft?: any } = ({
  background = "#ffffff",
  padding = "20px",
  children,
  width = "350px", // Set the default width to 350px for the container
  height = "200px",
  borderColor = "#ddd",
  borderRadius = "8px",
  boxShadow = "0",
  style = {},
}) => {
  const { connectors: { connect, drag }, hasSelectedNode, isHovered } = useNode((node) => ({
    hasSelectedNode: node.events.selected,
    isHovered: node.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className={`relative flex flex-col items-stretch p-4 border ${hasSelectedNode || isHovered ? `border-2 border-${borderColor}` : 'border border-gray-300'} rounded-lg shadow`}
      style={{
        background,
        padding,
        width,
        minHeight: height,
        boxSizing: "border-box",
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
    background: "#ffffff",
    padding: "20px",
    width: "350px", // Set default width of 350px for the container
    height: "200px",
    borderColor: "#ddd",
    borderRadius: "8",
    boxShadow: "0",
    style: {},
  },
  related: {
    toolbar: () => <div>Container Toolbar</div>,
  },
  isDeletable: true,
  isDraggable: true,
  isCanvas: true,
};

export default Container;
