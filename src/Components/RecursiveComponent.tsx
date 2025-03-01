// import { FileTree } from "../data/FileTree";
import { useState } from "react";
import { IFile } from "../interface";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setOpenedFiles } from "../app/features/fileTreeSlice";
import { doseFileExist } from "../utility/functions";
interface Iprops {
  FileTree: IFile;
}
const RecursiveComponent = ({ FileTree }: Iprops) => {
  const { name, children, isFolder } = FileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const dispatch = useDispatch();
  const { openFiles } = useSelector((state: RootState) => state.tree);
  const onFileClicked = () => {
    const exists = doseFileExist(openFiles, FileTree.id);
    if (exists) return;
    dispatch(setOpenedFiles([...openFiles, { ...FileTree }]));
  };
  // console.log(dispatch);

  return (
    <div className="w-full mb-1 ml-1 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span className="mr-2">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>

            <RenderFileIcon filename={name} isFolder isOpen={isOpen} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        ) : (
          <div
            className="flex items-center ml-6"
            onClick={() => {
              console.log("Before Dispatch:", openFiles);
              onFileClicked();
              console.log("After Dispatch:", openFiles);
            }}
          >
            <RenderFileIcon filename={name} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent FileTree={file} key={idx} />
        ))}
    </div>
  );
};
export default RecursiveComponent;
