## useLayoutEffect

Use the boilerplate and modify the TextArea component to automatically grow and shrink based on the content. Try it using `useEffect` and `useLayoutEffect` and check if you can see a difference in the experience.

**Hint**: Use the `calculateNodeHeight` function to calculate the height. It accepts a DOM element and returns the height. Using useRef you can get the actual DOM element.

```js
const height = calculateNodeHeight(domElement);
domElement.style.height = `${height}px`;
```
