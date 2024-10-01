import React from 'react';
import { useRecoilState } from 'recoil';
import { zoomLevelState } from '../../../atoms/zoomLevelAtom';

const ZoomButton: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useRecoilState(zoomLevelState);

  const toggleZoom = () => {
    setZoomLevel((prevZoom) => (prevZoom === 1 ? 0.5 : 1)); // Toggle between 100% and 50%
  };

  return (
    <button
      onClick={toggleZoom}
      className="text-sm px-3 py-1 rounded hover:bg-gray-200 transition-all duration-200 text-gray-600 hover:text-blue-500"
    >
      Zoom: {Math.round(zoomLevel * 100)}%
    </button>
  );
};

export default ZoomButton;
