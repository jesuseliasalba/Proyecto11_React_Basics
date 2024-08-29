import React, { useEffect, useState } from 'react'
import "./header.css"
import SwitchDarkLight from '../switchDarkLight/switchDarkLight'

const Header = () => {


  const [city, setCity] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`https://us1.locationiq.com/v1/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&key=pk.e65df5358c57261e3f376d4caf32a11b`,{method: 'GET', headers: {accept: 'application/json'}})
      .then(res => res.json())
      .then(res => setCity(res.address.city))
      .catch(err => console.error('error:' + err));
      
      })
  }, [])

  return (
    <header>
      <div>
        <i className="fa-solid fa-location-dot"></i>
        <p>{city ? city : "Desconocida"}</p>
      </div>
      <SwitchDarkLight />
      
    </header>

  )
}

export default Header