import React from 'react'
import HeroSection from './components/HeroSection.jsx'
import Services from './components/Services.jsx'; 
import Trusted from './components/Trusted.jsx';
import FeatureProduct from "./components/FeatureProduct.jsx"

const Home = () => {
  const data = {
    name:"श्री राधे Store",
  };


  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
}


export default Home
