import axios from "axios";
import React from "react";
import AddSuplier from "./addSuplier";
import DeleteSuplier from "./deleteSuplier";
import UpdateSuplier from "./updateSuplier";

interface Supliers {
	id: number;
	nama_suplier: string;
	alamat_suplier: string;
	telp_suplier: string;
}

// async function getData() {
//   const res = await fetch('http://127.0.0.1:8001/api/suplier')
//   return res.json()
// }


async function getData() {
	try {
		const response = await axios.get('http://127.0.0.1:8000/api/suplier'
		);
		console.log(response.data.data)
		console.log('data sukses')
		return response.data.data;
	} catch (error) {
		console.log('data sukses')
		console.error(error);
	}
}

const page = async () => {
	const supliers: Supliers[] = await getData();
	console.log(supliers)
	return (
		<div className="py-10 px-10">
			<div className="py-2">
				<AddSuplier/>
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th>No</th>
						<th>Nama Suplier</th>
						<th>Alamat SUplier</th>
						<th>Telp SUplier</th>
						<th>Action</th>
					</tr>
				</thead>
				
				<tbody>
					{supliers.map((suplier, index) => (
						<tr key={index}>
              <td>{index+1}</td>
              <td>{suplier.nama_suplier}</td>
              <td>{suplier.alamat_suplier}</td>
              <td>{suplier.telp_suplier}</td>
              <td className="flex space-x-3"><DeleteSuplier {...suplier}/>
							<UpdateSuplier {...suplier}/></td>
            </tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default page;
