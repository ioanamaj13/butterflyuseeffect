import React, { useEffect, useState } from "react";

const LogBox = ({ logLines, clear }) => {
  const [log, setLog] = useState([logLines]);
  console.log({log});

  console.log('logLines', logLines);

  useEffect(() => {
    setLog(logLines);
    console.log('logLines', logLines);
  }, [logLines]);

  return (
    <div className="log">
      <h3>Log</h3>
      <button onClick={clear}>Clear</button>

      <div>
        {logLines.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </div>
  );
};
export default LogBox;
