import React from 'react';
import { ArchiveBoxIcon } from '@heroicons/react/24/outline';
import SidePanelButton from './SidePanelButton';

interface ContainerButtonProps {
  onClick: () => void;
  active: boolean;
  darkMode: boolean;
}

const ContainerButton: React.FC<ContainerButtonProps> = ({ onClick, active, darkMode }) => {
  return (
    <SidePanelButton
      onClick={onClick}
      icon={<ArchiveBoxIcon className="w-8 h-8" />}
      active={active}
      label="Container"
      color="bg-purple-200 text-purple-500"
      hoverColor="hover:bg-purple-300 hover:text-purple-600"
      darkMode={darkMode}
    />
  );
};

export default ContainerButton;
