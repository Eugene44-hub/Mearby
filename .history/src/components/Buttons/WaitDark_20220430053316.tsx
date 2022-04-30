import React from 'react'
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Wait = (props:Props) => {
  return (
    <div >{props.text}</div>
  )
}

export default Wait