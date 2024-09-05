import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from "./pages/home/home.jsx"
import notFound from "./pages/notFound/notFound.jsx"
import { ThemeProvider } from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> } >
          <Route index element={ <Home/> } />      
          <Route path="*" element={<notFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
