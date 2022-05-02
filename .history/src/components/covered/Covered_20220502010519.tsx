import React from 'react'
import one from "../../assets/images/covered/1.png"
import two from "../../assets/images/covered/2.png"
import three from "../../assets/images/covered/3.png"
import WaitDark from "../Buttons/WaitDark"
import ImageCard from '../Cards/ImageCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

type Cover={
  img:any;text:string
}[]



const Covered = () => {

const covered:Cover=[
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
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

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  return (
    <section data-aos="flip-up" className='pt-[12.688rem]'>
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
<div className='flex justify-center '>
  <WaitDark/>
</div>
      </div>
     

    </section>
  )
}

export default Covered