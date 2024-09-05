import React from 'react'
import "./home.css"


const Home = () => {
  return (
    <section className='container displayFlex row topContent'>
      <div className='timeTown displayFlex column'>
        <div className='optionsTime displayFlex row'>
          <h2>The time on your town</h2>
          <h2>hola</h2>
        </div>
        <div className='timeDays'></div>
      </div>
      <div className='rainChance'>
        <h2>rain for example</h2>
      </div>
    </section>
  )
}

export default Home