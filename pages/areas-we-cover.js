import React from "react";
import { SheetContext } from "@/components/Sheet";
import { Image } from "@components";
import { FilmStrip } from "phosphor-react";
import { ContactDialog } from "@/components/sections/Contact";
import { NextSeo } from "next-seo";


const ServicesText = () => (
  <div className="flex rounded">
    <div className="flex flex-col gap-4 max-w-prose">
      <div>
        <h2 className="py-1 text-xl sm:text-2xl font-mtl-bold">
          {`At Red Kite Aerial ⌘, the sky isn't the limit—it's our workspace!`}
        </h2>
        <p className="text-xl sm:text-l">
          {`Operating from the heart of Radnage, Buckinghamshire, we’re proud to offer our premium Real Estate and Aerial photography as well as video services across an expansive region, capturing breathtaking interior and aerial views that tell a unique story every time.`}
        </p>
      </div>
      <h3 className="font-mtl-bold underline text-lg sm:text-xl">
        Where You Can Find Us:
      </h3>
      <ul>
      <li className="text-lg sm:text-xl">
        <span className="font-mtl-bold">Buckinghamshire:</span> Our home ground, where every vista comes alive through our lenses.
      </li>
      <li className="text-lg sm:text-xl">
        <span className="font-mtl-bold">Berkshire:</span> Rolling landscapes, historical landmarks, and urban wonders—all shot from a vantage point like no other.
      </li>
      <li className="text-lg sm:text-xl">
        <span className="font-mtl-bold">Oxfordshire:</span> From the spires of Oxford to serene countrysides, we bring a fresh perspective to this illustrious county.
      </li>
      <li className="text-lg sm:text-xl">
        <span className="font-mtl-bold">West London:</span> The blend of the modern skyline with age-old architecture is even more mesmerizing from the skies above.
      </li>
      </ul>
      <h3 className="font-mtl-bold underline text-lg sm:text-xl">
        Going The Extra Mile, Literally:
      </h3>
      <p className="text-lg sm:text-xl">
      {`Though we’re based within a 15-mile radius of Radnage, our passion for capturing the perfect shot knows no bounds. If your project takes us further afield, we're more than willing to travel to more distant areas for an additional charge. Because every location has a story waiting to be told, and we’re here to help you tell it.`}
      </p>
      <p className="text-lg sm:text-xl">
      {` Got a location in mind? `}
      <a
          href="mailto:redkiteaerial@outlook.com"
          className="relative better-underline betterhover:hover:text-white"
        >Contact us</a>
        {` and let’s discuss how we can bring your vision to life from a bird’s eye view.`}
      </p>
    </div>
  </div>
);

export default function Areas() {
  const { open, setOpen } = React.useContext(SheetContext);

  return (
    <>
      <NextSeo title="Services" canonical="https://www.redkiteaerial.co.uk/areas-we-cover" />
      <ContactDialog open={open} onOpenChange={setOpen} />
      <main className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <FilmStrip />
          <h1 className="text-5xl uppercase">Areas We Cover</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image
            src="/images/map.jpg"
            alt="Map image with a 20 miles radius circle that highlights area where we cover and can travel to for our drone photos and videos taking. We cover Buckinghamshire, Berkshire, Oxfordshire, and West London."
            priority
          />
          <section className="flex flex-col gap-y-4">
            <ServicesText />
            <hr className="-mb-1" />
          </section>
        </div>
      </main>
    </>
  );
}
