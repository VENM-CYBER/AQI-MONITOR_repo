import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function AQITrend({ data = [] }) {

  if (data.length === 0) {
    return <p>No AQI data available</p>;
  }

  const chartData = {
    labels: data.map((d) => d.city),
    datasets: [
      {
        label: "AQI Level",
        data: data.map((d) => d.aqi)
      }
    ]
  };

  return (
    <div>
      <h2>📈 AQI Trend</h2>
      <Line data={chartData} />
    </div>
  );
}

export default AQITrend;