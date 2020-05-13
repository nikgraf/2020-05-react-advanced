// Copied from the CodeSandbox example in https://reactjs.org/docs/concurrent-mode-suspense.html#what-is-suspense-exactly
//
// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
export type Resource<T> = {
  read(): T;
};

function wrapPromise<T>(promise: Promise<T>): Resource<T> {
  let status = "pending";
  let result: T;
  let error: any;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      error = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw error;
      }
      return result;
    },
  };
}

export default wrapPromise;
