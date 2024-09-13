// src/components/ThemeButton.tsx
import React from 'react';

interface ThemeButtonProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="text-sm border px-2 py-1 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeButton;
