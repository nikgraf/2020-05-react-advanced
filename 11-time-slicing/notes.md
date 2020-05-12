# Time Slicing

## Let's look a the problem

We have components that need higher priority and some that don't.

## Step back and look at React from a holistic point of view

## React Fiber

React Fiber is a complete, backwards compatible rewrite of the React core.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Incremental Rendering
- Error Boundaries
- Fragments
- Portals

## Current State

Step 1: React Fiber ✅
Step 2: Suspense ✅🛠
Step 3: Concurrent React 🛠

## Time Slicing

Time Slicing is a generic way to ensure that high-priority updates (e.g. text inputs) don’t get blocked by a low-priority update (e.g. data loading).

**WARNING**: This example is not considered to be ready and the API will change.

## Demo

```jsx
ReactDOM.render(
  <React.unstable_ConcurrentMode>
    <App />
  </React.unstable_ConcurrentMode>,
  document.getElementById("root")
);
```

```sh
npm install scheduler
# yarn add scheduler
```

```
import {
  unstable_LowPriority,
  unstable_runWithPriority,
  unstable_scheduleCallback
} from "scheduler";
```

```sh
npm install remark remark-react
# yarn add remark remark-react
```

## Priorities

https://philippspiess.com/scheduling-in-react/

- Immediate for tasks that need to run synchronously.
- UserBlocking (250ms timeout) for tasks that should run as the result of a user interaction (e.g. a button click).
- Normal (5s timeout) for updates that don’t have to feel instantaneous.
- Low (10s timeout) for tasks that can be deferred but must still complete eventually (e.g. an analytics notification).
- Idle (no timeout) for tasks that do not have to run at all (e.g. hidden offscreen content).

## Deferred vs Time-slicing

TODO

## Other Examples

- You have a dataset with many many entries and a chart preview. By editing a data entry the chart needs to be updated.

## DO NOT USE THIS IN PRODUCTION!!!
