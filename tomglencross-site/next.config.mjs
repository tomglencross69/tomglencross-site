/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dp98q16wp/image/upload/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
