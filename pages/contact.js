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
  background: linear-gradient(
    263.43deg,
    rgba(248, 94, 193, 1) -19.48%,
    rgba(0, 89, 208, 1) 120.66%
  );
  &.gray {
    background: linear-gradient(
      -263.43deg,
      rgba(255, 255, 255, 1) -20%,
      rgba(255, 255, 255, 0.3) 120%
    );
    ${gradientTextCSS}
  }
  ${gradientTextCSS}
  margin-top: 0;
  display: inline;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-items: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
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
  return (
    <Layout>
      <Metadata title={"Contact"} image="/img/screenshot.jpg" />

      <Section
        className="text-white text-center relative -mt-24 pt-24 bg-[#030E37] overflow-hidden"
        css={css`
          background: linear-gradient(
            270deg,
            #030d31 6.74%,
            #030e3b 52.46%,
            #030c35 54.7%,
            #010c2c 64.64%,
            #010825 99.17%
          );
        `}
      />

      <div className="text-black bg-white relative overflow-hidden">
        <Section className="relative my-6 lg:my-12 py-6 lg:py-12">
          <div className="absolute rounded-full w-24 lg:w-64 aspect-square bg-[#B4419F] top-0 left-0 blur-[256px]" />
          <Container
            variant="wide"
            className="left relative z-10 flex flex-wrap items-start"
          >
            <div className="lg:w-1/2 lg:p-4">
              <h3 className="mt-0 mb-4 uppercase">
                <GradientText>
                  Discover what Holaplex can do to help maximize your web3
                  strategy.
                </GradientText>
              </h3>
              <p>
                Connect with our team of experts to get a comprehensive and
                customized walkthrough of our enterprise-grade solutions and
                white-glove services. Discover how Holaplex is partnering with
                leading brands to maximize shareholder value.{" "}
              </p>
              <Image src="/uploads/Illo01_Final.png" width={869} height={772} />
            </div>
            <div className="lg:w-1/2 lg:p-4 lg:bg-white lg:shadow-2xl lg:rounded-xl">
              <iframe
                src="/contact-form.html"
                className="w-full"
                style={{ aspectRatio: "1/1.25" }}
              ></iframe>
            </div>
          </Container>
        </Section>
      </div>
    </Layout>
  );
}
