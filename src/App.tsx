import React from 'react';
import { Editor } from '@craftjs/core';
import MainLayout from './components/designer/MainLayout';
import Container from './components/designer/editor/Container';
import Surface from './components/designer/editor/Surface';

const App: React.FC = () => {
  return (
    <Editor resolver={{Container, Surface}}>
      <MainLayout />
    </Editor>
  );
};

export default App;
