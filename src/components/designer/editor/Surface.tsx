// src/components/designer/editor/Surface.tsx
import React, { useContext, useRef, useState } from 'react';
import { useNode, useEditor, Element } from '@craftjs/core';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';
import { deviceWidthState } from '../../../atoms/deviceWidthState';
import Container from './Container';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce';

const Surface: React.FC<React.PropsWithChildren> & { craft?: any } = ({
  children,
}) => {
  const {
    connectors: { connect },
    id,
  } = useNode();

  const { actions, query } = useEditor();
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const previewTheme = useRecoilValue(themePreviewState);
  const deviceWidth = useRecoilValue(deviceWidthState);
  const isExportMode = useContext(ExportModeContext);

  const backgroundColor = previewTheme?.colors[0] || editorSaveData.theme.colors[0];
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [isAlignedCenter, setIsAlignedCenter] = useState(false);

  // Initialize debouncedSave
  const debouncedSave = useSaveWithDebounce(200);

  const [{ isOver, canDrop, item: dragItem, clientOffset }, drop] = useDrop({
    accept: ['CONTAINER'],
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
      clientOffset: monitor.getClientOffset(),
    }),
    drop: (item: any, monitor) => {
      if (!dropRef.current) return;

      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const surfaceRect = dropRef.current.getBoundingClientRect();

      // Compute the position relative to the surface
      const x = clientOffset.x - surfaceRect.left + dropRef.current.scrollLeft;
      const y = clientOffset.y - surfaceRect.top + dropRef.current.scrollTop;

      // Calculate positions as percentages
      const leftPercent = (x / surfaceRect.width) * 100;
      const topPercent = (y / surfaceRect.height) * 100;

      if (item.type === 'CONTAINER') {
        const { type, ...containerProps } = item;

        const containerNodeProps = {
          ...containerProps,
          top: `${topPercent}%`,
          left: `${leftPercent}%`,
        };

        // Create a node tree
        const nodeTree = query
          .parseReactElement(
            <Element is={Container} canvas {...containerNodeProps} />
          )
          .toNodeTree();

        // Add the node tree to the editor
        actions.addNodeTree(nodeTree, id);
      }

      setIsAlignedCenter(false);

      // Save the editor state
      const serializedNodes = query.serialize();
      debouncedSave(serializedNodes);
    },
  });

  const ref = (element: HTMLDivElement | null) => {
    dropRef.current = element;

    if (element) {
      connect(element);
      drop(element);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative w-full h-full ${
        !isExportMode ? 'border border-gray-300 shadow-2xl' : ''
      }`}
      style={{
        position: 'relative',
        backgroundColor: backgroundColor,
        paddingBottom: '20px',
        boxShadow: !isExportMode
          ? '0 10px 20px rgba(0, 0, 0, 0.1), 0 0px 20px rgba(0, 0, 0, 0.1)'
          : '',
      }}
    >
       {/* Center alignment guide */}
       {isAlignedCenter && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-purple-600 z-20"></div>
      )}

      {/* Dotted alignment lines */}
      {!isExportMode && (
        <>
          <div
            className="export-ignore absolute top-0 left-[10%] h-full z-10"
            style={{
              backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
              backgroundPosition: 'left',
              backgroundSize: '2px 12px',
              width: '2px',
            }}
          ></div>
          <div
            className="export-ignore absolute top-0 right-[10%] h-full z-10"
            style={{
              backgroundImage: 'linear-gradient(to bottom, black 50%, transparent 0%)',
              backgroundPosition: 'right',
              backgroundSize: '2px 12px',
              width: '2px',
            }}
          ></div>
        </>
      )}
      {children}
    </div>
  );
};

Surface.craft = {
  displayName: 'Surface',
  isCanvas: true,
  rules: {
    canMoveIn: () => true,
  },
};

export default Surface;
