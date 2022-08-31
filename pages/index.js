import { attributes } from "../content/pages/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import Button from "../components/button";

const GradientText = styled.h1`
    background: linear-gradient(263.43deg, #528ad5 -19.48%, #ffa2de 120.66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
	font-size: 45px;
	max-width: 9em;
`;

export default function Index() {
	const { title, description } = attributes;

	return (
		<Layout theme="theme-primary">
			<Metadata title={title} description={description} image='/img/screenshot.jpg' />

			<Section className="text-white text-center">
				<div className="flex flex-col p-9 justify-center items-center w-full bg-gradient-to-r from-gradient-blue-100 to-gradient-blue-200">
					<p> Go multi-dimensional to expand the value of your brand.</p>
					<GradientText className="mt-0">Enterprise-grade NFT tools with compliance standards built in.</GradientText>
					<p className="my-4 lg:my-8">
						<Button>Holaplex API</Button>
						<Button>Holaplex For Developers</Button>
					</p>
				</div>
			</Section>


			<Section className="text-black bg-white" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #F597D4, #ffff 25%, #fff 75%)' }}>
				<Container>
					<h1>The Holaplex API</h1>
					<div className="rounded-xl border p-4 backdrop-blur-lg w-full lg:w-3/5 relative z-50">
						<div className="flex flex-col gap-5 max-w-sm">
							<div>✓ Build apps that run fast with low latency</div>
							<div>✓ Replace your get program accounts calls</div>
							<div>✓ Access Solana blockchain through GraphQL</div>
						</div>
					</div>
					<div className="rounded-full w-24 aspect-square -mt-16 ml-24 bg-gradient-to-r from-gradient-blue-700 to-gradient-blue-900" />

					<div className="rounded-xl bg-gray-800 text-white border p-4 py-2 w-full ml-auto lg:w-1/2 relative z-50 flex flex-col lg:-mt-24">
						<div className="flex gap-2 pb-2 -ml-2">
							<div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
							<div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
							<div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
						</div>
						<pre css={css`
							div {
								padding-left: 2em;
								&.truncate {
									padding-left: 0;
								}
							}
						`}>
							&#123;
							<div>
								<span className="text-purple">nfts</span>(
								<div>
									<div className="truncate"><span className="text-green">owners</span>: <span className="text-gradient-blue-700">&#x22;70UUEdptZnZVhSet4q0bU9PtpPfiNUEJ8ftPnrC6YEaa&#x22;</span></div>
									<span className="text-green">offset</span>: 0,<br />
									<span className="text-green">limit</span>: 25
								</div>
								) &#123;
								<div className="text-purple">
									name<br />
									mintAddress<br />
									image(<span className="text-green">width</span>: <span className="text-red">1400</span>) <span className="animate-pulse bg-white">&nbsp;</span>
								</div>
								&#125;
							</div>
							&#125;
						</pre>
					</div>
				</Container>
			</Section>

			<Section className="text-white" style={{ background: '#000929' }}>
				<Container className="flex lg:flex-row flex-col items-center lg:items-stretch gap-4 text-center justify-around">
					<div className="border border-gray-600 rounded-xl p-2 max-w-xs w-full">
						<div className="w-3/5 mx-auto aspect-square">
							<Image src='/img/cross-protocol.png' width={314} height={300} />
						</div>
						<h3 className="text-white font-bold">Cross Protocol Query Interface</h3>
						<p className="text-gray-200">Query multiple on-chain actions across different Solana programs.</p>
					</div>
					<div className="border border-gray-600 rounded-xl p-2 max-w-xs w-full">
						<div className="w-3/5 mx-auto aspect-square">
							<Image src='/img/meter.png' width={320} height={320} />
						</div>
						<h3 className="text-white font-bold">High Performance</h3>
						<p className="text-gray-200">Low latency performance with sub millisecond data query of on-chain data and realtime updates.</p>
					</div>
					<div className="border border-gray-600 rounded-xl p-2 max-w-xs w-full">
						<div className="w-3/5 mx-auto aspect-square">
							<Image src='/img/shield.png' width={330} height={300} />
						</div>
						<h3 className="text-white font-bold">Reliable Infrastructure</h3>
						<p className="text-gray-200">99.9% uptime plus 24 hour support ensures your apps are always working.</p>
					</div>
				</Container>
			</Section>
			<Section className="text-black bg-white">
				<Container className="lg:flex items-center gap-4">
					<div className="lg:w-1/2">
						<Image src="/img/circuit.png" alt='' width={962} height={698} />
					</div>
					<div className="lg:w-1/2 lg:text-left text-center">
						<h1 className="mt-0">The Solana NFT API</h1>
						<p>Get the performance you need to power your on-chain Solana applications</p>
						<p className="mt-4">
						</p>
					</div>
				</Container>
			</Section>
			<Section className="bg-white">
				<Container>
					<div className="text-white bg-black rounded-2xl w-full p-6 relative overflow-hidden">
						<div className="hidden lg:block">
							<Image src='/img/purple-thing.png' alt='' layout='fill' objectFit="cover" />
						</div>
						<div className="lg:w-1/2 relative z-20">
							<h1 className="mt-0">Want to index your protocol?</h1>
							<p className="text-gray-200">Be a part of the growing number of protocols indexing with us.</p>
							<p className="mt-4">
							</p>
						</div>
					</div>
				</Container>
			</Section>
		</Layout>
	);
}
