import React from "react";

function TopCities({ data }) {

  const sorted = [...data].sort((a,b)=>b.aqi-a.aqi);

  return (

    <div>

      <h2>🏙 Most Polluted Cities</h2>

      <ul>

        {sorted.map((c,i)=>(
          <li key={i}>
            {c.city} - AQI {c.aqi}
          </li>
        ))}

      </ul>

    </div>

  );
}

export default TopCities;