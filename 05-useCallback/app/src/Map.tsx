import React, { useRef, useEffect, useState } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "./types";

// @ts-ignore
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

type Props = {
  defaultPosition: [number, number];
  zoom?: number;
  markers?: Marker[];
  onActiveMarker?: (markerId: string) => void;
};

const Map: React.FC<Props> = ({
  zoom = 13,
  defaultPosition,
  markers,
  onActiveMarker,
}) => {
  const element = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<null | Leaflet.Map>(null);

  useEffect(() => {
    let newMap: null | Leaflet.Map = null;
    if (element.current) {
      newMap = Leaflet.map(element.current, { zoomControl: false }).setView(
        defaultPosition,
        zoom
      );

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(newMap);

      setMap(newMap);
    }

    return () => {
      if (newMap) {
        newMap.remove();
        newMap = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (map) {
      map.setView(map.getCenter(), zoom);
    }
  }, [map, zoom]);

  useEffect(() => {
    const markersLayer = new Leaflet.LayerGroup();
    if (map && markers) {
      markers.forEach((marker) => {
        Leaflet.marker(marker.position)
          .on("click", () => {
            if (onActiveMarker) {
              onActiveMarker(marker.id);
            }
          })
          .addTo(markersLayer);
      });
      markersLayer.addTo(map);
    }
    return () => {
      markersLayer.clearLayers();
    };
  }, [markers, map, onActiveMarker]);

  return (
    <div
      ref={element}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
};

export default Map;
