import CreateProduct from "@/components/createProduct";
import DeleteProduct from "@/components/deleteProduct";
import UpdateProduct from "@/components/updateProduct";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const index = () => {
	const [data, setData] = useState<ProductModel | null>();

	async function getUser() {
		try {
			const response = await axios.get("http://localhost:5000/products");
			console.log(response.data);
			setData(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container mx-auto px-2 py-2">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="card w-[60%] mt-10 mx-auto bg-base-100 shadow shadow-slate-600">
				<div className="card-body">
					<div className="flex flex-row justify-between">
						<h2 className="card-title">List product!</h2>
						<CreateProduct />
					</div>
					{/* table */}
					<div className="overflow-x-auto">
						<table className="table w-full">
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>Title</th>
									<th>Price</th>
									<th>Stock</th>
									<th>Stock</th>
								</tr>
							</thead>
							<tbody>
								{/* @ts-ignore */}
								{data?.map((product, index) => (
									<tr key={index}>
										<th>{index + 1}</th>
										<td>{product.title}</td>
										<td>{product.price}</td>
										<td>{product.stock}</td>
										<td>
											<>
												<UpdateProduct {...product} />
                        <DeleteProduct {...product} />
											</>
										</td>
									</tr>
								))}
								{/* row 2 */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
