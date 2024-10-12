import React from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Categories from 'parts/Categories'


import { useLocation } from 'react-router-dom' 
import landingPage from '../json/landingPage.json'
import MostPicked from 'parts/MostPicker'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

const LandingPage = () => {
  const location = useLocation();

  return(
    <>
      <Header location={location}></Header>
      <Hero location={location} data={landingPage.hero}></Hero>
      <MostPicked location={location} data={landingPage.mostPicked}></MostPicked>
      <Categories location={location} data={landingPage.categories}></Categories>
      <Testimony location={location} data={landingPage.testimonial}></Testimony>
      <Footer location={location}></Footer>
    </>
  )
}

export default LandingPage;