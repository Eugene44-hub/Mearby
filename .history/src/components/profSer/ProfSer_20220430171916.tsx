import React from 'react'
import styles from "./ProfSer.module.css"
import checked from '../../assets/images/checked.png';
import WaitDark from '../../components/Buttons/WaitDark';
import phone from "../../assets/images/phonemap.svg";
const ProfSer = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];

  return (
    <div>
        <div className='p-[20px] mt-[2.375rem]'>
          <div>
    <img src={phone} className=" w-[781px] h-[451px]" alt="" />

          </div>
      

         
          {/* <img src={phone} className="translate-x-[-40%] float-right w-[781px] h-[451px]" alt="" /> */}
    </div>

    <div className={`${styles.phone} md:hidden mt-[5rem] w-[781px] h-[451px]`}>
            
            </div>
    </div>
  
  )
}

export default ProfSer