import Image from "next/image";
import React from "react";

const DiscoundComponent = () => {
	return (
		<section className="bg-zinc-100 container mx-auto flex flex-col justify-center items-center md:flex-row">
			<div className="basis-1/2 md:basis-1/2 flex justify-center items-center ">
				<Image
					src={"/../public/assets/discount.jpg"}
					alt="img"
					width={600}
					height={600}
				/>
			</div>
			<div className=" py-12 w-full flex justify-center items-center flex-col  md:basis-1/2">
				<div className="h-[183px] w-[183px] bg-white rounded-full flex justify-center items-center flex-col">
					<div className=" w-[300px] flex justify-center items-center flex-col">
						<span>DISCOUNT</span>
						<h1 className="text-[60px] font-cookie text-red-600">Summer 2019</h1>
						<p>
							<span>SALE </span>
							<span>50%</span>
						</p>
					</div>
				</div>
				<div className=" justify-center items-center mt-7">
					<div className="flex gap-5">
						<div>
							<span className="countdown font-mono text-4xl">
								<span style={{ "--value": 15 }}></span>
							</span>
							days
						</div>
						<div>
							<span className="countdown font-mono text-4xl">
								<span style={{ "--value": 10 }}></span>
							</span>
							hours
						</div>
						<div>
							<span className="countdown font-mono text-4xl">
								<span style={{ "--value": 24 }}></span>
							</span>
							min
						</div>
						<div>
							<span className="countdown font-mono text-4xl">
								<span style={{ "--value": 53 }}></span>
							</span>
							sec
						</div>
					</div>
					<div className="flex justify-center items-center mt-3">
						<span className="  text-sm font-semibold pb-1 mt-3 border-red-600 border-b-2">
							SHOP NOW
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscoundComponent;
