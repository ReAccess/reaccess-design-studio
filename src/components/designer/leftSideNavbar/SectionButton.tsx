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
      color="bg-teal-200 text-teal-500"
      hoverColor="hover:bg-teal-300 hover:text-teal-600"
      darkMode={darkMode}
    />
  );
};

export default SectionButton;
