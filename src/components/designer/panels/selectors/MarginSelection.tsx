// src/components/designer/panels/selectors/MarginSelection.tsx
import { useState } from "react";

export const MarginSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [margin, setMargin] = useState(node?.data.props.margin || "0px 0px 0px 0px");

  const handleMarginChange = (value: string, index: number) => {
    const marginArray = margin.split(" ");
    marginArray[index] = value;
    const newMargin = marginArray.join(" ");
    setMargin(newMargin);
    onUpdateNodeProps({ margin: newMargin });
  };

  return (
    <>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2"
      >
        <span>Margin</span>
        <span className="text-gray-500">{margin}</span>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          {["Top", "Right", "Bottom", "Left"].map((side, index) => (
            <div key={side} className="flex flex-col mb-3 w-full">
              <label className="font-bold mb-1">{side}:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={margin.split(" ")[index].replace("px", "")}
                onChange={(e) => handleMarginChange(e.target.value + "px", index)}
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
