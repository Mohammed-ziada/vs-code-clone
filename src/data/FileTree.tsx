// import FileIcon from "../Components/SVG/File";
// import FolderIcon from "../Components/SVG/Folder";
import { IFile } from "../interface";
import { v4 as uuid } from "uuid";
export const FileTree: IFile = {
  id: uuid(),
  name: "node_modules",
  isFolder: true,

  children: [
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "FileComponent.tsx",
              isFolder: false,
              content: `import React, { useState } from 'react';

interface FolderProps {
  name: string;
}

const FolderComponent: React.FC<FolderProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [newFile, setNewFile] = useState('');

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  const handleAddFile = () => {
    if (newFile.trim()) {
      setFiles([...files, newFile]);
      setNewFile('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div 
        style={{ cursor: 'pointer', fontWeight: 'bold', color: '#007bff' }} 
        onClick={toggleFolder}
      >
        {isOpen ? '📂' : '📁'} {name}
      </div>

      {isOpen && (
        <div>
          <ul style={{ paddingLeft: '20px' }}>
            {files.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>

          {/* Input for adding files */}
          <div>
            <input
              type="text"
              value={newFile}
              onChange={(e) => setNewFile(e.target.value)}
              placeholder="Add a new file"
            />
            <button onClick={handleAddFile}>Add File</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderComponent;
`,
            },
            {
              id: uuid(),
              name: "FolderComponent.tsx",
              isFolder: false,
              content: `import React, { useState } from 'react';

interface FolderProps {
  name: string;
  files: string[];
}

const FolderComponent: React.FC<FolderProps> = ({ name, files }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div 
        style={{ cursor: 'pointer', fontWeight: 'bold', color: '#007bff' }} 
        onClick={toggleFolder}
      >
        {isOpen ? '📂' : '📁'} {name}
      </div>
      {isOpen && (
        <ul style={{ paddingLeft: '20px' }}>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FolderComponent;
`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import { useSelector } from "react-redux";
import "./App.css";
import Preview from "./Components/Preview";
import RecursiveComponent from "./Components/RecursiveComponent";
import ResizablePanel from "./Components/ResizablePanel";
import { FileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTap from "./Components/WelcomeTap";

function App() {
  const { openFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className=" flex gap- ">
      <div className=" w-full h-screen">
        {/* <OpenedFilesBar /> */}
        <ResizablePanel
          showPanel={true}
          leftPanel={
            <div className=" h-screen p-2 w-64  ">
              <RecursiveComponent FileTree={FileTree} />
            </div>
          }
          rightPanel={openFiles.length ? <Preview /> : <WelcomeTap />}
        />
        {/* <ContextMenu /> */}
      </div>
    </div>
  );
}

export default App;
`,
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.tsx",
          isFolder: false,
          content: `const WelcomeTap = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <IconImg src="/icons/vscode.svg" className="w-64 h-64" />
    </div>
  );
};
export default WelcomeTap;
`,
        },
      ],
    },
    {
      id: uuid(),
      name: "main.tsx",
      isFolder: false,
      content: `// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

`,
    },
  ],
};
