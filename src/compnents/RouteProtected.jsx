import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../layout/Header'

const RouteProtected = () => {
  const trainerName = useSelector(state=>state.trainerName)
  if (trainerName){
    return (
      <>
        <Header/>
        <Outlet/>
      </>
      
    )
  } else {
    return <Navigate to='/'/>
  }
}


export default RouteProtected