import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <Link to="/">AQI Monitor</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/cities">Cities</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

    </nav>
  );
}