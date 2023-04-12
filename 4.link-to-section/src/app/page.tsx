import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
      <a href="#second-section">My second section</a>
			<div className="mt-56">
        <Link href={'#second-section'}>link</Link>
      </div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56">asda</div>
			<div className="mt-56" id="btn">asda</div>
      <div id="second-section">SECTION 2</div>
		</div>
	);
};

export default page;
