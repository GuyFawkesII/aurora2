/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.aurorafast.co.uk'
    ],
  },
  reactStrictMode: true,
  swcMinify: true
}
module.exports = nextConfig