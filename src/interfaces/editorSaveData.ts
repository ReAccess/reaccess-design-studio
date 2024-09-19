export interface Theme {
    name: string;
    description: string;
    colors: string[];
  }
  
  export interface EditorSaveData {
    editorState: string; // Compressed string of editor state
    theme: Theme;        // Full theme object (name, description, colors)
  }
  