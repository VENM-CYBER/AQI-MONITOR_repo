import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";

function PollutionHeatmap({ data }) {

  return (

    <MapContainer
      center={[22.59, 78.96]}
      zoom={5}
      style={{ height: "400px" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((city, i) => (

        <Circle
          key={i}
          center={[city.lat, city.lon]}
          radius={city.aqi * 5000}
        />

      ))}

    </MapContainer>

  );

}

export default PollutionHeatmap;