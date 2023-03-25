"use client";
import React, { useState } from "react";
import SectionResult from "./[slug]/sectionResult";

export default function Cari() {
  const [value, setValue] = useState('')

	const hanldeCari = (e: any) => {
		e.preventDefault();
		const query = e.target[0].value; // angka 0 untuk ambil 1 value pertam pertama 
    setValue(query)
	};
	return (
		<div>
			<h3>cari</h3>
			<form onSubmit={(e) => hanldeCari(e)} className="w-full flex space-x-3">
				<input className="bg-zinc-100  w-5/6 px-3 rounded-md"   placeholder="masukan nama" />
				<button className="bg-blue-600 w-1/6 text-white py-2 px-3 rounded-md">cari</button>
			</form>
      {/* <p>mencari : {value}</p> */}
      <SectionResult value={value}/>
		</div>
	);
}
