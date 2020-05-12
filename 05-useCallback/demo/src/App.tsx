import React from "react";
import Video from "./Video";

const App = () => {
  const [count, setCount] = React.useState(0);

  const onPlay = React.useCallback(() => {
    console.log("play");
  }, []);
  const onPause = React.useCallback(() => {
    console.log("pause");
  }, []);

  return (
    <div>
      <Video
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Big_Buck_Bunny_4K.webm"
        // onPlay={() => {
        //   console.log("play");
        // }}
        // onPause={() => {
        //   console.log("pause");
        // }}
        onPlay={onPlay}
        onPause={onPause}
      />
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        increment {count}
      </button>
    </div>
  );
};

export default App;
