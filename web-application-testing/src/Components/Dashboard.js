import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { strikes: 0, balls: 0, fouls: 0, hits: 0 };
  }

  addStrike = this.addStrike.bind(this);
  addBall = this.addBall.bind(this);
  addFouls = this.addFouls.bind(this);
  addHits = this.addHits.bind(this);
  

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
  addFouls() {
    this.setState({
      fouls: this.state.fouls + 1
    });
  }
  addHits() {
    this.setState({
      hits: this.state.hits + 1
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
          <button onClick={this.addFouls}>Add Foul</button>
        </div>
        <div>
          <h1>{this.state.hits}</h1>
          <button onClick={this.addHits}>Add Hit</button>
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
