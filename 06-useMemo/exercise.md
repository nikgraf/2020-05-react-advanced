## useMemo

We have one function here that's slightly more expensive:
`medianCommitMessageLength`.

We could now run it on every render, but if its sources
never change, that's not necessary and we can make the render
cheaper in terms of performance.

In order to that use useMemo.
