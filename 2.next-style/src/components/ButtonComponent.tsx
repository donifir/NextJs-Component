import React, { FC } from 'react'

interface Props{
  link:string,
  text:string,
}

function ButtonComponent({link,text}:Props) {
  return (
    <a href ={link} className='btn'>{text}</a>
  )
}

export default ButtonComponent