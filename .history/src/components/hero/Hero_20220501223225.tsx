import React from 'react';
import styles from './Hero.module.css';
import checked from '../../assets/images/checked.png';
import heroImg from '../../assets/images/heroImg.png';
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearbyDark.svg';
import lines from "../../assets/images/lines/longDark.svg"

const Hero = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];
	return (
		<section className=" md:pl-[61px] relative">
			  {  
      [20,40,60,80].map((item,index:number)=>(<img key={index} src={lines} style={{left:`${item}%`}} className={`absolute  hidden md:block h-full`} alt="lines" />))}
			<div className='container'>
			<div className={`${styles.container} md:flex justify-between`}>
				<div className={`${styles.heroContainer} mb-[3rem] flex flex-wrap md:w-[50%]`}>
					<div className="md:flex w-[20%] hidden mt-[62px] items-center">
						<img
							src={send}
							className="bg-[#00DCBA] w-[100%] mr-[16.79px] p-3 rounded-tl-[8.91471px] rounded-br-[8.91471px]"
							alt="send"
						/>
						<img src={nearby} alt="send" />
					</div>

					<div className="m-auto">
						<h2 className={` ${styles.connectHead} flex items-end md:h-[95.5px]`}>Connecting You</h2>
						<p className={`text-[2rem] ${styles.connectText}`}>
							Getting a Professional service provider for your immediate needs Has never been easier!
						</p>
					</div>

					<ul className={`${styles.connectList} mt-5 flex justify-between `}>
						{minorText.map((item, index) => (
							<li key={index} className="flex items-center capitalize mr-2">
								{item} <img src={checked} className="w-[18px] ml-2" alt="checked" />
							</li>
						))}
					</ul>

					<div className="w-[100%] md:pt-[53px] mt-5 flex md:px-0 p-5">
						<button className="bg-[#004639] font-bold border-white border w-[172px] h-[51px] text-white mr-5 rounded-[50px]">
							Join the Waitlist
						</button>
						<button className="bg-[#C1F2EB] font-bold w-[129px] h-[51px] rounded-[50px] text-[#004034] border border-[#004034] capitalize">
							read more
						</button>
					</div>
				</div>
				<div className="md:w-[50%]">
					<img src={heroImg} className={styles.heroImg} alt="girl" />
				</div>
			</div>
			</div>
			
		</section>
	);
};

export default Hero;
// wKcVoY0oBaK0dDUj5
// yX2Q8nskPsN4AjVkAPMBM