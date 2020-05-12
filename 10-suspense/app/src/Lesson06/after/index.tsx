import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import useFetch from "./useFetch";

const Profile = () => {
  const data = useFetch("https://api.github.com/users/nikgraf");
  return (
    <div>
      <img src={data.avatar_url} alt={`Portrait of ${data.login}`} />
      <div>Username: {data.login}</div>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <Profile />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
