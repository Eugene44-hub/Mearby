import React from 'react'
import understand from "../../assets/images/understand.png"
import WaitLight from "../../components/Buttons/WaitLight"
import lines from "../../assets/images/lines/darkGreen.svg"
import mobilelines from "../../assets/images/lines/mobileDarkGreen.svg"
import styles from "./Understand.module.css"
const Understand = () => {
  const darkLine1=[{
    lg:40,
    md:10
  },
  {
    lg:70,
    md:30
  },
  {
    lg:100,
    md:50
  },
  {
    lg:130,
    md:70
  }]
  return (
    <div className={`bg-[#004034] ${styles.container} relative border-y-4 border-[#00836A] mt-[20rem]`}>
    {  
      [1,3,5,7].map((item:number,index:number)=>(<img key={index} src={lines} className={`absolute ${`md:translate-x-[${item*10}%]`}   lg:translate-x-[${(item*10)}%] lg:ml-[10rem]  hidden md:block h-full`}alt="lines" />))}
     {/* <img src={lines} className='absolute md:translate-x-[10%] lg:translate-x-[40%]  hidden md:block h-full' alt="lines" />
     <img src={lines} className='absolute md:translate-x-[30%] lg:translate-x-[70%]  hidden md:block   h-full' alt="lines" />
     <img src={lines} className='absolute md:translate-x-[50%] lg:translate-x-[100%] hidden md:block  h-full' alt="lines" />
     <img src={lines} className='absolute md:translate-x-[70%] lg:translate-x-[130%] hidden md:block  h-full' alt="lines" />

     <img src={mobilelines} className='absolute md:hidden block translate-x-[10%] sm:translate-x-[360%] h-full' alt="lines" />
     <img src={mobilelines} className='absolute md:hidden block translate-x-[80%]  h-full' alt="lines" />
     <img src={mobilelines} className='absolute md:hidden block translate-x-[150%]  h-full' alt="lines" />
     <img src={mobilelines} className='absolute md:hidden block translate-x-[220%]  h-full' alt="lines" />
     <img src={mobilelines} className='absolute md:hidden block translate-x-[290%]  h-full' alt="lines" /> */}
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