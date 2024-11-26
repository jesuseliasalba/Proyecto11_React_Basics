import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from "./pages/home/home.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import { ThemeProvider } from './providers/ThemeContext.jsx'
import ClimateProvider from './providers/ClimateProvider.jsx'


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ClimateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App/> } >
            <Route index element={ <Home/> } />      
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClimateProvider>
  </ThemeProvider>
)
