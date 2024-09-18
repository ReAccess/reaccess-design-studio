import { useEffect } from 'react';

export const useDocumentDragEvents = (onDrag: (xPosition: number) => void, onDrop: () => void) => {
  useEffect(() => {
    const handleDragOver = (event: DragEvent) => {
      event.preventDefault();
      const xPosition = event.clientX;
      onDrag(xPosition);
    };

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      onDrop();
    };

    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('drop', handleDrop);

    return () => {
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('drop', handleDrop);
    };
  }, [onDrag, onDrop]);
};
