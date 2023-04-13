import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";

const ProductSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	stock: Yup.number()
		.min(2, "Too Short!")
		.max(500, "Too Long!")
		.required("Required"),
	price: Yup.number()
		.min(2, "Too Short!")
		.max(500, "Too Long!")
		.required("Required"),
	namasup: Yup.string()
		.min(1, "Too Short!")
		.max(500, "Too Long!")
		.required("Required"),
});

const CreateProduct = () => {
	const [modal, setModal] = useState(false);
	const [data, setData] = useState<ProductModel | null>();

	async function getUser() {
		try {
			const response = await axios.get("http://localhost:5000/suplier");
			console.log(response.data);
			setData(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	const router = useRouter();

	function handleChange() {
		setModal(!modal);
	}
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
					<h3 className="font-bold text-lg">Add Product{JSON.stringify(data)}</h3>
					<div>
						<Formik
							initialValues={{
								title: "",
								price: "",
								stock: "",
								namasup: "",
							}}
							validationSchema={ProductSchema}
							onSubmit={async (values, { resetForm }) => {
								// same shape as initial values
								console.log(values);
								// axios
								// 	.post("http://localhost:5000/products", {
								// 		title: values.title,
								// 		stock: values.stock,
								// 		price: values.price,
								// 	})
								// 	.then(function (response) {
								// 		setModal(!modal);
								// 		console.log(response);
								// 		resetForm();
								// 		localStorage.setItem("lastdata", response.data);
								// 		router.refresh();
								// 	})
								// 	.catch(function (error) {
								// 		console.log(error);
								// 	});
							}}
						>
							{({ errors, touched, isValid }) => (
								<Form>
									{/* <div className="form-control w-full">
										<label className="label">namasup </label>
										<Field
											name="namasup"
											className="input input-bordered w-full "
										/>
										{errors.namasup && touched.namasup ? (
											<div className="text-red-500">{errors.namasup}</div>
										) : null}
									</div> */}

									<div className="form-control w-full">
										<label className="label">namasup </label>
										<Field name="namasup" as="select">
											{data?.map((datajadi, index) => (
													<option value={datajadi.id} key={index}>{datajadi.namasup}</option>
											))}
										
										</Field>
										{errors.namasup && touched.namasup ? (
											<div className="text-red-500">{errors.namasup}</div>
										) : null}
									</div>

									<div className="form-control w-full">
										<label className="label">Title </label>
										<Field
											name="title"
											className="input input-bordered w-full "
										/>
										{errors.title && touched.title ? (
											<div className="text-red-500">{errors.title}</div>
										) : null}
									</div>

									<div className="form-control w-full mt-3">
										<label className="label">Price </label>
										<Field
											name="price"
											className="input input-bordered w-full "
										/>
										{errors.price && touched.price ? (
											<div className="text-red-500">{errors.price}</div>
										) : null}
									</div>

									<div className="form-control w-full mt-3">
										<label className="label">Stock </label>
										<Field
											name="stock"
											className="input input-bordered w-full "
										/>
										{errors.stock && touched.stock ? (
											<div className="text-red-500">{errors.stock}</div>
										) : null}
									</div>

									<button
										type="submit"
										disabled={!isValid}
										className="btn mt-7"
									>
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</div>
					<div className="modal-action">
						{/* <button type="button" className="btn" onClick={handleChange}>
							Close
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateProduct;
