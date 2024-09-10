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
            <li className={activeOption === "option3" ? "activeTime": ""} onClick={() => setActive("option3")}>Siguientes 7 días</li>
          </ul>
        </div>
        <div className='timeDays displayFlex row'>
            {activeOption === "option1" && <div>Hoy</div>}
            {activeOption === "option2" && <div>Mañana</div>}
            {activeOption === "option3" && <div>7 dias</div>}
        </div>
    </div>
  )
}

export default WeatherDays