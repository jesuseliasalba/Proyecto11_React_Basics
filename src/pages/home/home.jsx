import React from 'react'
import "./home.css"
import WeatherDays from '../../components/WeatherDays/WeatherDays';
import WeatherRain from '../../components/WeatherRain/WeatherRain';
import MapPreview from '../../components/mapPreview/mapPreview';
import SearchHistory from '../../components/SearchHistory/SearchHistory';

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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis quas nulla harum voluptate et veritatis neque deleniti quos ipsa fugit, vel tempora illo voluptatibus blanditiis doloremque, consequatur eveniet! Labore.</p>
        </div>
        <div className='middleContent'>
          <MapPreview />
        </div>
        <div className='rightContent'>
          <SearchHistory />
        </div>
      </section>
    </>
  )
}

export default Home