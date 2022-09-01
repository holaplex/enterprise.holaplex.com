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
import SmartLink from "../components/smartlink";

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
					<div className="my-4 lg:my-8 flex flex-wrap justify-center gap-4">
						<SubtleGlassTile className="w-48 justify-end">
							<img width="32" height="32" src='/img/icons/external-link.svg' alt='' className="absolute top-0 right-0" />
							<p className="w-full text-left mb-0 mt-6 -mb-2 -ml-2">
								Holaplex API
							</p>
							<SmartLink href='https://devtools.holaplex.com/' className="absolute inset-0 z-50" />
						</SubtleGlassTile>
						<SubtleGlassTile className="w-48 justify-end">
							<img width="32" height="32" src='/img/icons/external-link.svg' alt='' className="absolute top-0 right-0" />
							<p className="w-full text-left mb-0 mt-6 -mb-2 -ml-2">
								Holaplex For Developers
							</p>
							<SmartLink href='https://devtools.holaplex.com/' className="absolute inset-0 z-50" />
						</SubtleGlassTile>
					</div>
				</Container>
			</Section>

			<Section className="text-black bg-white">
				<Container className="text-center">
					<div className="flex flex-wrap justify-around w-full mb-8">
						<div className="w-12 lg:w-24 opacity-40"><Image alt='' src='/img/logos/axie-infinity.png' width={239} height={109} /></div>
						<div className="w-12 lg:w-24"><Image alt='' src='/img/logos/campuslegends.png' width={457} height={128} /></div>
						<div className="w-12 lg:w-24 opacity-40"><Image alt='' src='/img/logos/opensea.png' width={488} height={117} /></div>
					</div>
					<p className="text-xl mb-4">"Nice work on your Holaplex. <b>Holaplex was the best investment I ever made.</b> Your company is truly upstanding and is behind its product 100%."</p>
					<p className="font-bold text-xl text-gray-400">- Ariela L, CEO</p>
				</Container>
				<Container>
					<div className="flex flex-wrap justify-around items-center text-center lg:text-left">
						<div className="my-2">
							<h2 className="text-2xl lg:text-4xl m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">10,000</GradientText></h2>
							<p className="mt-0 font-bold">creators use our tools</p>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<h2 className="text-2xl lg:text-4xl m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">40+</GradientText></h2>
							<p className="mt-0 font-bold">whitelabeled marketplaces</p>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<h2 className="text-2xl lg:text-4xl m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">15+</GradientText></h2>
							<p className="mt-0 font-bold">enterprise customers</p>
						</div>
					</div>
				</Container>
			</Section>

			<Section className="text-black bg-white relative" style={{ backgroundColor: '#A0E0FA' }}>
				<Image src='/img/gradient.jpg' layout='fill' className="absolute inset-0" objectFit="cover" objectPosition="center" />
				<Container className="text-center relative z-10">
					<h1><GradientText>Scalable Technologies For Enterprise</GradientText></h1>
					<p>Obtain limitless potential. Built with our suite of open-source software tools and contributions from leading integration partners.</p>
				</Container>
				<Container variant="wide">
					<div className="gap-4 flex flex-wrap justify-center">
						<SubtleGlassTile className="blue-section">
							<Icon.Command />
							<p>NFT Command Center</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/flag.svg' width="50" height="50" alt='' />
							<p>Whitelabel Marketplace</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/api-tools.svg' width="50" height="50" alt='' />
							<p>API Tools</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/users.svg' width="50" height="50" alt='' />
							<p>Wallet / User Management</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/wallet.svg' width="50" height="50" alt='' />
							<p>Custodial Wallets</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<Icon.CheckBox />
							<p>KYC</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/speed-dial.svg' width="50" height="50" alt='' />
							<p>Compliance</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/treasury.svg' width="50" height="50" alt='' />
							<p>Enterprise Treasury</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/on-ramp.svg' width="50" height="50" alt='' />
							<p>Fiat On Ramp</p>
						</SubtleGlassTile>
						<SubtleGlassTile className="blue-section">
							<img src='/img/icons/utility-management.svg' width="50" height="50" alt='' />
							<p>Utility Management</p>
						</SubtleGlassTile>
					</div>
					<div className="relative z-10 text-center">
						<Button href="/products">View all products</Button>
					</div>
				</Container>
			</Section>

			<div className="text-black bg-white relative overflow-hidden">
				<Section className="relative my-6 lg:my-12 py-6 lg:py-12">
					<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 right-[30%] blur-[256px]" />
					<div className="lg:absolute relative top-0 bottom-0 right-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/laptop.png' layout='fill' objectFit="contain" objectPosition="center right" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2">
							<h2 className="lg:text-3xl lg:mt-12 mt-0"><GradientText>Easily create and manage</GradientText></h2>
							<p>Enterprise grade NFT backend enables you to easily create and manage all of your brands NFT assets. Create NFT drops at scale, manage utilization, distribute whitelist access, and bulk airdrop tokens. Simplified control and powerful utility with just a few Clicks.</p>
						</div>
					</Container>
				</Section>

				<Section className="relative my-6 lg:my-12 py-6 lg:py-12">
					<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 left-[10%] blur-[256px]" />
					<div className="lg:absolute relative top-0 bottom-0 left-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/phone.png' layout='fill' objectFit="contain" objectPosition="center" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2 lg:ml-auto">
							<h2 className="lg:text-3xl lg:mt-12 mt-0"><GradientText>Feature complete whitelabel marketplaces</GradientText></h2>
							<p>Powerful branded marketplaces to host secondary NFT sales. Over 40 brands utilize our whitelabel marketplace tools to aggregate listings across all marketplaces in one branded experience. With new integrations every month, from a community of integration partners, your marketplace will always have the latest and greatest that web3 has to offer.</p>
						</div>
					</Container>
				</Section>
			</div>

			<Section className="bg-brandPurple text-white relative overflow-hidden text-center">
				<div className="absolute rounded-full w-24 h-24 bg-[#B4419F] top-1/4 right-1/4" />
				<div className="absolute rounded-full w-24 h-24 bg-[#2E22AC] top-1/3 right-1/3" />
				<div className="absolute rounded-full w-24 h-24 bg-[#B4419F] bottom-1/4 left-1/4" />
				<div className="absolute rounded-full w-24 h-24 bg-[#2E22AC] bottom-1/3 left-1/3" />


				<div className="absolute w-64 aspect-square z-20 bottom-1/2 left-1/4" style={{
					backgroundImage: 'url(/img/dots.svg)',
					backgroundSize: 'contain',
				}} />

				<div className="absolute inset-0 z-10 backdrop-blur-3xl" />
				<Container className="relative z-50">
					<div className="bg-[#140F35] w-full p-2 lg:p-8 border rounded-lg" style={{ borderColor: 'rgba(255,255,255,0.45)' }}>
						<h2 className="lg:text-4xl mt-0"><GradientText className="gray">Powerful APIs for web3 apps</GradientText></h2>
						<p className="opacity-60">API’s that power high performance applications built on top of decentralized blockchains. Provide a great user experience that increases engagement without having to get bogged down from slow blockchain speeds. A growing suite of APIs trusted by top Web3 protocols.</p>
						<div className="my-8 hidden lg:block">
							<Image src='/img/cool-chart-2.svg' alt='' width={1128} height={150} />
						</div>
						<Button href="/contact">Contact Us</Button>
					</div>
				</Container>
				<Container className="relative z-50">
					<h2 className="lg:text-4xl"><GradientText className="gray">Providing Rapid Innovation</GradientText></h2>
					<p className="opacity-60">Open-source development provides strategic advantages by increasing velocity of product development, improved security and ultimate flexibility with no licensing fees. Web3 is a rapidly growing technology and building openly ensures the technology stack is never out of date. Holaplex is the open source Web3 contributor.</p>
					<div className='mt-12 hidden lg:block'>
						<Image src='/img/cool-chart.svg' alt='' width={1432} height={495} />
					</div>
				</Container>
			</Section>
			<Section className="bg-white text-black relative overflow-hidden text-center">
				<div className="absolute inset-0 z-10 opacity-50">
					<Image src='/img/lines.svg' layout='fill' objectFit="cover" />
				</div>
				<Container className="relative z-20">
					<h2 className="lg:text-4xl"><GradientText>Let's Work Together</GradientText></h2>
					<p>We make it easy for anyone to buy, sell and engage with NFTs</p>
					<Button href="/contact">Contact Us</Button>
				</Container>
			</Section>

		</Layout>
	);
}
