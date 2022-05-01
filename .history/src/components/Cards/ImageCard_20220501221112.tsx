import React from 'react'
interface Props {
  img: any;
  text: any;
  border?: boolean
}
const ImageCard = (props: Props) => {
  return (
    <div className='w-[350px] z-1
    0 mb-[2.5rem]'>
      <img src={props.img} className={`w-full ${props.border && "border-white border-inset rounded-[10px] border-4"}`} alt="" />
      <div className='text-[1.125rem]  p-4 text-center'>{props.text}</div>
    </div>
  )
}

export default ImageCard