import React from "react";
import somethingMap from "./useMap";

function Map(props) {
  const mapRef = somethingMap();

  return (
    <>
      {props.something ? (
        <div
          ref={mapRef}
          style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
        />
      ) : (
        <p
          ref={mapRef}
          style={{ width: 400, height: 200, backgroundColor: "#ddd" }}
        />
      )}
    </>
  );
}

export default Map;
