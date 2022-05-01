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
    <img src={janet} className=" md:hidden mt-[6.313rem] w-[195px] h-[59px] sm:translate-x-[165%] translate-x-[110%] " alt="janet" />

    </div>
    <ProfSer/>
    </>
  )
}

export default LandingPage