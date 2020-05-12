import React from "react";

type Props = {
  src: string;
  onPlay?: () => void;
  onPause?: () => void;
};

/**
 * 1. Add onPlay / onPause props
 * Sub goal: run useEffect as little as possible
 */

const Video: React.FC<Props> = (props) => {
  // needs to be destructured for the useEffect dependencies array
  const { onPlay, onPause } = props;
  const videoRef = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    // A reference to the video element is storred in a local variable
    // to make sure it's still available in the effect cleanup function.
    // Note: if you don't do it React will show a warning in dev mode
    const videoElement = videoRef.current;

    // onPlayEvent and onPauseEvent are created inside useEffect to avoid
    // making it part of the dependency array. Otherwise the functions would
    // be created on every render and the effect would need to run.
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
