import React from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../../atoms/themeAtoms';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Toggle dark mode state

  return (
    <button onClick={toggleTheme} className="transition-colors duration-300 p-2 rounded-full focus:outline-none">
      {isDarkMode ? (
        <SunIcon data-testid="sun-icon" className="w-6 h-6 text-yellow-400 hover:text-yellow-500" />
      ) : (
        <MoonIcon data-testid="moon-icon" className="w-6 h-6 text-gray-600 hover:text-gray-800" />
      )}
    </button>
  );
};

export default ThemeButton;
