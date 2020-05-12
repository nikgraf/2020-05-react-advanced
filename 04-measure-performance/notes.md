## Performance

From my experience it's very rare that you need to profile yourself. That said sometimes you notice the experience as good as you might like it to be.

## Why is that so?

https://philippspiess.com/static/805b72e5fe22f38f3f794de9668a14cc/42736/event-loop-browser.png

## What then?

Optimize, Optimize, Optimize

## Noooooooo

~~Optimize, Optimize, Optimize~~

## Measure first!

We want to measure different things.
Let's dive right into a demo.

## Demo

1. The `calculateNodeHeight` function is creating a DOM element, applies the content, applies styles, measures the height and then returns height. Sounds like a lot of work! Let's measure the impact with `performance.now`
2. Let's add a slowCalculation and measure again. The experience also is signifiantly wrose.
3. Switch to `sometimesSlowCalculation`
4. Show the impact in React Profiler -> nothing there
5. Show the impact in the Chrome Profile -> see results
6. Move the function to the render function and show the impact in React Profiler -> see results

## One more thing!

Depending on your target audience this might not be good enough. If you target low end mobile devices you might want to try emulating that environment.

## Demo

Show impact on low end device by reducing the CPU in Chrome Profile.
