import React from 'react'
import understand from "../../assets/images/understand.png"
import WaitLight from "../../components/Buttons/WaitLight"
import lines from "../../assets/images/lines/darkGreen.svg"
import styles from "./Understand.module.css"
const Understand = () => {
  return (
    <div className={`bg-[#004034] ${styles.container} relative border-y-4 border-[#00836A] mt-[20rem]`}>
     <img src={lines} className='absolute h-full' alt="lines" />
     <img src={lines} className='absolute translate-x-[20] h-full' alt="lines" />
     <img src={lines} className='absolute translate-x-[20] h-full' alt="lines" />
     <img src={lines} className='absolute translate-x-[20] h-full' alt="lines" />
     <img src={lines} className='absolute translate-x-[20] h-full' alt="lines" />
      <div className='container  md:px-0 px-5 pt-[9.75rem] py-[5.938rem] md:pl-[61px] md:pr-[27px] md:flex justify-between  relative mt-[20rem]'>

        <img src={understand} className=" absolute block md:hidden translate-x-[-50%] left-[50%] top-[-20%]" alt="understand" />
        <div className='md:block hidden w-[30%]'>
          <img src={understand} className=" w-[100%]" alt="understand" />

        </div>

        <div className='md:w-[65%] md:mx-0 mx-auto '>
          <div>
            <p className='text-[2rem] text-white'>
              We understand you get stranded sometimes, Mostly in the middle of occasions!!!
            </p>
            <p className='mt-3 text-[1.5rem] text-[#01AB8B] '>
              Yeah, we experience that too and it sucks and that’s why  </p>
          </div>

          <div className='pt-[3rem]'>
            <WaitLight />
          </div>

        </div>
      </div>

    </div>

  )
}

export default Understand