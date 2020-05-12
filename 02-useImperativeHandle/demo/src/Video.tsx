import React from "react";

type Props = {
  src: string;
  onPlay?: () => void;
  onPause?: () => void;
};

/**
 * isPlaying on instance (I'm considering this to be a bad API!)
 * `videoRef.current.isPlaying()`
 */

const Video: React.ForwardRefRenderFunction<{}, Props> = (props, ref) => {
  // needs to be destructured for the useEffect dependencies array
  const { onPlay, onPause } = props;
  const videoRef = React.useRef<HTMLVideoElement>();

  // storred in ref to avoid re-renderings
  const isPlayingRef = React.useRef<boolean>(false);
  React.useImperativeHandle(ref, () => ({
    isPlaying: () => {
      return isPlayingRef.current;
    },
  }));

  React.useEffect(() => {
    // A reference to the video element is storred in a local variable
    // to make sure it's still available in the effect cleanup function.
    // Note: if you don't do it React will show a warning in dev mode
    const videoElement = videoRef.current;

    // onPlayEvent and onPauseEvent are created inside useEffect to avoid
    // making it part of the dependency array. Otherwise the functions would
    // be created on every render and the effect would need to run.
    const onPlayEvent = () => {
      isPlayingRef.current = true;
      if (typeof onPlay === "function") {
        onPlay();
      }
    };
    const onPauseEvent = () => {
      isPlayingRef.current = false;
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

export default React.forwardRef(Video);
