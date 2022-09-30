import styled from "@emotion/styled";
import Container from "../container";
import Section from "../section";
import MockWindow from "../mockApplication";
import Image from "next/image";

const ProductSection = (props) => {
	const { children, image, flipped } = props;
	return <Section className="bg-white text-black">
		<Container className={"flex flex-col gap-8 items-center " + (flipped ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
			<MockWindow className="max-w-xl w-full lg:w-1/2">
				<div className="w-full aspect-square lg:aspect-video relative">
					<Image src={image} layout="fill" objectFit="cover" />
				</div>
			</MockWindow>
			<div className="w-full lg:w-1/2">
				{children}
			</div>
		</Container>
	</Section>
};

export default ProductSection;