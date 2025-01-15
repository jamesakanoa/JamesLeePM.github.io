/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/jamesleepm.github.io",
  assetPrefix: "/jamesleepm.github.io",
  trailingSlash: true,
};

module.exports = nextConfig;
