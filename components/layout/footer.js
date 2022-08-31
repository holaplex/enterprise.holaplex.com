import React from "react";

const Footer = () => {
	return (
		<div className="mt-4 pb-10">
			<nav className="max-w-7xl mx-auto w-full px-2 py-8 box-border flex flex-col justify-center items-center text-center">
				<p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
			</nav>
		</div>
	);
};

export default Footer;
