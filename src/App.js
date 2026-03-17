import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FleetDashboard from "./Pages/FleetDashboard";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main dashboard */}
        <Route path="/" element={<FleetDashboard />} />
        <Route path="/dashboard" element={<FleetDashboard />} />

        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;