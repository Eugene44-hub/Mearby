import React from 'react'
import Hero from '../../components/hero/Hero';
import Understand from '../../components/understand/Understand';
import janet from '../../assets/images/janet.svg'
const LandingPage = () => {
  return (
    <>

    <Hero/>
    <Understand/>
    <img src={janet} className="w-[80%]" alt="janet" />
    </>
  )
}

export default LandingPage