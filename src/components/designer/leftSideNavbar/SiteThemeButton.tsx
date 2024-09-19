import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import SidePanelButton from './SidePanelButton';

interface SiteThemeButtonProps {
  onClick: () => void;
  active: boolean;
  darkMode: boolean;
}

const SiteThemeButton: React.FC<SiteThemeButtonProps> = ({ onClick, active, darkMode }) => {
  return (
    <SidePanelButton
      onClick={onClick}
      icon={<AdjustmentsHorizontalIcon className="w-8 h-8" />}
      active={active}
      label="Site Theme"
      color="bg-yellow-200 text-yellow-500"
      hoverColor="hover:bg-yellow-300 hover:text-yellow-600"
      darkMode={darkMode}
    />
  );
};

export default SiteThemeButton;
