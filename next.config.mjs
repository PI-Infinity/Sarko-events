/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
