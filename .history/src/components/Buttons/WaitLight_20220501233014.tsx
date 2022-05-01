import React from 'react'
import styles from "./Button.module.css"

const Wait = () => {
  return (
    <Link activeClass="active" to="form" onClick={()=>scroll.scrollToBottom()} spy={true} smooth={true} offset={1070} duration={2000}></Link>
    <button className={`${styles.light} capitalize`}>Join the waitlist</button>

  )
}

export default Wait