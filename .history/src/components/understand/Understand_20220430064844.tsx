import React from 'react'
import understand from "../../assets/images/understand.png"
import WaitLight from "../../components/Buttons/WaitLight"
const Understand = () => {
  return (
    <div className='bg-[#004034] px-5 pt-[9.75rem] relative mt-[20rem]'>

  <img src={understand} className="absolute translate-x-50% top-[-20%]" alt="understand" />

<div>
  <p className='text-[2rem] text-white'>
  We understand you get stranded sometimes, Mostly in the middle of occasions!!!  
  </p>
  <p className='mt-3 text-[1.5rem] text-[#01AB8B] mb-5'>
  Yeah, we experience that too and it sucks and that’s why  </p>
</div>
<div className='flex justify-center'>
<WaitLight/>

</div>
    </div>
  )
}

export default Understand