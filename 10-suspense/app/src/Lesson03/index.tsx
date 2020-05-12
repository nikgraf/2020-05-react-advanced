import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import WaitForMeTwoSecResource from "./WaitForMeTwoSecResource";

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <WaitForMeTwoSecResource />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
