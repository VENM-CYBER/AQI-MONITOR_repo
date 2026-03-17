import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function PollutionMap({ data }) {

  return (

    <div>

      <h2>🗺 India Pollution Map</h2>

      <MapContainer
        center={[22.97, 78.65]}
        zoom={5}
        style={{ height: "400px" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((city, i) => (

          <Marker key={i} position={[city.lat, city.lon]}>

            <Popup>
              {city.city} AQI: {city.aqi}
            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );
}

export default PollutionMap;