import React, { useContext, useMemo } from 'react'
import "./WeatherRain.css"
import { ClimateContext } from '../../providers/ClimateProvider';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../Loading/Loading';

const WeatherRain = () => {

  const { state } = useContext(ClimateContext);
  const { city, loading } = state;

  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      day: new Date(city?.daily?.time[i]).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'}),
      precipitation: city?.daily?.precipitation_sum[i],
      rain: city?.daily?.rain_sum[i],
    })
  }      

  return (
    <div className='rainChance displayFlex'>
      {loading ? <Loading /> : 
      <ResponsiveContainer width='100%' minHeight='300px'>
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}> 
          <XAxis dataKey="day" />
          <YAxis unit="mm" width={80} />
          <Tooltip allowEscapeViewBox={{ y: true}} contentStyle={{borderRadius: 10, backgroundColor: "var(--jea-color-bgSpecial"}} labelStyle={{color: "black", fontWeight: 600}} itemStyle={{color: "black"}}/> 
          <Legend verticalAlign="top" height={30}/>
          <Bar name="Precipitación" dataKey={"precipitation"} type="monotone" fill="#8884d8" />
          <Line name="Lluvia" dataKey="rain" type="monotone" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
      }
    </div>
  )
}

export default WeatherRain