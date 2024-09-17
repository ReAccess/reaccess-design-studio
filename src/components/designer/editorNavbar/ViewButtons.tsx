import React from 'react';
import { DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const ViewButtons: React.FC = () => {
  const buttonClass = `text-sm px-3 py-1 rounded hover:bg-gray-200 transition-all duration-200 text-gray-600 hover:text-blue-500`;

  return (
    <div className="flex space-x-2">
      <button className={buttonClass}>
        <ComputerDesktopIcon className="w-5 h-5" />
      </button>
      <button className={buttonClass}>
        <DevicePhoneMobileIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ViewButtons;
