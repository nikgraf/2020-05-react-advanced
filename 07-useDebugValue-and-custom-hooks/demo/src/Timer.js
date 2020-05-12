import React from "react";
import useTimer from "./useTimer";

function Timer(props) {
  const time = useTimer(props.interval);

  return <h2>{time} seconds passed</h2>;
}

export default Timer;
