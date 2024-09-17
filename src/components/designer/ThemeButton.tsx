import React from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../atoms/themeAtoms';

const ThemeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState); // Use Recoil state

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Toggle dark mode state

  return (
    <button onClick={toggleTheme} className="text-sm border px-2 py-1 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeButton;
