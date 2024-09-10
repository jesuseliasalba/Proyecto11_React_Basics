import React from 'react'
import "./home.css"
import WeatherDays from '../../components/WeatherDays/WeatherDays';
import WeatherRain from '../../components/WeatherRain/WeatherRain';

const Home = () => {

  return (
    <section className='container displayFlex row topContent'>
      <WeatherDays />
      <WeatherRain />
    </section>
  )
}

export default Home