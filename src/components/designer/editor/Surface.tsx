import React, { useRef, useContext } from 'react';
import { useNode, Element, useEditor } from '@craftjs/core';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';
import Container from './Container';
import { useSaveWithDebounce } from '../../../hooks/useSaveWithDebounce';

export const Surface: React.FC<React.PropsWithChildren> & { craft?: any } = ({ children }) => {
  const {
    connectors: { connect },
    id,
  } = useNode();

  const { actions, query } = useEditor();
  const editorSaveData = useRecoilValue(editorSaveDataState);
  const previewTheme = useRecoilValue(themePreviewState);
  const isExportMode = useContext(ExportModeContext);

  const dropRef = useRef<HTMLDivElement | null>(null);

  // Initialize debouncedSave
  const debouncedSave = useSaveWithDebounce(200);

  const [, drop] = useDrop({
    accept: ['CONTAINER'],
    drop: (item: any, monitor) => {
      if (!dropRef.current) return;

      // Get the surface rect and scroll offsets
      const surfaceRect = dropRef.current.getBoundingClientRect();
      const surfaceScrollTop = dropRef.current.scrollTop;
      const surfaceScrollLeft = dropRef.current.scrollLeft;

      // Get client offset
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      // Correct the x and y values based on surface rect
      const x = clientOffset.x - surfaceRect.left + surfaceScrollLeft;
      const y = clientOffset.y - surfaceRect.top + surfaceScrollTop;

      // Adjust the leftPercent and topPercent to use full width and height
      const leftPercent = Math.min(Math.max((x / surfaceRect.width) * 100, 0), 100);
      const topPercent = Math.min(Math.max((y / surfaceRect.height) * 100, 0), 100);

      console.log('Drop Details:', {
        clientOffset,
        surfaceRect,
        surfaceScrollTop,
        surfaceScrollLeft,
        calculatedX: x,
        calculatedY: y,
        leftPercent,
        topPercent,
      });

      if (item.type === 'CONTAINER') {
        const containerProps = {
          ...item,
          top: `${topPercent}%`,
          left: `${leftPercent}%`,
        };

        const nodeTree = query
          .parseReactElement(<Element is={Container} canvas {...containerProps} />)
          .toNodeTree();

        actions.addNodeTree(nodeTree, id);
      }

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
      className={`relative w-full h-full`}
      style={{
        backgroundColor: previewTheme?.colors[0] || editorSaveData.theme.colors[0],
        paddingBottom: '20px',
        overflow: 'auto', // Ensure scrolling when the content exceeds viewport height
        ...(!isExportMode ? {} : { position: 'relative' }), // Ensure positioning for containers only in editor mode
      }}
    >
      <div
        className="max-w-[1200px] mx-auto"
        style={{
          backgroundColor: 'inherit',
          ...(!isExportMode ? { display: 'block', margin: '0 auto' } : { position: 'relative' }), // Proper layout for preview vs editor mode
        }}
      >
        {children}
      </div>
    </div>
  );
};

Surface.craft = {
  displayName: 'Surface',
  isCanvas: true,
};