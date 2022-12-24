import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerNameGlobal } from '../store/slices/trainerName.slice'
import './styles/HomeForm.css'
const HomeForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const trainerName = e.target.trainerName.value
    dispatch(setTrainerNameGlobal(trainerName))
  }
  return (
  <form className='home__form' onSubmit={handleSubmit}>
    <input className='home__imput' type="text" id='trainerName' placeholder='Your name'/>
    <button className='home__btn'>Start!</button>
  </form>
  )
}

export default HomeForm