import React from 'react'
interface Props{
  img:any
  text:string
}
const ImageCard = (props:Props) => {
  return (
    <div className='w-[350px] mx-3 m-auto mb-[2.5rem]'>
  <img src={props.img} className="w-full" alt="" />
  <p className='text-[1.125rem]  p-4 text-center'>{props.text}</p>
</div>
  )
}

export default ImageCard