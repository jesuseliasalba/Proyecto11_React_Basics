import { ClimateContext } from "../../../providers/ClimateProvider"
import Loading from "../../Loading/Loading"
import WeatherDay from "../../WeatherDay/WeatherDay"
import "./FiveDaysTime.css"
import React, { useContext, useState } from 'react'

const FiveDaysTime = () => {

  const [daySelect, setDaySelect] = useState(0);

  const { state } = useContext(ClimateContext)
  const { loading, city } = state

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

