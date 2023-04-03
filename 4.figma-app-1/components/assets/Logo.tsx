import Image from "next/image";
import React from "react";

function Logo() {
	return (
		<div className="grid-element">
			<Image
				 alt="logo"
				src="/../public/assets/logo.png"
        width={98}
        height={31}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
			/>
		</div>
	);
}

export default Logo;
