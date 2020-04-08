import React, { useState, useContext } from "react";
import { useInterval } from "./Borrowed/UseInterval";

const tickIntervalMS = 100;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { ...this.state, timeElapsed: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, tickIntervalMS);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ timeElapsed: this.state.timeElapsed + tickIntervalMS });
  };

  render() {
    var elapsed = Math.round(this.state.timeElapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    var seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return (
      <p>
        This example was started <b>{seconds} seconds</b> ago.
      </p>
    );
  }
}

const TimerContext = React.createContext({ timer: 0 });

function HookTimer() {
  const [tickInterval] = useState(100);
  const [timer, setTimer] = useState(0);
  useInterval(() => {
    setTimer(timer + tickInterval);
    console.log(timer);
  }, tickInterval);
}

export { Timer, HookTimer, TimerContext };
