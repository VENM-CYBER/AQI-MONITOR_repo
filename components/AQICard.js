import React from "react";

function AQICard({ data }) {

  return (

    <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>

      {data.map((city, i) => (

        <div
          key={i}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "150px"
          }}
        >

          <h3>{city.city}</h3>
          <h2>AQI {city.aqi}</h2>

        </div>

      ))}

    </div>

  );

}

export default AQICard;