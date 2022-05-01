import React from 'react'
import one from "../../assets/images/covered/1.png"
import two from "../../assets/images/covered/2.png"
import three from "../../assets/images/covered/3.png"
import WaitDark from "../Buttons/WaitDark"
import ImageCard from '../Cards/ImageCard'
type Cover={
  img:any;text:any
}[]

const Provide = () => {
  const covered:Cover=[
    {
      img:one,
      text: <>Using precise location tracking, we make it super easy to locate clients <br />
    <span className='text-[00DCBA]'>Just one click away</span>  </>  
    },
    {
      img:two,
      text:"With the most intuitive user-friendly in-app experience, nothing can ever go wrong"
    },
    {
      img:three,
      text:"We spend a lot of time validating and recruiting only the best professionals just for you."
    },
    {
      img:one,
      text:"We leverage the most advanced GPS to get the service you need right at your doorstep and who knows, might just be your neighbor"
    },
    {
      img:two,
      text:"With the most intuitive user-friendly in-app experience, nothing can ever go wrong"
    },
    {
      img:three,
      text:"We spend a lot of time validating and recruiting only the best professionals just for you."
    }
  ]
  
  return (
    <section className='pt-[10rem] bg-[#004034]'>
      <div className='container md:pl-[61px] md:pr-[57px]'>
      <div className='p-[20px]'>
      <div className='text-center'>
      <h2 className='text-[#004034] text-[1.5rem]'>And if you got service to provide?And if you got service to provide?</h2>
      <p className='capitalize text-[#00DCBA] font-bold text-[1.25rem]'>we got you Covered</p>
      </div>
<div className='mt-[5rem] flex flex-wrap sm:gap-3 lg:justify-between justify-center'>
  {covered.map((item,index)=>(
<ImageCard border={true} key={index} img={item.img} text={item.text}/>

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