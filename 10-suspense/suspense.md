# Concurrent Mode

## What?

> Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.

https://reactjs.org/docs/concurrent-mode-intro.html

- Render a React tree in the background without blocking the current React tree due concurrent rendering.
- Rendering is interruptable and can continued later on

Benefits:

- Not blocking an input while calculating a larger update.
- Stay on the old UI for a bit until the new UI is in a good enough state.

## UX

> Stay on the old UI for a bit until the new UI is in a good enough state.

Is this actually better? Yes, I didn't believe, but it is!

## What is Suspense?

```jsx
const ProfilePage = React.lazy(() => import("./ProfilePage")); // Lazy-loaded

// Show a spinner while the profile is loading
<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>;
```

Wait for something (data, component code, …) to be loaded so the component can be rendered.

## API

```jsx
ReactDOM.createRoot(rootNode).render(<App />);
ReactDOM.createBlockingRoot(rootNode).render(<App />);

<Suspense />;
<SuspenseList />;

useTransition();
useDeferredValue();
```

## Active Concurrent Mode

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

TODO start with an existing app loading data

Migrate it!
