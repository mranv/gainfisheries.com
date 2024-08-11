/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["api.placeholder.com"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
    return config;
  },
};

module.exports = nextConfig;
