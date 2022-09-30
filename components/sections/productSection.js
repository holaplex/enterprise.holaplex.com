import styled from "@emotion/styled";
import Container from "../container";
import Section from "../section";
import MockWindow from "../mockApplication";
import Image from "next/image";

const ProductSection = (props) => {
	const { children, image, flipped, noWindow } = props;
	return <Section className="bg-white text-black">
		<Container variant="wide" className={"flex flex-col gap-8 items-center " + (flipped ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
			{noWindow ? <div className={"max-w-xl w-full lg:w-1/2 relative " + (typeof image === 'string' ? 'aspect-square lg:aspect-video' : '')}>
				{typeof image === 'string' ? <Image src={image} layout="fill" objectFit="cover" /> : image}
			</div> :
				<MockWindow className="max-w-xl w-full lg:w-1/2">
					<div className={"w-full relative " + (typeof image === 'string' ? 'aspect-square lg:aspect-video' : 'flex')}>
						{typeof image === 'string' ? <Image src={image} layout="fill" objectFit="cover" /> : image}
					</div>
				</MockWindow>
			}
			<div className="w-full lg:w-1/2">
				{children}
			</div>
		</Container>
	</Section>
};

export default ProductSection;