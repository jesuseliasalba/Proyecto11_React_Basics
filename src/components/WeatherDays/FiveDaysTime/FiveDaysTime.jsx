import Loading from "../../Loading/Loading"
import WeatherDay from "../../WeatherDay/WeatherDay"
import "./FiveDaysTime.css"
import React, { useState } from 'react'

const FiveDaysTime = ({city, loading}) => {

  const [daySelect, setDaySelect] = useState(0);
  
  const blocks = []
  for (let i = 0; i < 5; i++) {
      blocks.push(
          <div key={"block"+i} onClick={() => {setDaySelect(i)}} className={"displayFlex column dayTime " + (i === daySelect ? "daySelected" : "")}>
              {loading ? <Loading /> : <WeatherDay position={i} city={city} active={i === daySelect} />}
          </div>
      )
  }

  return (
    <>
      {blocks}
    </>
  )
}

export default FiveDaysTime

