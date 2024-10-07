import { wmo } from "../../../data/WMO/wmo";
import Loading from "../../Loading/Loading";
import "./OneDayTime.css"

import React from 'react'

const OneDayTime = ({value, units, position, loading}) => {

  if (Array.isArray(value?.is_day)) {
    for (const key in value) {
      value[key] = value[key][position];
    }
  }     

  return (
    <div className={"oneDay displayFlex column " + (value?.is_day === 0 ? "night" : "day")}>
      <div className="oneDayContent displayFlex column">
        {loading ? <Loading /> : 
        (<>
          <div className="tempImg displayFlex row">
            <p>{value?.temperature_2m} {units?.temperature_2m}</p>
            <img src={wmo[value?.weather_code]?.image} alt={wmo[value?.weather_code]?.description} />
          </div>
          <div className="oneDayInfo displayFlex column">
            <p><span>Sensación🌡️:</span> {value?.apparent_temperature} {units?.apparent_temperature}</p>
            <p><span>Humedad☁️:</span> {value?.relative_humidity_2m} {units?.relative_humidity_2m}</p>
            <p><span>Velocidad:</span> 💨: {value?.wind_speed_10m} {units?.wind_speed_10m}</p>
            <p><span>Precipitación:</span> {value?.precipitation} {units?.precipitation}</p>
            <p><span>Lluvia:</span> {value?.rain} {units?.rain}</p>
            <p><span>Nieve:</span> {value?.snowfall} {units?.snowfall}</p>
          </div>
        </>)
        }
      </div>
    </div>
  )
}

export default OneDayTime