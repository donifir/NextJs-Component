"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Supliers {
	id: number;
	nama_suplier: string;
	alamat_suplier: string;
	telp_suplier: string;
}

const DeleteSuplier = (suplier: Supliers) => {
	const [modal, setModal] = useState(false);
	const [isMutating, setIsMutating] = useState(false);

	const router = useRouter();

	function handleChange() {
		setModal(!modal);
	}

	const handleDelete = (id: any) => {
		setIsMutating(true);

		axios
			.delete(`http://127.0.0.1:8000/api/suplier/delete/${id}`)
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
						Are You Sure to delete this {suplier.nama_suplier}. ?
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

export default DeleteSuplier;
