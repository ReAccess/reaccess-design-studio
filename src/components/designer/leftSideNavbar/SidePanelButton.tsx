import React from 'react';

interface SidePanelButtonProps {
  onClick: () => void;
  icon: React.ReactElement;
  active: boolean;
  label: string;
  color: string;
  hoverColor: string;
  darkMode: boolean;
}

const SidePanelButton: React.FC<SidePanelButtonProps> = ({ 
  onClick, 
  icon, 
  active, 
  label, 
  color, 
  hoverColor, 
  darkMode 
}) => {
  const baseButtonClasses =
    'relative flex items-center justify-center w-12 h-12 mb-4 p-2 rounded-full transition-all duration-300';

  return (
    <div className="group relative">
      <button
        onClick={onClick}
        className={`${baseButtonClasses} ${active 
          ? `${color} text-white` 
          : `hover:scale-110 ${hoverColor}`
        }`}
      >
        {icon}
      </button>
      {/* Floating Label */}
      <span
        style={{ top: '40%' }}
        className={`absolute left-16 transform -translate-y-1/2 px-4 py-2.5 rounded-md text-sm font-medium shadow-lg ${
          active ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
        } transition-opacity duration-300 ease-in-out whitespace-nowrap pointer-events-none ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

export default SidePanelButton;
