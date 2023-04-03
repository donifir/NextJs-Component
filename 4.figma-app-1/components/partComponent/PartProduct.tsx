import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { AiFillStar, AiOutlineArrowsAlt } from "react-icons/ai";

const PartProduct = () => {
  return (
    <div className="h-17 aspect-[2/3.5] rounded-lg group">
					<div >
						<Image
							// loader={myLoader}
							src="/./../public/image/product-1.jpg"
							alt="Picture of the author"
							width={500}
							height={500}
							style={{ height: "auto", width: "100%" }}
						/>
						<div className="relative">
							{/* component animatin */}
							<div className="absolute flex flex-row w-full invisible group-hover:visible justify-around px-11 group-hover:-translate-y-14 duration-500 -top-6">
								<div className=" flex justify-center items-center bg-white rounded-full border border-spacing-1 hover:bg-red-600 p-[10px] transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
									<AiOutlineArrowsAlt size={25} />
								</div>
                <div className="flex justify-center items-center bg-white rounded-full border border-spacing-1 hover:bg-red-600 p-[10px] transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
									<AiOutlineArrowsAlt size={25} />
								</div>

                <div className="flex justify-center items-center bg-white rounded-full border border-spacing-1 hover:bg-red-600 p-[10px] transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300">
									<AiOutlineArrowsAlt size={25} />
								</div>
							</div>
							<div className=" flex flex-col items-center py-4 gap-2">
								<span>Buttons tweed blazer</span>
								<div className="flex flex-row">
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
								</div>
								<span className="font-semibold text-lg">$ 59.0</span>
							</div>
						</div>
					</div>
				</div>
  )
}

export default PartProduct