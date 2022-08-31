import React from "react";
import styled from "@emotion/styled";

/*
 ** Styling for content like the type you get from the CMS, generic HTML, etc.
 */

export const GenericContent = styled.div`
	p,
	ul {
		margin: 1rem 0;
	}

	a {
		color: white;
		text-decoration: underline;
	}

	ul,
	ol {
		padding-left: 1.5rem;
	}
	ul {
		list-style: disc;
	}
	ol {
		list-style: decimal;
	}
	li {
		margin: 0.5rem 0;
	}

	div > iframe,
	.twitter-tweet,
	p > img,
	& > img,
	& > iframe,
	& > iframe {
		margin-left: auto;
		margin-right: auto;
	}
`;
export default GenericContent;
