import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

/**
 * Notes:
 * 1. Return a result (continues to work as expected)
 * 2. Throw a Promise (that's possible?)
 * 3. Throw an Error
 *
 * NOTE: This might change!
 */

const WaitForMe = () => {
  // returns the result immediatly
  const load = () => {
    return "Yay";
  };
  return <div>{load()}</div>;
  // ---------------------
  // const load = () => {
  //   throw new Promise(() => {});
  // };
  // return <div>{load()}</div>;
  // ---------------------
  // // shows the error boundary
  // // Note: press ESC to see the error boundary
  // const load = () => {
  //   throw new Error("Failed to fetch");
  // };
  // return <div>{load()}</div>;
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading WaitForMe …">
        <WaitForMe />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
