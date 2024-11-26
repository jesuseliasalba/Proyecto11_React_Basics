import { Bar, BarChart, Cell, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ClimateContext } from "../../providers/ClimateProvider"
import "./TodaysInfo.css"

import React, { useContext } from 'react'
import Loading from "../Loading/Loading"

const uvLevel = [
  { name: 'Bajo', value: 2, color: '#299501' },
  { name: 'Moderado', value: 5, color: '#f7e401' },
  { name: 'Alto', value: 7, color: '#f95901' },
  { name: 'Muy alto', value: 10, color: '#d90011' },
  { name: 'Extremo', value: 11, color: '#6c49ca' },
];

const getColorForValue = (value) => {
  const level = uvLevel.find((level) => value <= level.value);  
  return level ? level.color : "#6c49ca";
};

const TodaysInfo = () => {

    const { state: {loading, city} } = useContext(ClimateContext)

    const data = []
    for (let i = 0; i < 7; i++) {
      data.push({
        day: new Date(city?.daily?.time[i]).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'}),
        uv: city?.daily?.uv_index_max[i],
        uvColor: getColorForValue(city?.daily?.uv_index_max[i]),
        wind: city?.daily?.wind_speed_10m_max[i],
      })
    }    

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        const uvValue = payload[0].value;
        const level = uvLevel.find((level) => uvValue <= level.value)?.name || "Extremo";
    
        return (
          <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "10px", border: "1.5px solid #ccc", borderRadius: "10px" }}>
            <p>Día: {label}</p>
            <p>Índice UV: {uvValue}</p>
            <p>Nivel: {level}</p>
          </div>
        );
      }
      return null;
    };

    const CustomTooltip2 = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "10px", border: "1.5px solid #ccc", borderRadius: "10px" }}>
            <p>Día: {label}</p>
            <p>Velocidad: {payload[0].value} {city?.daily_units?.wind_speed_10m_max}</p>
          </div>
        );
      }
      return null;
    };
    
  return (
    <>
      <div className="uvInfo">
        <p>Indice UV: </p>
        {loading ? <Loading /> :
          <ResponsiveContainer height="90%" width='100%' minHeight='200px'> 
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="day" />
              <YAxis domain={[0, 11]}/>
              <Tooltip content={<CustomTooltip />}/>
              <Bar type="monotone" dataKey="uv" >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.uvColor} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="windInfo">
        <p>Velocidad del viento ({city?.daily_units?.wind_speed_10m_max}): </p>
        {loading ? <Loading /> :
          <ResponsiveContainer height="85%" width='100%' minHeight='200px'> 
            <LineChart data={data} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip content={<CustomTooltip2 />}/>
              <Line type="monotone" dataKey="wind" />
            </LineChart>
          </ResponsiveContainer>
      }
      </div>
    </>
  )
}

export default TodaysInfo