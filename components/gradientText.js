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
		background-image: linear-gradient(-263.43deg, rgba(255, 255, 255, 1) -20%, rgba(255, 255, 255, 0.3) 120%);
	}
	&.silver-transparent {
		background-image: linear-gradient(99.96deg, #FFFFFF -22.49%, rgba(255, 255, 255, 0.609657) 40.55%, rgba(255, 255, 255, 0.35) 62.87%);
	}
	${gradientTextCSS}
	margin-top: 0;
`;

export default GradientText;