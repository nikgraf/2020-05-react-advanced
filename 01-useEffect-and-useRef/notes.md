## useState

Demo

## useRef

Because sometime you need access to the DOM …

```js
const refContainer = useRef(initialValue);

<div ref={refContainer} />;
```

## Demo

Input component

## useEffect

```js
useEffect(didUpdate);
```

React docs -> https://reactjs.org/docs/hooks-reference.html#useeffect

Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

## Example

Demo Timer component

```js
useEffect(() => {
  window.setInterval(() => {
    setTime((currentTime) => currentTime + 1);
  }, 1000);
}, []);
```

## What about cleanup?

We don't want to leak memory every time a component is mounted and unmounted.

## Example

```js
useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTime((currentTime) => currentTime + 1);
  }, 1000);
  return () => {
    window.clearInterval(intervalId);
  };
});
```

## When does it run?

https://github.com/donavon/hook-flow/blob/master/hook-flow.pdf

## Can I control when it runs?

React docs -> https://reactjs.org/docs/hooks-reference.html#useeffect

By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.

```js
useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTime((currentTime) => currentTime + 1);
  }, 1000);
  return () => {
    window.clearInterval(intervalId);
  };
}, []);
```

Let's say we want to control the length of the interval via a prop.

```js
useEffect(() => {
  const intervalId = window.setInterval(() => {
    setTime((currentTime) => currentTime + 1);
  }, props.interval);
  return () => {
    window.clearInterval(intervalId);
  };
}, [props.interval]);
```

```jsx
<Timer interval={500} />
```

Show in the Chrome debugger how runEffect is every time change the prop interval changes on timer.

Change `[props.interval]` to `[]`

Show in the Chrome debugger how runEffect is only run once.

Remove the `[]` argument.

Show in the Chrome debugger how runEffect is every time again. Mention that this basically means whenever any props change.

## Why?

You want components that can be re-rendered many times without heavy side effects being triggered on every render … e.g. fetching data.

## What as a second argument? Why this magic?

They are thinking ahead. In the future we possibly can use code-analysis or leverage type systems to automatically infer which props should be tracked.

## Demo2

- In the dependency array we also can/need to put functions.
- Functions inside useEffect should be best defined inside to avoid it being part of the dependency array. Why? This could lead to an update on every render, which can be avoided by useCallback. It's just simpler to move it in there.

## Now it's your turn! Let's kick off with the first exercise.
