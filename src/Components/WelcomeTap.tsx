import IconImg from "./IconImg";

interface Iprops {}
const WelcomeTap = ({}: Iprops) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <IconImg src="/icons/vscode.svg" className="w-64 h-64" />
    </div>
  );
};
export default WelcomeTap;
