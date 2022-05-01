import React from 'react'
import styles from "./Button.module.css"
import { Link, animateScroll as scroll } from 'react-scroll';
const Wait = () => {
  return (
<Link activeClass="active" to="form" spy={true} smooth={true} offset={1070} duration={2000}>
<button className={`${styles.dark} capitalize`}>join the waitlist</button>
</Link>

  )
}

export default Wait