import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { strikes: 0, balls: 0, fouls: "0", hits: "0" };
  }

  addStrike = this.addStrike.bind(this);
  addBall = this.addBall.bind(this);
  // const [balls, setBalls] = useState(0);
  // const [strikes, setStrikes] = useState(0);
  // const [foul] = useState(0);
  // const [hit] = 0;

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

  addStrike() {
    this.setState({
      strikes: this.state.strikes + 1
    });
  }
  addBall() {
    this.setState({
      balls: this.state.balls + 1
    });
  }
  render() {
    return (
      <div className="dash-wrapper">
        <div>
          <h1>{this.state.strikes}</h1>
          <button onClick={this.addStrike}>Add Strike</button>
        </div>
        <div>
          <h1>{this.state.balls}</h1>
          <button onClick={this.addBall}>Add Ball</button>
        </div>
        <div>
          <h1>{this.state.fouls}</h1>
          <button onClick={this.fouls}>Add Foul</button>
        </div>
        <div>
          <h1>{this.state.hits}</h1>
          <button onClick={this.hits}>Add Hit</button>
        </div>
      </div>
    );
  }
}
export default Dashboard;

// const CountKeeper = () => {

//   const [count, setCount] = useState();

// return (
// <div className="btn-wrapper">

// <button
//   className="count-btn"
//   // onClick={() => setCount(count + 1)}
// >
//   Add Strike
// </button>
// <button
//   className="count-btn"
//   // onClick={() => setCount(count + 1)}
// >
//   Add Ball
// </button>
// <button
//   className="count-btn"
//   // onClick={() => setCount(count + 1)}
// >
//   Add Foul
// </button>
// <button
//   className="count-btn"
//   // onClick={() => setCount(count + 1)}
// >
//   Add Hit
// </button>

// </div>

// )

// }

// export default CountKeeper;
