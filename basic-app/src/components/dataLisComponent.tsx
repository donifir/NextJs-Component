import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	name: string;
	imageUrl: string;
	repostUrl: string;
}

function DataLisComponent({ name, imageUrl, repostUrl }: Props) {
	return (
		<div className="inline-flex w-full space-x-3">
			<Image
				alt="img"
				src={imageUrl}
				width={60}
				height={60}
				className="rounded-full border-2 border-zinc-100"
			/>
			<div>
				<p className="text-lg font-bold">
					<Link href={`/cari/${name}`}>{name}</Link>
				</p>
				<p className="text-sm hover:text-blue-400 text-zinc-400">
					<Link href={repostUrl}>Lihat Repo</Link>
				</p>
			</div>
		</div>
	);
}

export default DataLisComponent;
