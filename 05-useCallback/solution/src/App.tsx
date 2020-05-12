import React from "react";
import Map from "./Map";
import data from "./vienna-data.json";
import { Marker } from "./types";

/**
 * From a UI perspective we want to show data of the currently active marker
 * outside of the map. In order to do so we implemented an onActiveMarker function
 * into the Map component.
 * Using useState we can store the active marker and everything works fine. There
 * is one gotcha though. Take away the onActiveMarker and try the zoom buttons. You will
 * notice the experience is sooo much faster.
 *
 * Why so?
 * The issue is that inside Map we need to update the Markers everytime the onActiveMarker
 * function changes. In many cases this is not a problem e.g. the setZoom functions.
 * In the Map implementation though it causes code to run that takes 100+ milliseconds and
 * it's clearly blocking the UI.
 *
 * 1. Optimize the implementation and see if we can manage to make it faster
 * 2. Use useCallback to avoid regenerating the function every time.
 *
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

  // const onActiveMarker = React.useCallback(
  //   (markerId) => {
  //     setActiveMarker(markers.find((markers) => markers.id === markerId));
  //   },
  //   [markers]
  // );

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
        onActiveMarker={(markerId) => {
          setActiveMarker(markers.find((markers) => markers.id === markerId));
        }}
        // onActiveMarker={onActiveMarker}
      />
      <div>Active Marker: {activeMarker ? activeMarker.title : "None"}</div>
    </div>
  );
}

export default App;
