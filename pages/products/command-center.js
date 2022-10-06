
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
					<h1 className="mt-0">Minting and NFT management made simple</h1>
					<p>Create thousands of NFTs, manage utilities, and get detailed reporting all in one place.</p>
				</SectionHero>

				<Section className="-mt-24 lg:-mt-96 hidden lg:block">
					<div className='w-7/12 max-w-3xl mx-auto drop-shadow-lg'>
						<Image src='/uploads/command-center-1.jpg' className="w-full rounded-xl" width={1673} height={1068} priority />
						<div className="absolute top-1/4 -left-1/4 w-1/3 drop-shadow-lg">
							<Image src='/uploads/command-center-2.jpg' width={510} height={498} priority className="rounded-xl" />
						</div>
						<div className="absolute top-8 -right-1/4 w-1/3 drop-shadow-lg">
							<Image src='/uploads/command-center-3.jpg' width={700} height={686} priority className="rounded-xl" />
						</div>
					</div>
				</Section>

				<Section className="bg-brandPurple text-white lg:text-center lg:mt-10 py-4">
					<Container variant='small'>
						<h4>Holaplex <span className="font-thin">Marketplaces</span></h4>
						<h2><GradientText className="silver-transparent inline-block">Get the best that web3 has to offer</GradientText></h2>
						<p>Feature-complete marketplaces with advanced features from top protocol integration</p>
					</Container>
				</Section>

				<ProductSection image={<Image src='/uploads/create-drop-mock-1.jpg' width={1316} height={852} />}>
					<div className='subtitle text-highlight'>Drops Center</div>
					<h3><GradientText>Create NFTs At Scale</GradientText></h3>
					<p>
						Need to mint tens, hundreds, thousands, or maybe millions of NFTs? No problem! Minting with Holaplex saves you time and money by simplifying the minting process. We handle the technology so you can focus on selling.
					</p>
				</ProductSection>

				<ProductSection image={<Image src='/uploads/marketplace-customer-facing-2.jpg' width={1316} height={854} />} flipped>
					<div className='subtitle text-highlight'>Update NFTs</div>
					<h3><GradientText>Edit and Manage Your NFTs</GradientText></h3>
					<p>
						Control your created NFTs to drive powerful utilities. With a central user interface, you can grant NFT holders access to gated content, enable redeemable rewards, or edit metadata.
					</p>
				</ProductSection>

				<ProductSection noWindow image={<Image src='/uploads/Group-1000000828.jpg' width={1271} height={1052} />}>
					<div className='subtitle text-highlight'>Bulk Sending</div>
					<h3><GradientText>Send NFTs to Your Customers</GradientText></h3>
					<p>
						Create compelling campaigns that drive engagement by sending NFTs to specific groups of users. With just a few clicks you can you can create exciting experiences and that increase action.
					</p>
				</ProductSection>

				<ProductSection image={<Image src='/uploads/marketplace-home-page-customer-facing.jpg' width={1316} height={850} />} flipped>
					<div className='subtitle text-highlight'>Powerful Reporting</div>
					<h3><GradientText>Insights You Need To Drive Your Business</GradientText></h3>
					<p>
						Actionable insights at your fingertips. No blockchain wizardry needed, just clear, visual, and intuitive dashboards to stay on track and so you can reach your goals. Access decoded blockchain data that is easy to understand.
					</p>
				</ProductSection>

				<ProductFeatures
					features={[
						{
							icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_1473)"><path d="M46.501 37.6476L48.8373 35.5982L46.7879 32.0528L43.8163 33.057C43.1605 32.5036 42.4227 32.0733 41.603 31.7659L40.9881 28.6918H36.8893L36.2745 31.7454C35.4548 32.0528 34.717 32.4832 34.0612 33.0365L31.0896 32.0323L29.0402 35.5777L31.3765 37.6271C31.2125 38.6518 31.2125 39.1847 31.3765 40.2094L29.0402 42.2588L31.0896 45.8042L34.0612 44.8C34.717 45.3533 35.4548 45.7837 36.2745 46.0911L36.8893 49.1857H40.9881L41.603 46.1321C42.4227 45.8247 43.1605 45.3943 43.8163 44.841L46.7879 45.8452L48.8373 42.2997L46.501 40.2504C46.665 39.2052 46.665 38.6723 46.501 37.6476ZM38.9387 43.0375C36.6844 43.0375 34.84 41.1931 34.84 38.9387C34.84 36.6844 36.6844 34.84 38.9387 34.84C41.1931 34.84 43.0375 36.6844 43.0375 38.9387C43.0375 41.1931 41.1931 43.0375 38.9387 43.0375ZM22.5436 14.346V25.4332L27.3802 30.2698L29.5115 26.6014L26.6424 23.7527V14.346H22.5436ZM43.0375 24.593C43.0375 19.7012 41.0943 15.0097 37.6352 11.5507C34.1762 8.0917 29.4848 6.14844 24.593 6.14844C18.7932 6.14844 13.6287 8.85364 10.2472 13.0344V8.19783H6.14844V20.4942H18.4448V16.3954H12.8295C14.1513 14.5001 15.9107 12.9516 17.9586 11.8813C20.0065 10.811 22.2823 10.2505 24.593 10.2472C32.5036 10.2472 38.9387 16.6823 38.9387 24.593H43.0375ZM22.2567 38.7543C16.129 37.7501 11.2924 32.8111 10.4112 26.6424H6.2714C7.2961 35.8647 15.1043 43.0375 24.593 43.0375H24.7364L22.2567 38.7543Z" fill="#528AD5" /></g><defs><clipPath id="clip0_1_1473"><rect width="49.1855" height="49.1855" fill="white" /></clipPath></defs></svg>,
							text: 'Utility Management',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 2.33337L7 11.6667V25.6667C7 38.6167 15.96 50.7267 28 53.6667C40.04 50.7267 49 38.6167 49 25.6667V11.6667L28 2.33337ZM28 27.9767H44.3333C43.0967 37.59 36.68 46.1534 28 48.8367V28H11.6667V14.7L28 7.44337V27.9767Z" fill="#528AD5" /></svg>,
							text: 'KYC',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.6668 46.666H51.3334V41.9993C51.3333 40.5446 50.88 39.126 50.0364 37.9408C49.1928 36.7556 48.001 35.8626 46.6265 35.3861C45.252 34.9095 43.7632 34.873 42.367 35.2817C40.9709 35.6903 39.7367 36.5238 38.8361 37.6663M39.6668 46.666H16.3334M39.6668 46.666V41.9993C39.6668 40.4686 39.3727 39.0056 38.8361 37.6663M16.3334 46.666H4.66675V41.9993C4.66685 40.5446 5.1202 39.126 5.96376 37.9408C6.80732 36.7556 7.99918 35.8626 9.37367 35.3861C10.7482 34.9095 12.237 34.873 13.6331 35.2817C15.0293 35.6903 16.2635 36.5238 17.1641 37.6663M16.3334 46.666V41.9993C16.3334 40.4686 16.6274 39.0056 17.1641 37.6663M17.1641 37.6663C18.0306 35.5009 19.526 33.6447 21.4574 32.3373C23.3889 31.0298 25.6677 30.331 28.0001 30.331C30.3324 30.331 32.6113 31.0298 34.5427 32.3373C36.4742 33.6447 37.9696 35.5009 38.8361 37.6663M35.0001 16.3326C35.0001 18.1892 34.2626 19.9696 32.9498 21.2824C31.6371 22.5951 29.8566 23.3326 28.0001 23.3326C26.1436 23.3326 24.3631 22.5951 23.0503 21.2824C21.7376 19.9696 21.0001 18.1892 21.0001 16.3326C21.0001 14.4761 21.7376 12.6956 23.0503 11.3829C24.3631 10.0701 26.1436 9.33264 28.0001 9.33264C29.8566 9.33264 31.6371 10.0701 32.9498 11.3829C34.2626 12.6956 35.0001 14.4761 35.0001 16.3326V16.3326ZM49.0001 23.3326C49.0001 24.5703 48.5084 25.7573 47.6332 26.6325C46.7581 27.5076 45.5711 27.9993 44.3334 27.9993C43.0957 27.9993 41.9088 27.5076 41.0336 26.6325C40.1584 25.7573 39.6668 24.5703 39.6668 23.3326C39.6668 22.095 40.1584 20.908 41.0336 20.0328C41.9088 19.1576 43.0957 18.666 44.3334 18.666C45.5711 18.666 46.7581 19.1576 47.6332 20.0328C48.5084 20.908 49.0001 22.095 49.0001 23.3326ZM16.3334 23.3326C16.3334 24.5703 15.8418 25.7573 14.9666 26.6325C14.0914 27.5076 12.9044 27.9993 11.6667 27.9993C10.4291 27.9993 9.24209 27.5076 8.36692 26.6325C7.49175 25.7573 7.00008 24.5703 7.00008 23.3326C7.00008 22.095 7.49175 20.908 8.36692 20.0328C9.24209 19.1576 10.4291 18.666 11.6667 18.666C12.9044 18.666 14.0914 19.1576 14.9666 20.0328C15.8418 20.908 16.3334 22.095 16.3334 23.3326Z" stroke="#528AD5" strokeWidth="4.09798" /></svg>,
							text: 'User Managment',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.4033 8.30662C40.5066 5.06328 35.6766 2.93995 30.3333 2.44995V7.13995C34.3699 7.58328 38.0566 9.19328 41.09 11.62L44.4033 8.30662ZM25.6666 7.13995V2.44995C20.3233 2.91662 15.4933 5.06328 11.5966 8.30662L14.91 11.62C17.9964 9.13382 21.7279 7.57968 25.6666 7.13995ZM11.62 14.91L8.30662 11.5966C5.06328 15.4933 2.93995 20.3233 2.44995 25.6666H7.13995C7.58328 21.6299 9.19328 17.9433 11.62 14.91ZM48.86 25.6666H53.55C53.06 20.3233 50.9366 15.4933 47.6933 11.5966L44.38 14.91C46.8661 17.9964 48.4202 21.7279 48.86 25.6666ZM16.3333 28L24.3599 31.6399L28 39.6666L31.6399 31.6399L39.6666 28L31.6399 24.3599L28 16.3333L24.3599 24.3599L16.3333 28Z" fill="#528AD5" /><path d="M27.9999 49C24.5541 48.9993 21.1618 48.1468 18.1249 46.5185C15.0881 44.8901 12.5008 42.5364 10.5933 39.6667H16.3333V35H2.33325V49H6.99992V42.7C11.6433 49.3267 19.2966 53.6667 27.9999 53.6667C39.3633 53.6667 48.9999 46.27 52.3599 36.0267L47.7866 34.9767C44.9166 43.12 37.1466 49 27.9999 49Z" fill="#528AD5" /></svg>,
							text: 'Programmatic Minting',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0002 39.6667C30.5668 39.6667 32.6668 37.5667 32.6668 35C32.6668 32.4334 30.5668 30.3334 28.0002 30.3334C25.4335 30.3334 23.3335 32.4334 23.3335 35C23.3335 37.5667 25.4335 39.6667 28.0002 39.6667ZM42.0002 18.6667H39.6668V14C39.6668 7.56004 34.4402 2.33337 28.0002 2.33337C21.5602 2.33337 16.3335 7.56004 16.3335 14H20.7668C20.7668 10.01 24.0102 6.76671 28.0002 6.76671C31.9902 6.76671 35.2335 10.01 35.2335 14V18.6667H14.0002C11.4335 18.6667 9.3335 20.7667 9.3335 23.3334V46.6667C9.3335 49.2334 11.4335 51.3334 14.0002 51.3334H42.0002C44.5668 51.3334 46.6668 49.2334 46.6668 46.6667V23.3334C46.6668 20.7667 44.5668 18.6667 42.0002 18.6667ZM42.0002 46.6667H14.0002V23.3334H42.0002V46.6667Z" fill="#528AD5" /></svg>,
							text: 'Unlock Rewards',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 40.25V49H15.75L41.5567 23.1933L32.8067 14.4433L7 40.25ZM48.3233 16.4266C48.5396 16.2108 48.7113 15.9544 48.8283 15.6721C48.9454 15.3898 49.0057 15.0872 49.0057 14.7816C49.0057 14.476 48.9454 14.1734 48.8283 13.8912C48.7113 13.6089 48.5396 13.3525 48.3233 13.1366L42.8633 7.67663C42.6475 7.46032 42.3911 7.28871 42.1088 7.17162C41.8265 7.05453 41.5239 6.99426 41.2183 6.99426C40.9127 6.99426 40.6101 7.05453 40.3279 7.17162C40.0456 7.28871 39.7892 7.46032 39.5733 7.67663L35.3033 11.9466L44.0533 20.6966L48.3233 16.4266Z" fill="#528AD5" /></svg>,
							text: 'Edit Metadata',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2501 18.8276L18.8534 12.2313L51.8327 45.2479L45.2294 51.8443L12.2501 18.8276ZM22.1341 8.92961L28.7327 2.32861L41.9324 15.5259L35.3337 22.1293L22.1341 8.92961ZM2.33105 28.7349L8.92972 22.1339L22.1294 35.3336L15.5307 41.9323L2.33105 28.7349ZM2.33339 48.9999H30.3334V53.6666H2.33339V48.9999Z" fill="#528AD5" /></svg>,
							text: 'Compliance',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5332 25.4333C22.2366 24.0567 20.5332 22.6333 20.5332 20.4167C20.5332 17.8733 22.8899 16.1 26.8332 16.1C30.9866 16.1 32.5266 18.0833 32.6666 21H37.8232C37.6599 16.9867 35.2099 13.3 30.3332 12.11V7H23.3332V12.04C18.8066 13.02 15.1666 15.96 15.1666 20.4633C15.1666 25.8533 19.6232 28.5367 26.1332 30.1C31.9666 31.5 33.1332 33.5533 33.1332 35.7233C33.1332 37.3333 31.9899 39.9 26.8332 39.9C22.0266 39.9 20.1366 37.7533 19.8799 35H14.7466C15.0266 40.11 18.8532 42.98 23.3332 43.9367V49H30.3332V43.9833C34.8832 43.12 38.4999 40.4833 38.4999 35.7C38.4999 29.0733 32.8299 26.81 27.5332 25.4333Z" fill="#528AD5" /></svg>,
							text: 'Treasury Management ',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6667 11.6667H16.3333V18.6667H39.6667V11.6667H44.3333V25.6667H49V11.6667C49 9.10004 46.9 7.00004 44.3333 7.00004H34.58C33.6 4.29337 31.0333 2.33337 28 2.33337C24.9667 2.33337 22.4 4.29337 21.42 7.00004H11.6667C9.1 7.00004 7 9.10004 7 11.6667V44.3334C7 46.9 9.1 49 11.6667 49H23.3333V44.3334H11.6667V11.6667ZM28 7.00004C29.2833 7.00004 30.3333 8.05004 30.3333 9.33337C30.3333 10.6167 29.2833 11.6667 28 11.6667C26.7167 11.6667 25.6667 10.6167 25.6667 9.33337C25.6667 8.05004 26.7167 7.00004 28 7.00004Z" fill="#528AD5" /><path d="M42.0233 30.3334L38.71 33.6234L42.3967 37.31H28V41.9767H42.3967L38.71 45.6867L42.0233 48.9767L51.3333 39.6434L42.0233 30.3334Z" fill="#528AD5" /></svg>,
							text: 'Merchant Services',
						},
						{
							icon: <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6667 39.6667C17.3833 39.6667 16.3333 38.6167 16.3333 37.3333V25.6667C16.3333 24.3833 17.3833 23.3333 18.6667 23.3333C19.95 23.3333 21 24.3833 21 25.6667V37.3333C21 38.6167 19.95 39.6667 18.6667 39.6667ZM28 39.6667C26.7167 39.6667 25.6667 38.6167 25.6667 37.3333V18.6667C25.6667 17.3833 26.7167 16.3333 28 16.3333C29.2833 16.3333 30.3333 17.3833 30.3333 18.6667V37.3333C30.3333 38.6167 29.2833 39.6667 28 39.6667ZM37.3333 39.6667C36.05 39.6667 35 38.6167 35 37.3333V32.6667C35 31.3833 36.05 30.3333 37.3333 30.3333C38.6167 30.3333 39.6667 31.3833 39.6667 32.6667V37.3333C39.6667 38.6167 38.6167 39.6667 37.3333 39.6667ZM42 44.3333H14C12.7167 44.3333 11.6667 43.2833 11.6667 42V14C11.6667 12.7167 12.7167 11.6667 14 11.6667H42C43.2833 11.6667 44.3333 12.7167 44.3333 14V42C44.3333 43.2833 43.2833 44.3333 42 44.3333ZM44.3333 7H11.6667C9.1 7 7 9.1 7 11.6667V44.3333C7 46.9 9.1 49 11.6667 49H44.3333C46.9 49 49 46.9 49 44.3333V11.6667C49 9.1 46.9 7 44.3333 7Z" fill="#528AD5" /></svg>,
							text: 'Performance Analytics',
						},
					]}
				>
					<div className="text-center">
						<h3 className="my-0 text-[#528AD5]">Ultimate Control of Your NFTs</h3>
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
