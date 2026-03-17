import React, { useState } from "react";
import axios from "axios";

function AIPrediction() {

  const [prediction, setPrediction] = useState(null);

  const predictAQI = async () => {

    const res = await axios.post("http://127.0.0.1:5000/predict", {
      temperature: 30,
      humidity: 60,
      wind_speed: 5
    });

    setPrediction(res.data.predicted_aqi);
  };

  return (

    <div>

      <h2>🤖 AI AQI Prediction (Next 24 Hours)</h2>

      <button onClick={predictAQI}>Predict AQI</button>

      {prediction && (
        <h3>Predicted AQI: {prediction}</h3>
      )}

    </div>

  );

}

export default AIPrediction;