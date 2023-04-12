import Link from 'next/link'
import React from 'react'

const NavbarComponent = () => {
  return (
    <div className='h-10 flex justify-around items-center shadow shadow-black'>
      <div className='hover:text-blue-400 cursor-pointer'><Link href={'/'}>Home</Link></div>
      <div className='hover:text-blue-400 cursor-pointer'><Link href={'/login'}>Login</Link></div>
      <div className='hover:text-blue-400 cursor-pointer'><Link href={'/register'}>Register</Link></div>
    </div>
  )
}

export default NavbarComponent