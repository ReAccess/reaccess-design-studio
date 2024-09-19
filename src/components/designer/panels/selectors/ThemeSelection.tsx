import React from 'react';
import { defaultThemes } from '../../themes/defaultThemes';

interface ThemeSelectionProps {
  onBack: () => void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onBack }) => {
  return (
    <div className="space-y-4">
      <button className="text-blue-500 hover:text-blue-700 underline" onClick={onBack}>
        Back
      </button>
      {defaultThemes.map((theme) => (
        <div key={theme.name} className="border p-4 rounded-lg shadow-md">
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
