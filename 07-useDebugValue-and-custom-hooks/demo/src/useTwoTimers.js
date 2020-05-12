import useTimer from "./useTimer";

function useTwoTimers() {
  const timeA = useTimer(1000);
  const timeB = useTimer(2000);

  return {
    timeA,
    timeB
  };
}

export default useTwoTimers;
