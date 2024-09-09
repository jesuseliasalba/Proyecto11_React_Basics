import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import { useState } from 'react'


function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
