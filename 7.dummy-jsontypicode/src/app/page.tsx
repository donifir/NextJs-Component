import axios from "axios";
import React from "react";
import AddSuplier from "./component/addSuplier";
import DeleteSuplier from "./component/deleteSuplier";
import UpdateSuplier from "./component/updateSuplier";

interface Supliers {
	id: number;
	title: string;
	price: string;
}

async function getData() {
	try {
		const response = await axios.get("http://localhost:5000/products");
		// console.log(response.data.data);
		// console.log("data sukses");
		return response.data;
	} catch (error) {
		// console.log("data sukses");
		// console.error(error);
	}
}

const page = async () => {
	const products: Supliers[] = await getData();
	// console.log(products);
	return (
		<div className="py-10 px-10">
			<div className="py-2">
				<AddSuplier />
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th>No</th>
						<th>Title</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{product.title}</td>
							<td>{product.price}</td>
							<td className="flex space-x-3">
								<DeleteSuplier {...product} />
								<UpdateSuplier {...product} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default page;
