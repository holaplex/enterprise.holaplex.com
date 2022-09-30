import Layout from "../components/layout";
import Section from "../components/section";
import Metadata from "../components/metadata";
import Image from "next/image";
import GradientText from '../components/gradientText';

function TeamMember(props) {
	const { name, role, color, image, objectFit } = props;
	return <div className="w-11/12 lg:w-5/12 max-w-sm border border-[#fafafa] p-2 shadow-xl rounded-xl">
		<div className="rounded-xl aspect-[1/1.1] w-full relative overflow-hidden" style={{
			background: color || '#000',
		}}>
			<Image src={image} layout="fill" objectFit={objectFit || "contain"} objectPosition='bottom' />
		</div>
		<p className="mt-4 font-bold">{name}</p>
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
				<div className="flex flex-col lg:flex-row lg:my-12 my-6 justify-center relative z-50">
					<div className="lg:w-1/2 w-full px-8 max-w-xl">
						<h2 className="mt-0">
							<GradientText>Your Web3 Partner with Enterprise Experience</GradientText>
						</h2>
						<p>
							Holaplex is a leader in open-source web3 technologies. We bring our years of experience building in the crypto / web3 ecosystem and delivering success at top global brands. For brands, web3 represents a massive opportunity where exponential growth is possible, yet there exist unique challenges that must be considered. When you work with Holaplex you get a partner.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row flex-wrap w-full max-w-4xl relative overflow-hidden lg:p-8 rounded-xl justify-around items-center lg:items-stretch gap-4">
						{/*<div className="absolute top-0 right-0 bottom-0 w-48 z-10 hidden lg:block" style={{
							background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
						}} />*/}
						<TeamMember name="Alex Kehaya" role="CEO" image="/img/team/Alex-Kehaya.png" color="#6CCDD6" />
						<TeamMember name="Anja Bedford" role="COO" image="/img/team/Anja-Bedford.png" color="#A4E8DB" />
						<TeamMember name="Matthew Stotts" role="CSO" image="/img/team/Matthew-Stotts.png" color="#C7F5F9" />
						<TeamMember name="Brian Fox" role="CTO" image="/img/team/Brian-Fox.png" objectFit="cover" color="#C7F5F9" />
					</div>
				</div>
			</Section>

		</Layout>
	);
}
