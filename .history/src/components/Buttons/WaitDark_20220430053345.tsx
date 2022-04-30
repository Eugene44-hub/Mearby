import React from 'react'
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Wait = (props:Props) => {
  return (
    <div className={styles.lightgt}>{props.text}</div>
  )
}

export default Wait