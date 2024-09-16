// src/components/designer/panels/selectors/DecorationSelection.tsx
import React, { useState } from "react";

export const DecorationSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [borderRadius, setBorderRadius] = useState(node?.data.props.borderRadius || "8");
  const [boxShadow, setBoxShadow] = useState(node?.data.props.boxShadow || "0");

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = e.target.value;
    setBorderRadius(newRadius);
    onUpdateNodeProps({ borderRadius: newRadius });
  };

  const handleBoxShadowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newShadow = e.target.value;
    setBoxShadow(newShadow);
    onUpdateNodeProps({ boxShadow: newShadow });
  };

  return (
    <>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2"
      >
        <span>Decoration</span>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          <div className="flex flex-col mb-3 w-full">
            <label className="font-bold mb-1">Border Radius:</label>
            <input
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={handleRadiusChange}
              className="w-full"
            />
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-bold mb-1">Box Shadow:</label>
            <input
              type="range"
              min="0"
              max="50"
              value={boxShadow}
              onChange={handleBoxShadowChange}
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};
