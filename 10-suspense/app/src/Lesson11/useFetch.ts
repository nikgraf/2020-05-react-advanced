const cache: { [key: string]: any } = {};

export const prefetch = (url: string): void => {
  cache[url] = {};
  cache[url].request = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cache[url].data = data;
    })
    .catch((error) => {
      cache[url].error = error;
    });
};

const useFetch = <T>(url: string): T => {
  const entry = cache[url];
  if (entry) {
    if (entry.error) {
      throw entry.error;
    } else if (entry.data) {
      return entry.data as T;
    } else {
      throw entry.request;
    }
  }

  prefetch(url);

  throw cache[url].request;
};

export default useFetch;
