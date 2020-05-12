## Custom Hooks & useDebugValue

We can create our own Hooks. This is really nice for reusability of code.

## Demo

useTimer example

Use the `TimerOrignal` and move the code to `useTimer`

## Show composability (nesting)

move useTimer twice into useTwoTimers

## useDebugValue

Demo

```
useDebugValue(`Interval: ${interval}`);
```

Tip from the React docs:
We don’t recommend adding debug values to every custom Hook. It’s most valuable for custom Hooks that are part of shared libraries.

## One more thing

https://reactjs.org/docs/hooks-reference.html#defer-formatting-debug-values

Defer formatting debug values

In some cases formatting a value for display might be an expensive operation. It’s also unnecessary unless a Hook is actually inspected.

For this reason useDebugValue accepts a formatting function as an optional second parameter. This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.

For example a custom Hook that returned a Date value could avoid calling the toDateString function unnecessarily by passing the following formatter:

```
useDebugValue(interval, (interval) => `Interval: ${interval}`);
```
