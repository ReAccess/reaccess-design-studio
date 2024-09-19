import React from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import SidePanelButton from './SidePanelButton';

interface CurrentViewButtonProps {
  onClick: () => void;
  active: boolean;
  darkMode: boolean;
}

const CurrentViewButton: React.FC<CurrentViewButtonProps> = ({ onClick, active, darkMode }) => {
  return (
    <SidePanelButton
      onClick={onClick}
      icon={<EyeIcon className="w-8 h-8" />}
      active={active}
      label="Current View"
      color="bg-blue-200 text-blue-500"
      hoverColor="hover:bg-blue-300 hover:text-blue-600"
      darkMode={darkMode}
    />
  );
};

export default CurrentViewButton;
