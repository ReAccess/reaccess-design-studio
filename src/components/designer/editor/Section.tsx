import React from "react";
import { useNode } from "@craftjs/core";

interface SectionProps {
  background?: string;
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  borderRadius?: string;
  height?: string;
}

export const Section: React.FC<SectionProps> & { craft?: any } = ({
  background = "#f0f0f0",
  padding = "20px",
  children,
  style = {},
  borderRadius = "0", // No rounded corners by default
  height = "300px",
}) => {
  const { connectors: { connect, drag }, hasSelectedNode, isHovered } = useNode((node) => ({
    hasSelectedNode: node.events.selected,
    isHovered: node.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      style={{
        background,
        padding,
        border: hasSelectedNode || isHovered ? "2px solid blue" : "1px solid #ddd",
        borderRadius,
        minHeight: height,
        width: "100%", // Full width for the Section
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Section.craft = {
  props: {
    background: "#f0f0f0",
    padding: "20px",
    borderRadius: "0", // No rounded corners by default
    height: "300px",
    style: {},
  },
  related: {
    toolbar: () => <div>Custom Section Toolbar</div>,
  },
  rules: {
    canMoveIn: (incomingNodes: any[]) => {
      return incomingNodes.every((node) => node.data.type !== Section);
    },
  },
  isDeletable: true,
  isDraggable: true,
  isCanvas: true,
};
