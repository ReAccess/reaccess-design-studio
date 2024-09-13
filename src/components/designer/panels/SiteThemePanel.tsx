// src/components/designer/panels/SiteThemePanel.tsx
import React from 'react';
import PanelHeader from './PanelHeader';

interface SiteThemePanelProps {
  isOpen: boolean;
  isDarkMode: boolean;
  togglePanel: () => void;
}

const SiteThemePanel: React.FC<SiteThemePanelProps> = ({ isOpen, isDarkMode, togglePanel }) => {
  return (
    <div
      className={`absolute top-0 left-48 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72 h-full ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } shadow-lg z-10 transition-transform duration-700 ease-in-out`}
    >
      <PanelHeader title="Site Design" isDarkMode={isDarkMode} onClose={togglePanel} />
      <div className="p-4">Site Theme panel content here...</div>
    </div>
  );
};

export default SiteThemePanel;
