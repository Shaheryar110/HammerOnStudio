/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource", // Use asset/resource to load remote images as files
      }
    );
    return config;
  },
};

module.exports = nextConfig;
