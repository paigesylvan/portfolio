/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don’t fail the build on TS/ESLint (temporary while debugging)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: allow remote images (empty for now)
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
