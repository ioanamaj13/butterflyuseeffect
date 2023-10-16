import "./App.css";
import Content from "./components/content";
import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [fiveIncrements, setFiveIncrements] = useState(0);

  setTimeout(() => {
    setFiveIncrements(fiveIncrements + 1);
  }, 300000);

  setTimeout(() => {
    setTimer(timer + 1);
  }, 1000);

  const fiveMinutes = Math.floor(timer / 60) >= 5;

  useEffect(() => {
    console.log('fiveIncrements ', fiveIncrements)
    if (fiveMinutes) {
      console.warn(`${5 * fiveIncrements} minutes have passed`);
    }
  }, [fiveIncrements, fiveMinutes]);

  const showInMinutes = () => {
    return `${
      Math.floor(timer / 60) < 10
        ? "0" + Math.floor(timer / 60)
        : Math.floor(timer / 60)
    } : ${timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Butterfly useEffect</p>
      </header>
      <main className="full-height">
        <Content />
      </main>
      <div className="timer">
        <span> {showInMinutes(timer)} </span>
      </div>
    </div>
  );
}

export default App;
