import React, { useState } from "react";
import Link from "next/link";
import Logo from "./assets/Logo";
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import {HiMenu} from 'react-icons/hi'

const NavbarComponent = () => {
	
	return (
		<div className="w-[100%] bg-white shadow-md py-6 px-5">
			<div className="flex flex-row">
				<div className="basis-1/4">
					<Logo/>
				</div>
				<div className="basis-2/4 hidden md:flex flex-row justify-center  items-center gap-4">
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">HOME</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">WOMENT'S</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">MENS'T</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">SHOP</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">PAGES</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">BLOG</p></Link>
					<Link href={'/'} className="hover:-translate-y-1 duration-300 hover:text-gray-600"><p className="text-[15px]">CONTACT</p></Link>
				</div>
				<div className="basis-1/4 hidden md:flex justify-end items-center gap-2" >
					<span className="text-sm text-[#666666]">login / register</span>
					<BiSearch color="grey" size={25}/>
					<AiOutlineHeart color="grey" size={25}/>
					<BsBag color="grey" size={24}/>
				</div>
				<div className="md:hidden flex  basis-3/4 justify-end items-center gap-2">
					<HiMenu color="grey" size={25}/>
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
