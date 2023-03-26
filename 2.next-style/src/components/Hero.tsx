import React from "react";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import {BsFacebook, BsLinkedin, BsTwitter, BsYoutube} from 'react-icons/bs'
// import './../../public/pexels-vecislavas-popa-1571471.jpg'
function Hero() {
	return (
		<div className='bg-[url("./../../public/pexels-vecislavas-popa-1571471.jpg")] h-screen bg-cover w-screen bg-no-repeat bg-center bg-fixed flex  relative'>
			<div className="absolute w-full h-full bg-black/50 items-center justify-center flex ">
				<div className="container mx-auto px-4 z-10">
					<div className="max-w-[450px] text-white flex flex-col gap-[20px] md:gap-[40px] ">
						<div>
							<h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
								Deign Your Dream
							</h1>
						</div>
						<div>
							<h1 className=" text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">
								{" "}
								<span className="text-green-600">Home </span>Very Easily
							</h1>
						</div>
						<div className="bg-green-600 h-[2px] w-[150px]" />
						<div>
							<p className="text-sm md:text-xl text-gray-300 tracking-widest mb-6">
								Simple Furniture And Hight-end Quality
							</p>
							<div>
								<ButtonComponent link="/" text="Explore Product" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center">
        <div className="bg-green-600 w-[1.5px] h-[250px]"></div>
        <Link href={'/'} target='_blank'><p><BsFacebook size={25} className="text-green-600 hover:-translate-x-1.5 duration-300"/></p></Link>
        <Link href={'/'} target='_blank'><p><BsTwitter size={25} className="text-green-600 hover:-translate-x-1.5 duration-300"/></p></Link>
        <Link href={'/'} target='_blank'><p><BsYoutube size={25} className="text-green-600 hover:-translate-x-1.5 duration-300"/></p></Link>
        <Link href={'/'} target='_blank'><p><BsLinkedin size={25} className="text-green-600 hover:-translate-x-1.5 duration-300"/></p></Link>
      </div>
		</div>
	);
}

export default Hero;
