// src/components/Navbar.tsx
import React from 'react';
import ThemeButton from './ThemeButton';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={`w-full h-12 bg-${isDarkMode ? 'gray-800' : 'white'} border-b border-gray-300 flex items-center justify-between p-4`}>
      <h1 className="text-lg font-bold">ReAccess Design Studio</h1>
      <ThemeButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Navbar;
