import React from 'react'
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearbyDark.svg';
const Form = () => {
  return (
    <section className='mt-[10rem] p-[20px] '>
<div className='container md:pl-[61px] md:pr-[57px]'>
      	<div className="flex justify-center">
					<img
						src={send}
						className="bg-[#00DCBA] mr-[16.79px] p-3 rounded-tl-[8.91471px] rounded-br-[8.91471px]"
						alt="send"
					/>
					<img src={nearby} alt="send" />
				</div>
        <p className='text-center font-bold mt-[2rem] text-[#01AB8B]'>Be part of the network of interconnectivity </p>
        <h2 className='text-center md:text-[2rem] text-[1.5rem] lg:w-[50%] m-auto'> Join the waiting list now to get early access to all the good stuff completely free</h2>
        </div>
        <form className='mt-[5rem]' action="#">

<div className='mb-5'>
  <div className='mb-5'>
  <label className='capitalize font-bold' htmlFor="fullname">fullname</label> 

  </div>
  <input placeholder="e.g Meshach Philip" className='bg-[#E3E3E3] p-4 rounded-lg w-full outline-none' type="text" />
</div>


<div>
  <div  className='mb-5'>
  <label className='capitalize font-bold' htmlFor="email">email</label> 
  </div>

  <input placeholder="meshachphilip@gmail.com" className='bg-[#E3E3E3] p-4 rounded-lg w-full outline-none' type="text" />
</div>
        </form>
    </section>
    
  )
}

export default Form