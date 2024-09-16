// src/components/designer/panels/selectors/AlignmentSelection.tsx
import React, { useState } from "react";

export const AlignmentSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [flexDirection, setFlexDirection] = useState(node?.data.props.flexDirection || "column");
  const [alignItems, setAlignItems] = useState(node?.data.props.alignItems || "stretch");
  const [justifyContent, setJustifyContent] = useState(node?.data.props.justifyContent || "flex-start");

  const handleFlexDirectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDirection = e.target.value;
    setFlexDirection(newDirection);
    onUpdateNodeProps({ flexDirection: newDirection });
  };

  const handleAlignItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAlignment = e.target.value;
    setAlignItems(newAlignment);
    onUpdateNodeProps({ alignItems: newAlignment });
  };

  const handleJustifyContentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newJustification = e.target.value;
    setJustifyContent(newJustification);
    onUpdateNodeProps({ justifyContent: newJustification });
  };

  return (
    <>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2"
      >
        <span>Alignment</span>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          <div className="flex flex-col mb-3 w-full">
            <label className="font-bold mb-1">Flex Direction:</label>
            <select
              value={flexDirection}
              onChange={handleFlexDirectionChange}
              className="border border-gray-300 rounded p-1 bg-gray-50"
            >
              <option value="row">Row</option>
              <option value="column">Column</option>
            </select>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-bold mb-1">Align Items:</label>
            <select
              value={alignItems}
              onChange={handleAlignItemsChange}
              className="border border-gray-300 rounded p-1 bg-gray-50"
            >
              <option value="flex-start">Start</option>
              <option value="center">Center</option>
              <option value="flex-end">End</option>
              <option value="stretch">Stretch</option>
            </select>
          </div>
          <div className="flex flex-col mb-3 w-full">
            <label className="font-bold mb-1">Justify Content:</label>
            <select
              value={justifyContent}
              onChange={handleJustifyContentChange}
              className="border border-gray-300 rounded p-1 bg-gray-50"
            >
              <option value="flex-start">Start</option>
              <option value="center">Center</option>
              <option value="flex-end">End</option>
              <option value="space-between">Space Between</option>
              <option value="space-around">Space Around</option>
              <option value="space-evenly">Space Evenly</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};
