## getServerSideProps

Create a page that allows to fetch the Avatar of a Github Profile and its repositories based on the username.

API calls you need:

- `https://api.github.com/users/${username}/repos`
- `https://api.github.com/users/${username}`

**Hint**: Next has `fetch` built in since 9.4
