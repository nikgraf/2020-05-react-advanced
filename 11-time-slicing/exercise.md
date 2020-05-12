##

1. Replicate what has been shown during the presentation.

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

```js
import {
  unstable_LowPriority,
  unstable_runWithPriority,
  unstable_scheduleCallback
} from "scheduler";
```

```js
function myFunction() {
  unstable_runWithPriority(unstable_LowPriority, function() {
    unstable_scheduleCallback(unstable_LowPriority, function() {
      doSomething();
    });
  });
}
```

Store the preview content produced by `markdownToReact(text)` in local state and make sure it's rendered with LowPriority.

**Bonus lesson**: Replicate the same deferring with a deferred function e.g. coming from Lodash.
