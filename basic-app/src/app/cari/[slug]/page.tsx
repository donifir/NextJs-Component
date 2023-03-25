import React, { Suspense } from "react";
import Repolist from "./sectionData";
//https://api.github.com/users/octocat/repos
async function getData(params: string) {
	const res = await fetch(`https://api.github.com/users/${params}`);
	return res.json();
}

// async function getDataRepost(params: string) {
// 	const res = await fetch(`https://api.github.com/users/${params}/repos`);
// 	await new Promise((r) => setTimeout(r, 2000));
// 	return res.json();
// }

// const Repolist = async ({slug}:any) => {
// 	const dataRepost = await getDataRepost(slug)
// 	return <>
// 		<div>
// 			<p>{JSON.stringify(dataRepost)}</p>
// 		</div>
// 	</>;
// };
export default async function Cari({ params }: { params: { slug: string } }) {
	const data = await getData(params.slug);

	// const [user, repost] = await Promise.all([data,dataRepost]) //untuk paralel data fetching

	return (
		<div>
			<p>detail user :{params.slug}</p>
			<p>{JSON.stringify(data)}</p>
			<Suspense fallback="sedang mengambil data....">
        {/* @ts-ignore */}
				<Repolist slug={params.slug} /> 
        {/*
        //pakai blok rendering jika repolis ditaruh di component sendiri
        //pakai squensial data  fetching jika repolis ditaruh di component sendiri 
        */}
			</Suspense>
		</div>
	);
}
