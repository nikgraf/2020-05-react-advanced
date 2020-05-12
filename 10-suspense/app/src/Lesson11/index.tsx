// @ts-ignore
import React, { SuspenseList } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useFetch, { prefetch } from "./useFetch";
import Img from "./Img";

/**
 * There is one last issue! If we look at the very first network waterfall we can see
 * that the repositories list doesn't even start before Profile is finished.
 *
 * This is due the SuspenseList with it's prop revealOrder="forwards".
 *
 * Since we know which URLS should be fetched initially we can implement a
 * prefetch function in our useFetch implementation and export it.
 * Using it we can start fetching when the module is imported. Basically before React
 * even renders.
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

// prefetch(`https://api.github.com/users/nikgraf`);
// prefetch(`https://api.github.com/users/nikgraf/repos`);

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
