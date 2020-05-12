// @ts-ignore
import React, { SuspenseList } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useFetch from "./useFetch";
import Img from "./Img";

/**
 * Let's add a component Repositories. It should fetch and render a list of the users
 * repositories.
 *
 * Now we can put it into the same Suspense component. This means we have to wait until
 * all reuqests are done before the results are shown.
 *
 * Fetching the profile takes 190ms and repositories 1000ms. By splitting it into two
 * Suspense components we can show the profile earlier.
 *
 * Now we have two problems:
 * 1. Sometimes repositories might be faster and then we have a lot of jumping content.
 * 2. Two loading indicators
 *
 * Solution: SuspenseList
 * - revealOrder="forwards" will make sure it always renders top to bottom which solves
 * our first problem
 * - tail="collapsed" will make sure only one loading state is rendered at the same time
 */

const Profile: React.FC<{ username: string }> = (props) => {
  const data = useFetch(`https://api.github.com/users/${props.username}`);
  return (
    <div>
      <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      <div>Username: {data.login}</div>
    </div>
  );
};

const Repositories: React.FC<{ username: string }> = (props) => {
  const data = useFetch(`https://api.github.com/users/${props.username}/repos`);
  return (
    <ul>
      {data.map((repository: any) => (
        <li key={repository.id}>{repository.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [username, setUsername] = React.useState("nikgraf");
  // @ts-ignore
  const [startTransition, isPending] = React.useTransition({
    timeoutMs: 3000,
  });
  return (
    <>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          startTransition(() => {
            setUsername("mxstbr");
          });
        }}
        disabled={isPending}
      >
        mxstbr
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          startTransition(() => {
            setUsername("cassidoo");
          });
        }}
        disabled={isPending}
      >
        cassidoo
      </button>
      {isPending ? " Loading..." : null}
      <ErrorBoundary fallback={<div>Oops</div>}>
        {/* <React.Suspense fallback="Loading …">
          <Profile username={username} />
          <Repositories username={username} />
        </React.Suspense> */}
        {/* <React.Suspense fallback="Loading Profile …">
          <Profile username={username} />
        </React.Suspense>
        <React.Suspense fallback="Loading Repos …">
          <Repositories username={username} />
        </React.Suspense> */}
        <SuspenseList revealOrder="forwards" tail="collapsed">
          <React.Suspense fallback="Loading Profile …">
            <Profile username={username} />
          </React.Suspense>
          <React.Suspense fallback="Loading Repos …">
            <Repositories username={username} />
          </React.Suspense>
        </SuspenseList>
      </ErrorBoundary>
    </>
  );
};

export default App;
