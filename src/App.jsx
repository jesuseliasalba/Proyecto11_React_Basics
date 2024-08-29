import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <>
      <Header />
      <main data-theme={theme}>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
