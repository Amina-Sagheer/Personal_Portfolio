/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is necessary for static export
  images: {
    unoptimized: true, // Disable Next.js image optimization if using static export
  },
};

export default nextConfig;

  
  
