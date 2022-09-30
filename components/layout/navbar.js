import React, { useState } from "react";
import Image from "next/image";
import SmartLink from "../smartlink";
import * as Icon from 'akar-icons';

const NavItem = ({ children, href, dropdown }) => {

	const [hover, setHover] = useState(false);

	return (
		<li className="inline-block relative" onMouseEnter={e => {
			setHover(true);
		}} onMouseLeave={e => {
			setHover(false);
		}}>
			<SmartLink href={href}>{children}{dropdown ? <Icon.ChevronDown className="inline-block w-4 ml-1" /> : <></>}</SmartLink>
			{dropdown ? <ul className={'absolute top-[100%] w-[300%] left-[-100%] text-center p-2 bg-gray-600 shadow-xl flex flex-col gap-2 rounded ' + (hover ? "block" : "hidden")}>
				{dropdown}
			</ul> : <></>}
		</li>
	);
};

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			<div className="relative z-50 text-white">
				<nav className="max-w-7xl mx-auto w-11/12 px-2 py-4 box-border flex justify-between items-center">
					<div className="my-0 font-semibold text-white max-w-[165px] w-full">
						<SmartLink href="/">
							<Image src="/img/enterprise.svg" width={1509} height={143} alt="" />
						</SmartLink>
					</div>
					<ul className="hidden md:flex gap-10">
						<NavItem href='/'>
							Home
						</NavItem>
						<NavItem href='/products' dropdown={<>
							<NavItem href='/product/command-center'>
								Command Center
							</NavItem>
							<NavItem href='/product/marketplace'>
								Marketplace
							</NavItem>
						</>}>
							Products
						</NavItem>
						<NavItem href='/team'>
							Team
						</NavItem>
						<NavItem href='https://blog.holaplex.com'>
							Blog
						</NavItem>
					</ul>
					<ul className="hidden md:block">
						<NavItem href='/contact'>
							Contact Us
							<div className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] border border-gray-600 rounded" />
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
