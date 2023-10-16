import React from "react";
import "./codeView.css";

const LogBox = ({ logLines, clear }) => {
  return (
    <div className="log">
      <h3>Log</h3>
      <div className="log-control">
        <button onClick={clear}>Clear</button>
      </div>
      <div className="log-container">
        {logLines.map((line, index) => {
          return (
            <p key={index} className="log-line">
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default LogBox;
