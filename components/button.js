import React from "react";
import styled from "@emotion/styled";
import SmartLink from "./smartlink";

const StyledButton = styled.button`
	background-color: #528AD5;
	color: #FFFFFF;
	text-align: center;
`;

const Button = (props) => {
	const { children, className, href } = props;
	const button = <StyledButton className={"rounded font-bold py-2 px-4 lg:py-3 lg:px-16 mt-4 lg:mt-8 " + className}>{children}</StyledButton>;
	if (href) {
		return <SmartLink href={href}>
			{button}
		</SmartLink>
	}
	return button;
};

export default Button;
