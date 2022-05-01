import React from 'react'
import styles from "./Button.module.css"
import { Link, animateScroll as scroll } from 'react-scroll';
const Wait = () => {
  return (
<Link activeClass="active" to="top" spy={true} smooth={true} offset={-6000} duration={2000}></Link>

    <button className={`${styles.dark} capitalize`}>join the waitlist</button>
  )
}

export default Wait