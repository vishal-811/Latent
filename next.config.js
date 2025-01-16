import './src/env.js';

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.plex.tv',
        port: '',
        pathname: '/*', 
      },
    ],
  },
};

export default config;
