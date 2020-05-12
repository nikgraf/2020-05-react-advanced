## useImperativeHandle

1. Add an imperative handle that allows to set the position to a new latitude/longitude.

```js
map.setView([lat, lng], zoom);
```

In App.tsx you can add a button to go to a certain position:

```tsx
<button onClick={() => mapElement.current?.setPosition(48.2082, 16.3738)}>
  back to center
</button>
```

**Hint**: Don't forget to use `React.forwardRef(Map);`
