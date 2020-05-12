import { useRef, useEffect, useDebugValue } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

function useMap() {
  const ref = useRef(null);
  const position = [51.505, -0.09];

  useEffect(() => {
    console.log(ref);
    let map = Leaflet.map(ref.current).setView(position, 13);

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      map.remove();
      map = null;
    };
  }, [ref.current]);

  useDebugValue(
    position,
    position => `Position: { lat: ${position[0]}, lng ${position[1]} }`
  );

  return ref;
}

export default useMap;
