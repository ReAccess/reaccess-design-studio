// src/components/designer/panels/selectors/DimensionSelection.tsx
import React, { useState } from "react";

export const DimensionSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [width, setWidth] = useState(node?.data.props.width || "100%");
  const [height, setHeight] = useState(node?.data.props.height || "auto");

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = e.target.value;
    setWidth(newWidth);
    onUpdateNodeProps({ width: newWidth });
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
    onUpdateNodeProps({ height: newHeight });
  };

  return (
    <div>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2"
      >
        <span>Dimensions</span>
        <span className="text-sm text-gray-600">{`${width} x ${height}`}</span>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          <div className="flex justify-between mb-3">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="font-bold mb-1">Width:</label>
              <input
                type="text"
                value={width}
                onChange={handleWidthChange}
                placeholder="e.g., 100%, 50vw"
                className="border border-gray-300 rounded p-1 bg-white"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="font-bold mb-1">Height:</label>
              <input
                type="text"
                value={height}
                onChange={handleHeightChange}
                placeholder="e.g., auto, 50vh"
                className="border border-gray-300 rounded p-1 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
