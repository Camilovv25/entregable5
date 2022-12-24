import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeProtected from './compnents/HomeProtected'
import RouteProtected from './compnents/RouteProtected'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {
  const trainerName = useSelector(state=>state.trainerName)
  useEffect(() => {
    localStorage.setItem('trainerName',trainerName)
  }, [trainerName])
  
  return (
    <div className="App">
      <Routes>
        <Route element={<HomeProtected/>} >
          <Route path= '/' element={<Home />}/>
        </Route>
        <Route element = {<RouteProtected/> }>
          <Route path= '/pokedex' element={<Pokedex/>}/>
          <Route path= '/pokedex/:id' element={<Pokemon/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
