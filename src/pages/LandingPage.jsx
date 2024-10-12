import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'

import { useLocation } from 'react-router-dom' 
import landingPage from '../json/landingPage.json'

const LandingPage = () => {
  const location = useLocation();

  return(
    <>
      <Header location={location}></Header>
      <Hero location={location} data={landingPage}></Hero>
    </>
  )
}

export default LandingPage;