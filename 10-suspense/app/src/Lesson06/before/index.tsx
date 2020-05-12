import React from "react";
import useFetch from "./useFetch";

const Profile = () => {
  const response = useFetch("https://api.github.com/users/nikgraf");
  if (response.loading) {
    return <div>Loading …</div>;
  }
  if (response.error) {
    return <div>Oops</div>;
  }
  return (
    <div>
      <img
        // @ts-ignore
        src={response.data.avatar_url}
        // @ts-ignore
        alt={`Portrait of ${response.data.login}`}
      />
      <div>
        Username:{" "}
        {
          // @ts-ignore
          response.data.login
        }
      </div>
    </div>
  );
};

const App = () => {
  return <Profile />;
};

export default App;
