import React from 'react'
import Header from 'parts/Header'
import { useLocation } from 'react-router-dom' 

const LandingPage = () => {
  const location = useLocation();

  return(
    <>
      <Header location={location}></Header>
    </>
  )
}

export default LandingPage;