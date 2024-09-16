// src/components/designer/editor/CraftEditor.tsx
import React from 'react';
import { Frame, Element } from '@craftjs/core';
import Container from './Container';

const CraftEditor: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <Frame>
      <Element is={Container} canvas>
      </Element>
    </Frame>
  );
};

export default CraftEditor;
