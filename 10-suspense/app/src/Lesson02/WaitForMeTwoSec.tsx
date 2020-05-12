import React from "react";

/**
 * Goal: Combine loading, success & error
 * Notes:
 * We do something we usually wouldn't. We take the promise out of the component.
 * This means only one Promise exists and we use it for multiple re-renders.
 *
 * Success Case:
 * Module is loaded        -> create Promise waitPromise
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "pending"    -> throw waitPromise
 * waitPromise resolves    -> Parent Suspense component triggeres a re-render
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "success"    -> return "Yay"
 *
 * Error Case:
 * Module is loaded        -> create Promise waitPromise
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "pending"    -> throw waitPromise
 * waitPromise rejects     -> Parent Suspense component triggeres a re-render
 * render WaitForMeTwoSec  -> run loadTwoSec
 * status === "error"      -> throw Error
 */

let status = "pending";
const waitPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    status = "success";
    resolve();
    // status = "error";
    // reject();
  }, 2000);
});

const WaitForMeTwoSec = () => {
  const loadTwoSec = () => {
    if (status === "success") {
      return "Yay";
    }
    if (status === "error") {
      throw new Error("Failed");
    }

    throw waitPromise;
  };

  return <div>{loadTwoSec()}</div>;
};

export default WaitForMeTwoSec;
