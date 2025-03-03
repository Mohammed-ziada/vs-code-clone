import { useSelector } from "react-redux";
import "./App.css";
// import OpenedFilesBar from "./Components/OpenedFilesBar";
import Preview from "./Components/Preview";
// import OpenedFilesBar from "./Components/OpenedFilesBar";
import RecursiveComponent from "./Components/RecursiveComponent";
import ResizablePanel from "./Components/ResizablePanel";
// import FileComponent from "./Components/RecursiveComponent";
import { FileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTap from "./Components/WelcomeTap";
// import { RootState } from "@reduxjs/toolkit/query";

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
      </div>
    </div>
  );
}

export default App;
