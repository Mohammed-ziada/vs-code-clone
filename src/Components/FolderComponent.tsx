import FolderIcon from "./SVG/Folder";

interface Iprops {
  foldereName: string;
}
const FolderComponent = ({ foldereName }: Iprops) => {
  return (
    <div className="flex items-center  ">
      <span className="mr-2">
        <FolderIcon />
      </span>
      <span>{foldereName}</span>
    </div>
  );
};
export default FolderComponent;
