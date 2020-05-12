import React from "react";

/**
 * Problems:
 * 1. Wer currently don't use the result or error from the Promise
 * 2. We would need to write this every time
 *
 * Goal: Abstract status and loading
 *
 * NOTE: This might change!
 */

// Copied from the CodeSandbox example in https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
//
// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
export function wrapPromise(promise: any) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yay");
    // reject(new Error("Rejected"));
  }, 2000);
});

const resource = wrapPromise(waitPromise);

const WaitForMeTwoSecResource = () => {
  return <div>{resource.read()}</div>;
};

export default WaitForMeTwoSecResource;
