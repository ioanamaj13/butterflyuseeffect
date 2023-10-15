import { CodeBlock } from "react-code-blocks";
import "./codeView.css";

const CodeBox = ({ code, highlightLines }) => {
  return (
    <div className="code">
      <CodeBlock
        text={code}
        language={"jsx"}
        showLineNumbers={true}
        wrapLines
        highlight={highlightLines}
      />
    </div>
  );
};

export default CodeBox;
