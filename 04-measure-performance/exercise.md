## Measure

1. Use `preformance.now` to measure the impact of your `useLayoutEffect`.

```
const t0 = performance.now();
const t1 = performance.now();
console.log(`${t1 - t0} ms`);
```

2. Use `sometimesSlowCalculation` in the `useLayoutEffect` and verify it's impact in Chrome Profiler.
3. Use `sometimesSlowCalculation` in the `render` and verify it's impact in React Profiler.
4. Throttle the CPU (6x) and go through steps again.

**Bonus Exercise**: Use the `calculateNodeHeight`'s cache and measure the performance impact! Especially with a throttled CPU.
