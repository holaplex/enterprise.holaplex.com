import Image from "next/image";
import React from "react";
import SmartLink from "../smartlink";

const Footer = () => {
	return (
		<div className="mt-4 pb-10">
			<nav className="max-w-7xl mx-auto w-full px-2 py-8 gap-4 box-border flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
				<div className="justify-self-start">
					<SmartLink href="/">
						<Image src="/img/enterprise.svg" width={165} height={15} alt="" />
					</SmartLink>
					<p>Copyright © {new Date().getFullYear()}</p>
				</div>
				<div className="w-1/4" />
				{/*<div>
					<p className="font-bold text-white">App Quick Links</p>
					<ul>
						<li><SmartLink href='/'>Smart Feed</SmartLink></li>
						<li><SmartLink href='/'>Ranking</SmartLink></li>
						<li><SmartLink href='/'>Project Search</SmartLink></li>
						<li><SmartLink href='/'>Feature Request</SmartLink></li>
						<li><SmartLink href='/'>NFT Drops</SmartLink></li>
					</ul>
				</div>
				<div>
					<p className="font-bold text-white">Misc</p>
					<ul>
						<li><SmartLink href='/'>Join NFT Newsletter</SmartLink></li>
						<li><SmartLink href='/'>Ranking</SmartLink></li>
						<li><SmartLink href='/'>Contact us</SmartLink></li>
						<li><SmartLink href='/'>Join our team</SmartLink></li>
						<li><SmartLink href='/'>Privacy Policy</SmartLink></li>
						<li><SmartLink href='/'>Partnership</SmartLink></li>
					</ul>
				</div>
				<div>
					<p className="font-bold text-white">Holaplex Family</p>
					<ul>
						<li><SmartLink href='/'>NFT Merch</SmartLink></li>
						<li><SmartLink href='/'>Holaplex for artists</SmartLink></li>
						<li><SmartLink href='/'>NFT Resources</SmartLink></li>
						<li><SmartLink href='/'>NFT Meditations</SmartLink></li>
					</ul>
				</div>*/}
			</nav>
		</div>
	);
};

export default Footer;
