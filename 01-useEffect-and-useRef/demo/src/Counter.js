import React, { useState, useEffect } from "react";

function Counter(props) {
  const [prevCount, setPrevCount] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("in effect");
    if (prevCount + 1 === count) {
      console.log("increase by one");
    }
    setPrevCount(count);
  }, [count]); // change dependency array
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(props.initialCount)}>Reset</button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
    </>
  );
}

export default Counter;
