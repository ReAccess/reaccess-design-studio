// src/App.tsx
import React from 'react';
import { Editor } from '@craftjs/core';
import MainLayout from './components/designer/MainLayout';
import Container from './components/designer/editor/Container';

const App: React.FC = () => {
  return (
    <Editor resolver={{Container}}>
      <MainLayout />
    </Editor>
  );
};

export default App;
