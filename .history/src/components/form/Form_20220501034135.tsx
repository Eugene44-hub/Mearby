import React from 'react'
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearbyDark.svg';
const Form = () => {
  return (
    <section className='mt-[10rem] p-[20px] md:'>
<div className='constainer'>
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
        <form action=""></form>
    </section>
    
  )
}

export default Form