// src/components/designer/panels/selectors/PaddingSelection.tsx
import { useState } from "react";

export const PaddingSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [padding, setPadding] = useState(node?.data.props.padding || "0px 0px 0px 0px");

  const handlePaddingChange = (value: string, index: number) => {
    const paddingArray = padding.split(" ");
    paddingArray[index] = value;
    const newPadding = paddingArray.join(" ");
    setPadding(newPadding);
    onUpdateNodeProps({ padding: newPadding });
  };

  return (
    <>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2"
      >
        <span>Padding</span>
        <span className="text-gray-500">{padding}</span>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          <div className="flex justify-between mb-3">
            {["Top", "Right"].map((side, index) => {
              const paddingValue = padding.split(" ")[index] || "0px";
              const numericValue = parseInt(paddingValue.replace("px", ""), 10) || 0;

              return (
                <div key={side} className="flex flex-col items-center w-1/2">
                  <span className="font-bold mb-1">{side}:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={numericValue}
                    onChange={(e) => handlePaddingChange(`${e.target.value}px`, index)}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            {["Bottom", "Left"].map((side, index) => {
              const paddingValue = padding.split(" ")[index + 2] || "0px";
              const numericValue = parseInt(paddingValue.replace("px", ""), 10) || 0;

              return (
                <div key={side} className="flex flex-col items-center w-1/2">
                  <span className="font-bold mb-1">{side}:</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={numericValue}
                    onChange={(e) => handlePaddingChange(`${e.target.value}px`, index + 2)}
                    className="w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
