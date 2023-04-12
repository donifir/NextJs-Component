"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const AddSuplier = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [isMutating, setIsMutating] = useState(false);

	const router = useRouter();

	function handleChange() {
		setModal(!modal);
	}

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		setIsMutating(true);

		axios
			.post("http://localhost:5000/products", {
				'title': title,
				'price': price
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		setIsMutating(false);
		setTitle("");
		setPrice("");
		router.refresh();
		setModal(false);
	};
	return (
		<div>
			<button className="btn" onClick={handleChange}>
				Add new
			</button>
			<input
				type="checkbox"
				checked={modal}
				onChange={handleChange}
				className="modal-toggle"
			/>

			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Add Product</h3>
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<label htmlFor="namaSuplier">Nama Suplier</label>
							<input
								type="text"
								className="input w-full input-bordered"
								id="namaSuplier"
								placeholder=" Nama SUplier"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="form-control">
							<label htmlFor="alamatSuplier">Alamat Suplier</label>
							<input
								type="text"
								className="input w-full input-bordered"
								id="alamatSuplier"
								placeholder="Alamat SUplier"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<div className="modal-action">
							<button type="button" className="btn" onClick={handleChange}>
								Close
							</button>
							{!isMutating ? (
								<button type="submit" className="btn btn-primary">
									Save
								</button>
							) : (
								<button type="button" className="btn loading">
									Saving...
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddSuplier;