// src/components/designer/editor/Container.tsx
import React from 'react';
import { useNode } from '@craftjs/core';
import { ContainerToolbar } from '../panels/ContainerToolbar';

interface ContainerProps {
  background?: string;
  padding?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  alignment?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> & { craft?: any } = ({
  background = "#ffffff",
  padding = "20px",
  children,
  width = "100%",
  height = "300px",
  borderColor = "#ddd",
  borderRadius = "8px",
  boxShadow = "0",
  alignment = "left",
  style = {},
}) => {
  const { connectors: { connect, drag }, hasSelectedNode, isHovered } = useNode((node) => ({
    hasSelectedNode: node.events.selected,
    isHovered: node.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className={`relative flex flex-${alignment === 'row' ? 'row' : 'col'} items-stretch p-4 border ${hasSelectedNode || isHovered ? `border-2 border-${borderColor}` : 'border border-gray-300'} rounded-lg shadow`}
      style={{
        background,
        padding,
        width,
        minHeight: height,
        height: "auto",
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
    width: "100%",
    height: "300px",
    borderColor: "#ddd",
    borderRadius: "8",
    boxShadow: "0",
    alignment: "left",
    style: {},
  },
  related: {
    toolbar: (props: { node: any; onUpdateNodeProps: any; }) => (
      <ContainerToolbar node={props.node} onUpdateNodeProps={props.onUpdateNodeProps} />
    ),
  },
  rules: {
    canMoveIn: (incomingNodes: any[]) => {
      return incomingNodes.every((node) => node.data.type !== Container);
    },
  },
  isDeletable: true,
  isDraggable: true,
  isCanvas: true,
};

export default Container;
