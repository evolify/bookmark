/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [{
      hostname: "www.notion.so",
    }, {
      hostname: "notion.so",
    }, {
      hostname: "images.unsplash.com",
    }, {
      hostname: "cdn.jsdelivr.net",
    }],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = config
