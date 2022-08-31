import Link from "next/link";
import React from "react";

const Pagination = ({ data }) => {
	const elements = [];
	for (let page = 1; page <= data.pages; page++) {
		elements.push(
			<Link key={page} href={page === 1 ? "/" : "/" + page}>
				<a className={"p-1 " + (page == data.current ? "font-bold underline" : "font-light")}>{page}</a>
			</Link>
		);
	}
	return <div className={"flex gap-4 justify-center items-center"}>{elements}</div>;
};

export default Pagination;
