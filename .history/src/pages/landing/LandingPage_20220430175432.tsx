import React from 'react'
import Hero from '../../components/hero/Hero';
import Understand from '../../components/understand/Understand';
import janet from '../../assets/images/janet.svg'
import ProfSer from '../../components/profSer/ProfSer';
const LandingPage = () => {
  return (
    <>

    <Hero/>
    <Understand/>
    <div>
    <img src={janet} className="w-[80%] sm:w-[195px] h-[59px] md:hidden mt-[6.313rem]  float-right " alt="janet" />

    </div>
    <ProfSer/>
    </>
  )
}

export default LandingPage