export default function CityPanel({city}){

if(!city) return null

return(

<div className="city-panel">

<h2>{city.name}</h2>

<p>AQI: {city.aqi}</p>

<p>PM2.5: {city.pm25}</p>

<p>PM10: {city.pm10}</p>

<p>CO: {city.co}</p>

</div>

)

}