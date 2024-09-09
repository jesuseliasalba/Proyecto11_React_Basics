import React, { useEffect, useState } from 'react'
import "./header.css"
import SwitchDarkLight from '../switchDarkLight/switchDarkLight'
import CreateInput from '../createInput/createInput'
import Suggestions from '../Suggestions/Suggestions'
import { API } from '../../API/API'

const Header = () => {

  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const res = await API({url: `https://us1.locationiq.com/v1/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&key=pk.e65df5358c57261e3f376d4caf32a11b`, headers: {accept: 'application/json'}});
        setCity(`${res.address.city}, ${res.address.country}`)
        const city = {city:{lat: res.lat, lon: res.lon}}
      }, async () => {
        const res = await API({url: 'https://api.ipdata.co/?api-key=298683c76a6c6bee1a5970f2e90d478413ba4c45b55d28c87093b610', headers: {accept: 'application/json'}})
        setCity(`${res.city}, ${res.country_name}`)
        const city = {city:{lat: res.latitude, lon: res.longitude}}
      })
  }, [])   

  return (
    
    <header className='displayFlex row container'>
      <div className='displayFlex row divCity'>
        <i className="fa-solid fa-location-dot"></i>
        <p>{city ? city : "Desconocida"}</p>
      </div>
      <div className='inputSuggestions'>
        <CreateInput value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder={`Buscar Ciudad`} i={<i className="fa-solid fa-magnifying-glass"></i>} />
        {inputValue && <Suggestions inputValue={inputValue} setInputValue={setInputValue} />}
      </div>
      <SwitchDarkLight />
    </header>

  )
}

export default Header