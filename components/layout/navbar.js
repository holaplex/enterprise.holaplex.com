import React from "react";
import Button from "../button";
import SmartLink from "../smartlink";
import styled from "@emotion/styled";

const NavItem = ({ children, href }) => {
	return (
		<li className="mx-2 inline-block">
			<SmartLink href={href}>{children}</SmartLink>
		</li>
	);
};

const Navbar = () => {
	return (
		<div className="bg-base text-content theme-light bg-gradient-to-r from-gradient-blue-100 to-gradient-blue-200">
			<nav className="max-w-7xl mx-auto w-11/12 px-2 py-4 box-border flex justify-between">
				<h2 className="my-0 font-semibold text-white">
					<SmartLink href="https://www.holaplex.com/">Holaplex</SmartLink>
					<span className="text-gray-300">
						{" "}
						- <SmartLink href="/">Enterprise</SmartLink>
					</span>
				</h2>
				<ul id="navItems" className="hidden md:block">
					{/*<GetAPIButton />*/}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
