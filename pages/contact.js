import { attributes } from "../content/pages/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../components/button";
import { css } from "@emotion/react";

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

const ServiceItem = styled.div`
	display: flex;
	justify-items: space-between;
	border-bottom: 1px solid rgba(0,0,0,0.35);
	padding: 1rem 0;
	div {
		font-size: 1.1rem;
		font-weight: 600;
	}
	p {
		margin-left: auto;
		width: 50%;
	}
`;

export default function Index() {
	const { title, description } = attributes;

	return (
		<Layout>
			<Metadata title={title} description={description} image='/img/screenshot.jpg' />

			<Section className="text-white text-center relative -mt-24 pt-24 bg-[#030E37] overflow-hidden" css={css`
				background: linear-gradient(270deg, #030D31 6.74%, #030E3B 52.46%, #030C35 54.7%, #010C2C 64.64%, #010825 99.17%);
			`} />

			<div className="text-black bg-white relative overflow-hidden">
				<Section className="relative my-6 lg:my-12 py-6 lg:py-12">
					<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] top-0 left-0 blur-[256px]" />
					<Container className="left relative z-10 flex flex-wrap">
						<div className="lg:w-1/2 lg:p-4">
							<h2 className="lg:text-3xl mt-0"><GradientText>Discover what Holaplex can do to help maximize your web3 strategy.</GradientText></h2>
							<p>Connect with our team of experts to get a comprehensive and customized walkthrough of our enterprise-grade solutions and services. Discover how Holaplex is partnering with leading brands to maximize shareholder value.</p>
						</div>
						<div className="lg:w-1/2 lg:p-4 lg:bg-white lg:shadow-2xl lg:rounded-xl">
							<h2 className="lg:text-3xl mt-0 text-[#3B5ACC]">Fill up this short form to enter the world of Web3</h2>
							<p>Connect with our team of experts to get a comprehensive and customized.</p>
							<iframe src="/contact-form.html" className="w-full aspect-square"></iframe>
						</div>
					</Container>
				</Section>
			</div>

		</Layout>
	);
}
