import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerNameGlobal } from '../store/slices/trainerName.slice'
import './styles/Header.css'


const Header = () => {
  const dispatch = useDispatch()
  const handleClickLogOut =()=>{
    dispatch(setTrainerNameGlobal(""))
  }
  return (
  <header className='header'>
    <img className='header__img' src="/images/pokedex.png" alt="" />
    <div className='header__black'></div>
    <div className='header__circle'>
      <i onClick={handleClickLogOut} className='header__logout bx bx-log-out'></i>
      <div className='header__circle-int'></div>
    </div>
    
  </header>
  )
}

export default Header