import Break from "@/components/sections/Break";
import { NextSeo } from "next-seo";
import NextImage from "next/legacy/image";
import { Heading, Link } from "../components";
import ListingAirBnb from "@/images/gear/listing.png";
import ListingCastle from "@/images/gear/listing-castle.png";
import ListingLake from "@/images/gear/listing-lake.png";
import ListingSunset from "@/images/gear/listing-sunset.png";
import ListingAerial from "@/images/gear/listing-aerial.png";
import Footer from "@/components/sections/Footer";
import { cx } from "class-variance-authority";

const gear_data = {
  premium: [
    {
      heading: "Premium Service",
      title: "Premium Photo and Video Package (exteriors)",
      longTitle:
        "Photo and Video Package - 1 hour of shooting, 1 hour of editing",
      subtitle: "",
      price: "£499",
      shortDesc: "1 hour of shooting, 1 hour of editing",
      description:
        "Aerial: Our Premium Package combines breathtaking aerial photography and captivating video to showcase your real estate property's exterior like never before. Highlighting every detail, our expert team ensures a visually stunning experience that attracts discerning buyers or renters. Contact us now!.",
      href: "https://redkiteaerial.com/gallery",
      image: ListingAirBnb,
      imageAlt: "Example of Video Footage",
      tags: ["Aerial", "Premium", "Photo", "Video"],
    },
  ],
  other: [
    {
      heading: "Complete service (interiors & exteriors)",
      title: "Premium Photo and Video Package (interiors & exteriors)",
      longTitle: "Full Service",
      subtitle: "Versatile, sharp and fast. What more can you ask for?",
      price: "£999",
      shortDesc:
        "Elevate: Our Complete Package offers an all-encompassing experience, capturing the essence of your real estate property from both the exterior and interior. With breathtaking aerial photography and captivating video, we showcase every architectural detail and showcase the exquisite design of your property.",
      href: "https://amzn.to/3DWAqGU",
      image: ListingLake,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
    {
      heading: "Photo only",
      title: "Aerial Photo Package (exteriors)",
      longTitle: "Canon EF 16-35mm f/4L IS USM Lens",
      subtitle: "Versatile, sharp and fast. What more can you ask for?",
      price: "£299",
      shortDesc:
        "Essence: Our Signature Photo Package delivers exceptional real estate photography. Meticulously composed shots highlight unique features. Stand out with vibrant, custom-branded, aerial images.",
      href: "https://amzn.to/3r7OV35",
      image: ListingCastle,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
      scale: "sm:scale-[1.7]",
    },
    {
      heading: "Surveying",
      title: "Aerial Drone Surveying for Construction and Building",
      longTitle: "Sony FE 35mm f/1.4 GM Lens",
      subtitle: "Versatile, sharp and fast. What more can you ask for?",
      price: "£299",
      shortDesc:
        "Sky View: Our comprehensive Drone Surveying Package offers high-precision video footage collected from the skies. Revolutionize your projects.",
      href: "https://amzn.to/3E3h5nw",
      image: ListingSunset,
      imageAlt: "",
      tags: ["Sony", "Full-Frame", "Mirrorless", "Interchangeable-Lens"],
    },
  ],
};

const GearItem = ({
  heading,
  image,
  title,
  subtitle,
  href,
  price,
  description,
  imageAlt,
}) => {
  return (
    <div className="grid py-6 md:grid-cols-2 gap-x-12">
      <span className="text-xs uppercase col-span-full text-stone">
        {heading}
      </span>
      <div className="grid w-full bg-white border rounded border-stone-light place-content-center h-72 md:h-auto">
        <div className="w-fit">
          <NextImage
            src={image}
            className="w-1/3 mx-auto drop-shadow-md"
            alt={imageAlt}
          />
        </div>
      </div>
      <div className="flex flex-col mt-9 md:mt-0 gap-y-9">
        <div className="max-w-screen-sm text-4xl">
          <h3 className="font-mtl-bold">{title}</h3>
          <p>{subtitle}</p>
          <br/>
          <p>{price}</p>
        </div>
        <p className="max-w-screen-sm text-xl md:mb-12 text-stone-blue">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="p-4 text-center border rounded bg-yolk border-yolk text-white"
        >
          View Our Gallery
        </a>
      </div>
    </div>
  );
};

const GearItemSmall = ({ image, href, imageAlt, scale, shortDesc, price, title }) => {
  return (
    <a href={href} className="flex flex-col group">
      <div className="grid transition-all duration-300 bg-white border rounded aspect-square border-stone-light place-content-center group-hover:shadow group-hover:shadow-yolk group-hover:border-yolk">
        <div className="transition duration-300 w-fit group-hover:scale-95">
          <NextImage
            src={image}
            className={cx("w-1/2 mx-auto drop-shadow-md", scale)}
            alt={imageAlt}
          />
        </div>
      </div>
      <h3 className="mt-4 text-md font-mtl-bold">{title}</h3>
      <p className="mt-0 mb-1 md:mb-8 text-md max-w-prose text-stone-blue">
        {shortDesc}
      </p>
      <p>
        {price}
      </p>
      {/* <a href={href} className="inline-block w-full p-4 mt-auto text-center rounded bg-yolk">
        Buy
      </a> */}
    </a>
  );
};

const Services = () => {
  return (
    <>
      <NextSeo title="Pricing" canonical="https://redkiteaerial.com/pricing" />
      <main className="relative h-full pb-20">
        <div className="items-center justify-between md:flex">
          <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
            <span className="w-6 h-6 border rounded-full bg-yolk border-white shrink-0"></span>
            <h1 className="text-5xl uppercase">Pricing</h1>
          </div>
        </div>

        <section className="flex flex-col">
          <div className="px-6 md:px-4">
            {gear_data.premium.map((item) => {
              return (
                <GearItem key={item.key} {...item} />
              );
            })}
          </div>

          <div className="relative w-full col-span-2 px-6 md:px-4">
            <div className="mb-2 overflow-hidden bg-white border rounded h-[48rem] border-stone-light">
              <NextImage
                src={ListingAerial}
                className="rounded"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <span className="inline-block w-full p-1 text-sm text-center border rounded text-stone-blue">
              Photo taken on {" "}
              <Link
                isExternal
                href="https://www.dji.com/uk/mini-3-pro?site=brandsite&from=landing_page"
                className="underline transition duration-200 cursor-pointer underline-offset-2 hover:bg-yolk/50 hover:text-white"
              >
                DJI Mini 3 Pro
              </Link>
              {' '}Drone
            </span>
          </div>
          <Break />
          <div className="grid grid-cols-2 px-6 md:grid-cols-3 gap-yeat md:gap-y-6 md:gap-x-6 md:px-4">
            <Heading className="col-span-full">Other services</Heading>
            {gear_data.other.map((item) => {
              return (
                <GearItemSmall key={item.key} {...item} />
              );
            })}
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
