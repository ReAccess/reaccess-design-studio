import React from 'react';
import { Editor } from '@craftjs/core';
import MainLayout from './components/designer/MainLayout';
import Container from './components/designer/editor/Container';
import Surface from './components/designer/editor/Surface';
import { Section } from './components/designer/editor/Section';

const App: React.FC = () => {
  return (
    <Editor resolver={{
      Container, 
      Section,
      Surface}}>
      <MainLayout />
    </Editor>
  );
};

export default App;
