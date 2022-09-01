import styled from "@emotion/styled";

const SubtleGlassTile = styled.div`
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.35) 0.12%,
		rgba(255, 255, 255, 0) 50%,
		rgba(255, 255, 255, 0) 70%,
		rgba(255, 255, 255, 0.14) 100%
	);

	border-radius: 0.25rem;
	width: 14rem;
	min-height: 8rem;
	max-width: 100%;
	padding: 1rem;
	backdrop-filter: blur(15px);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	svg, img {
		margin: 0 auto;
		width: 3rem;
		height: auto;
		color: #3B5ACC;
	}
	p {
		margin: auto;
	}
`;

export default SubtleGlassTile;