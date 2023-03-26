"use client"
import Link from "next/link";
import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {BsFacebook, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'


function NavbarComponent() {
  const [togle, setTogle] = useState(false)
	return (
		<div className="fixed top-0 w-[100%] bg-white z-20 shadow-md">
			<div className="container mx-auto flex justify-between items-center px-4 py-4">
				<div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
					<span className="italic">D</span>
					<ImHome />
					<span className="italic text-green-700">Home</span>
				</div>
				<div className="hidden md:flex gap-6 tracking-wider text-gray-600">
          <Link href={'/'}><p className="hover:text-green-700">Home</p></Link>
          <Link href="#product"><p className="hover:text-green-700">Productss</p></Link>
          <Link href={'/data'}><p className="hover:text-green-700">Category</p></Link>
				  <Link href={'/'}><p className="hover:text-green-700">Service</p></Link>
				</div>
				<div className="hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white">button</div>
        {togle?(
          <AiOutlineClose onClick={()=>setTogle(!togle)} size={30} className="md:hidden block"/>
        ):(
          <FiMenu onClick={()=>setTogle(!togle)} size={30} className="md:hidden block"/>
        )}
      </div>

      {/* Responsive Menu */}
      <div className={`duration-300 md:hidden flex fixed top-[62px] flex-col bg-black/70 text-white w-[70%] h-screen ${ togle ? `left-[0]` : `left-[-100%]`}` }>
        <Link href={'/'}><p className="hover:text-green-700 p-5">Home</p></Link>
        <Link href='/#product' scroll={false}><p className="hover:text-green-700 p-5">Product</p></Link>
        <Link href={'/data'}><p className="hover:text-green-700 p-5">Category</p></Link>
			  <Link href={'/'}><p className="hover:text-green-700 p-5">Service</p></Link>

        <div className="flex flex-col gap-5 items-center mt-40 ">
          <div className="bg-green-600 w-[250px] h-[1.5px]"></div>
          <div className="flex gap-5">
            <Link href={'/'} target='_blank'><p><BsFacebook size={25} className="text-green-600 hover:-translate-y-1.5 duration-300"/></p></Link>
            <Link href={'/'} target='_blank'><p><BsTwitter size={25} className="text-green-600 hover:-translate-y-1.5 duration-300"/></p></Link>
            <Link href={'/'} target='_blank'><p><BsYoutube size={25} className="text-green-600 hover:-translate-y-1.5 duration-300"/></p></Link>
            <Link href={'/'} target='_blank'><p><BsLinkedin size={25} className="text-green-600 hover:-translate-y-1.5 duration-300"/></p></Link>
          </div>
        </div>
      </div>
		</div>
	);
}

export default NavbarComponent;
