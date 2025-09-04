/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  output: process.env.NEXT_OUTPUT || undefined
};

export default nextConfig;

