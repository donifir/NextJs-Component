import React from "react";
import image from "../public/assets/category-1.jpg";

const HeroComponent = () => {
	return (
		<section className=" px-2 py-2 w-screen lg:grid grid-cols-2 md:gap-2 ">
			<div className=" h-[638px] mb-2 bg-[url('../public/assets/category-1.jpg')] object-fill bg-cover bg-no-repeat bg-center">
				<div className="flex ml-7 md:ml-20  justify-center h-full flex-col">
					<h1 className="text-[60px] body-font font-cookie">
						Woment's fasioons
					</h1>
					<span className="w-[80%] text-zinc-500">
						Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
						incidid-unt labore edolore magna aliquapendisse ultrices gravida.
					</span>
					<div className="mt-5">
						<span className="text-sm font-semibold  border-red-600 border-b-2 pb-2 ">
							SHOP NOW
						</span>
					</div>
				</div>
			</div>

			<div className=" min-h-[638px] md:grid grid-cols-2 gap-2">
				<div className=" mb-2 h-[314px] md:mb-0  bg-[url('../public/assets/category-2.jpg')] object-fill bg-cover bg-no-repeat bg-center">
					<div className="flex ml-7 justify-center h-full flex-col">
						<h1 className="text-[24px] font-semibold">Ment's fasioons</h1>
						<span className="w-[80%] my-1 text-[14px] text-zinc-500">
							170 items.
						</span>
						<div>
							<span className=" text-sm font-semibold pb-1 mt-3 border-red-600 border-b-2">
								SHOP NOW
							</span>
						</div>
					</div>
				</div>
				<div className=" mb-2 h-[314px] md:mb-0 bg-pink-500 bg-[url('../public/assets/category-3.jpg')] object-fill bg-cover bg-no-repeat bg-center">
					<div className="flex ml-7 justify-center h-full flex-col">
						<h1 className="text-[24px] font-semibold">Ment's fasioons</h1>
						<span className="w-[80%] my-1 text-[14px] text-zinc-500">
							170 items.
						</span>
						<div>
							<span className=" text-sm font-semibold pb-1 mt-3 border-red-600 border-b-2">
								SHOP NOW
							</span>
						</div>
					</div>
				</div>
				<div className=" mb-2 h-[314px] md:mb-0 bg-pink-500 bg-[url('../public/assets/category-4.jpg')] object-fill bg-cover bg-no-repeat bg-center">
					<div className="flex ml-7 justify-center h-full flex-col">
						<h1 className="text-[24px] font-semibold">Ment's fasioons</h1>
						<span className="w-[80%] my-1 text-[14px] text-zinc-500">
							170 items.
						</span>
						<div>
							<span className="  text-sm font-semibold pb-1 mt-3 border-red-600 border-b-2">
								SHOP NOW
							</span>
						</div>
					</div>
				</div>
				<div className=" mb-2 h-[314px] md:mb-0 bg-pink-500 bg-[url('../public/assets/category-5.jpg')] object-fill bg-cover bg-no-repeat bg-center">
					<div className="flex ml-7 justify-center h-full flex-col">
						<h1 className="text-[24px] font-semibold">Ment's fasioons</h1>
						<span className="w-[80%] my-1 text-[14px] text-zinc-500">
							170 items.
						</span>
						<div>
							<span className=" text-sm font-semibold pb-1 mt-3 border-red-600 border-b-2">
								SHOP NOW
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;
