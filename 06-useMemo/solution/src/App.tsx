import React from "react";
import useFetch from "./useFetch";

/**
 * We have one function here that's slightly more expensive:
 * medianCommitMessageLength
 *
 * We could now run it on every render, but if it's sources
 * never change that's not necessary and we can make the render
 * cheaper in terms of performance.
 *
 * In order to that we can use useMemo. It accepts a function
 * to run and a dependency list.
 *
 * Gotchas:
 * Since Hooks can't be used conditionally we need to move
 * it above the loading check. This also means we need to
 * add an additional check in the useMemo function.
 *
 * Note: Don't use useMemo if it needs to run anyway on every render.
 */

const median = (array: number[]) => {
  const middleIndex = Math.floor(array.length / 2);
  const numbers = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0
    ? numbers[middleIndex]
    : (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
};

const medianCommitMessageLength = (commits: any[]) => {
  console.log("calculate median");
  const messageLenghts = commits.map((commit) => {
    return commit.commit.message.length;
  });
  return median(messageLenghts);
};

function App() {
  const [count, setCount] = React.useState(0);
  const response = useFetch(
    "https://api.github.com/repos/facebook/react/commits?per_page=100"
  );

  // const t0 = performance.now();
  // // @ts-ignore
  // const median = medianCommitMessageLength(response.data);
  // const t1 = performance.now();
  // console.log(`${t1 - t0} ms`);

  const t0 = performance.now();
  const median = React.useMemo(() => {
    if (!response.data) return undefined;
    // @ts-ignore
    return medianCommitMessageLength(response.data);
  }, [response.data]);
  const t1 = performance.now();
  console.log(`${t1 - t0} ms`);

  if (response.loading) return <div>Loading …</div>;
  if (response.error) return <div>Oops</div>;

  return (
    <div>
      <button
        onClick={(evt) => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        increment count ({count})
      </button>
      <div>Median Commit Message Length: {median}</div>
      <ul>
        {
          // @ts-ignore
          response.data.map((commit) => (
            <li key={commit.sha}>{commit.commit.message}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
