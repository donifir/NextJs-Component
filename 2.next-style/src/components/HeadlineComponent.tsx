import React from 'react'
interface Props {
  title:string
}

function HeadlineComponent({title}:Props) {
  return (
    <div className=' flex gap-5 items-center justify-center '>
      <div className='bg-green-600  w-[100px] h-[2px]'></div>
      <h1 className='text-gray-500 uppercase text-2xl'>{title }</h1>
      <div className='bg-green-600  w-[100px] h-[2px]'></div>
    </div>
  )
}

export default HeadlineComponent