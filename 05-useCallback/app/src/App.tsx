import React from "react";
import Map from "./Map";
import data from "./vienna-data.json";
import { Marker } from "./types";

/**
 * Data from: https://data.gov.uk/dataset/0f87c90e-66c5-47e6-9b47-d12f503ace8d/parks-and-open-spaces
 */

const markersData: Marker[] = Object.keys(data).map((key) => {
  // @ts-ignore
  const item = data[key];
  return {
    id: key,
    position: [parseFloat(item.Latitude), parseFloat(item.Longitude)],
    title: item.Title,
  };
});

function App() {
  const [zoom, setZoom] = React.useState(13);
  const [markers, setMarkers] = React.useState<Marker[]>(markersData);
  const [activeMarker, setActiveMarker] = React.useState<undefined | Marker>();

  return (
    <div>
      <button onClick={() => setZoom((currentZoom) => currentZoom + 1)}>
        +
      </button>
      <button onClick={() => setZoom((currentZoom) => currentZoom - 1)}>
        -
      </button>
      <button onClick={() => setMarkers([])}>Remove Markers</button>
      <Map
        zoom={zoom}
        defaultPosition={[48.2082, 16.3738]}
        markers={markers}
        // onActiveMarker={(markerId) => {
        //   setActiveMarker(markers.find((markers) => markers.id === markerId));
        // }}
      />
      <div>Active Marker: {activeMarker ? activeMarker.title : "None"}</div>
    </div>
  );
}

export default App;
