// src/components/designer/elements/Section.tsx
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
  borderRadius = "0",
  height = "300px",
}) => {
  const {
    connectors: { connect, drag },
    hasSelectedNode,
    isHovered,
  } = useNode((node) => ({
    hasSelectedNode: node.events.selected,
    isHovered: node.events.hovered,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref as HTMLElement))}
      className="relative w-full"
      style={{
        background,
        padding,
        border: hasSelectedNode || isHovered ? "2px solid #008080" : "1px solid #ddd",
        borderRadius,
        minHeight: height,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}

      {/* Label box - Positioned with a slight offset to account for the border */}
      {(hasSelectedNode || isHovered) && (
        <div
          className="absolute -top-0 right-0 transform translate-y-[-100%] bg-[#008080] text-sm font-semibold text-white px-2 py-1 shadow-md border border-[#008080] z-20"
          style={{
            top: "-2px", // Adjusted for alignment
            right: "-2px", // Adjusted for alignment
            whiteSpace: "nowrap",
            borderRadius: "0", // No rounded corners
          }}
        >
          Section: untitled
        </div>
      )}
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
