import Image from "next/image";
import React from "react";
import SmartLink from "../smartlink";

const Footer = () => {
	return (
		<div className="py-10 bg-[#010A2A]">
			<nav className="max-w-7xl mx-auto w-full px-2 py-8 gap-4 box-border flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
				<div className="justify-self-start">
					<SmartLink href="/">
						<Image src="/img/enterprise.svg" width={165} height={15} alt="" />
					</SmartLink>
					<p>Copyright © {new Date().getFullYear()}</p>
				</div>
				<div className="lg:w-1/4" />
				<div className="lg:w-1/2">
					<ul className="lg:flex justify-around flex-wrap gap-4 w-full">
						<li><SmartLink href='/'>Terms of Service</SmartLink></li>
						<li><SmartLink href='/'>Privacy Policy</SmartLink></li>
						<li><SmartLink href='/'>Cookies Settings</SmartLink></li>
						<li><SmartLink href='https://blog.holaplex.com'>Blog</SmartLink></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
