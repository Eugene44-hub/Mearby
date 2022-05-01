import React from 'react'

const Provide = () => {
  return (
    <section className='pt-[10rem]'>
      <div className='container md:pl-[61px] md:pr-[57px]'>
      <div className='p-[20px]'>
      <div className='text-center'>
      <h2 className='text-[#004034] text-[1.5rem]'>In every step you take we're always with you</h2>
      <p className='capitalize text-[#00DCBA] font-bold text-[1.25rem]'>we got you Covered</p>
      </div>
<div className='mt-[5rem] flex flex-wrap sm:gap-3 lg:justify-between justify-center'>
  {covered.map((item,index)=>(
<ImageCard key={index} img={item.img} text={item.text}/>

  ))}

</div>


      </div>
<div className='flex justify-center mb-[5rem]'>
  <WaitDark/>
</div>
      </div>
     

    </section>
  )
}

export default Provide