/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cmsassets.rgpub.io',
      },
    ],
  },
}

export default nextConfig
