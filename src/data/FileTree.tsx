// import FileIcon from "../Components/SVG/File";
// import FolderIcon from "../Components/SVG/Folder";
import { IFile } from "../interface";
import { v4 as uuid } from "uuid";
export const FileTree: IFile = {
  id: uuid(),
  name: "node_modules",
  isFolder: true,
  // icon: <FolderIcon />,
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
            },
            {
              id: uuid(),
              name: "FolderComponent.tsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "index.tsx",
          isFolder: false,
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
        },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "index1.css",
      isFolder: false,
      content: "lorem lorem ",
    },
  ],
};
