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
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/alpha/:path*",
        destination: "https://www.holaplex.com/alpha/:path*",
        permanent: true,
      },
      {
        source: "/collections/:collectionId*",
        destination: "https://www.holaplex.com/collections/:collectionId*",
        permanent: true,
      },
      {
        source: "/profiles/:wallet*",
        destination: "https://www.holaplex.com/profiles/:wallet*",
        permanent: true,
      },
      {
        source: "/nfts/:address*",
        destination: "https://www.holaplex.com/nfts/:address*",
        permanent: true,
      },
      {
        source: "/discover/:path*",
        destination: "https://www.holaplex.com/discover/:path*",
        permanent: true,
      },
    ];
  },
};
