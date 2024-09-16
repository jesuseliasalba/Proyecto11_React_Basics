import FiveDaysTime from "./FiveDaysTime/FiveDaysTime";
import TodayTime from "./TodayTime/TodayTime";
import TomorrowTime from "./TomorrowTime/TomorrowTime";
import "./WeatherDays.css"

import React, { useState } from 'react'

const WeatherDays = () => {
    const [ activeOption, setActive ] = useState("option3");

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
        {activeOption === "option1" && <TodayTime />}
        {activeOption === "option2" && <TomorrowTime />}
        {activeOption === "option3" && <FiveDaysTime />}
      </div>
    </div>
  )
}

export default WeatherDays