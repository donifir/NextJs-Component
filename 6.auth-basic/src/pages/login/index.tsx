import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<any>([]);

	const router = useRouter();

	const dataSend = async(e: any) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);

		await axios
			.post("http://localhost:8000/api/login", formData)
			.then(function (response) {
				// console.log(response.data.token);
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("username", response.data.username);
				console.log("sukses");
				router.push("/");
			})
			.catch(function (error) {
				// console.log(error.response);
				if (error.response !== undefined) {
					console.log(error.response.data.messages);
					setErrorMessage(error.response.data.messages);
					console.log("gagal");
				}
			});
	};

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
			<div className="mx-auto my-auto w-[30%] min-w-[400px]">
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
					onSubmit={dataSend}
				>
					{/* email */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errorMessage.email ? (
							<p className="text-red-500 text-xs italic">
								{errorMessage.email}
							</p>
						) : (
							""
						)}
					</div>

					{/* password */}
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
