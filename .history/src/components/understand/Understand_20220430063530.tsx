import React from 'react'
import understand from "../../assets/images/understand.png"
import WaitLight from "../../components/Buttons/WaitLight"
const Understand = () => {
  return (
    <div className='bg-[#004034] p-5'>

  <img src={understand} alt="understand" />

<div>
  <p className=''>
  We understand you get stranded sometimes, Mostly in the middle of occasions!!!  
  </p>
  <p className='mt-3 mb-5'>
  Yeah, we experience that too and it sucks and that’s why  </p>
</div>
<WaitLight/>
    </div>
  )
}

export default Understand