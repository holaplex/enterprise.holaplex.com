import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import yaml from "js-yaml";
import { fetchPageContent } from "../lib/pages";
import fs from "fs";
import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "../components/button";
import SectionHero from "../components/sections/hero";
import GenericContent from "../components/genericContent";
import { formatSlug } from "../utils/formatSlug";

const slugToPostContent = ((pageContents) => {
  let hash = {};
  pageContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPageContent());

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

export default function Page({
  title,
  displayTitle,
  description,
  image,
  sections,
}) {
  //const content = hydrate(source);

  const elements = [];

  for (let index = 0; index < sections.length; index++) {
    const data = sections[index];
    let image = undefined;
    if (data.style !== "full" && data.image) {
      image = (
        <div
          className={
            "lg:absolute relative top-0 w-full lg:w-1/2 bg-contain bg-no-repeat aspect-video pointer-events-none " +
            (data.style === "split-left"
              ? " right-0 bg-top-left"
              : " left-0 bg-right-top")
          }
          style={{ backgroundImage: `url(${data.image})` }}
        />
      );
    }

    elements.push(
      <div
        className={
          "relative lg:min-h-[23vw] py-6 lg:py-12 " +
          (data.colors === "dark"
            ? " bg-gray-800 text-white"
            : " bg-white text-gray-800")
        }
        key={index}
      >
        {image}
        <Container className="left relative z-10">
          <div
            className={
              data.style === "full"
                ? "w-full"
                : data.style === "split-left"
                ? "lg:w-1/2"
                : "lg:w-1/2 lg:ml-auto"
            }
          >
            <GenericContent
              className={data.colors === "dark" ? "theme-dark" : "theme-light"}
            >
              {hydrate(data.content)}
            </GenericContent>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <Layout>
      <Metadata title={title} description={description} image={image} />

      <SectionHero>
        <h2>{displayTitle}</h2>
      </SectionHero>

      {elements}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = fetchPageContent().map((it) => "/" + formatSlug(it.slug));
  return {
    paths,
    fallback: false,
  };
};

const replaceTags = (content) => {
  return content
    .replace(/(<br>|<br >)/gi, "<br />")
    .replace(/(<hr>|<hr >)/gi, "<hr />");
};

export const getStaticProps = async ({ params }) => {
  const slug = params.page;
  let source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  source = source.replace(/\]\(uploads\//g, "](/uploads/");

  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });

  for (let index = 0; index < data.content.length; index++) {
    const section = data.content[index];
    section.content = await renderToString(replaceTags(section.wysiwyg));
  }

  return {
    props: {
      title: data.title,
      displayTitle: data["display-title"],
      slug: data.slug,
      description: data.description || "",
      image: data.image ? data.image : false,
      sections: data.content,
    },
  };
};
