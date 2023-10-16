import CodeBox from "../../codeview/codeBox";
import LogBox from "../../codeview/log";
import RenderBox from "../../codeview/renderBox";
import "../../codeview/codeView.css";
import { useState } from "react";

const CodeView2 = ({ code }) => {
  const codeExample = `const CodeView = ({ code }) => {
    const codeExample = [code you see here]
    const [logStack, setLogStack] = useState([]);
    const clickHandler = () => {
      setLogStack([...logStack, 'clicked']);
    };
    const handleClear = () => {
      setLogStack([]);
    }
  
    return (
      <div className="code-view">
        <div className="code-box right">
          <CodeBox code={codeExample ? codeExample : code} />
        </div>
        <div className="left">
          <div className="render-box">
            <RenderBox>
              <button onClick={clickHandler}>Click Me</button>
            </RenderBox>
          </div>
          <div className="log-box">
            <LogBox logLines={logStack} clear={handleClear}/>
          </div>
        </div>
      </div>
    );
  };`;

  const [logStack, setLogStack] = useState([]);

  const clickHandler1 = () => {
    setLogStack([...logStack, "clicked first"]);
  };

  const clickHandler2 = () => {
    setLogStack([...logStack, "clicked second"]);
  };

  const clickHandler3 = (e) => {
    console.log(e.target.textContent);
    setLogStack([...logStack, "clicked last"]);
  };

  const clickHandler = (e) => {
    console.log(e.target.textContent);
    setLogStack([...logStack, e.target.textContent]);
  };

  const handleClear = () => {
    setLogStack([]);
  };

  return (
    <div className="code-view">
      <div className="code-box right">
        <CodeBox code={codeExample ? codeExample : code} />
      </div>
      <div className="left">
        <div className="render-box">
          <RenderBox>
            <button onClick={clickHandler}>Click Me First</button>
            <button onClick={clickHandler}>Click Me Second </button>
            <button onClick={clickHandler}>Click Me Last</button>
          </RenderBox>
        </div>
        <div className="log-box">
          <LogBox logLines={logStack} clear={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default CodeView2;
