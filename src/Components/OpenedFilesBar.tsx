// import { RootState } from "@reduxjs/toolkit/query";.///
// import { Root } from "react-dom/client";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarItems from "./OpenedFilesBarItems";
import { useState } from "react";
import ContextMenu from "./ui/DropDown";
// import FileSyntaxHighlihgter from "./FileSyntaxHighlihgter";

const OpenedFilesBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { openFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <ul
        className="flex "
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openFiles.map((file) => (
          <OpenedFilesBarItems file={file} key={file.id} />
        ))}
      </ul>
      {showMenu && (
        <ContextMenu postion={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};
export default OpenedFilesBar;
