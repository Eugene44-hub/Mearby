import React from 'react'
import styles from "./Button.module.css"
import { Link, animateScroll as scroll } from 'react-scroll';
const Wait = () => {
  return (
    <button className={`${styles.dark} capitalize`}>join the waitlist</button>
  )
}

export default Wait