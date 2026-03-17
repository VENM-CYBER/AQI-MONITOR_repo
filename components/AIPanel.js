import React, { useState } from "react";
import axios from "axios";

function AIPanel() {
  const [aqiForecast, setAqiForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const predictNext24h = async (city = "Kolkata") => {
    setLoading(true);
    try {
      // 1️⃣ Get real-time weather
      const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const { temp, humidity } = weatherRes.data.main;
      const wind_speed = weatherRes.data.wind.speed;

      // 2️⃣ Send data to backend
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        temperature: temp,
        humidity,
        wind_speed,
        hours: 24,
      });

      setAqiForecast(res.data.predicted_aqi);
    } catch (err) {
      console.error(err);
      alert("Error fetching AQI prediction!");
    }
    setLoading(false);
  };

  return (
    <div className="glass-card ai-panel">
      <h2>🤖 AI AQI Forecast</h2>

      <button onClick={() => predictNext24h()} disabled={loading}>
        {loading ? "Predicting..." : "Predict Next 24h AQI"}
      </button>

      {aqiForecast.length > 0 && (
        <div style={{ marginTop: "15px" }}>
          {aqiForecast.map((val, idx) => (
            <div key={idx}>
              Hour {idx + 1}: {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AIPanel;