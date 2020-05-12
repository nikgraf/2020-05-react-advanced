import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useFetch from "./useFetch";
import Img from "./Img";

/**
 * The process of fetching data and showing a new result takes a while. In order to get full
 * control over the old and the new value at the same time we can leverage the Hook
 * useDeferredValue.
 *
 * Personally I can imagine it being used for component transitions, maybe …
 */

const Profile: React.FC<{ username: string }> = (props) => {
  const data = useFetch(`https://api.github.com/users/${props.username}`);
  // @ts-ignore
  const deferredData = React.useDeferredValue(data, { timeoutMs: 2000 });
  console.log(data.login, deferredData.login);
  return (
    <div>
      <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      <div>Username: {data.login}</div>
    </div>
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
        <React.Suspense fallback="Loading …">
          <Profile username={username} />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
