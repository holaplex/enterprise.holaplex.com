import React, { useState } from "react";
import Image from "next/image";
import SmartLink from "../smartlink";
import * as Icon from 'akar-icons';

const NavItem = ({ children, href }) => {
	return (
		<li className="mx-2 inline-block">
			<SmartLink href={href}>{children}</SmartLink>
		</li>
	);
};

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			<div className="relative z-50 text-white">
				<nav className="max-w-7xl mx-auto w-11/12 px-2 py-4 box-border flex justify-between items-center">
					<div className="my-0 font-semibold text-white">
						<SmartLink href="/">
							<Image src="/img/enterprise.svg" width={165} height={15} alt="" />
						</SmartLink>
					</div>
					<ul id="navItems" className="hidden md:block">
						<NavItem href='/'>
							Home
						</NavItem>
						<NavItem href='/products'>
							Products
						</NavItem>
						<NavItem href='/team'>
							Team
						</NavItem>
						<NavItem href='https://blog.holaplex.com'>
							Blog
						</NavItem>
					</ul>
					<ul id="navItems" className="hidden md:block">
						<NavItem href='/contact'>
							Contact Us
						</NavItem>
					</ul>
					<div className="block md:hidden" onClick={e => {
						e.preventDefault();
						setActive(!active);
					}}>
						<Icon.ThreeLineHorizontal />
					</div>
				</nav>
			</div>
			<div className="w-screen absolute top-0 bottom-0" style={{
				left: active ? '0%' : '-100%',
				background: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
				zIndex: 9999,
				transition: 'left 1s ease',
			}}>
				<div className="bg-white w-1/2 h-full text-black flex flex-col gap-2">
					<div className="block md:hidden p-2 w-full" onClick={e => {
						e.preventDefault();
						setActive(false);
					}}>
						<Icon.Cross /> Close
					</div>
					<NavItem href='/'>
						Home
					</NavItem>
					<NavItem href='/products'>
						Products
					</NavItem>
					<NavItem href='/team'>
						Team
					</NavItem>
					<NavItem href='https://blog.holaplex.com'>
						Blog
					</NavItem>
					<NavItem href='/contact'>
						Contact Us
					</NavItem>
				</div>
			</div>
		</>
	);
};

export default Navbar;
