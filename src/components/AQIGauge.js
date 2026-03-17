import GaugeChart from "react-gauge-chart"

export default function AQIGauge({aqi}){

const percent = aqi / 500

return(

<div style={{width:"400px"}}>

<GaugeChart
id="aqi-gauge"
nrOfLevels={30}
colors={[
"#00e400",
"#ffff00",
"#ff7e00",
"#ff0000",
"#8f3f97"
]}
percent={percent}
arcPadding={0.02}
textColor="#fff"
/>

<h2 style={{textAlign:"center"}}>
AQI {aqi}
</h2>

</div>

)

}