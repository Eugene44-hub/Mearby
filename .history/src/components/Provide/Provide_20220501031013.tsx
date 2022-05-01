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
    <span className='text-[#00DCBA]'>Just one click away</span>  </>  
    },
    {
      img:two,
      text: <>Our system is built to detect traffic and give you the fastest route.
     <br />
      <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </>  
    },
    {
      img:three,
      text: <>We provide a comprehensive analytics  of where your service is most needed

     <br />
      <span className='text-[#00DCBA]'>       Add some cool caption lol</span>  </>  
    },
    {
      img:one,
      text: <>Ratings to promote you and get you more clients plus edu. materials to keep you relevant. We got you
      <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </>  
    },
    {
      img:two,
      text: <>Our system is built to detect traffic and give you the fastest route.
     <br />
      <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </>  
    },
    {
      img:three,
      text: <>Our system is built to detect traffic and give you the fastest route.
     <br />
      <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </>  
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