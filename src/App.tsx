import React from 'react';
import { Editor } from '@craftjs/core';
import MainLayout from './components/designer/MainLayout';
import Container from './components/designer/editor/Container';
import { Surface } from './components/designer/editor/Surface';
import { Section } from './components/designer/editor/Section';
import { handleExportState } from './atoms/handleExportAtoms';
import { useRecoilValue } from 'recoil';
import ExportCraftEditor from './components/designer/editor/ExportCraftEditor';
import { previewModeState } from './atoms/previewAtoms';
import { PreviewPage } from './components/designer/PreviewPage';

const App: React.FC = () => {
  const isPreviewMode = useRecoilValue(previewModeState);
  const triggerExport = useRecoilValue(handleExportState);

  return (
    <>
      {!isPreviewMode
        ?
        <>
          <Editor resolver={{
            Container,
            Section,
            Surface
          }}>
            <MainLayout />
          </Editor>
          {triggerExport &&
            <Editor resolver={{
              Container,
              Section,
              Surface
            }}>
              <ExportCraftEditor />
            </Editor>
          }
        </>
        :
        <Editor resolver={{
          Container,
          Section,
          Surface
        }}>
          <PreviewPage />
        </Editor>
      }
    </>
  );
};

export default App;