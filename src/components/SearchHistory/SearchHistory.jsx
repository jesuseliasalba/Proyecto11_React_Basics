import { ClimateContext } from "../../providers/ClimateProvider"
import { setCity } from "../../reducers/climate.actions"
import Loading from "../Loading/Loading"
import "./SearchHistory.css"

import React, { useContext, useEffect, useState } from 'react'

const SearchHistory = () => {
    const { state, dispatch} = useContext(ClimateContext)
    const { loading, cachedCities } = state;
    const [ cities, setCities] = useState([])
    
    useEffect(() => {
      const lastElements = cachedCities.slice(-10);      
      setCities(lastElements)
    }, [cachedCities])

  return (
    <ul className="history displayFlex column">
        <li>Historial:</li>
        { loading ? <Loading /> : 
          cities?.toReversed().map((city, index) => {
            return <li key={index} onClick={() => {setCity({dispatch,coords: { lat: city.lat, lon: city.lon }, name: city.address.city, cityName: `${city.address.city || city.address.town}, ${city.address.country}`})}}>
              <span className={`fi fi-${city.address.country_code}`} /> {city.address.town || city.address.city || city.address.country }
            </li>
          })
        }
        <li id="space"></li>
    </ul>
  )
}

export default SearchHistory
 