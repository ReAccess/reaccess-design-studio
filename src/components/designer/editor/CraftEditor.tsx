// src/components/designer/craft/Editor.tsx
import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';

const CraftEditor: React.FC = () => {
  return (
    <Editor resolver={{ }}>
      <Frame>
        <Element canvas is="div" className="p-4">

        </Element>
      </Frame>
    </Editor>
  );
};

export default CraftEditor;
