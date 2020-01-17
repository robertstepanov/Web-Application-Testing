import React from "react";

const Display = props => {
  return (
    <div className="count-wrapper">
      <div className="strikes-container">
        <h2>Strikes</h2>
        <div className="strikes-number">{props.addStrike}</div>
      </div>
      <div className="balls-container">
        <h2>Balls</h2>
        <div className="balls-number">{props.addBall}</div>
      </div>
    </div>
  );
};

export default Display;
