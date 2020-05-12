import React from "react";

function App() {
  const [count, setCount] = React.useState(1000000);
  const [count2, setCount2] = React.useState(42);

  const someValue = count * Math.random();

  // const someValue = React.useMemo(() => {
  //   console.log("calculate");
  //   return count * Math.random();
  // }, [count]);

  return (
    <div>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCount((currentCount) => currentCount + 1);
        }}
      >
        increment count ({count})
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setCount2((currentCount) => currentCount + 1);
        }}
      >
        increment count2 ({count2})
      </button>
      <div>Value: {someValue}</div>
    </div>
  );
}

export default App;
