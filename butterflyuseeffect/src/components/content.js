import CodeView from "./codeview/codeview";
import Slide from "./slide/slide";
import "./content.css";
import { useRef, useEffect, useState } from "react";
import CodeView1 from "./examples/1/codeview";
import CodeView2 from "./examples/2/codeview";

const Content = () => {
  const contentRef = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(contentRef.current.getBoundingClientRect().width);
    console.log(contentRef.current.getBoundingClientRect());
  }, []); //empty dependency array so it only runs once at render

  console.log(width);

  return (
    <div className="content" ref={contentRef}>
      {/* <div className="content-controls">
        <button>Previous</button>
        <button>Next</button>
      </div>  */}
      <div className="content-wrapper">
        <Slide>
          blha blah blah
          <div>more blah blah </div>
        </Slide>
        <CodeView1 />
        <Slide />
        <CodeView2 />
        <Slide />
        <CodeView />
        <Slide />
        <CodeView />
        <Slide />
        <CodeView />
        <Slide />
        <CodeView />
        <Slide />
        <CodeView />
        <Slide />
        <CodeView />
      </div>
    </div>
  );
};

export default Content;
