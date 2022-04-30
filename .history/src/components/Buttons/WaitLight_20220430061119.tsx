import React from 'react'
import styles from "./Button.module.css"

const Wait = (props:Props) => {
  return (
    <div className={styles.light}>{props.text}</div>

  )
}

export default Wait