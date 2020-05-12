import { useEffect, useState } from "react";

function useTimer(interval = 1000) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(currentTime => currentTime + 1);
    }, interval);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [interval]);

  return time;
}

export default useTimer;

// function useTimer(interval = 1000) {
//   useDebugValue(`useTimer - Interval: ${interval}`);

//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setTime(currentTime => currentTime + 1);
//     }, interval);
//     return () => {
//       window.clearInterval(intervalId);
//     };
//   }, [interval]);

//   return time;
// }

// export default useTimer;
