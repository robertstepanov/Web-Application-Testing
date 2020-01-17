import React from "react";


const BallsStrikes = props => {
  return (
    <div className="count-wrapper">
      <div className="strikes-container">
        <h2>Strikes</h2>
        <div className="strikes-number">{props.strikes}</div>
      </div>
      <div className="balls-container">
        <h2>Balls</h2>
        <div className="balls-number">{props.balls}</div>
      </div>
    </div>
  );
};

export default BallsStrikes;
