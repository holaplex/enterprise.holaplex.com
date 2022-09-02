import React from "react";
import Image from "next/image";
import SmartLink from "../smartlink";

const NavItem = ({ children, href }) => {
	return (
		<li className="mx-2 inline-block">
			<SmartLink href={href}>{children}</SmartLink>
		</li>
	);
};

const Navbar = () => {
	return (
		<div className="relative z-50 text-white">
			<nav className="max-w-7xl mx-auto w-11/12 px-2 py-4 box-border flex justify-between">
				<h2 className="my-0 font-semibold text-white">
					<SmartLink href="/">
						<Image src="/img/enterprise.svg" width={165} height={15} alt="" />
					</SmartLink>
				</h2>
				<ul id="navItems" className="hidden md:block">
					<NavItem href='/'>
						Home
					</NavItem>
					<NavItem href='/products'>
						Products
					</NavItem>
					{/*<NavItem href='/team'>
						Team
					</NavItem>*/}
					<NavItem href='https://blog.holaplex.com'>
						Blog
					</NavItem>
				</ul>
				<ul id="navItems" className="hidden md:block">
					<NavItem href='/contact'>
						Contact Us
					</NavItem>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
