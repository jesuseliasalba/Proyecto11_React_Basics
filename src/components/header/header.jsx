import React, { useEffect, useState } from 'react'
import "./header.css"
import SwitchDarkLight from '../switchDarkLight/switchDarkLight'
import CreateInput from '../createInput/createInput'

const Header = () => {

  const [city, setCity] = useState("Desconocido")

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     fetch(`https://us1.locationiq.com/v1/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&key=pk.e65df5358c57261e3f376d4caf32a11b`,{method: 'GET', headers: {accept: 'application/json'}})
  //     .then(res => res.json())
  //     .then(res => setCity(`${res.address.city}, ${res.address.country}`))
  //     .catch(err => console.error('error:' + err));      
  //     },() => {
  //       fetch('https://api.ipdata.co/?api-key=298683c76a6c6bee1a5970f2e90d478413ba4c45b55d28c87093b610', {headers: {'Accept':'application/json'}})
  //       .then(res => res.json())
  //       .then(res => setCity(`${res.city}, ${res.country_name}`))
  //       .catch(err => console.error(err))
  //     } )
  // }, [])

  return (
    
    <header className='displayFlex row container'>
      <div className='displayFlex row divCity'>
        <i className="fa-solid fa-location-dot"></i>
        <p>{city ? city : "Desconocida"}</p>
      </div>
      <CreateInput onChange={() => {}} placeholder={`Buscar Ciudad`} i={<i className="fa-solid fa-magnifying-glass"></i>} /> 
      <SwitchDarkLight />
    </header>

  )
}

export default Header