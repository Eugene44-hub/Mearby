import React from 'react'

import checked from '../../assets/images/checked.png';
const ProfSer = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];

  return (
    <div className='p-[20px]'>
      <p className='text-[2rem]'>Nearby is designed to connect you to the best professional service providers <span>wherever</span>  you are and  <span>whenever</span> you need them.</p>
      <p className='text-[1.25rem] text-[#00836A]'>Quicker and Easier than you can ever imagine</p>
      <ul className={` mt-5 flex justify-between `}>
						{minorText.map((item, index) => (
							<li key={index} className="flex items-center capitalize mr-2">
								{item} <img src={checked} className="w-[18px] ml-2" alt="checked" />
							</li>
						))}
					</ul>
    </div>
  )
}

export default ProfSer