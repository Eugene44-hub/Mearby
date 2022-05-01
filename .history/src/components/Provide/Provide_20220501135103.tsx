import React from 'react'
import one from "../../assets/images/covered/1.png"
import two from "../../assets/images/covered/2.png"
import three from "../../assets/images/covered/3.png"
import ImageCard from '../Cards/ImageCard'
import lines from "../../assets/images/lines/longDark.svg"
// import mobilelines from "../../assets/images/lines/mobileDarkGreen.svg";
type Cover = {
  img: any; text: any
}[]

const Provide = () => {
  const covered: Cover = [
    {
      img: one,
      text: <p className='text-white'>Using precise location tracking, we make it super easy to locate clients <br />
        <span className='text-[#00DCBA]'>Just one click away</span>  </p>
    },
    {
      img: two,
      text: <p className='text-white'>Our system is built to detect traffic and give you the fastest route.
        <br />
        <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </p>
    },
    {
      img: three,
      text: <p className='text-white'>We provide a comprehensive analytics  of where your service is most needed

        <br />
        <span className='text-[#00DCBA]'>       Add some cool caption lol</span>  </p>
    },
    {
      img: one,
      text: <p className='text-white'>Ratings to promote you and get you more clients plus edu. materials to keep you relevant.
        <span className='text-[#00DCBA]'> We got you</span>  </p>
    },
    {
      img: two,
      text: <p className='text-white'>Our system is built to detect traffic and give you the fastest route.
        <br />
        <span className='text-[#00DCBA]'> Beat traffic all the time, every time</span>  </p>
    },
    {
      img: three,
      text: <p className='text-white'>we provide an easy and secure way to enable you to collect a payment, instantly.
        <span className='text-[#00DCBA]'>  Just like magic</span>  </p>
    }
  ]

  return (
    <section className='mt-[8.25rem] bg-[#004034] relative pt-[4.313rem]'>
          {  
      [10,20,40,8].map((item,index:number)=>(<img key={index} src={lines} className={`absolute top-0 left-[${item}%]  h-full`}alt="lines" />))}

{/* {[10,30,50,70,90].map((item,index:number)=>(<img key={index} src={lines} className={`absolute md:hidden block left-[${item}%] h-full`}alt="lines" />))} */}
      <div className='container md:pl-[61px] md:pr-[57px] px-[20px]'>
        <div className=''>
          <div className='text-center'>
            <h2 className='text-white text-[1.5rem]'>And if you got service to provide</h2>
          </div>
          <div className='mt-[5rem] flex flex-wrap sm:gap-3 lg:justify-between justify-center'>
            {covered.map((item, index) => (
              <ImageCard border={true} key={index} img={item.img} text={item.text} />

            ))}

          </div>


        </div>

      </div>


    </section>
  )
}

export default Provide