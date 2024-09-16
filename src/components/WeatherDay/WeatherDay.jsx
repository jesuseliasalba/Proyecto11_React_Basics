import { wmo } from "../../data/WMO/wmo"
import "./WeatherDay.css"

import React from 'react'

const WeatherDay = ({position, city, active}) => {

    const { daily, daily_units } = city

    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const today = new Date()
    const day = today.getDay()  

    console.log(daily);
    

  return (
    active ? 
        <>
            <div className="dayName displayFlex">{dayNames[(day+position)%7]}</div>
            <div className="tempImg displayFlex row">
                <p>{Math.round((daily?.temperature_2m_max[position] + daily?.temperature_2m_min[position])/2)} {daily_units?.temperature_2m_max}</p>
                <img src={wmo[daily?.weather_code[position]]?.image} alt={wmo[daily?.weather_code[position]]?.description} />
            </div>
            <div className="dayInfo">
                <p><span>Máxima:</span> {daily?.temperature_2m_max[position]} {daily_units?.temperature_2m_max}</p>
                <p><span>Mínima:</span> {daily?.temperature_2m_min[position]} {daily_units?.temperature_2m_min}</p>
                <p><span>Índice UV máx:</span> {daily?.uv_index_max[position]} {daily_units?.uv_index_max}</p>
                <p><span>Viento:</span> {daily?.wind_speed_10m_max[position]} {daily_units?.wind_speed_10m_max}</p>
            </div>
        </>
        :
        <>
            <p>{dayNames[(day+position)%7]}</p>
            <img src={wmo[daily?.weather_code[position]]?.image} alt="" />
            <p>{Math.round((daily?.temperature_2m_max[position] + daily?.temperature_2m_min[position])/2)} {city.daily_units?.temperature_2m_max}</p>
        </>
  )
}

export default WeatherDay