import React, { Component } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
	background-color: var(--theme-base-light);
	color: var(--theme-content-light);
	text-align: center;
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: var(--theme-base);
	}
	&:active {
		color: var(--theme-content-dark);
	}
`;

const Button = (props) => {
	const { children, className } = props;
	return <StyledButton className={"rounded font-bold py-2 px-4 " + className}>{children}</StyledButton>;
};

export default Button;
