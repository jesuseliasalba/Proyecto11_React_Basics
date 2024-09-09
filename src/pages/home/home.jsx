import React, { useContext, useEffect, useState } from 'react'
import "./home.css"
import { API } from '../../API/API';
import { ClimateContext } from '../../providers/ClimateProvider';
import { setCity } from '../../reducers/climate.actions';


const Home = () => {
  const [ activeOption, setActive ] = useState("option3");
  const [cityData, setCityData] = useState({})


  // useEffect(()=> {
  //   const getCityData = async ({lat,lon}) => {
  //     try {
  //       const res = await API({url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,weather_code,is_day,sunshine_duration&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum`})
  //       console.log(res);
  //       
  //     } catch (error) {
  //       console.error("Error recogiendo datos del tiempo " + error)
  //     }
  //   }
  //   getCityData({lat:40.38, lon:-3.57});    
  // },[])

  const { state, dispatch } = useContext(ClimateContext);
  
  useEffect(() => {
    setCity({ dispatch, coords: {lat:"40.38", lon:"-3.57"} })
    setCity({dispatch, coords: {lat:"25.45",lon:"-8.54"}})
  }, [])
  
  return (
    <section className='container displayFlex row topContent'>
      <div className='timeTown displayFlex column'>
        <div className='optionsTime displayFlex row'>
          <ul className='displayFlex row'>
            <li className={activeOption === "option1" ? "activeTime": ""} onClick={() => setActive("option1")}>Hoy</li>
            <li className={activeOption === "option2" ? "activeTime": ""} onClick={() => setActive("option2")}>Mañana</li>
            <li className={activeOption === "option3" ? "activeTime": ""} onClick={() => setActive("option3")}>Siguientes 7 días</li>
            {state.loading ? <li>Hola</li> : ""}
          </ul>
        </div>
        <div className='timeDays displayFlex row'>
        </div>
      </div>
      <div className='rainChance'>
        <h2>rain for example</h2>
      </div>
    </section>
  )
}

export default Home