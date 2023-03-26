import React from 'react'
import ButtonComponent from './ButtonComponent'

interface Props{
  image:string,
  title:string,
}

function CardComponent({image,title}:Props) {
  return (
    <div className='rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300'>
     <img src={image} alt='/' className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5
      -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <h3 className='font-bold text-2xl mt-4'>{title}</h3>
        <ButtonComponent link='/' text='submit'/>
      </div>
    </div>
  )
}

export default CardComponent