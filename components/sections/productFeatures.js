import Container from "../container";
import Section from "../section";
import Image from "next/image";
import SubtleGlassTile from "../subtleGlassTile";

const ProductFeatures = (props) => {
  const { children, features } = props;
  return (
    <Section className="bg-white text-black relative">
      <div
        className="absolute top-0 left-0 right-0 h-1/3 z-10"
        style={{
          background: "linear-gradient(to bottom, #fff, rgba(255,255,255, 0))",
        }}
      />
      <Image
        src="/img/blue-white-gradient.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <Container variant="wide" className="relative z-20">
        {children}
        <div className="gap-4 flex flex-wrap justify-center mt-10 lg:mt-20">
          {features.map((value, key) => (
            <SubtleGlassTile key={key} className="blue-section">
              {value.icon}
              <p>{value.text}</p>
            </SubtleGlassTile>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProductFeatures;
