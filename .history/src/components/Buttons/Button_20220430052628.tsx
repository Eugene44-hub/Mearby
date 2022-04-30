import React from 'react'
interface Props {
  color:string;
  width:string;
  height:string;
text:string;
}
const Button = (props:Props) => {
  return (
    <div style={{width:props}}></div>
  )
}

export default Button