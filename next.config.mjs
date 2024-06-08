/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns:[
      {
        hostname: 'abs.twimg.com',
      }
    ]
  },
};

export default nextConfig;