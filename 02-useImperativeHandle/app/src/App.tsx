import React from "react";
import Map from "./Map";

function App() {
  const [zoom, setZoom] = React.useState(13);

  return (
    <div>
      <button onClick={() => setZoom((currentZoom) => currentZoom + 1)}>
        +
      </button>
      <button onClick={() => setZoom((currentZoom) => currentZoom - 1)}>
        -
      </button>
      <Map zoom={zoom} defaultPosition={[48.2082, 16.3738]} />
    </div>
  );
}

export default App;
