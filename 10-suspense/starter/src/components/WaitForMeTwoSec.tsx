import React from "react";

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
  console.log("render");
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
