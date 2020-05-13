import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useFetch from "./useFetch";
import Img from "./Img";

/**
 * We allow to switch between different profiles by leveraing a local state and allowing
 * to change it via a button.
 *
 * The loading experience is not great though. The profile gets removed and the loading
 * indicator shows up.
 *
 * Using useTransition we can tell React that the current React tree should be continued
 * to be rendered for a certain amount of time. This creates a bit more "stable" experience.
 * To me this sounded counter-intuitive at first, but the experience is actually better.
 *
 * Especially if use some indicator that my action was successful. In this case disabling the
 * button for example. That said there is room for improvement on the loading experience.
 */

type GHProfile = { avatar_url: string; login: string };

const Profile: React.FC<{ username: string }> = (props) => {
  const data = useFetch<GHProfile>(
    `https://api.github.com/users/${props.username}`
  );
  return (
    <div>
      <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      <div>Username: {data.login}</div>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = React.useState("nikgraf");
  // const [startTransition, isPending] = React.useTransition({
  //   timeoutMs: 3000,
  // });
  return (
    <>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setUsername("mxstbr");
        }}
      >
        mxstbr
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          setUsername("cassidoo");
        }}
      >
        cassidoo
      </button>
      {/* <button
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
      */}
      <ErrorBoundary fallback={<div>Oops</div>}>
        <React.Suspense fallback="Loading …">
          <Profile username={username} />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
