import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function GlobalHeatmap() {

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  return (

    <div className="glass-card">

      <h2>🌍 Global Pollution Heatmap</h2>

      <MapContainer
        center={[20,0]}
        zoom={2}
        style={{height:"400px"}}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer
          url={`https://tile.openweathermap.org/map/air_pollution/{z}/{x}/{y}.png?appid=${API_KEY}`}
        />

      </MapContainer>

    </div>

  );

}

export default GlobalHeatmap;