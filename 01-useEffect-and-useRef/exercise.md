## useRef & useEffect

1. Use useRef & useEffect to build a Map component. Use the [Leaflet](https://leafletjs.com/) or similar.

**Hint** You can use Leaflet from npm e.g.

```js
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const element = document.getElementById("map");
const map = Leaflet.map(element).setView([51.505, -0.09], 13);
Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
```

2. The goal is to show the map and center it based on two props:

- `defaultPosition` taking an array of latitude & longitude as floats
- `zoom` is accepting integers larger and including 0

Behaviour

`defaultPosition` will set the position on the default render.
`zoom` should change the zoom level every time the prop changes.

This is how to do it with Leaflet:

```js
map.setView(map.getCenter(), zoom);
```
