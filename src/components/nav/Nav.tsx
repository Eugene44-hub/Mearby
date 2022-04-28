import React from 'react';
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearby logo.svg';
import styles from "./Nav.module.css"
const Nav = () => {
	return (
		<nav className={`md:h-auto h-[96.57px] ${styles.nav} flex`}>
			<header className="m-auto block md:hidden">
				<div className="flex justify-center">
					<img
						src={send}
						className="bg-[#00DCBA] mr-[16.79px] p-3 rounded-tl-[8.91471px] rounded-br-[8.91471px]"
						alt="send"
					/>
					<img src={nearby} alt="send" />
				</div>
			</header>
		</nav>
	);
};

export default Nav;
