/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 50000, // make sure this number is big enough to load your resource, or do not define it at all.
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
