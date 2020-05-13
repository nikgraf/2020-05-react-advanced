import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Img from "./Img";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <div>
          <Img
            src="https://s.gravatar.com/avatar/efbf22112e13bfe715f0505b36febea9?size=100&default=retro"
            alt="Portrait of Nik"
          />
        </div>
        <div>
          <Img
            src="https://www.nikgraf.com/static/portrait.jpg"
            alt="Portrait of Andrew"
          />
        </div>
        <div>Name: nikgraf</div>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
