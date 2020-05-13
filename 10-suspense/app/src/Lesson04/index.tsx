import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import WaitForMe from "./WaitForMe";
import wrapPromise from "./wrapPromise";

const createWaitPromise = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Yay");
      // reject(new Error("Rejected"));
    }, 2000);
  });

const App = () => {
  const [resource, setResource] = React.useState(
    wrapPromise(createWaitPromise())
  );

  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <WaitForMe resource={resource} />
        <button
          onClick={() => {
            setResource(wrapPromise(createWaitPromise()));
          }}
        >
          New Resource
        </button>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
