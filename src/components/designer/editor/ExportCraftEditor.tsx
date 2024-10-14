import React from 'react';
import { Frame, Element, useEditor } from '@craftjs/core';
import { Surface } from './Surface';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { editorSaveDataState, editorWorkingState } from '../../../atoms/editorSaveDataAtom';
import { ExportModeContext } from '../../../context/ExportModeContext';
import { handleExportState } from '../../../atoms/handleExportAtoms';
import { EditorSaveData } from '../../../interfaces/editorSaveData';
import lz from 'lzutf8';

const ExportCraftEditor: React.FC = () => {
    const workingEditorState = useRecoilValue(editorWorkingState);
    const [currentSaveData, setEditorSaveData] = useRecoilState(editorSaveDataState);
    const setTriggerExport = useSetRecoilState(handleExportState);
    const { query } = useEditor();

    setTimeout(() => {
        // Save the editor state
        const serializedNodes = query.serialize();

        // Compress the state for saving
        const compressedSerializedNodes = lz.encodeBase64(lz.compress(serializedNodes));

        // Create the save object
        const saveData: EditorSaveData = {
            editorState: compressedSerializedNodes,
            theme: currentSaveData.theme,
        };

        // Set the compressed save data to the atom for future saving to server/localStorage
        setEditorSaveData(saveData);

        setTriggerExport(false);  // Reset after export
    }, 1000); // Adjust timing as needed

    return (
        <div className="h-0 w-0 overflow-hidden"> {/* Hidden rendering */}
            <ExportModeContext.Provider value={true}>
                <Frame data={workingEditorState}>
                    <Element is={Surface} canvas id="root2">
                        {/* Main editor drop surface for export */}
                    </Element>
                </Frame>
            </ExportModeContext.Provider>
        </div>
    );
};

export default ExportCraftEditor;
