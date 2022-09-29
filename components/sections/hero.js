import Section from "../section";
import Container from "../container";
import { css } from "@emotion/react";

export default function SectionHero(props) {
	return <Section className="text-white text-center relative -mt-24 pt-24 pb-12 bg-[#030E37] overflow-hidden" css={css`
		background: linear-gradient(270deg, #030D31 6.74%, #030E3B 52.46%, #030C35 54.7%, #010C2C 64.64%, #010825 99.17%);
	`}>

		<div className="absolute rounded-full w-96 h-24 bg-[#6680F8] top-1/4 left-[10%] blur-[120px]" />
		<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/4 left-[10%] blur-[120px]" />
		<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/3 right-[10%] blur-[120px]" />


		<Container className="flex flex-col lg:my-12 justify-center items-center relative z-50">
			{props.children}
		</Container>

		{props.hasOwnProperty('slanted') ? <div
			className={"-mb-12 relative overflow-hidden " + props.slanted}
		>
			<svg
				className="w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				width="100%"
				height="100%"
				viewBox="0 0 1 1"
			>
				<defs>
					<style dangerouslySetInnerHTML={{ __html: `.cls-1{fill: currentColor;}` }} />
				</defs>
				<polygon className="cls-1" points="0 0 1 1 0 1 0 0" />
			</svg>
		</div> : <></>}

	</Section>
}