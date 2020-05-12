import React from "react";
import Video from "./Video";

const App = () => {
  const videoRef = React.useRef<{ isPlaying: () => boolean }>(null);

  return (
    <div>
      <Video
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Big_Buck_Bunny_4K.webm"
        ref={videoRef}
      />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          alert(videoRef.current?.isPlaying());
        }}
      >
        is the video playing?
      </button>
    </div>
  );
};

export default App;
