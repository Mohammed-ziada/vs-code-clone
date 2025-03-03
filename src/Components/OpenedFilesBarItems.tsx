import { useDispatch, useSelector } from "react-redux";
import { setClicekdFiles, setOpenedFiles } from "../app/features/fileTreeSlice";
import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "../app/store";

interface Iprops {
  file: IFile;
}
const OpenedFilesBarItems = ({ file }: Iprops) => {
  const dispatch = useDispatch();
  const { openFiles, ClickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  /**handlers */
  const onclick = () => {
    console.log(file);
    dispatch(
      setClicekdFiles({
        filename: file.name,
        fileContent: file.content,
        activeTapId: file.id,
      })
    );
    // dispatch(setActiveTapId(file.id));
  };
  const onRemove = (id: string) => {
    // dispatch(setActiveTapId(id));

    const filtered = openFiles.filter((file) => file.id !== id);
    const lastTap = filtered[filtered.length - 1];
    if (!lastTap) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClicekdFiles({
          activeTapId: null,
          filename: "",
          fileContent: "",
        })
      );
      return;
    }
    dispatch(setOpenedFiles(filtered));
    dispatch(
      setClicekdFiles({
        activeTapId: lastTap.id,
        filename: lastTap.name,
        fileContent: lastTap.content,
      })
    );
    console.log(filtered);
  };
  return (
    <div>
      <li
        className="  p-1 flex items-center cusror-pointer border border-gray-500 hover:bg-[#57575773] "
        onClick={onclick}
        style={{
          borderTop:
            file.id === ClickedFile.activeTapId
              ? "2px solid white"
              : "2px solid transparent",
        }}
      >
        <span className="w-5 h-5">
          <RenderFileIcon filename={file.name} />
        </span>
        <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
          {file.name}
        </span>

        <span
          className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            // dispatch(setActiveTapId(null));
            onRemove(file.id);
          }}
        >
          <CloseIcon />
        </span>
      </li>
    </div>
  );
};
export default OpenedFilesBarItems;
