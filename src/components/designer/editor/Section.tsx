import React, { useContext } from 'react';
import { useNode } from '@craftjs/core';
import { ExportModeContext } from '../../../context/ExportModeContext';

interface SectionProps {
  background?: string;
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  borderRadius?: string;
  height?: string;
}

export const Section: React.FC<SectionProps> & { craft?: any } = ({
  background = 'transparent',
  padding = '20px',
  children,
  style = {},
  borderRadius = '0',
  height = '300px',
}) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((node) => ({
    selected: node.events.selected,
    hovered: node.events.hovered,
  }));
  const isExportMode = useContext(ExportModeContext);

  const ref = (element: HTMLDivElement | null) => {
    if (element) {
      connect(drag(element));
    }
  };

  return (
    <div
      ref={ref}
      className={`relative w-full ${
        !isExportMode && (selected ? 'border-2 border-teal-500' : hovered ? 'border border-teal-500' : '')
      }`}
      style={{
        background,
        padding,
        borderRadius,
        minHeight: height,
        boxSizing: 'border-box',
        display: 'block',
        width: '100%',
        ...style,
      }}
    >
      {children}

      {/* Label box */}
      {(selected || hovered) && (
        <div
          className="absolute -top-0 right-0 transform translate-y-[-100%] bg-teal-500 text-sm font-semibold text-white px-2 py-1 shadow-md border border-teal-500 z-20"
          style={{
            top: '-2px',
            right: '-2px',
            whiteSpace: 'nowrap',
            borderRadius: '0',
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
    background: 'transparent',
    padding: '20px',
    borderRadius: '0',
    height: '300px',
    style: {},
  },
  related: {
    toolbar: () => <div>Custom Section Toolbar</div>,
  },
  rules: {
    canMoveIn: (incomingNodes: any[]) => {
      // Prevent nesting of Sections within Sections
      return incomingNodes.every((node) => node.data.type !== Section);
    },
  },
  isDeletable: true,
  isDraggable: true,
  isCanvas: true,
};

export default Section;
