/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mongoose'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Optional: silence Turbopack warning
  turbopack: {},
};

export default nextConfig;