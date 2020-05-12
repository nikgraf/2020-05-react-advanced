import React from "react";
import Video from "./Video";

const App = () => {
  return (
    <div>
      <Video
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Big_Buck_Bunny_4K.webm"
        onPlay={() => {
          console.log("play");
        }}
        onPause={() => {
          console.log("pause");
        }}
      />
    </div>
  );
};

export default App;
