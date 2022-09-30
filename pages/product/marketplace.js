
import Layout from "../../components/layout";
import Section from "../../components/section";
import Container from "../../components/container";
import Metadata from "../../components/metadata";
import Image from "next/image";
import Button from "../../components/button";
import SectionHero from "../../components/sections/hero";

import GradientText from "../../components/gradientText";
import MockWindow from "../../components/mockApplication";
import ProductSection from "../../components/sections/productSection";
import ProductFeatures from "../../components/sections/productFeatures";


export default function Index() {

	return (
		<Layout>
			<div className="bg-white">
				<Metadata title={'Command Center'} description={''} image='/img/screenshot.jpg' />

				<SectionHero slanted="h-24 lg:h-96 hidden lg:block" slantedColor="#ffffff">
					<h1 className="mt-0">Launch your brand's, custom NFT Marketplace</h1>
					<p>Leverage the power of Web3 by giving your customers an industry-leading user experience with Holaplex’s whitelabel marketplace.</p>
				</SectionHero>

				<Section className="-mt-24 lg:-mt-96 hidden lg:block">
					<div className='w-7/12 max-w-3xl mx-auto drop-shadow-lg'>
						<Image src='/uploads/marketplace-1.png' width={2248 / 2} height={1451 / 2} priority />
						<div className="absolute top-1/4 -left-1/4 w-1/3 drop-shadow-lg">
							<Image src='/uploads/marketplace-3.png' width={453 / 2} height={410 / 2} priority />
						</div>
						<div className="absolute top-8 -right-1/4 w-5/12 drop-shadow-lg">
							<Image src='/uploads/marketplace-2.png' width={698 / 2} height={501 / 2} priority />
						</div>
					</div>
				</Section>

				<Section className="bg-gray-50 text-black lg:text-center lg:mt-10 py-4">
					<Container variant='small'>
						<h4>Holaplex <span className="font-thin">Marketplaces</span></h4>
						<h2><GradientText>Get the best that web3 has to offer</GradientText></h2>
						<p>Feature-complete marketplaces with advanced features from top protocol integration</p>
					</Container>
				</Section>

				<ProductSection flipped image={<Image src='/uploads/marketplace-sell.jpg' width={1316} height={849} />}>
					<div className='subtitle text-highlight'>NFT Drops</div>
					<h3><GradientText>Sell NFTs at scale</GradientText></h3>
					<p>
						Drive primary sales with your optimized NFT commerce site. Zero NFT knowledge is required for customers to buy, sell and own NFTs. We make it easy to create world-class web3 experiences.
					</p>
				</ProductSection>

				<ProductSection image={<Image src='/uploads/marketplace-hub.jpg' width={1316} height={851} />}>
					<div className='subtitle text-highlight'>Marketplace</div>
					<h3><GradientText>The NFT trading hub for your brand</GradientText></h3>
					<p>
						Capture your maximum potential with a secondary marketplace. Own your customer's journey through the entire NFT experience, support customer-to-customer interactions, and unlock opportunities to capture additional revenue.
					</p>
				</ProductSection>

				<ProductSection flipped image={<Image src='/uploads/marketplace-onboard.jpg' width={1316} height={850} />}>
					<div className='subtitle text-highlight'>User Management</div>
					<h3><GradientText>Easily onboard your customers into web3</GradientText></h3>
					<p>
						Offer safe, reliable, and low-friction wallet management for your users. Allow your customers to use their existing wallets or manage their wallet for them while they maintain control over their assets. Stay compliant and deliver an easy onboarding experience.
					</p>
				</ProductSection>

				<ProductFeatures
					features={[
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3334 48.9949H25.6668V15.9316L21.9568 19.6183L18.6668 16.3283L28.0001 6.99493L37.3334 16.3283L34.0434 19.6183L30.3334 15.9316V20.9949C30.3334 30.9583 39.7368 37.6316 44.3334 40.2916L40.9268 43.6983C36.4701 40.9916 32.9001 37.7949 30.3334 34.3183V48.9949Z" fill="#528AD5" /></svg>,
							text: 'Easy Onboarding',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.6667 14H41.58C41.8367 13.2767 42 12.4833 42 11.6667C42.0025 10.1613 41.519 8.69526 40.6214 7.48673C39.7238 6.27819 38.46 5.39171 37.0181 4.95913C35.5762 4.52655 34.0332 4.571 32.6185 5.08586C31.2039 5.60072 29.9933 6.55848 29.1667 7.81667L28 9.38001L26.8334 7.79334C25.5734 5.92667 23.45 4.66667 21 4.66667C17.1267 4.66667 14 7.79334 14 11.6667C14 12.4833 14.1634 13.2767 14.42 14H9.33335C6.74335 14 4.69002 16.0767 4.69002 18.6667L4.66669 44.3333C4.66669 46.9233 6.74335 49 9.33335 49H46.6667C49.2567 49 51.3334 46.9233 51.3334 44.3333V18.6667C51.3334 16.0767 49.2567 14 46.6667 14ZM35 9.33334C36.2834 9.33334 37.3334 10.3833 37.3334 11.6667C37.3334 12.95 36.2834 14 35 14C33.7167 14 32.6667 12.95 32.6667 11.6667C32.6667 10.3833 33.7167 9.33334 35 9.33334ZM21 9.33334C22.2834 9.33334 23.3334 10.3833 23.3334 11.6667C23.3334 12.95 22.2834 14 21 14C19.7167 14 18.6667 12.95 18.6667 11.6667C18.6667 10.3833 19.7167 9.33334 21 9.33334ZM46.6667 44.3333H9.33335V39.6667H46.6667V44.3333ZM46.6667 32.6667H9.33335V18.6667H21.1867L16.3334 25.27L20.1134 28L25.6667 20.44L28 17.2667L30.3334 20.44L35.8867 28L39.6667 25.27L34.8134 18.6667H46.6667V32.6667Z" fill="#528AD5" /></svg>,
							text: 'Redeem Items',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.6669 46.6659H51.3335V41.9992C51.3334 40.5445 50.8801 39.1259 50.0365 37.9407C49.193 36.7555 48.0011 35.8626 46.6266 35.386C45.2521 34.9094 43.7633 34.873 42.3671 35.2816C40.971 35.6903 39.7368 36.5238 38.8362 37.6662M39.6669 46.6659H16.3335M39.6669 46.6659V41.9992C39.6669 40.4686 39.3729 39.0056 38.8362 37.6662M16.3335 46.6659H4.66687V41.9992C4.66698 40.5445 5.12032 39.1259 5.96388 37.9407C6.80744 36.7555 7.9993 35.8626 9.37379 35.386C10.7483 34.9094 12.2371 34.873 13.6333 35.2816C15.0294 35.6903 16.2636 36.5238 17.1642 37.6662M16.3335 46.6659V41.9992C16.3335 40.4686 16.6275 39.0056 17.1642 37.6662M17.1642 37.6662C18.0307 35.5008 19.5261 33.6447 21.4575 32.3372C23.389 31.0297 25.6678 30.3309 28.0002 30.3309C30.3326 30.3309 32.6114 31.0297 34.5429 32.3372C36.4743 33.6447 37.9697 35.5008 38.8362 37.6662M35.0002 16.3326C35.0002 18.1891 34.2627 19.9696 32.95 21.2823C31.6372 22.5951 29.8567 23.3326 28.0002 23.3326C26.1437 23.3326 24.3632 22.5951 23.0505 21.2823C21.7377 19.9696 21.0002 18.1891 21.0002 16.3326C21.0002 14.4761 21.7377 12.6956 23.0505 11.3828C24.3632 10.0701 26.1437 9.33258 28.0002 9.33258C29.8567 9.33258 31.6372 10.0701 32.95 11.3828C34.2627 12.6956 35.0002 14.4761 35.0002 16.3326V16.3326ZM49.0002 23.3326C49.0002 24.5703 48.5085 25.7572 47.6334 26.6324C46.7582 27.5076 45.5712 27.9992 44.3335 27.9992C43.0959 27.9992 41.9089 27.5076 41.0337 26.6324C40.1585 25.7572 39.6669 24.5703 39.6669 23.3326C39.6669 22.0949 40.1585 20.9079 41.0337 20.0327C41.9089 19.1576 43.0959 18.6659 44.3335 18.6659C45.5712 18.6659 46.7582 19.1576 47.6334 20.0327C48.5085 20.9079 49.0002 22.0949 49.0002 23.3326ZM16.3335 23.3326C16.3335 24.5703 15.8419 25.7572 14.9667 26.6324C14.0915 27.5076 12.9045 27.9992 11.6669 27.9992C10.4292 27.9992 9.24221 27.5076 8.36704 26.6324C7.49187 25.7572 7.0002 24.5703 7.0002 23.3326C7.0002 22.0949 7.49187 20.9079 8.36704 20.0327C9.24221 19.1576 10.4292 18.6659 11.6669 18.6659C12.9045 18.6659 14.0915 19.1576 14.9667 20.0327C15.8419 20.9079 16.3335 22.0949 16.3335 23.3326Z" stroke="#528AD5" strokeWidth="4.09798" /></svg>,
							text: 'Secondary Marketplace',
						},
						{
							icon: <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.7277 10.4432C39.5098 10.1368 39.2216 9.88711 38.8874 9.71487C38.5532 9.54263 38.1827 9.45288 37.8067 9.45313H7.08873C6.65482 9.45352 6.22939 9.57338 5.85909 9.79958C5.4888 10.0258 5.18794 10.3496 4.98951 10.7355C4.79107 11.1213 4.70273 11.5544 4.73416 11.9872C4.76558 12.42 4.91558 12.8357 5.16768 13.1889L15.9993 28.3565L5.16532 43.5241C4.9131 43.8774 4.76309 44.2934 4.73175 44.7263C4.70042 45.1593 4.78897 45.5926 4.98769 45.9785C5.1864 46.3645 5.48761 46.6883 5.85824 46.9143C6.22888 47.1403 6.65462 47.2599 7.08873 47.2598H37.8067C38.1827 47.2601 38.5532 47.1703 38.8874 46.9981C39.2216 46.8258 39.5098 46.5761 39.7277 46.2698L51.5423 29.7293C51.8293 29.3291 51.9837 28.849 51.9837 28.3565C51.9837 27.864 51.8293 27.3839 51.5423 26.9836L39.7277 10.4432ZM36.5898 42.534H11.6799L20.8244 29.7293C21.1114 29.3291 21.2657 28.849 21.2657 28.3565C21.2657 27.864 21.1114 27.3839 20.8244 26.9836L11.6799 14.179H36.5898L46.7172 28.3565L36.5898 42.534Z" fill="#528AD5" /></svg>,
							text: 'Ticketing',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33329 14H4.66663V46.6667C4.66663 49.2333 6.76663 51.3333 9.33329 51.3333H42V46.6667H9.33329V14Z" fill="#528AD5" /><path d="M46.6667 4.66669H18.6667C16.1 4.66669 14 6.76669 14 9.33335V37.3334C14 39.9 16.1 42 18.6667 42H46.6667C49.2333 42 51.3333 39.9 51.3333 37.3334V9.33335C51.3333 6.76669 49.2333 4.66669 46.6667 4.66669ZM46.6667 28L40.8333 24.5L35 28V9.33335H46.6667V28Z" fill="#528AD5" /></svg>,
							text: 'Collect Rewards',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M46.6667 20.999C49.2333 20.999 51.3333 23.099 51.3333 25.6657V30.3323C51.3333 32.899 49.2333 34.999 46.6667 34.999V41.999C46.6667 43.2367 46.175 44.4237 45.2998 45.2988C44.4247 46.174 43.2377 46.6657 42 46.6657H9.33332C8.09565 46.6657 6.90866 46.174 6.03349 45.2988C5.15832 44.4237 4.66666 43.2367 4.66666 41.999V13.999C4.66666 12.7613 5.15832 11.5743 6.03349 10.6992C6.90866 9.824 8.09565 9.33234 9.33332 9.33234H42C43.2377 9.33234 44.4247 9.824 45.2998 10.6992C46.175 11.5743 46.6667 12.7613 46.6667 13.999V20.999ZM42 20.999V13.999H9.33332V41.999H42V34.999H37.3333C34.7667 34.999 32.6667 32.4323 32.6667 30.3323V25.7403C32.6667 23.099 34.7667 20.999 37.3333 20.999H42ZM37.3333 30.3323H42V25.6657H37.3333V30.3323Z" fill="#528AD5" /></svg>,
							text: 'Access Wallet',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6667 39.6666H23.3334V37.3333H25.6667C26.95 37.3333 28 36.2833 28 35V28C28 26.7166 26.95 25.6666 25.6667 25.6666H18.6667V23.3333H28V18.6666H23.3334V16.3333H18.6667V18.6666H16.3334C15.05 18.6666 14 19.7166 14 21V28C14 29.2833 15.05 30.3333 16.3334 30.3333H23.3334V32.6666H14V37.3333H18.6667V39.6666ZM46.6667 9.33331H9.33335C6.74335 9.33331 4.69002 11.41 4.69002 14L4.66669 42C4.66669 44.59 6.74335 46.6666 9.33335 46.6666H46.6667C49.2567 46.6666 51.3334 44.59 51.3334 42V14C51.3334 11.41 49.2567 9.33331 46.6667 9.33331ZM46.6667 42H9.33335V14H46.6667V42ZM32.6667 23.3333L37.3334 18.6666L42 23.3333M42 33.25L37.3334 37.9166L32.6667 33.25" fill="#528AD5" /></svg>,
							text: 'Primary Drops',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.6666 9.33331H9.33329C6.74329 9.33331 4.68996 11.41 4.68996 14L4.66663 42C4.66663 44.59 6.74329 46.6666 9.33329 46.6666H46.6666C49.2566 46.6666 51.3333 44.59 51.3333 42V14C51.3333 11.41 49.2566 9.33331 46.6666 9.33331ZM46.6666 42H9.33329V28H46.6666V42ZM46.6666 18.6666H9.33329V14H46.6666V18.6666Z" fill="#528AD5" /></svg>,
							text: 'Pay With Credit Card',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H25.6667V25.6667H7V7ZM30.3333 7H49V25.6667H30.3333V7ZM7 30.3333H25.6667V49H7V30.3333ZM42 30.3333H37.3333V37.3333H30.3333V42H37.3333V49H42V42H49V37.3333H42V30.3333Z" fill="#528AD5" /></svg>,
							text: 'Customized Integrations',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 18.6667C22.8433 18.6667 18.6667 22.8433 18.6667 28C18.6667 33.1567 22.8433 37.3333 28 37.3333C33.1567 37.3333 37.3333 33.1567 37.3333 28C37.3333 22.8433 33.1567 18.6667 28 18.6667ZM11.6667 35H7V44.3333C7 46.9 9.1 49 11.6667 49H21V44.3333H11.6667V35ZM11.6667 11.6667H21V7H11.6667C9.1 7 7 9.1 7 11.6667V21H11.6667V11.6667ZM44.3333 7H35V11.6667H44.3333V21H49V11.6667C49 9.1 46.9 7 44.3333 7ZM44.3333 44.3333H35V49H44.3333C46.9 49 49 46.9 49 44.3333V35H44.3333V44.3333Z" fill="#528AD5" /></svg>,
							text: 'Branded for your business',
						},
					]}
				>
					<div className="text-center">
						<h3 className="my-0 text-[#528AD5]">Full Feature Marketplaces Built to Scale</h3>
					</div>
				</ProductFeatures>

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
			</div>
		</Layout>
	);
}
