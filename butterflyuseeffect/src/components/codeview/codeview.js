import CodeBox from "./codeBox";
import LogBox from "./log";
import RenderBox from "./renderBox";
import "./codeView.css";
import { useState } from "react";

const CodeView = ({ code }) => {
  const codeExample = `import React, { useState, useEffect } from "react";
  import "./App.css";
  blah blah blah`;

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
};

export default CodeView;
