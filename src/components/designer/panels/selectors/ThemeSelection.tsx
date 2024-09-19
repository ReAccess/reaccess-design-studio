import React, { useState } from 'react';
import { defaultThemes } from '../../themes/defaultThemes';
import { useRecoilState } from 'recoil';
import { editorSaveDataState } from '../../../../atoms/editorSaveDataAtom';

interface ThemeSelectionProps {
  onBack: () => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onBack }) => {
  const [currentSaveData, setEditorSaveData] = useRecoilState(editorSaveDataState);
  const [selectedTheme, setSelectedTheme] = useState<null | typeof defaultThemes[0]>(null);

  const filteredThemes = defaultThemes.filter(
    (theme) =>
      theme.name !== currentSaveData.theme.name ||
      JSON.stringify(theme.colors) !== JSON.stringify(currentSaveData.theme.colors)
  );

  const handleThemeSelection = (theme: typeof defaultThemes[0]) => {
    setSelectedTheme(theme);
  };

  const handleCurrentThemeSelection = () => {
    setSelectedTheme(null); // Reset to make the current theme active
  };

  const handleBack = () => {
    if (selectedTheme) {
      setEditorSaveData({
        ...currentSaveData,
        theme: selectedTheme,
      });
    }
    onBack(); // Return to the previous screen
  };

  return (
    <div className="space-y-4 pb-10"> {/* Added padding-bottom */}
      <button className="text-blue-500 hover:text-blue-700 underline" onClick={handleBack}>
        Back
      </button>

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
