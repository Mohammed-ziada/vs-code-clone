import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
interface Iprops {
  content: string;
}
const FileSyntaxHighlihgter = ({ content }: Iprops) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
      }}
      showLineNumbers
    >
      {content}
    </SyntaxHighlighter>
  );
};
export default FileSyntaxHighlihgter;
