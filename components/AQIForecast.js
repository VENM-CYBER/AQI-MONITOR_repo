import React from "react";

function AQIForecast({ forecast }) {
  // Make sure forecast is always an array
  const safeForecast = Array.isArray(forecast) ? forecast : [];

  if (safeForecast.length === 0) {
    return <p>No forecast data available</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Next 24-hour AQI Forecast</h3>
      <ul>
        {safeForecast.map((f, idx) => (
          <li key={idx}>
            Hour {f.hour}: Predicted AQI {f.aqi}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AQIForecast;