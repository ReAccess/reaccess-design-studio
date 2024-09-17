import React from 'react';
import { Frame, Element } from '@craftjs/core';
import Container from './Container';

const CraftEditor: React.FC = () => {
  return (
    <Frame>
      <Element is={Container} canvas>
      </Element>
    </Frame>
  );
};

export default CraftEditor;
