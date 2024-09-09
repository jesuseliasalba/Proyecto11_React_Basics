import React, { useState } from 'react'
import "./home.css"


const Home = () => {
  const [ activeOption, setActive ] = useState("option3");

  return (
    <section className='container displayFlex row topContent'>
      <div className='timeTown displayFlex column'>
        <div className='optionsTime displayFlex row'>
          <ul className='displayFlex row'>
            <li className={activeOption === "option1" ? "activeTime": ""} onClick={() => setActive("option1")}>Hoy</li>
            <li className={activeOption === "option2" ? "activeTime": ""} onClick={() => setActive("option2")}>Mañana</li>
            <li className={activeOption === "option3" ? "activeTime": ""} onClick={() => setActive("option3")}>Siguientes 7 días</li>
          </ul>
        </div>
        <div className='timeDays displayFlex row'>
        </div>
      </div>
      <div className='rainChance'>
        <h2>rain for example</h2>
      </div>
    </section>
  )
}

export default Home