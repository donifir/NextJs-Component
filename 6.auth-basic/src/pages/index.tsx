import NavbarComponent from "@/component/NavbarComponent";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


axios.interceptors.request.use(
  async config => {
    const token = await localStorage.getItem("token")
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const Home = () => {
	const [token, setToken] = useState("");
	const [userName, setUsername] = useState("");

	const setData = () => {
		setToken(JSON.stringify(localStorage.getItem("token")));
		setUsername(JSON.stringify(localStorage.getItem("username")));
	};

  const router = useRouter();

	useEffect(() => {
		setData();
	}, [token]);

  const btnLogout =async() =>{
    await axios
			.post("http://localhost:8000/api/logout",{email: 'admin@gmail.com'})
			.then(function (response) {
				// console.log(response.data.token);
				localStorage.removeItem("token");
				localStorage.removeItem("username");
				console.log("sukses logout");
				router.push("/");
        setData();
			})
			.catch(function (error) {
				// console.log(error.response);
				console.log("gagal");
			});
  }

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
			<div className="mx-auto my-auto flex justify-center items-center flex-col">
        Hai : {token ? userName : "logout"}
				<div className="text-yellow-100 cursor-pointer" onClick={btnLogout}>
					<p>Logout</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
