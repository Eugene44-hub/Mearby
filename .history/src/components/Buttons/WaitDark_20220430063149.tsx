import React from 'react'
import styles from "./Button.module.css"
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Wait = (props:Props) => {
  return (
    <button className={styles.dark}>join the waitlist</button>
  )
}

export default Wait