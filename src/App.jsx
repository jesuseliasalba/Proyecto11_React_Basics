import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'

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
