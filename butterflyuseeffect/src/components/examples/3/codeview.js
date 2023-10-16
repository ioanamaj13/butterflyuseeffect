import CodeBox from "../../codeview/codeBox";
import LogBox from "../../codeview/log";
import RenderBox from "../../codeview/renderBox";
import "../../codeview/codeView.css";
import { useEffect, useState } from "react";

const CodeView3 = ({ code }) => {
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

  const [count, setCount] = useState(0);

  const clickHandler = (e) => {
    console.log(e.target.textContent);
    setLogStack([...logStack, e.target.textContent]);
  };

  const handleClear = () => {
    setLogStack([]);
  };

  useEffect(() => {
    console.log("useEffect called");
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("useEffect cleanup");
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="code-view">
      <div className="code-box right">
        <CodeBox code={codeExample ? codeExample : code} />
      </div>
      <div className="left">
        <div className="render-box">
          <RenderBox>
            <div>{count}</div>
            <div>
              <button onClick={clickHandler}>Start </button>
              <button onClick={clickHandler}>Stop  </button>
            </div>
          </RenderBox>
        </div>
        <div className="log-box">
          <LogBox logLines={logStack} clear={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default CodeView3;
