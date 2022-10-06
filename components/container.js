import styled from "@emotion/styled";
import React from "react";
import GenericContent from "./genericContent";

const Element = styled.div``;

/**
 * Constrains content to the center of the page, adds a background color, padding, margin, and rounded borders.
 * @param {object} props Component props
 * @param {string} props.className Appended to the existing tailwind classes
 * @returns
 */
const Container = ({ children, className, variant }) => {
	let width = "max-w-5xl";

	switch (variant) {
		case "slim":
			width = "max-w-xl";
			break;
		case "small":
			width = "max-w-2xl";
			break;
		case "wide":
			width = "max-w-6xl";
			break;
		default:
			break;
	}

	return <Element className={width + " mx-auto w-full p-4 md:p-8 bg-base-dark text-content rounded-2xl my-8 " + className}>{children}</Element>;
};

export default Container;
