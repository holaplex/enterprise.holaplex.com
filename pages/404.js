import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import { css } from "@emotion/react";

export default function Page() {
	return (
		<Layout>
			<Section>
				<Container>
					<div
						css={css`
							text-align: center;
							min-height: 50vh;
							display: flex;
							justify-content: center;
							align-items: center;
						`}
					>
						404 | Page not found
					</div>
				</Container>
			</Section>
		</Layout>
	);
}
