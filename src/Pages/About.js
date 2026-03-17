import React from "react";

export default function About() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">About AQI Monitor</h1>
      <ul style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.8" }}>
        <li>Real-time Air Quality Index for multiple cities.</li>
        <li>Interactive dashboard with graphs and maps.</li>
        <li>City search with detailed AQI info.</li>
        <li>Dark and light mode support for better UX.</li>
        <li>Alerts for high pollution areas.</li>
        <li>AI-powered forecasting panel.</li>
      </ul>
    </div>
  );
}