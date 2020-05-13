import React from "react";
import useFetch from "./useFetch";

type GHProfile = { avatar_url: string; login: string };

const Profile: React.FC = () => {
  const response = useFetch<GHProfile>("https://api.github.com/users/nikgraf");
  if (response.state === "loading") {
    return <div>Loading …</div>;
  }
  if (response.state === "error") {
    return <div>Oops</div>;
  }
  return (
    <div>
      <img
        src={response.data.avatar_url}
        alt={`Portrait of ${response.data.login}`}
      />
      <div>Username: {response.data.login}</div>
    </div>
  );
};

const App: React.FC = () => {
  return <Profile />;
};

export default App;
