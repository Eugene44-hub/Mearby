import React from 'react'
import styles from "./ProfSer.module.css"
import checked from '../../assets/images/checked.png';
import WaitDark from '../../components/Buttons/WaitDark';
import phone from "../../assets/images/phonemap.svg";
const ProfSer = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];

  return (
    <div className='container md:pl-[61px] md:pr-[57px] md:my-[10rem] mt-[2.375rem] lg:mt-[]'>
      <div className='flex'>
      <div className='p-[20px] md:p-[0]  '>
      <p className='text-[2rem]'>
         Nearby is designed to connect you to the best professional service providers <span className="text-[#00DCBA]">wherever</span>  you are and  <span className="text-[#00DCBA]">whenever</span> you need them. 
      
      </p>
      <p className='text-[1.25rem] text-[#00836A] pt-[0.813rem]'>Quicker and Easier than you can ever imagine</p>
      <ul className={`lg:w-[70%] flex justify-between `}>
						{minorText.map((item, index) => (
							<li key={index} className="flex items-center capitalize mr-2">
								{item} <img src={checked} className="w-[18px] ml-2" alt="checked" />
							</li>
						))}
					</ul>

          <div className='mt-[4.438rem]'>
          <WaitDark/>

          </div>

         
          {/* <img src={phone} className="translate-x-[-40%] float-right w-[781px] h-[451px]" alt="" /> */}
    </div>
    <img src={phone} className="w-[60%] hidden md:block float-right" alt="" />

    {/* <div className='flex-1 hidden lg:block m-auto'>
    <img src={phone} className=" w-100%  " alt="" />

    </div> */}

      </div>
      

    <div className={`${styles.phone} lg:hidden mt-[5rem] w-[781px] h-[451px]`}>
            
    </div>
    </div>
  
  )
}

export default ProfSer