import React from 'react'
import understand from "../../assets/images/understand.png"
import WaitLight from "../../components/Buttons/WaitLight"
const Understand = () => {
  return (
    <div className='bg-[#004034] px-5 pt-[9.75rem] md:flex  relative mt-[20rem]'>

  <img src={understand} className=" absolute block md:hidden translate-x-[-50%] left-[50%] top-[-20%]" alt="understand" />
  <div>
  <img src={understand} className=" w-[100%]"alt="understand" />

  </div>

<div>
<div>
  <p className='text-[2rem] text-white'>
  We understand you get stranded sometimes, Mostly in the middle of occasions!!!  
  </p>
  <p className='mt-3 text-[1.5rem] text-[#01AB8B] '>
  Yeah, we experience that too and it sucks and that’s why  </p>
</div>

<div className='pt-[3rem] pb-[5.938rem]'>
<WaitLight/>
</div>

</div>



    </div>
  )
}

export default Understand