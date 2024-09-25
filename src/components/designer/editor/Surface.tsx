import React, { useContext, useRef, useState } from 'react';
import { useNode, useEditor, Element, NodeTree } from '@craftjs/core';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';
import Container from './Container';
import { Section } from './Section';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce';

const Surface: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {
    connectors: { connect },
    id,
  } = useNode();

  const { actions, query } = useEditor();

  const editorSaveData = useRecoilValue(editorSaveDataState);
  const previewTheme = useRecoilValue(themePreviewState);
  const isExportMode = useContext(ExportModeContext);

  const backgroundColor = previewTheme?.colors[0] || editorSaveData.theme.colors[0];

  const dropRef = useRef<HTMLDivElement | null>(null);

  const [isAlignedCenter, setIsAlignedCenter] = useState(false);

  // Initialize debouncedSave
  const debouncedSave = useSaveWithDebounce(200);

  const [{ isOver, canDrop, item: dragItem, clientOffset }, drop] = useDrop({
    accept: ['CONTAINER', 'SECTION'],
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
      clientOffset: monitor.getClientOffset(),
    }),
    hover: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset || !dropRef.current) return;

      const surfaceRect = dropRef.current.getBoundingClientRect();
      const x = clientOffset.x - surfaceRect.left;

      const centerPosition = surfaceRect.width / 2;
      const threshold = 10;

      if (Math.abs(x - centerPosition) < threshold) {
        setIsAlignedCenter(true);
      } else {
        setIsAlignedCenter(false);
      }
    },
    drop: (item: any, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset || !dropRef.current) return;

      const surfaceRect = dropRef.current.getBoundingClientRect();
      const x = clientOffset.x - surfaceRect.left;
      const y = clientOffset.y - surfaceRect.top;

      let nodeTree: NodeTree;

      if (item.type === 'CONTAINER') {
        nodeTree = query
          .parseReactElement(<Element is={Container} canvas top={y} left={x} />)
          .toNodeTree();

        // Add the container to the root node (id)
        actions.addNodeTree(nodeTree, id);
      } else if (item.type === 'SECTION') {
        nodeTree = query.parseReactElement(<Element is={Section} canvas />).toNodeTree();

        // Add the section to the root node (id)
        actions.addNodeTree(nodeTree, id);
      } else {
        return;
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
      className={`relative w-full flex flex-col items-start justify-start ${
        !isExportMode ? 'border border-gray-300 shadow-2xl' : ''
      }`}
      style={{
        minHeight: !isExportMode ? 'calc(100vh - 130px)' : '100vh',
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

export default Surface;
