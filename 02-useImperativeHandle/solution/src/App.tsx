import React from "react";
import Map from "./Map";

function App() {
  const [zoom, setZoom] = React.useState(13);
  const mapElement = React.useRef<{
    setPosition: (lat: number, lng: number) => void;
  }>(null);

  return (
    <div>
      <button onClick={() => setZoom((currentZoom) => currentZoom + 1)}>
        +
      </button>
      <button onClick={() => setZoom((currentZoom) => currentZoom - 1)}>
        -
      </button>
      <button onClick={() => mapElement.current?.setPosition(48.2082, 16.3738)}>
        back to center
      </button>
      <Map
        zoom={zoom}
        defaultPosition={[48.2082, 16.3738]}
        // @ts-ignore
        ref={mapElement}
      />
    </div>
  );
}

export default App;
