module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "mitul.ca",
      "www.dpreview.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/concerts",
        destination: "/gallery/concerts",
        permanent: true,
      },
      {
        source: "/architecture",
        destination: "/gallery/architecture",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/gallery/concerts",
        destination: "/gallery?type=concerts",
      },
      {
        source: "/gallery/architecture",
        destination: "/gallery?type=architecture",
      },
      {
        source: "/gallery/street",
        destination: "/gallery?type=street",
      },
      {
        source: "/gallery/nature",
        destination: "/gallery?type=nature",
      },
      {
        source: "/gallery/outdoors",
        destination: "/gallery?type=outdoors",
      },
      {
        source: "/gallery/all",
        destination: "/gallery?type=all",
      },
    ];
  },
};
