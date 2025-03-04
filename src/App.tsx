import { useSelector } from "react-redux";
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
