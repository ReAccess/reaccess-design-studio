import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import { darkModeState } from '../../../atoms/themeAtoms';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import ThemeSelection from './selectors/ThemeSelection';

interface SiteThemePanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SiteThemePanel: React.FC<SiteThemePanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = useRecoilValue(panelSizeState);
  const editorSaveData = useRecoilValue(editorSaveDataState); // Access current theme

  const [showThemeSelection, setShowThemeSelection] = useState(false);

  const toggleThemeSelection = () => setShowThemeSelection(!showThemeSelection);

  // Get current theme details
  const { name, description, colors } = editorSaveData.theme;

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{
        width: panelWidth,
        flexBasis: panelWidth,
      }}
    >
      <PanelHeader title="Site Design" onClose={togglePanel} themeColor={'bg-yellow-200'} />

      <div className="p-4 h-full overflow-y-auto pb-10">
        {!showThemeSelection ? (
          <div>
            <div className="w-full p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{name}</h3>
              <div className="flex space-x-2 mt-2">
                {colors.map((color, index) => (
                  <div key={index} className="w-8 h-8 rounded" style={{ backgroundColor: color }}></div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
              <button
                className="mt-4 text-blue-500 hover:text-blue-700 underline block mx-auto"
                onClick={toggleThemeSelection}
              >
                Change Theme
              </button>
            </div>
          </div>
        ) : (
          <ThemeSelection onBack={toggleThemeSelection} />
        )}
      </div>
    </div>
  );
};

export default SiteThemePanel;
