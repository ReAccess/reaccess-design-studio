import React from 'react';
import ThemeButton from './ThemeButton';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../atoms/themeAtoms';

const Navbar: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <div className={`w-full h-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b border-gray-300 flex items-center justify-between p-4`}>
      <h1 className="text-lg font-bold">ReAccess Design Studio</h1>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
