import React, { useState } from "react";

function CitySearch({ cities, onSelect }) {

  const [query, setQuery] = useState("");

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ marginBottom: "20px" }}>

      <input
        type="text"
        placeholder="🔍 Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {query && (
        <div style={{ background: "#111", padding: "10px", marginTop: "5px" }}>
          {filteredCities.map((city, index) => (
            <div
              key={index}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => {
                onSelect(city);
                setQuery("");
              }}
            >
              {city.name}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default CitySearch;