import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AQIChart({ data }) {
  // Ensure data is an array using useMemo
  const safeData = useMemo(() => (Array.isArray(data) ? data : []), [data]);

  // Chart labels and datasets
  const chartData = useMemo(() => {
    return {
      labels: safeData.map((d) => d.city),
      datasets: [
        {
          label: "AQI Level",
          data: safeData.map((d) => d.aqi),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };
  }, [safeData]);

  const options = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "City AQI Comparison" },
    },
  }), []);

  if (!safeData || safeData.length === 0) return <p>No AQI data available</p>;

  return (
    <div style={{ marginTop: "30px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default AQIChart;