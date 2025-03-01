import "./App.css";
import RecursiveComponent from "./Components/RecursiveComponent";
// import FileComponent from "./Components/RecursiveComponent";
import { FileTree } from "./data/FileTree";

function App() {
  return (
    <div className="m-7">
      <RecursiveComponent FileTree={FileTree} />
    </div>
  );
}

export default App;
