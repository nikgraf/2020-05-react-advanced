import React from "react";
import Timer from "./TimerOriginal";
// import GreenTimer from "./GreenTimer";

function App() {
  return (
    <div>
      {/* great feature to stress people … or let them relax */}
      <Timer interval={5000} />
      {/* <GreenTimer /> */}
    </div>
  );
}

export default App;
