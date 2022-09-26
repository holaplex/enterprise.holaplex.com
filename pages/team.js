import Layout from "../components/layout";
import Section from "../components/section";
import Metadata from "../components/metadata";
import Container from "../components/container";
import Image from "next/image";
import Button from "../components/button";

function TeamMember(props) {
	const { name, role, color } = props;
	return <div className="w-48 border border-[#fafafa] lg:min-w-[20rem] p-2 shadow-xl rounded-xl">
		<div className="rounded-xl aspect-square w-full" style={{
			background: color || '#000',
		}} />
		<h2>{name}</h2>
		<p>{role}</p>
	</div>
}

export default function Index() {

	return (
		<Layout>
			<Metadata
				title="Team - Holaplex"
				description="Holaplex is a leader in open-source web3 technologies. We bring our years of experience building in the crypto / web3 ecosystem and delivering success at top global brands."
				image='/img/screenshot.jpg'
			/>

			<Section className="text-black relative py-12 bg-white overflow-hidden">
				<div className="absolute rounded-full w-24 h-48 bg-[#B4419F] top-[-5%] left-[-10%] blur-[120px]" />
				<div className="flex flex-col lg:flex-row lg:my-12 my-6 justify-center items-center lg:items-center relative z-50">
					<div className="lg:w-1/2 w-full lg:px-8 max-w-xl">
						<h1 className="text-2xl lg:text-6xl mt-0">Your Web3 Partner with Enterprise Experience</h1>
						<p>
							Holaplex is a leader in open-source web3 technologies. We bring our years of experience building in the crypto / web3 ecosystem and delivering success at top global brands. For brands, web3 represents a massive opportunity where exponential growth is possible, yet there exist unique challenges that must be considered. When you work with Holaplex you get a partner.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row w-full max-w-4xl relative overflow-hidden lg:py-8 rounded-xl justify-start items-center lg:items-stretch gap-4">
						<div className="absolute top-0 right-0 bottom-0 w-48 hidden lg:block" style={{
							background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
						}} />
						&nbsp;

						<TeamMember name="Alex Kehaya" role="CEO" color="#6CCDD6" />
						<TeamMember name="Anja Bedford" role="COO" color="#A4E8DB" />
						<TeamMember name="Matthew Stotts" role="CSO" color="#C7F5F9" />
					</div>
				</div>
			</Section>

		</Layout>
	);
}
