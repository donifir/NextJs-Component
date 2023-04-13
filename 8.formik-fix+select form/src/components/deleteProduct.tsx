import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteProduct = (product: ProductModel) => {
	const [modal, setModal] = useState(false);

	function handleChange() {
		setModal(!modal);
	}
  const router = useRouter();

	const handleDelete = async (e: any) => {
		await axios
			.delete(`http://localhost:5000/products/${product.id}`)
			.then(function (response) {
				console.log(response);
        setModal(!modal);
        router.refresh();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<button className="btn btn-sm" onClick={handleChange}>
				Delete
			</button>
			<input
				type="checkbox"
				checked={modal}
				onChange={handleChange}
				className="modal-toggle"
			/>

			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg ">Add Product</h3>
					<div>Are you sute to delete {product.title} ?</div>
					<div className="modal-action ">
						<button type="button" className="btn" onClick={handleChange}>
							Cancel
						</button>
						<button type="button" className="btn" onClick={handleDelete}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteProduct;
