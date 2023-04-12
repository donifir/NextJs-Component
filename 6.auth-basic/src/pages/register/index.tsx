"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Register = () => {
	const [fullName, setFullName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<any>([]);

  const router = useRouter();

  const dataSend =async(e:any)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',fullName);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('confirm_password',confirmPassword);

    await axios.post('http://localhost:8000/api/register', formData)
    .then(function (response) {
      console.log(response);
      console.log('sukses');
      console.log('sukses');
      router.push('/')
			localStorage.setItem("token", response.data.token);
				localStorage.setItem("username", response.data.username);
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
      console.log('gagal');
    });

  }

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
			<div className="mx-auto my-auto w-[30%]  min-w-[400px]">
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={dataSend}>
					{/* fullname */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="fullname"
						>
							Full Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="fullname"
							type="text"
							placeholder="Full Name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
            {errorMessage.name? <p className="text-red-500 text-xs italic">{errorMessage.name}</p>:''}
					</div>

					{/* email */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="Email"
              value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
            {errorMessage.email? <p className="text-red-500 text-xs italic">{errorMessage.email}</p>:''}
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
            {errorMessage.password? <p className="text-red-500 text-xs italic">{errorMessage.password}</p>:''}
					</div>

					{/* confirm password */}
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="confirmpassword"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="confirmpassword"
							type="confirmpassword"
							placeholder="******************"
              value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
            {errorMessage.confirm_password? <p className="text-red-500 text-xs italic">{errorMessage.confirm_password}</p>:''}
					</div>

					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
						<a
							href="#"
						>
							Have account? Login
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
