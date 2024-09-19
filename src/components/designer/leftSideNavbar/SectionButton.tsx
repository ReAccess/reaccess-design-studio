import React from 'react';
import { DocumentIcon } from '@heroicons/react/24/outline';
import SidePanelButton from './SidePanelButton';

interface SectionButtonProps {
  onClick: () => void;
  active: boolean;
  darkMode: boolean;
}

const SectionButton: React.FC<SectionButtonProps> = ({ onClick, active, darkMode }) => {
  return (
    <SidePanelButton
      onClick={onClick}
      icon={<DocumentIcon className="w-8 h-8" />}
      active={active}
      label="Section"
      color="bg-[#008080] text-white"
      hoverColor="hover:bg-[#008080]/80 hover:text-white"
      darkMode={darkMode}
    />
  );
};

export default SectionButton;
