import React from "react";

const useFetch = (url: string) => {
  const [result, setResult] = React.useState(null);
  const [error, setError] = React.useState(null);

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
  }, []);

  if (error) {
    return {
      data: null,
      error: error,
      loading: false,
    };
  }
  if (result) {
    return {
      data: result,
      error: null,
      loading: false,
    };
  }
  return {
    data: null,
    error: null,
    loading: true,
  };
};

export default useFetch;
