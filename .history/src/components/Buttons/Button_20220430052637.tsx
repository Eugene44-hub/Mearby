import React from 'react'
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Button = (props:Props) => {
  return (
    <div style={{width:props.width,height}}></div>
  )
}

export default Button