import React from 'react';
import { useRecoilState } from 'recoil';
import { previewModeState } from '../../atoms/previewAtoms';
import ThemeButton from './ThemeButton';
import { useRecoilValue } from 'recoil';
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
        <ThemeButton />
        <button
          onClick={togglePreviewMode}
          className={`ml-4 px-4 py-2 text-sm font-semibold rounded-md ${
            isPreviewMode ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {isPreviewMode ? 'Back to Editor' : 'Preview'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
