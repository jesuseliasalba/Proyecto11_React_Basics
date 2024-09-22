import React from 'react'
import "./home.css"
import WeatherDays from '../../components/WeatherDays/WeatherDays';
import WeatherRain from '../../components/WeatherRain/WeatherRain';

const Home = () => {

  return (
    <>
      <section className='container displayFlex row topContent'>
        <WeatherDays />
        <WeatherRain /> 
      </section>
      <section className='container displayFlex row bottomContent'>
        <div className='leftContent'>
          {/* <TodaysInfo /> */}
        </div>
        <div className='middleContent'>
          {/* <Api Google Maps /> */}
        </div>
        <div className='rightContent'>
          {/* <Historical /> */}
        </div>
      </section>
    </>
  )
}

export default Home