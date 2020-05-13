/**
 * Uses a cache to store the requests incl. the response or error.
 *
 * One issue here is that the cache for an URL is never invalidated.
 * Some form of cache invalidation would be required.
 *
 * Note: This doesn't allow for any preloading, but we will get to it later.
 */

const cache: { [key: string]: any } = {};

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

  throw cache[url].request;
};

export default useFetch;
