import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineArrowsAlt } from "react-icons/ai";
import PartProduct from "./partComponent/PartProduct";

const ProductComponent = () => {
	return (
		<section className="container mx-auto px-2 py-2 mt-16">
			{/* header */}
			<div className="md:flex flex-row items-center justify-between">
				<div className="text-[24px] font-serif mr-5">
					<span className="border-b-2 pb-1 border-pink-500">NEW</span> PRODUCT
				</div>
				{/* category */}
				<div className=" mt-3 md:mt-0 max-w-[500px] text-3xl text-slate-700 flex justify-between md:items-end gap-2 md:w-full">
					<Link
						href={"/"}
						className="cursor-pointer border-b-2 border-pink-500"
					>
						<p className="text-[15px] ">All</p>
					</Link>
					<Link href={"/"} className="cursor-pointer border-b-2 border-white">
						<p className="text-[15px]">Women’s</p>
					</Link>
					<Link href={"/"} className="cursor-pointer border-b-2 border-white">
						<p className="text-[15px]">Men’s</p>
					</Link>
					<Link href={"/"} className="cursor-pointer border-b-2 border-white">
						<p className="text-[15px]">Kid’s</p>
					</Link>
					<Link href={"/"} className="cursor-pointer border-b-2 border-white">
						<p className="text-[15px]">Accessories</p>
					</Link>
					<Link href={"/"} className="cursor-pointer border-b-2 border-white">
						<p className="text-[15px]">Cosmetics</p>
					</Link>
				</div>
			</div>

			{/* product */}
			<div className="grid grid-cols-2 gap-2 my-7 md:grid-cols-3 lg:grid-cols-4 ">
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			<PartProduct/>
			</div>
		</section>
	);
};

export default ProductComponent;
