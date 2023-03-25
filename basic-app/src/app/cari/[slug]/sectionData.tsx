async function getDataRepost(params: string) {
  	const res = await fetch(`https://api.github.com/users/${params}/repos`);
  	await new Promise((r) => setTimeout(r, 2000));
  	return res.json();
  }
  
  const Repolist = async ({slug}:any) => {
  	const dataRepost = await getDataRepost(slug)
  	return <>
  		<div>
  			<p>{JSON.stringify(dataRepost)}</p>
  		</div>
  	</>;
  };

  export default Repolist