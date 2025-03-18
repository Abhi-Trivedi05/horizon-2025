// next.config.js

module.exports = {
    images: {
      domains: ['media.licdn.com'],
    },
  };
  

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }