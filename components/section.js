import React from "react";

/**
 * Sections divide the larger page into distinct areas. Sometimes with different background colors and paddings.
 * @param {object} props Component props
 * @param {string} props.className Appended to the existing tailwind classes
 * @returns
 */
const Section = (props) => {
	const { children, className } = props;
	return <div {...props} className={"bg-base text-content " + className}>{children}</div>;
};

export default Section;
