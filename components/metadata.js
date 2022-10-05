import Head from "next/head";

/**
 *
 * @param {object} props Component props
 * @param {string} props.title Title of the page
 * @param {string} props.description Description of the page
 * @param {string} props.image Image to use for the page
 * @returns
 */
const Metadata = ({ title, description, image }) => {
	return (
		<Head>
			{title && (
				<>
					<title>{title}</title>
					<meta property="og:title" content={title} />
					<meta name="twitter:title" content={title} />
				</>
			)}

			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
				</>
			)}

			{image && (
				<>
					<meta property="og:image" content={image} />
					<meta name="twitter:image" content={image} />

					<meta name="twitter:card" content="summary_large_image" />
				</>
			)}

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
	);
};

export default Metadata;
