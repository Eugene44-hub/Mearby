import React from 'react'
interface Props{
  img:any;
  text:string;
border?:boolean
}
const ImageCard = (props:Props) => {
  return (
    <div className='w-[350px]  mb-[2.5rem]'>
  <img src={props.img} className={`w-full ${props.border&&"border-white border-lg border-4"}`}alt="" />
  <p className='text-[1.125rem]  p-4 text-center'>{props.text}</p>
</div>
  )
}

export default ImageCard