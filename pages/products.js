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

			<Section className="text-white text-center relative -mt-24 pt-24 pb-12 bg-[#030E37] overflow-hidden" css={css`
				background: linear-gradient(270deg, #030D31 6.74%, #030E3B 52.46%, #030C35 54.7%, #010C2C 64.64%, #010825 99.17%);
			`}>
				<div className="absolute rounded-full w-96 h-24 bg-[#6680F8] top-1/4 left-[10%] blur-[120px]" />
				<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/4 left-[10%] blur-[120px]" />
				<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] bottom-1/3 right-[10%] blur-[120px]" />
				<Container className="flex flex-col lg:my-12 justify-center items-center relative z-50">
					<p>Enterprise-grade NFT Solutions at Scale</p>
					<h1 className="text-2xl lg:text-6xl mt-0">Products and services</h1>
				</Container>
			</Section>

			<div className="text-black bg-white relative overflow-hidden">
				<Section className="relative my-6 lg:my-12 py-6 lg:py-12">
					<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 right-[30%] blur-[256px]" />
					<div className="lg:absolute relative top-0 bottom-0 right-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/laptop.webp' layout='fill' objectFit="contain" objectPosition="center right" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2">
							<h2 className="lg:text-3xl lg:mt-12 mt-0"><GradientText>Branded Marketplaces</GradientText></h2>
							<p>Powerful branded marketplaces to host secondary NFT sales. Over 40 brands utilize our Whitelabel marketplace tools to aggregate listings across all marketplaces in one branded experience. With new integrations every month, from a ommunity of integration partners, your marketplace will always have the latest and greatest that web3 has to offer</p>
							<ul className='list-disc mt-4 pl-4 leading-loose'>
								<li>Aggregated listings</li>
								<li>Make an offer, instant sale, and auctions</li>
								<li>Multi token support</li>
								<li>Most Popular wallets</li>
								<li>Fiat onramps</li>
								<li>Custodial Walle</li>
							</ul>
						</div>
					</Container>
				</Section>

				<Section className="relative my-6 lg:my-12 py-6 lg:py-12">
					<div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] lg:top-1/4 left-[10%] blur-[256px]" />
					<div className="lg:absolute relative top-0 bottom-0 left-0 w-full lg:w-1/2 lg:aspect-auto aspect-video">
						<Image src='/img/phone.webp' layout='fill' objectFit="contain" objectPosition="center" />
					</div>
					<Container className="left relative z-10">
						<div className="lg:w-1/2 lg:ml-auto">
							<h2 className="lg:text-3xl lg:mt-12 mt-0"><GradientText>API Tools</GradientText></h2>
							<p>API’s that power high-performance applications built on top of decentralized blockchains. Provide a great user experience that increases engagement without having to get bogged down by slow blockchain speeds. A growing suite of APIs trusted by top Web3 protocols</p>
							<ul className='list-disc mt-4 pl-4 leading-loose'>
								<li>Cross Protocol Query Interface</li>
								<li>High-Performance Indexing</li>
								<li>Reliable Infrastructure</li>
							</ul>
						</div>
					</Container>
				</Section>
			</div>

			<Section className="bg-[#F7F7F7] text-black lg:py-20 text-left">
				<Container variant="wide">
					<h2 className="lg:text-4xl"><GradientText>Services</GradientText></h2>
					<ServiceItem>
						<div>Compliance</div>
						<p>Ensure no illegal or sanctioned activities are taking place and set geo-blocked Regions</p>
					</ServiceItem>
					<ServiceItem>
						<div>Crypto servicing</div>
						<p>Avoid having to manage crypto and get paid directly in desired Fiat currency or</p>
					</ServiceItem>
					<ServiceItem>
						<div>Treasury consulting</div>
						<p>Enterprise solutions to manage crypto exchanges, custody solutions, tax, and banking.</p>
					</ServiceItem>
					<ServiceItem>
						<div>Custodial Wallets</div>
						<p>Access to manage NFTs assets with web2 credentials that are safely kept by a vetted 3rd party provider</p>
					</ServiceItem>
					<ServiceItem>
						<div>Crypto Wallets</div>
						<p>Integrations with all major wallets such as Phantom, FTX, Sol Flare, and more…</p>
					</ServiceItem>
					<ServiceItem>
						<div>Fiat onramp</div>
						<p>Buy and trade in fiat immediately. Reduces</p>
					</ServiceItem>
					<ServiceItem>
						<div>KYC</div>
						<p>Know your customer authentication is available to meet internal or regulatory requirements.</p>
					</ServiceItem>
					<ServiceItem>
						<div>User Profiles</div>
						<p>Web2 database sync to web3 assets including 2-factor authentication</p>
					</ServiceItem>
					<ServiceItem>
						<div>Whitelist Management</div>
						<p>Give a defined list of wallets or users early access to drops</p>
					</ServiceItem>
					<ServiceItem>
						<div>Automated NFT Airdrop</div>
						<p>Bulk send NFTs or provide reward tokens when specific requirements are met</p>
					</ServiceItem>
					<ServiceItem>
						<div>QR Code / NFC Chip Redemption</div>
						<p>Scan to trigger an action to buy or receive an NFT</p>
					</ServiceItem>
					<ServiceItem>
						<div>Ticketing</div>
						<p>Utilize NFTs to gain access to an event, trade on secondary markets, and view redemption status.</p>
					</ServiceItem>
					<ServiceItem>
						<div>Gated Content</div>
						<p>Access to exclusive content for NFT holders</p>
					</ServiceItem>
					<ServiceItem>
						<div>Minting as a service</div>
						<p>Set mint parameters such as quantity, utility, currency, and metadata to determine if assets can be editable, stable, or dynamic NFTs.</p>
					</ServiceItem>
					<ServiceItem>
						<div>Digital Right management</div>
						<p>Manage licenses and smart contracts to enable royalty splits and specialized requirements or use cases.</p>
					</ServiceItem>
					<ServiceItem>
						<div>NFT Admin</div>
						<p>Manage your NFTs post-launch to update metadata when allowed, manage utilities, check redemption status, or manage evolutionary NFTs.</p>
					</ServiceItem>
					<ServiceItem>
						<div>Indexing</div>
						<p>High-performance indexing to run Web3 applications</p>
					</ServiceItem>
					<ServiceItem>
						<div>Reporting</div>
						<p>Analytics, tax, and performance reporting dashboard.</p>
					</ServiceItem>
				</Container>
			</Section>

			<Section className="bg-white text-black lg:py-20 relative overflow-hidden text-center">
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
