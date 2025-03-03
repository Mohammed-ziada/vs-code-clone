// import { RootState } from "@reduxjs/toolkit/query";.///
// import { Root } from "react-dom/client";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarItems from "./OpenedFilesBarItems";
// import FileSyntaxHighlihgter from "./FileSyntaxHighlihgter";

const OpenedFilesBar = () => {
  const { openFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <ul className="flex ">
        {openFiles.map((file) => (
          <OpenedFilesBarItems file={file} key={file.id} />
        ))}
      </ul>
    </div>
  );
};
export default OpenedFilesBar;
