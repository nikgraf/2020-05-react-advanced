import React from "react";

type Props = {
  src: string;
  onPlay?: () => void;
  onPause?: () => void;
};

const Video: React.FC<Props> = (props) => {
  // needs to be destructured for the useEffect dependencies array
  const { onPlay, onPause } = props;
  const videoRef = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    console.log("Video useEffect");
    const videoElement = videoRef.current;

    const onPlayEvent = () => {
      if (typeof onPlay === "function") {
        onPlay();
      }
    };
    const onPauseEvent = () => {
      if (typeof onPause === "function") {
        onPause();
      }
    };

    videoElement?.addEventListener("play", onPlayEvent);
    videoElement?.addEventListener("pause", onPauseEvent);
    return () => {
      videoElement?.removeEventListener("play", onPlayEvent);
      videoElement?.removeEventListener("pause", onPauseEvent);
    };
    // Needs to be in the dependency array, because otherwise we might call an already outdated function.
  }, [onPlay, onPause]);
  return (
    // @ts-ignore
    <video src={props.src} controls muted width={400} ref={videoRef}></video>
  );
};

export default Video;
