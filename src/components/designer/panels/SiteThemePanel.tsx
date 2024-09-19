import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import { darkModeState } from '../../../atoms/themeAtoms';

// Define some default themes for selection
const defaultThemes = [
  {
    name: 'Oceanic Blue',
    description: 'A calm, ocean-inspired palette with soothing blues and greens.',
    colors: ['#1E90FF', '#00BFFF', '#20B2AA', '#3CB371'],
  },
  {
    name: 'Sunset Glow',
    description: 'Warm, vibrant shades that capture the beauty of a sunset.',
    colors: ['#FF4500', '#FF6347', '#FFD700', '#FF7F50'],
  },
  {
    name: 'Forest Green',
    description: 'A nature-inspired palette with shades of green and earth tones.',
    colors: ['#228B22', '#32CD32', '#8B4513', '#A0522D'],
  },
  {
    name: 'Desert Sands',
    description: 'A neutral palette inspired by desert landscapes.',
    colors: ['#D2B48C', '#DEB887', '#F4A460', '#8B4513'],
  },
];

interface SiteThemePanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const SiteThemePanel: React.FC<SiteThemePanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const [showThemeSelection, setShowThemeSelection] = useState(false); // Toggle between current theme and theme list
  const panelWidth = '22rem'; // Increase width for better spacing

  // Handler to show the theme selection screen
  const handleShowThemes = () => setShowThemeSelection(true);

  // Handler to go back to the main theme panel screen
  const handleBack = () => setShowThemeSelection(false);

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
      {/* Conditional rendering based on whether user is viewing the theme selection list */}
      {showThemeSelection ? (
        <>
          {/* Header for Theme Selection with Back Button */}
          <PanelHeader title="Select a Theme" onClose={togglePanel} />
          <button
            onClick={handleBack}
            className="ml-4 text-sm font-medium text-blue-500 hover:underline"
          >
            Back to Site Design
          </button>
          <div className="p-4 space-y-4 overflow-y-auto">
            {defaultThemes.map((theme, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold">{theme.name}</h3>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    {theme.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Main Site Design view */}
          <PanelHeader title="Site Design" onClose={togglePanel} />
          <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold">Current Theme: Oceanic Blue</h2>
            <button
              onClick={handleShowThemes}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Change Theme
            </button>
            {/* Display Current Theme colors */}
            <div className="flex space-x-2">
              <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#1E90FF' }} />
              <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#00BFFF' }} />
              <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#20B2AA' }} />
              <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: '#3CB371' }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SiteThemePanel;
