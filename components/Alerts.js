import React from "react";

function Alerts({ data }) {

  const alerts = data.filter(c => c.aqi >= 4);

  if(alerts.length === 0) return null;

  return (

    <div style={{ background:"red", color:"white", padding:"10px", marginBottom:"20px" }}>

      🚨 High Pollution Alert

      {alerts.map((c,i)=>(
        <p key={i}>{c.city} AQI {c.aqi}</p>
      ))}

    </div>

  );

}

export default Alerts;