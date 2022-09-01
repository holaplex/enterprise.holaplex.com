import React from "react";
import Link from "next/link";

/**
 * Chooses between NextJS links and <a> links automatically
 * @param {object} props Component props
 * @param {string} props.href Link destination
 * @param {string} props.className passed to the link/anchor element
 * @returns
 */
const SmartLink = ({ children, href, className }) => {
	if (href.substr(0, 1) === "/" && href.substr(0, 2) !== "//") {
		return (
			<Link href={href}>
				<a className={className}>
					{children}
				</a>
			</Link>
		);
	}
	return (
		<a href={href} className={className}>
			{children}
		</a>
	);
};

export default SmartLink;
