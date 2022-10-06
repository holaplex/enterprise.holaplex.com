import { attributes } from "../content/pages/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import Image from "next/image";
import Button from "../components/button";
import { css } from "@emotion/react";
import SubtleGlassTile from "../components/subtleGlassTile";
import * as Icon from 'akar-icons';
import GradientText from "../components/gradientText";

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
					<p className="mb-4">Enterprise-grade NFT Solutions</p>
					<h2 className="mt-0"> Maximize your brand’s potential in Web3</h2>
					<div className="my-4 lg:my-8 flex flex-wrap justify-center gap-4">
						<Button href='/contact'>Get Started</Button>
					</div>
				</Container>
			</Section>

			<Section className="text-black bg-white">
				<Container className="text-center">
					<div className="flex flex-wrap justify-around w-full mb-8">
						<div className="w-12 lg:w-24"><Image alt='' src='/img/logos/opensea.png' width={488} height={117} /></div>
					</div>
					<p className="mb-4 relative">
						<img className="absolute top-0 right-[100%] lg:w-6 w-4" width={32} height={32} src='/img/icons/quote-left.svg' />
						<span>
							We are able to quickly and effectively build Solana NFTs drops for our launchpad program with Holaplex’s minting tools.
						</span>
						<img className="absolute top-0 left-[100%] lg:w-6 w-4" width={32} height={32} src='/img/icons/quote-right.svg' />
					</p>
					<p className="lg:text-[32px] font-bold text-gray-400 text-center">
						-Adam Montgomery
						<br />
						<span className="font-thin">Head of Blockchain</span>
					</p>
				</Container>
				<Container>
					<div className="flex flex-wrap justify-around items-center text-center lg:text-left">
						<div className="my-2">
							<h2 className="m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">10,000</GradientText></h2>
							<p className="mt-0 font-bold">CREATORS USE OUR TOOLS</p>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<h2 className="m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">40+</GradientText></h2>
							<p className="mt-0 font-bold">Billions of data points accessible in milliseconds</p>
						</div>
						<div className="hidden lg:block h-16 border-r" />
						<div className="my-2">
							<h2 className="m-0"><GradientText className="mt-0 inline lg:w-1/4 font-medium">15+</GradientText></h2>
							<p className="mt-0 font-bold">Protocols Indexed</p>
						</div>
					</div>
				</Container>
			</Section>

			<Section className="text-black bg-white relative" style={{ backgroundColor: '#A0E0FA' }}>
				<Image src='/img/gradient.jpg' layout='fill' className="absolute inset-0" objectFit="cover" objectPosition="center" />
				<Container className="text-center relative z-10">
					<h3><GradientText>Scalable Technologies For Enterprise</GradientText></h3>
					<p>Onboard to web3 with ease. Built with our suite of open-source software tools and contributions from leading integration partners.</p>
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
							<p className="subtitle text-highlight">NFT Command Center</p>
							<h3 className="lg:mt-2 mt-0"><GradientText>Easily Create And Manage NFTs</GradientText></h3>
							<p>Enterprise grade NFT backend enables you to easily create and manage all of your brands NFT assets. Create NFT drops at scale, manage utilization, distribute whitelist access, and bulk airdrop tokens. Simplified control and powerful utility with just a few clicks.</p>
							<Button href='/products/command-center'>Learn More</Button>
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
							<p className="subtitle text-highlight">Custom Marketplaces</p>
							<h3 className="lg:mt-2 mt-0"><GradientText>FEATURE COMPLETE MARKETPLACES</GradientText></h3>
							<p>Quickly launch a whitelabel NFT marketplace or build a bespoke experience with our fully customized solution. With new integrations every month, from a community of integration partners, your marketplace will always have the latest and greatest that web3 has to offer.</p>
							<Button href='/products/marketplace'>Learn More</Button>
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
						<h2 className=" mt-0"><GradientText className="gray">POWERFUL APIS FOR WEB3 APPS</GradientText></h2>
						<p className="opacity-60">We make your web3 applications run at hyperspeeds. Reading data directly from the blockchain can cause long load times. With our indexer API, we deliver low latency read performance even when TPS is low.</p>
						<div className="my-8 hidden lg:block">
							<Image src='/img/cool-chart-2.svg' alt='' width={1128} height={150} />
						</div>
						<Button href="/contact">Contact Us</Button>
					</div>
				</Container>
				<Container className="relative z-50">
					<h2><GradientText className="gray">Providing Rapid Innovation</GradientText></h2>
					<p className="opacity-60">Open-source development provides strategic advantages through faster product development, improved security and flexibility with no licensing fees. Web3 is a rapidly growing space and building openly ensures the technology stack is always up to date. Holaplex is a leading open source Web3 contributor.</p>
					<div className='mt-12 hidden lg:block'>
						<Image src='/img/cool-chart.svg' alt='' width={1432} height={495} />
					</div>
				</Container>
			</Section>
			<Section className="bg-white text-black lg:py-20 relative overflow-hidden text-center">
				<div className="absolute inset-0 z-10 opacity-50">
					<Image src='/img/lines.svg' layout='fill' objectFit="cover" />
				</div>
				<Container className="relative z-20">
					<h2><GradientText>Let's Work Together</GradientText></h2>
					<p>We make it easy for anyone to buy, sell and engage with NFTs</p>
					<Button href="/contact">Contact Us</Button>
				</Container>
			</Section>

		</Layout>
	);
}
