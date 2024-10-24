/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'images.unsplash.com',
        'cdn.hashnode.com',
        'cdn.dribbble.com',
        'private-user-images.githubusercontent.com',
        'uploads-ssl.webflow.com',
        'miro.medium.com',
        'i.pinimg.com',
        'img.icons8.com',
        'icons8.com',
        'encrypted-tbn0.gstatic.com',
        'pbs.twimg.com',
        'assets.aceternity.com',
        'api.microlink.io',
      ],
    },
    env: {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS,
    },
  };
  
  export default nextConfig;
  