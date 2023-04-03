import React from "react";
import Image from 'next/image'
// import image from "../public/assets/category-1.jpg"

const HeroComponent = () => {
	return (
		<div class="bg-pink-300 px-2 py-2 w-screen lg:grid grid-cols-2 md:gap-2" >
      <div className=" bg-pink-700">
       <Image src="/../public/assets/category-1.jpg " alt="Picture of the author"  width={'100%'}
      height={500}/>
      </div>
      <div className="md:grid grid-cols-2 bg-pink-400 gap-2">
        <div className=" mb-2 h-[314px] md:mb-0 bg-pink-500">aa</div>
        <div className=" mb-2 h-[314px] md:mb-0 bg-pink-500">aa</div>
        <div className=" mb-2 h-[314px] md:mb-0 bg-pink-500">aa</div>
        <div className=" mb-2 h-[314px] md:mb-0 bg-pink-500">aa</div>
      </div>
		</div>
	);
};

export default HeroComponent;
