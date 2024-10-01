import React from 'react';
import { useRecoilValue } from 'recoil';
import PanelHeader from './PanelHeader';
import DraggableItem from '../editor/DraggableItem';
import { darkModeState } from '../../../atoms/themeAtoms';
import { editorSaveDataState } from '../../../atoms/editorSaveDataAtom';
import ContainerPreview from '../editor/ContainerPreview';

interface ContainerPanelProps {
  isOpen: boolean;
  togglePanel: () => void;
}

const ContainerPanel: React.FC<ContainerPanelProps> = ({ isOpen, togglePanel }) => {
  const isDarkMode = useRecoilValue(darkModeState);
  const panelWidth = '25rem';

  const editorSaveData = useRecoilValue(editorSaveDataState);
  const currentThemeColors = editorSaveData.theme.colors;

  return (
    <div
      className={`flex-shrink-0 h-full shadow-lg z-10 transition-transform duration-700 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ width: panelWidth, flexBasis: panelWidth }}
    >
      <PanelHeader title="Add Container" onClose={togglePanel} borderColor={'border-l-purple-200'} />
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4"> {/* Changed grid-cols-3 to grid-cols-2 */}
          {currentThemeColors.map((color) => (
            <DraggableItem
              key={color}
              itemType="CONTAINER"
              itemData={{
                background: color,
                borderRadius: '8px',
              }}
            >
              {/* Use ContainerPreview here */}
              <ContainerPreview
                background={color}
                borderRadius="8px"
                width="100%"
                height="80px"
              />
            </DraggableItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerPanel;
