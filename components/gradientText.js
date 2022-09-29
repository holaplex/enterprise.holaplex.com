import styled from "@emotion/styled";

const gradientTextCSS = `
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`;
const GradientText = styled.span`
    background: linear-gradient(263.43deg, rgba(248, 94, 193, 1) -19.48%, rgba(0, 89, 208, 1) 120.66%);
	&.gray {
		background: linear-gradient(-263.43deg, rgba(255, 255, 255, 1) -20%, rgba(255, 255, 255, 0.3) 120%);
		${gradientTextCSS}
	}
	${gradientTextCSS}
	margin-top: 0;
	display: inline;
`;

export default GradientText;