import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
// import Img from "./Img";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <img
          src="https://www.nikgraf.com/static/portrait.jpg"
          alt="Portrait of Nik"
        />
        {/* <Img
          src="https://www.nikgraf.com/static/portrait.jpg"
          alt="Portrait of Nik"
        /> */}
        <div>More content …</div>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
