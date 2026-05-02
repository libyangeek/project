import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // السماح بالأصول الخاصة ببيئة العمل السحابية لضمان عمل Fast Refresh واستقرار المنظومة السيادية
    allowedDevOrigins: [
      "6000-firebase-sovereignaileastv1-1777740764643.cluster-cbeiita7rbe7iuwhvjs5zww2i4.cloudworkstations.dev",
      "*.cloudworkstations.dev"
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
