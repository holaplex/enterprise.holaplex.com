import { attributes } from "../content/pages/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../components/button";
import { css } from "@emotion/react";
import SubtleGlassTile from "../components/subtleGlassTile";
import * as Icon from 'akar-icons';

const GradientText = styled.h1`
    background: linear-gradient(263.43deg, rgba(248, 94, 193, 1) -19.48%, rgba(0, 89, 208, 1) 120.66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
	margin-top: 0;
`;

export default function Index() {
	const { title, description } = attributes;

	return (
		<Layout>
			<Metadata title={title} description={description} image='/img/screenshot.jpg' />

			<Section className="text-white text-center relative -mt-24 pt-24 bg-[#030E37] overflow-hidden" css={css`
				background: linear-gradient(270deg, #030D31 6.74%, #030E3B 52.46%, #030C35 54.7%, #010C2C 64.64%, #010825 99.17%);
			`}>
				<div className="absolute rounded-full w-96 h-24 bg-[#6680F8] top-1/4 left-[10%] blur-[120px]" />
				<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/4 left-[10%] blur-[120px]" />
				<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/3 right-[10%] blur-[120px]" />


				<Container className="flex flex-col lg:my-24 justify-center items-center relative z-50">
					<p>Go multi-dimensional to expand the value of your brand.</p>
					<h1>Enterprise-grade NFT tools with compliance standards built in.</h1>
					<p className="my-4 lg:my-8">
						<Button>Holaplex API</Button>
						<Button>Holaplex For Developers</Button>
					</p>
				</Container>
			</Section>

			<Section className="text-black bg-white">
				<Container className="text-center">
					<p className="text-xl mb-4">"Nice work on your Holaplex. Holaplex was the best investment I ever made. Your company is truly upstanding and is behind its product 100%."</p>
					<p className="font-bold text-xl text-gray-400">- Ariela L, CEO</p>
				</Container>
				<Container>
					<div className="flex flex-wrap justify-around items-center">
						<div className="my-2">
							<GradientText className="mt-0 inline lg:w-1/4 font-medium">10,000</GradientText>
							<h4 className="mt-0 font-light">creators use our tools</h4>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<GradientText className="mt-0 inline lg:w-1/4 font-medium">40+</GradientText>
							<h4 className="mt-0 font-light">whitelabeled marketplaces</h4>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<GradientText className="mt-0 inline lg:w-1/4 font-medium">15+</GradientText>
							<h4 className="mt-0 font-light">enterprise customers</h4>
						</div>
					</div>
				</Container>
			</Section>

			<Section className="text-black bg-white relative" style={{ backgroundColor: '#A0E0FA' }}>
				<Image src='/img/gradient.jpg' layout='fill' className="absolute inset-0" objectFit="cover" objectPosition="center" />
				<Container className="text-center relative z-10">
					<GradientText>Scalable Technologies For Enterprise</GradientText>
					<p>Obtain limitless potential. Built with our suite of open-source software tools and contributions from leading integration partners.</p>
				</Container>
				<Container variant="wide">
					<div className="gap-4 flex flex-wrap justify-center">
						<SubtleGlassTile>
							<Icon.Command />
							<p>NFT Command Center</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/flag.svg' width="50" height="50" alt='' />
							<p>Whitelabel Marketplace</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/api-tools.svg' width="50" height="50" alt='' />
							<p>API Tools</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/users.svg' width="50" height="50" alt='' />
							<p>Wallet / User Management</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/wallet.svg' width="50" height="50" alt='' />
							<p>Custodial Wallets</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<Icon.CheckBox />
							<p>KYC</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/speed-dial.svg' width="50" height="50" alt='' />
							<p>Compliance</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/treasury.svg' width="50" height="50" alt='' />
							<p>Enterprise Treasury</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/on-ramp.svg' width="50" height="50" alt='' />
							<p>Fiat On Ramp</p>
						</SubtleGlassTile>
						<SubtleGlassTile>
							<img src='/img/icons/utility-management.svg' width="50" height="50" alt='' />
							<p>Utility Management</p>
						</SubtleGlassTile>
					</div>
				</Container>
			</Section>

			<div className="text-black bg-white relative overflow-hidden">
				<Section className="relative my-12 lg:my-24">
					<div className="absolute rounded-full w-24 lg:w-48 aspect-square bg-[#B4419F] lg:top-1/4 right-[10%] blur-[128px]" />
					<div className="lg:absolute relative top-0 bottom-0 right-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/laptop.png' layout='fill' objectFit="contain" objectPosition="center right" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2">
							<GradientText>Easily create and manage</GradientText>
							<p>Enterprise grade NFT backend enables you to easily create and manage all of your brands NFT assets. Create NFT drops at scale, manage utilization, distribute whitelist access, and bulk airdrop tokens. Simplified control and powerful utility with just a few Clicks.</p>
						</div>
					</Container>
				</Section>

				<Section className="relative my-12 lg:my-24">
					<div className="absolute rounded-full w-24 lg:w-48 aspect-square bg-[#B4419F] lg:top-1/4 left-[10%] blur-[128px]" />
					<div className="lg:absolute relative top-0 bottom-0 left-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/phone.png' layout='fill' objectFit="contain" objectPosition="center" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2 lg:ml-auto">
							<GradientText>Feature complete whitelabel marketplaces</GradientText>
							<p>Powerful branded marketplaces to host secondary NFT sales. Over 40 brands utilize our whitelabel marketplace tools to aggregate listings across all marketplaces in one branded experience. With new integrations every month, from a community of integration partners, your marketplace will always have the latest and greatest that web3 has to offer.</p>
						</div>
					</Container>
				</Section>
			</div>

			<Section className="bg-brandPurple text-white relative overflow-hidden">
				<div className="absolute rounded-full w-24 h-24 bg-[#B4419F] top-1/4 right-1/4" />
				<div className="absolute rounded-full w-24 h-24 bg-[#2E22AC] top-1/3 right-1/3" />
				<div className="absolute rounded-full w-24 h-24 bg-[#B4419F] bottom-1/4 left-1/4" />
				<div className="absolute rounded-full w-24 h-24 bg-[#2E22AC] bottom-1/3 left-1/3" />
				<div className="absolute inset-0 z-10 backdrop-blur-3xl" />
				<Container className="relative z-20">
					<GradientText>Powerful APIs for web3 apps</GradientText>
				</Container>
				<Container className="relative z-20">
					<GradientText>Powerful APIs for web3 apps</GradientText>
				</Container>
			</Section>

		</Layout>
	);
}
