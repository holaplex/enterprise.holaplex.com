import { attributes } from "../content/pages/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../components/button";
import { css } from "@emotion/react";
import SectionHero from "../components/sections/hero";

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

			<SectionHero>
				<h2>Products</h2>
			</SectionHero>

			<Section className="relative my-6 lg:my-12 py-6 lg:py-12 text-white">
				<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 right-[30%] blur-[256px]" />
				<div className="lg:absolute relative top-0 bottom-0 right-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
					<Image src='/img/laptop.png' layout='fill' objectFit="contain" objectPosition="center right" />
				</div>
				<Container className="left relative z-10">
					<div className="lg:w-1/2">
						<p className="subtitle text-highlight">NFT Command Center</p>
						<h3 className="lg:mt-2 mt-0"><GradientText className="gray">Easily Create And Manage NFTs</GradientText></h3>
						<p>Enterprise grade NFT backend enables you to easily create and manage all of your brands NFT assets. Create NFT drops at scale, manage utilization, distribute whitelist access, and bulk airdrop tokens. Simplified control and powerful utility with just a few clicks.</p>
						<Button href='/products/command-center'>Learn More</Button>
					</div>
				</Container>
			</Section>

			<Section className="relative my-6 lg:my-12 py-6 lg:py-12 text-white">
				<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 left-[10%] blur-[256px]" />
				<div className="lg:absolute relative top-0 bottom-0 left-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
					<Image src='/img/phone.png' layout='fill' objectFit="contain" objectPosition="center" />
				</div>
				<Container className="left relative z-10">
					<div className="lg:w-1/2 lg:ml-auto">
						<p className="subtitle text-highlight">Custom Marketplaces</p>
						<h3 className="lg:mt-2 mt-0"><GradientText className="gray">FEATURE COMPLETE MARKETPLACES</GradientText></h3>
						<p>Quickly launch a whitelabel NFT marketplace or build a bespoke experience with our fully customized solution. With new integrations every month, from a community of integration partners, your marketplace will always have the latest and greatest that web3 has to offer.</p>
						<Button href='/products/marketplace'>Learn More</Button>
					</div>
				</Container>
			</Section>

		</Layout>
	);
}
