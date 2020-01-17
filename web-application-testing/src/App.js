import React from "react";

import Display from "./Components/Display";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App(props) {

  // const addBall = () => {
  //   if (balls > 3) {
  //     setBalls(0);
  //     setStrikes(0);
  //   } else {
  //     setBalls(balls + 1);
  //   }
  // };
  // const addStrike = () => {
  //   if (strikes > 2) {
  //     setStrikes(0);
  //     setBalls(0);
  //   } else {
  //     setStrikes(strikes + 1);
  //   }
  // };
  // const addFoul = () => {
  //   if (foul) {
  //     if (setStrikes === 2) {
  //       setStrikes(strikes);
  //     } else {
  //       setStrikes(strikes + 1);
  //     }
  //   }
  // };
  // const addHit = () => {
  //   if (hit) {
  //     return;
  //     setStrikes(0);
  //     setBalls(0);
  //   }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Player At Bat Stats</h1>
          <Display />
          <Dashboard
            // addBall={addBall}
            // addStrike={strikes}
            // addFoul={foul}
            // addHit={hit}
          />
        </header>
      </div>
    );
  };


export default App;
