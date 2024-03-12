import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Image } from "@components";
import { Pen } from "phosphor-react";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";
import Link from 'next/link';
import articles from '../data/articles';

// const articles = [
//   {
//     id: 1,
//     title: 'Article 1',
//     content: 'This is the content for Article 1.',
//     url: '/blog/article-1'
//   },
//   {
//     id: 2,
//     title: 'Article 2',
//     content: 'This is the content for Article 2.',
//     url: '/blog/article-2'
//   },
//   {
//     id: 3,
//     title: 'Article 3',
//     content: 'This is the content for Article 3.',
//     url: '/blog/article-3'
//   },
//   // Add more articles as needed
// ];

function Article({ title, content, url }) {
  return (
    <div className="p-4">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{content}</p>
          <div className="flex items-center flex-wrap ">
            <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={url}>Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 12h-4m-2 0a6 6 0 01-6 6a6 6 0 01-6-6a6 6 0 016-6a6 6 0 016 6z"></path>
              </svg>1.2K
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="Services" canonical="https://www.redkiteaerial.co.uk/areas-we-cover" />
      <ContactDialog open={open} onOpenChange={setOpen} />
      <main className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <Pen />
          <h1 className="text-5xl uppercase">Blog</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4">
          {/* <Image
            src="/images/map.jpg"
            alt="Map image with a 20 miles radius circle that highlights area where we cover and can travel to for our drone photos and videos taking. We cover Buckinghamshire, Berkshire, Oxfordshire, and West London."
            priority
          /> */}
          <section className="flex flex-col gap-y-4">
            {articles.articles.map((article) => (
              <Article
                key={article.id}
                {...article}
              />
            ))}
            <hr className="-mb-1" />
          </section>
        </div>
      </main>
    </>
  );
}
