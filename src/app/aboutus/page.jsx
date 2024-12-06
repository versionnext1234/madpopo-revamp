import React from 'react'

export const metadata = {
  title: "About Us",
  description:
    "MadPopo high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  alternates: {
    canonical: "https://madpopo.com",
  },
  openGraph: {
    url: "https://www.madpopo.com/",
    type: "website",
    images: [
      {
        url: "https://www.madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://www.madpopo.com/image/madpopo-hosting.jpg",
  },
};

const page = () => {
  return (
    <div>
        <h1>About Page</h1>
    </div>
  )
}

export default page