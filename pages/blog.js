import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Image } from "@components";
import { Pen } from "phosphor-react";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";
import Link from 'next/link';
import articles from '../data/articles';

function Article({ title, content, url, views, shared }) {
  return (
    <div className="p-4">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{content}</p>
          <div className="flex items-center flex-wrap ">
            <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-800" href={url}>Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path 
                d="M18,6 L6,12 L18,18" 
                stroke="#212b36" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                fill="none"
              />
              <circle cx="18" cy="6" r="3" fill="#212b36"/>
              <circle cx="6" cy="12" r="3" fill="#212b36"/>
              <circle cx="18" cy="18" r="3" fill="#212b36"/>
              </svg>{shared}
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1 mt-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
              </svg>{views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const compare = ( a, b ) => {
  if ( a.id > b.id ){
    return -1;
  }
  if ( a.id < b.id ){
    return 1;
  }
  return 0;
}

export default function Blog() {
  const { open, setOpen } = React.useContext(SheetContext);
  const articlesData = articles.articles.sort(compare);
  return (
    <>
      <NextSeo title="Blog" canonical="https://www.redkiteaerial.co.uk/blog" />
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
            {articlesData.map((article) => (
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
