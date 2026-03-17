import React, { useState, useEffect } from "react";
import axios from "axios";

// Core Components
import AQICard from "../components/AQICard";
import Alerts from "../components/Alerts";
import TopCities from "../components/TopCities";
import AQIChart from "../components/AQIChart";
import AQIForecast from "../components/AQIForecast";
import AQIGauge from "../components/AQIGauge";
import AQITrend from "../components/AQITrend";

import AIPrediction from "../components/AIPrediction";
import AIPanel from "../components/AIPanel";

import CitySearch from "../components/CitySearch";
import CityPanel from "../components/CityPanel";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

// Map / Visualization Components
import PollutionMap from "../components/PollutionMap";
import PollutionHeatmap from "../components/PollutionHeatmap";
import PollutionGlobe from "../components/PollutionGlobe";
import GlobalHeatmap from "../components/GlobalHeatmap";
import SatelliteLayer from "../components/SatelliteLayer";

// Background / Effects
import Background3D from "../components/Background3D";
import ParticleBackground from "../components/ParticleBackground";

import "../styles/dashboard.css";

// Cities
const cities = [
  { name: "Delhi", lat: 28.61, lon: 77.2 },
  { name: "Mumbai", lat: 19.07, lon: 72.87 },
  { name: "Bangalore", lat: 12.97, lon: 77.59 },
  { name: "Kolkata", lat: 22.57, lon: 88.36 },
  { name: "Chennai", lat: 13.08, lon: 80.27 }
];

function FleetDashboard() {

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch AQI data
  useEffect(() => {

    const fetchAQI = async () => {

      try {

        const results = await Promise.all(
          cities.map(async (city) => {

            const res = await axios.get(
              `https://api.openweathermap.org/data/2.5/air_pollution?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
            );

            return {
              city: city.name,
              aqi: res.data.list[0].main.aqi,
              lat: city.lat,
              lon: city.lon
            };

          })
        );

        setData(results);

        const forecastData = results.map((c) => ({
          city: c.city,
          forecast: Array.from({ length: 24 }, (_, i) => ({
            hour: i + 1,
            aqi: c.aqi + Math.floor(Math.random() * 10 - 5)
          }))
        }));

        setForecast(forecastData);

        setLoading(false);

      } catch (err) {

        console.error(err);
        setError("Failed to fetch AQI data");
        setLoading(false);

      }

    };

    if (!API_KEY) {
      setError("Missing OpenWeather API Key");
    } else {
      fetchAQI();
    }

  }, [API_KEY]);

  // Theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading dashboard...</h2>;
  if (error) return <h2 style={{ color: "red", padding: "20px" }}>{error}</h2>;

  return (

    <div>

      {/* Background Effects */}
      <Background3D />
      <ParticleBackground />

      {/* Navbar */}
      <Navbar />

      <div style={{ padding: "20px" }}>

        <h1>🌍 AI Environmental Intelligence Dashboard</h1>

        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* City Search */}
        <CitySearch cities={cities} onSelect={setSelectedCity} />

        {/* City Panel */}
        {selectedCity && <CityPanel city={selectedCity} />}

        {/* Main Dashboard Cards */}
        <div className="grid">

          <AQICard data={data} />
          <AQIGauge data={data} />
          <AQITrend data={data} />

          <Alerts data={data} />
          <TopCities data={data} />
          <AQIChart data={data} />

          <AIPanel />
          <AIPrediction data={data} />

        </div>

        {/* Forecast Charts */}
        {forecast.map((f, idx) => (
          <AQIForecast key={idx} city={f.city} forecast={f.forecast} />
        ))}

        {/* Maps */}
        <h2>🗺 Pollution Maps</h2>

        <PollutionMap data={data} />
        <PollutionHeatmap data={data} />
        <GlobalHeatmap />
        <SatelliteLayer />

        {/* 3D Visualization */}
        <h2>🌍 3D Pollution Globe</h2>

        <PollutionGlobe data={data} />

      </div>

    </div>

  );
}

export default FleetDashboard;