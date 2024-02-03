/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["blog.grapdevs.com","grapdevs.com","images.unsplash.com","plus.unsplash.com","firebasestorage.googleapis.com","ik.imagekit.io","github.com","cdn.dribbble.com","sp-ao.shortpixel.ai"],
        dangerouslyAllowSVG: true,
        unoptimized: true
      },
};

export default nextConfig;
