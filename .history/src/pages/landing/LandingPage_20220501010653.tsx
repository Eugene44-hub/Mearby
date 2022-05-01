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
    <img src={janet} className="md:hidden float-right mt-[6.313rem]" style={{clear:}} alt="janet" />

    </div>
    <ProfSer/>
    </>
  )
}

export default LandingPage