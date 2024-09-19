import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import SidePanelButton from './SidePanelButton';

interface PageDesignButtonProps {
  onClick: () => void;
  active: boolean;
  darkMode: boolean;
}

const PageDesignButton: React.FC<PageDesignButtonProps> = ({ onClick, active, darkMode }) => {
  return (
    <SidePanelButton
      onClick={onClick}
      icon={<PencilIcon className="w-8 h-8" />}
      active={active}
      label="Page Design"
      color="bg-green-200 text-green-500"
      hoverColor="hover:bg-green-300 hover:text-green-600"
      darkMode={darkMode}
    />
  );
};

export default PageDesignButton;
