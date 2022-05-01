import React from 'react';
import styles from './Hero.module.css';
import checked from '../../assets/images/checked.png';
import heroImg from '../../assets/images/heroImg.png';
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearbyDark.svg';

const Hero = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];
	return (
		<section className="container md:pl-[61px] relative">
			  {  
      [20,40,60,80].map((item,index:number)=>(<img key={index} src={lines} style={{left:`${item}%`}} className={`absolute  hidden md:block h-full`} alt="lines" />))}
			<div>

			</div>
			
		</section>
	);
};

export default Hero;
// wKcVoY0oBaK0dDUj5
// yX2Q8nskPsN4AjVkAPMBM