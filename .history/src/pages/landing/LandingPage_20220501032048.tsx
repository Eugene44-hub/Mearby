import React from 'react'
import Hero from '../../components/hero/Hero';
import Understand from '../../components/understand/Understand';
import janet from '../../assets/images/janet.svg'
import ProfSer from '../../components/profSer/ProfSer';
import Covered from '../../components/covered/Covered';
import Provide from '../../components/Provide/Provide';
const LandingPage = () => {
  return (
    <>

      <Hero />
      <Understand />
      <div className='flex justify-end'>
        <img src={janet} className="md:hidden  mt-[6.313rem]" alt="janet" />

      </div>
      <ProfSer />
      <Covered />
      <Provide />
      <Fo
    </>
  )
}

export default LandingPage