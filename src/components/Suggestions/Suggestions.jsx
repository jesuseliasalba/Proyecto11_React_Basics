import { API } from "../../API/API"
import "./Suggestions.css"

import React, { useEffect, useState } from 'react'

const fetchData = async ({setSuggest, inputValue}) => {
            try {
                const res = await API({url: `https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}&count=3&language=es&format=json`});
                setSuggest(res.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

const Suggestions = ({inputValue, setInputValue}) => {

    const [suggest, setSuggest] = useState([])

    useEffect(() => {
        fetchData({setSuggest, inputValue})
    }, [inputValue]) 

    return (
    <div className="cityCont displayFlex column">
        {suggest && suggest.map((city) => {
            return <span key={city.id} onClick={(e) => setInputValue(e.target.innerHTML)}>{city.name}{city.admin2 && city.admin2 !== city.name ? `, ${city.admin2}` : ""}{city.country ? `, ${city.country}` : ""}</span>
        } )}
    </div>
  )
}

export default Suggestions