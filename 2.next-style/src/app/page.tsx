import CategoryComponent from "@/components/CategoryComponent";
import CategorySlider from "@/components/CategorySlider";
import Hero from "@/components/Hero";
import NavbarComponent from "@/components/NavbarComponent";
import ProductComponent from "@/components/ProductComponent";
import React from "react";

export default function Home() {
	return (
		<div className="container">
				<Hero />
				<ProductComponent/>
				<CategoryComponent/>
		</div>
	);
}
