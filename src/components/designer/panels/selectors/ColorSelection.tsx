// src/components/designer/panels/selectors/ColorSelection.tsx
import { useState } from "react";
import { SketchPicker } from "react-color";

export const ColorSelection = ({
  node,
  onUpdateNodeProps,
}: {
  node: any;
  onUpdateNodeProps: any;
}) => {
  const [expandedSection, setExpandedSection] = useState<boolean>(false);
  const [expandColor, setExpandColor] = useState<boolean>(false);
  const [background, setBackground] = useState(node?.data.props.background || "#ffffff");

  const handleBackgroundChange = (color: any) => {
    setBackground(color.hex);
    onUpdateNodeProps({ background: color.hex });
  };

  return (
    <>
      <div
        onClick={() => setExpandedSection(!expandedSection)}
        className="p-2 border-b border-gray-300 cursor-pointer flex justify-between items-center font-bold mb-2 bg-white"
      >
        <span>Color</span>
        <div className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: background }}></div>
      </div>
      {expandedSection && (
        <div className="p-3 bg-gray-100 rounded mb-4">
          <button
            onClick={() => setExpandColor(!expandColor)}
            className="text-sm border border-gray-300 rounded px-2 py-1 bg-white"
          >
            {expandColor ? "Close Picker" : "Select Color"}
          </button>
          {expandColor && (
            <div className="mt-3">
              <SketchPicker color={background} onChangeComplete={handleBackgroundChange} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
