import React, { useRef } from 'react';
import { useNode, Element, useEditor } from '@craftjs/core';
import { useDrop } from 'react-dnd';
import { useRecoilValue } from 'recoil';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../atoms/themePreviewAtom';
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

  const dropRef = useRef<HTMLDivElement | null>(null);

  // Initialize debouncedSave
  const debouncedSave = useSaveWithDebounce(200);

  const [, drop] = useDrop({
    accept: ['CONTAINER'],
    drop: (item: any, monitor) => {
      if (!dropRef.current) return;

      const surfaceRect = dropRef.current.getBoundingClientRect();
      const surfaceScrollTop = dropRef.current.scrollTop;
      const surfaceScrollLeft = dropRef.current.scrollLeft;

      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const x = clientOffset.x - surfaceRect.left + surfaceScrollLeft;
      const y = clientOffset.y - surfaceRect.top + surfaceScrollTop;

      const leftPercent = Math.min(Math.max((x / surfaceRect.width) * 100, 0), 100);
      const topPercent = Math.min(Math.max((y / surfaceRect.height) * 100, 0), 100);

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
      className="relative w-full h-full"
      style={{
        backgroundColor: previewTheme?.colors[0] || editorSaveData.theme.colors[0],
        paddingBottom: '20px',
        overflow: 'auto',
      }}
    >
      {/* This wrapper centers the content */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          position: 'relative',
          height: '100%',
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
