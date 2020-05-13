import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import WaitForMe from "./WaitForMe";
import createResource from "../utils/wrapPromise";

const createWaitPromise = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Yay");
      // reject(new Error("Rejected"));
    }, 2000);
  });

const App = () => {
  const [yayResource, setYayResource] = React.useState(
    createResource(createWaitPromise())
  );

  return (
    <ErrorBoundary fallback={<div>Oops</div>}>
      <React.Suspense fallback="Loading …">
        <WaitForMe resource={yayResource} />
        <button
          onClick={() => {
            setYayResource(createResource(createWaitPromise()));
          }}
        >
          New Resource
        </button>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
