import DataLisComponent from "@/components/dataLisComponent";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
//swr untuk fetch data di server component

interface Props {
	value: string;
}

export default function SectionResult({ value }: Props) {
	const [dataAll, setDataAll] = useState<any>([]);
	const { data, error, isLoading } = useSWR(
		`https://api.github.com/search/users?q=${value}`,
		fetcher,
	);
	var loading = !data && !error;
	// useEffect(() => {
	//     setDataAll(data.items)
	// }, [JSON.stringify(data)])

	return (
		<div>
			<p className="text-lg">
				Hasil pencarian : <span className="font-bold">{value}</span>{" "}
			</p>
			<div className="mt-10">
				{loading && "tunggu sebentar"}
				{/* {data && JSON.stringify(data.items)} */}
				{data &&
					data.items?.map((user: any, index: number) => {
						return (
							<DataLisComponent name={user.login} imageUrl={user.avatar_url} repostUrl={user.repos_url} key={index} />
							// <ul key={index}>
							// 	<li>
							// 		<Link href={`/cari/${user.login}`}>{user.login}</Link>
							// 	</li>
							// 	<li>
							// 		<Link href={user.repos_url}>Respository</Link>
							// 	</li>
							// </ul>
						);
					})}
			</div>
		</div>
	);
}
