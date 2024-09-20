import React, { useState } from 'react';
import { defaultThemes } from '../../themes/defaultThemes';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editorSaveDataState } from '../../../../atoms/editorSaveDataAtom';
import { themePreviewState } from '../../../../atoms/themePreviewAtom';

interface ThemeSelectionProps {
  onBack: () => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onBack }) => {
  const [currentSaveData, setEditorSaveData] = useRecoilState(editorSaveDataState);
  const setThemePreview = useSetRecoilState(themePreviewState);
  const [selectedTheme, setSelectedTheme] = useState<null | typeof defaultThemes[0]>(null);

  const filteredThemes = defaultThemes.filter(
    (theme) =>
      theme.name !== currentSaveData.theme.name ||
      JSON.stringify(theme.colors) !== JSON.stringify(currentSaveData.theme.colors)
  );

  // Handle theme selection for preview
  const handleThemeSelection = (theme: typeof defaultThemes[0]) => {
    setSelectedTheme(theme);
    setThemePreview(theme); // Set preview theme
  };

  // Handle selecting the current theme at the top
  const handleCurrentThemeSelection = () => {
    setSelectedTheme(null);
    setThemePreview(null); // Reset preview to current theme
  };

  // Save the selected theme when the user clicks back/close
  const handleBack = () => {
    if (selectedTheme) {
      setEditorSaveData({
        ...currentSaveData,
        theme: selectedTheme, // Save the selected theme
      });
    }
    setThemePreview(null); // Clear the preview when they leave
    onBack(); // Go back to previous screen
  };

  return (
    <div className="space-y-4 pb-10">
      <button className="text-blue-500 hover:text-blue-700 underline" onClick={handleBack}>
        Back
      </button>

      {/* Show the current theme */}
      <div
        onClick={handleCurrentThemeSelection}
        className={`border-2 p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200 
        ${selectedTheme === null ? 'border-blue-500 bg-blue-100' : 'hover:border-blue-300'}`}
      >
        <h4 className="text-lg font-semibold">{currentSaveData.theme.name} (Current)</h4>
        <p className="text-sm text-gray-500">{currentSaveData.theme.description}</p>
        <div className="flex space-x-2 mt-2">
          {currentSaveData.theme.colors.map((color) => (
            <div key={color} className="w-8 h-8 rounded" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>

      {/* List of selectable themes */}
      {filteredThemes.map((theme) => (
        <div
          key={theme.name}
          onClick={() => handleThemeSelection(theme)}
          className={`border p-4 rounded-lg shadow-md cursor-pointer transition-all duration-200 
          ${selectedTheme?.name === theme.name ? 'border-blue-500 bg-blue-100' : 'hover:border-blue-300'}`}
        >
          <h4 className="text-lg font-semibold">{theme.name}</h4>
          <p className="text-sm text-gray-500">{theme.description}</p>
          <div className="flex space-x-2 mt-2">
            {theme.colors.map((color) => (
              <div key={color} className="w-8 h-8 rounded" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelection;
