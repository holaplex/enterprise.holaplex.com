import Image from "next/image";
import React from "react";
import SmartLink from "../smartlink";
import { FaDiscord, FaGithub, FaMedium, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="py-10 bg-[#010A2A]">
			<nav className="max-w-7xl mx-auto w-full px-2 py-8 gap-4 box-border flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
				<div className="justify-self-start">
					<SmartLink href="/">
						<Image src="/img/enterprise.svg" width={165} height={15} alt="" />
					</SmartLink>
					<p className="my-4">Copyright © {new Date().getFullYear()}</p>
					<p className="text-[30px]">
						<a href="https://twitter.com/holaplex" className="inline-block m-1" target="_blank" rel="noreferrer">
							<FaTwitter />
						</a>
						<a href="https://discord.com/invite/holaplex" className="inline-block m-1" target="_blank" rel="noreferrer">
							<FaDiscord />
						</a>
						<a href="https://github.com/holaplex" className="inline-block m-1" target="_blank" rel="noreferrer">
							<FaGithub />
						</a>
						<a href="https://www.youtube.com/channel/UCHcdpZiDj7LiBifxetVH29Q" className="inline-block m-1" target="_blank" rel="noreferrer">
							<FaYoutube />
						</a>
						<a href="https://medium.com/holaplex" className="inline-block m-1" target="_blank" rel="noreferrer">
							<FaMedium />
						</a>
					</p>
				</div>
				<div className="lg:w-1/4" />
				<div className="lg:w-1/2">
					<ul className="lg:flex justify-around flex-wrap gap-4 w-full">
						<li><SmartLink href='https://docs.google.com/document/d/1jskpoCdDm7DU2IbeXwRhhl5LGiNhonAx2HsmfJlDsEs/edit'>Terms of Service</SmartLink></li>
						<li><SmartLink href='https://docs.google.com/document/d/12uQU7LbLUd0bY7Nz13-F9cua5Wk8mnRNBlyDzF6gRmo/edit'>Privacy Policy</SmartLink></li>
						<li><SmartLink href='https://blog.holaplex.com'>Blog</SmartLink></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
