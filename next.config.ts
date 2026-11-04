import type { NextConfig } from 'next';

const isPagesDeployment = process.env.PAGES_BASE_PATH === '/cataelegance';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isPagesDeployment ? '/cataelegance' : '',
  assetPrefix: isPagesDeployment ? '/cataelegance' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
