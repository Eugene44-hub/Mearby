import React from 'react'
import Hero from '../../components/hero/Hero';
import Understand from '../../components/understand/Understand';
import janet from '../../assets/images/janet.svg'
const LandingPage = () => {
  return (
    <>

    <Hero/>
    <Understand/>
    <img src={janet} className="w-[80%] md:hidden mt-[6.313rem] translate-x-[25%]" alt="janet" />
    <Profs
    </>
  )
}

export default LandingPage