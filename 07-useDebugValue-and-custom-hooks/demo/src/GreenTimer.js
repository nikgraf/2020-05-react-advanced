import React from "react";

import useTwoTimers from "./useTwoTimers";

function Timer(props) {
  const { timeA, timeB } = useTwoTimers(2000);

  return (
    <>
      <p style={{ color: "green" }}>{timeA} seconds</p>
      <p style={{ color: "green" }}>{timeB} seconds</p>
    </>
  );
}

export default Timer;
