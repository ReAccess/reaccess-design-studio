import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import { darkModeState } from '../../../atoms/themeAtoms';
import { panelSizeState } from '../../../atoms/panelSizeAtoms';
import ThemeSelection from './selectors/ThemeSelection';

interface SiteThemePanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SiteThemePanel: React.FC<SiteThemePanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = useRecoilValue(panelSizeState);
  const [showThemeSelection, setShowThemeSelection] = useState(false);

  const toggleThemeSelection = () => setShowThemeSelection(!showThemeSelection);

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
      <PanelHeader title="Site Design" onClose={togglePanel} />

      <div className="p-4 h-full overflow-y-auto">
        {!showThemeSelection ? (
          <div>
            <div className="w-full p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Oceanic Blue</h3>
              <div className="flex space-x-2 mt-2">
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#1E90FF' }}></div>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#00BFFF' }}></div>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#20B2AA' }}></div>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#3CB371' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                A calm, ocean-inspired palette with soothing blues and greens.
              </p>
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
