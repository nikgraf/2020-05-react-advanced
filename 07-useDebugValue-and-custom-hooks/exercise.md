## Custom Hooks & useDebugValue

1. Create a custom hook `useMap` that includes the useRef & useEffect used inside the Map component.

It should be used like this:

```jsx
function Map() {
  const mapElement = useMap();

  return (
    <div
      ref={mapElement}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
}
```

> My fav pattern is controlled + a Hook with "default" control behavior for when you don't care. E.g. <Checkbox> + useCheckbox().

https://twitter.com/dan_abramov/status/1217992172877774849?s=21
