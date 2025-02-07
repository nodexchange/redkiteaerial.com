import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Image } from "@components";
import { FilmStrip } from "phosphor-react";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";

const AboutText = () => (
  <div className="flex rounded">
    <div className="flex flex-col gap-4 max-w-prose">
      <div>
        <h2 className="py-1 text-2xl sm:text-4xl font-mtl-bold">
          Welcome to Red Kite Aerial ⌘
        </h2>
        <p className="text-2xl sm:text-4xl">
          {`Premier Real Estate, aerial photography and video services, specialising in capturing stunning imagery for the properties and airbnb listings.`}
        </p>
      </div>
      <p className="text-lg sm:text-xl">
        With our cutting-edge technology and skilled team of professionals, we are here to elevate your listings and showcase your properties in the most captivating way possible. Here are a few reasons to choose Red Kite Aerial:
      </p>
      <p className="text-lg sm:text-xl">
        <span className="font-mtl-bold underline">Real Estate Expertise:</span> Our team understands the unique requirements of the real estate industry in Buckinghamshire and surrounding areas. We know that capturing the essence of a property is crucial for attracting potential buyers or renters. With our premier interior, aerial photography and video services, we can highlight the key features, showcase the property&apos;s location, and create a compelling visual narrative that will engage prospective clients.
      </p>
      <p className="text-lg sm:text-xl">
        <span className="font-mtl-bold underline">Airbnb Listing Enhancement:</span> In the competitive world of short-term rentals, standing out is essential. Our aerial imagery can give your Airbnb listings the edge they need to capture attention and increase bookings. Whether it is showcasing the property&apos;s exterior, highlighting nearby attractions, or providing a breathtaking bird&apos;s-eye view, our visuals will help your listings shine and leave a lasting impression on potential guests.
      </p>
      <p className="text-lg sm:text-xl">
        <span className="font-mtl-bold underline">Stunning Visual Storytelling:</span> A picture is worth a thousand words, and an aerial shot can convey even more. We excel at capturing unique perspectives and aerial views that traditional photography simply can&apos;t match. Our team knows how to compose striking shots, emphasizing the property&apos;s best features and creating a visual story that evokes emotions and generates interest.
      </p>
      <p className="text-lg sm:text-xl">
        <span className="font-mtl-bold underline">Comprehensive Services:</span> We offer a range of services tailored to the real estate and Airbnb industries. From aerial photography and video tours to 360-degree virtual tours and drone mapping, we provide comprehensive solutions to meet your specific needs. Our goal is to showcase your properties in the most immersive and captivating way possible.
      </p>
      <p className="text-lg sm:text-xl">
        <span className="font-mtl-bold underline">Competitive Advantage:</span> By incorporating our aerial imagery into your real estate or Airbnb listings, you gain a competitive advantage in the market. Stand out from the crowd, attract more viewers, and generate greater interest in your properties. Our visuals will make a lasting impression, helping you to secure more sales, bookings, or rentals.
      </p>
      <p className="text-lg sm:text-xl">
      <a
          href="mailto:redkiteaerial@outlook.com"
          className="relative better-underline betterhover:hover:text-white"
        >Contact us</a> today to discuss your specific requirements and let our team of experts create captivating visuals that will set you apart in the real estate and Airbnb markets.
      </p>
    </div>
  </div>
);

export default function Services() {
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="Services" canonical="https://www.redkiteaerial.co.uk/services" />
      <ContactDialog open={open} onOpenChange={setOpen} />
      <main className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <FilmStrip />
          <h1 className="text-5xl uppercase">Services</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image
            src="/images/city-townhall.jpg"
            alt="Photo of myself"
            priority
          />
          <section className="flex flex-col gap-y-4">
            <AboutText />
            <hr className="-mb-1" />
          </section>
        </div>
      </main>
    </>
  );
}
