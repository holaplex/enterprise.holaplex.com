const path = require("path");

module.exports = {
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			loader: "frontmatter-markdown-loader",
			options: { mode: ["react-component"] },
		});
		config.resolve.fallback = { fs: false };
		return config;
	},
	compiler: {
		emotion: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
