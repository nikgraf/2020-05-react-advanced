import React from "react";
import useFetch from "./useFetch";

const median = (array: number[]) => {
  const middleIndex = Math.floor(array.length / 2);
  const numbers = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0
    ? numbers[middleIndex]
    : (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
};

const medianCommitMessageLength = (commits: any[]) => {
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

  if (response.loading) return <div>Loading …</div>;
  if (response.error) return <div>Oops</div>;

  // @ts-ignore
  const median = medianCommitMessageLength(response.data);

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
