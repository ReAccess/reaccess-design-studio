import React from 'react';
import { Frame, Element } from '@craftjs/core';
import Surface from './Surface';

const CraftEditor: React.FC = () => {
  return (
    <Frame>
      {/* Define the main drop surface using the Surface component */}
      <Element is={Surface} canvas>
        {/* You can add default elements here or leave it empty */}
      </Element>
    </Frame>
  );
};

export default CraftEditor;
