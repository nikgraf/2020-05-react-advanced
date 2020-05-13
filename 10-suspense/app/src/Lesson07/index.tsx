import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import useFetch from "./useFetch";
import Img from "./Img";

/**
 * Now we can use our Img component and make sure the API request and the image is loaded before showing it!
 *
 * If we don't want that we can not use Img or wrap it into it's own Suspense.
 * One downside: it takes longer to load. Ideally we could predirect the image from the
 * url slug. This way we could fetch both in parallel, but in this case it's not possible.
 */
type GHProfile = { avatar_url: string; login: string };

const Profile: React.FC = () => {
  const data = useFetch<GHProfile>("https://api.github.com/users/nikgraf");
  return (
    <div>
      <img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      {/* <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} /> */}
      {/* <React.Suspense fallback={"Loading Avatar"}>
        <Img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      </React.Suspense> */}
      <div>Username: {data.login}</div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <Profile />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
