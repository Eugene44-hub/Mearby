import React from 'react'

import checked from '../../assets/images/checked.png';
const ProfSer = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];

  return (
    <div className='p-[20px]'>
      <p>Nearby is designed to connect you to the best professional service providers wherever you are and whenever you need them.</p>
      <p>Quicker and Easier than you can ever imagine</p>
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