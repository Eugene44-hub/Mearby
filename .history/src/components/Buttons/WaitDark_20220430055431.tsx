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
    <div className={styles.dar}>{props.text}</div>
  )
}

export default Wait