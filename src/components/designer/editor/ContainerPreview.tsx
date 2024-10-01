import React from 'react';

interface ContainerPreviewProps {
  background?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const ContainerPreview: React.FC<ContainerPreviewProps> = ({
  background = '#ffffff',
  borderRadius = '8px',
  width = '400px',
  height = '250px',
  style = {},
}) => {
  return (
    <div
      className="flex flex-col items-stretch p-4 border border-gray-300 rounded-lg shadow"
      style={{
        background,
        width,
        minHeight: height,
        boxSizing: 'border-box',
        borderRadius: borderRadius,
        ...style, // Apply the style prop
      }}
    >
      {/* Optionally add any placeholder content */}
    </div>
  );
};

export default ContainerPreview;
