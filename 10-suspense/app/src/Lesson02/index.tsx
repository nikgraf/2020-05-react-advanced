import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import WaitForMeTwoSec from "./WaitForMeTwoSec";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <WaitForMeTwoSec />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
