// src/components/designer/editorNavbar/ZoomButton.tsx
import React, { useState } from 'react';

const ZoomButton: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(100); // Default zoom level

  const toggleZoom = () => {
    setZoomLevel((prevZoom) => (prevZoom === 100 ? 50 : 100)); // Toggle between 100% and 50%
  };

  return (
    <button onClick={toggleZoom} className="text-sm px-3 py-1 rounded hover:bg-gray-200 transition-all duration-200 text-gray-600 hover:text-blue-500">
      Zoom: {zoomLevel}%
    </button>
  );
};

export default ZoomButton;
