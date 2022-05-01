import React from 'react'
interface Props{
  img:any
}
const ImageCard = (props:Props) => {
  return (
    <div className='card mb-[2.5rem]'>
  <img src={one} alt="" />
  <p className='text-[1.125rem]  p-4 text-center'>Our system is built to connect you to a network of professionals 24/7 in real-time.</p>
</div>
  )
}

export default ImageCard