import CodeView from "./codeview/codeview";
import Slide from "./slide/slide";
import "./content.css";
import { useRef, useEffect, useState } from "react";
import CodeView1 from "./examples/1/codeview";
import CodeView2 from "./examples/2/codeview";
import CodeView3 from "./examples/3/codeview";
// import butterfly from "../assets/butterfly.png";

const Content = () => {
  const contentRef = useRef(null);

  //   const [width, setWidth] = useState(0);

  //   useEffect(() => {
  //     setWidth(contentRef.current.getBoundingClientRect().width);
  //     console.log(contentRef.current.getBoundingClientRect());
  //   }, []); //empty dependency array so it only runs once at render

  //   console.log(width);

  return (
    <div className="content" ref={contentRef}>
      {/* <div className="content-controls">
        <button>Previous</button>
        <button>Next</button>
      </div>  */}
      <div className="content-wrapper">
        <Slide>
          <h2>The Butterfly use[Effect] </h2>
          <img
            src={require("./../assets/butterfly_effect.png")}
            alt="butterfly"
            className="butterfly"
          />
        </Slide>

        <Slide>
          <h2>Hi there! </h2>
          <div>I am Ioana, FED.</div>
        </Slide>

        <Slide>
          <h2>Why butterfly effect </h2>
          <div>
            In chaos theory, the Butterfly Effect reffers to the sensitive
            dependance on initial conditions, where a seemingly minor change can
            result in large differences in a later state in complex systems.
          </div>
        </Slide>

        <Slide>
          <h2>In plain English, what is an Effect? </h2>
          <div>
            <p> From Britannica dictionary: </p>
            <p>
              a change that results when something is done or happens: an event,
              condition, or state of affairs that is <br></br>
              <span>
                <strong> produced by a cause.</strong>
              </span>
            </p>
          </div>
        </Slide>

        {/* Hook intro */}
        <Slide>
          <div>
            A <strong>hook</strong>
            <div className="align-left">
              <ul>
                <li>is a function (with some special rules) </li>
                <li>
                  ...that allows you to “hook” into React state and lifecycle
                  features from function components.{" "}
                </li>
                <li>is identified by the word “use”</li>
              </ul>
            </div>
          </div>
        </Slide>

        <CodeView1 />
        <Slide />
        <CodeView2 />
        <Slide />
        <CodeView3 />
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
