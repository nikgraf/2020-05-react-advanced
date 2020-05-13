import React from "react";

type FetchResponse<T> =
  | {
      state: "loading";
    }
  | {
      state: "success";
      data: T;
    }
  | {
      state: "error";
      error: any;
    };

const useFetch = <T = any>(url: string): FetchResponse<T> => {
  const [result, setResult] = React.useState<T>();
  const [error, setError] = React.useState();

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setResult(json);
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [url]);

  if (error) {
    return {
      state: "error",
      error: error,
    };
  }
  if (result !== undefined) {
    return {
      state: "success",
      data: result,
    };
  }
  return {
    state: "loading",
  };
};

export default useFetch;
