## useLayoutEffect

Let's checkout the docs

```
The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.
```

## Why and when?

This Hook should be used only when

Let's say you have an auto-growing textarea. When you create a newline, the new height should be applied before react re-renders the textarea. Otherwise the delay will lead to little jumps. It's barely noticable, but it feels very odd.

## Demo

Show it with useLayoutEffect vs useEffect.

Watch reacording.mov in this directory.

## Show Render & Commit Phase Chart

https://github.com/donavon/hook-flow/blob/master/hook-flow.pdf

## Other Examples

You scroll thought a list and an item is prepended e.g. Twitter timeline.
