import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { previewModeState } from '../../atoms/previewAtoms';
import ThemeButton from './ThemeButton';
import { darkModeState } from '../../atoms/themeAtoms';

const Navbar: React.FC = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  const [isPreviewMode, setIsPreviewMode] = useRecoilState(previewModeState);

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className={`w-full h-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b border-gray-300 flex items-center justify-between p-4`}>
      <h1 className="text-lg font-bold">ReAccess Design Studio</h1>

      <div className="flex items-center">
        <button
          onClick={togglePreviewMode}
          className={`ml-4 px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${
            isPreviewMode
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-black'
          }`}
        >
          {isPreviewMode ? 'Back to Editor' : 'Preview'}
        </button>

        <div className="ml-4">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
