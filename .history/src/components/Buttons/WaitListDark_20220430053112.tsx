import React from 'react'
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Button = (props:Props) => {
  return (
    <div style={{width:props.width,height:props.height,backgroundColor:props.color}}>{props.text}</div>
  )
}

export default Button