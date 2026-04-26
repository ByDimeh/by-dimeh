import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Vidéos locales servies depuis /public/videos
  // Pour la prod, envisager Vimeo Pro / Cloudflare Stream pour le streaming optimisé
}

export default nextConfig
