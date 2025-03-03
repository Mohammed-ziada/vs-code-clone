import { useSelector } from "react-redux";
import FileSyntaxHighlihgter from "./FileSyntaxHighlihgter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

interface Iprops {}
const Preview = ({}: Iprops) => {
  const { ClickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <OpenedFilesBar />
      <FileSyntaxHighlihgter content={ClickedFile?.fileContent || ""} />
    </div>
  );
};
export default Preview;
