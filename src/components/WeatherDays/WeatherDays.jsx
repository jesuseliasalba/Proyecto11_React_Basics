import { ClimateContext } from "../../providers/ClimateProvider";
import FiveDaysTime from "./FiveDaysTime/FiveDaysTime";
import OneDayTime from "./OneDayTime/OneDayTime";
import "./WeatherDays.css"

import React, { useContext, useState } from 'react'

const WeatherDays = () => {
  const [ activeOption, setActive ] = useState("option1");
  
  const { state } = useContext(ClimateContext);
  const { city, loading } = state;
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setMinutes(0,0,0)
  
  const position = city.minutely_15?.time.indexOf(tomorrow.toLocaleString('sv-SE', { hour12: false }).replace(' ', 'T').slice(0, 16))
  

  return (
    <div className='timeTown displayFlex column'>
      <div className='optionsTime displayFlex row'>
        <ul className='displayFlex row'>
          <li className={activeOption === "option1" ? "activeTime": ""} onClick={() => setActive("option1")}>Hoy</li>
          <li className={activeOption === "option2" ? "activeTime": ""} onClick={() => setActive("option2")}>Mañana</li>
          <li className={activeOption === "option3" ? "activeTime": ""} onClick={() => setActive("option3")}>Siguientes 5 días</li>
        </ul>
      </div>
      <div className='timeDays displayFlex row'>
        {activeOption === "option1" && <OneDayTime value={city.current} units={city.current_units} loading={loading}/>}
        {activeOption === "option2" && <OneDayTime value={city.minutely_15} units={city.minutely_15_units} position={position} loading={loading} />}
        {activeOption === "option3" && <FiveDaysTime city={city} loading={loading} />}
      </div>
    </div>
  )
}

export default WeatherDays