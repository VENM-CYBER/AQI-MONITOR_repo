import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function SatelliteLayer() {
  return (
    <div style={{ height: "400px", marginTop: "20px" }}>
      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="Satellite"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default SatelliteLayer;