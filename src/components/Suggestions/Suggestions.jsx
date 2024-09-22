import { API } from "../../API/API"
import { ClimateContext } from "../../providers/ClimateProvider";
import { setCity } from "../../reducers/climate.actions";
import "./Suggestions.css"

import React, { useContext, useEffect, useState } from 'react'

const fetchData = async ({setSuggest, inputValue}) => {
            try {
                const res = await API({url: `https://geocoding-api.open-meteo.com/v1/search?name=${inputValue}&count=3&language=es&format=json`});
                setSuggest(res.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

const Suggestions = ({inputValue, setInputValue, setCityLocation}) => {

    const [suggest, setSuggest] = useState([])
    const {state, dispatch} = useContext(ClimateContext)
    
    //! Cuando se busque el tiempo de un sitio que se ponga en el título, HAY QUE HACERLO
    //TODO NO FUNCIONA T_T NO LE PUEDO PASAR NADA DESDE EL ONCLICK :(
    // const [titlePage, setTitlePage] = useState("")
    // useEffect(()=>{
    //   document.title = `YourTime ${titlePage}` 
    //   console.log(titlePage);
    //      
    // }, [titlePage])

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchData({setSuggest, inputValue})
        }, 500);
        return () => clearTimeout(timeout)
    }, [inputValue]) 

    return (
    <div className="cityCont displayFlex column">
        {suggest && suggest.map((city) => {
            return <p key={city.id} 
                        onClick={() => {
                            setCityLocation(`${city.name}, ${city.admin2 && city.admin2 !== city.name ? city.admin2 : city.country}`)
                            setInputValue(""); 
                            setCity({
                                state, 
                                dispatch, 
                                coords: {
                                    lat: city.latitude, 
                                    lon: city.longitude}
                                })}}>
                        {city.name}
                        {city.admin2 && city.admin2 !== city.name ? `, ${city.admin2}` : ""}
                        {city.country ? `, ${city.country}` : ""}
                    </p>
        })}
    </div>
  )
}

export default Suggestions