import React, { useState } from "react";

import Display from "./Components/Display";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App(props) {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [foul] = useState(0);
  const [hit] = useState(0);

  const addBall = () => {
    if (balls > 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const addStrike = () => {
    if (strikes > 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const addFoul = () => {
    if (foul) {
      if (setStrikes === 2) {
        setStrikes(strikes);
      } else {
        setStrikes(strikes + 1);
      }
    }
  };
  const addHit = () => {
    if (hit) {
      return;
      setStrikes(0);
      setBalls(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Player At Bat Stats</h1>
        <Display addBall={balls} addStrike={strikes} />
        <Dashboard addFoul={foul} addHit={hit} />
      </header>
    </div>
  );
}

export default App;
