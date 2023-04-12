"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Supliers {
	id: number;
	title: string;
	price: string;
}

const DeleteData = (suplier: Supliers) => {
	const [modal, setModal] = useState(false);
	const [isMutating, setIsMutating] = useState(false);

	const router = useRouter();

	function handleChange() {
		setModal(!modal);
	}

	const handleDelete = (id: any) => {
		setIsMutating(true);

		axios
			.delete(`http://localhost:5000/products/${id}`)
			.then(function (response) {
				console.log(response);
        router.refresh();
			})
			.catch(function (error) {
				console.log(error);
			});
      setIsMutating(false);

     
      setModal(false);
	};

	return (
		<div>
			<button className="btn btn-error btn-sm" onClick={handleChange}>
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
					<h3 className="font-bold text-lg">
						Are You Sure to delete this {suplier.title}. ?
					</h3>
					<div className="modal-action">
						<button type="button" className="btn" onClick={handleChange}>
							Close
						</button>
						{!isMutating ? (
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => handleDelete(suplier.id)}
							>
								Delete
							</button>
						) : (
							<button type="button" className="btn loading">
								Deleting...
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteData;