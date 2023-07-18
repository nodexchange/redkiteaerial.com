import { Button, Tooltip, Marquee, Image } from "@components";
import { Package, ArrowRight } from "phosphor-react";
import NextLink from "next/link";
import idx_me from "../../public/images/city-townhall.jpg";

const About = () => {
  return (
    <>
      <div className="grid h-full grid-cols-1 sm:pt-6 gap-x-12 gap-y-6 md:grid-cols-2">
        <div className="flex flex-col gap-y-2 md:order-last">
          <Marquee />
          <Image
            src={idx_me}
            alt="A futuristic, cinematic photo of myself standing in front of blue tinted lights in the Montreal metro, wearing a red jacket"
            height="md:order-first aspect-square md:h-img"
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center mb-6 leading-none uppercase gap-x-2 md:mb-auto">
            <Package />
            {/* <span className="w-2.5 h-2.5 rounded-full bg-yolk border border-dark -mt-0.5" /> */}
            <h2 className="text-yolk">About</h2>
          </div>
          <hr />
          <p className="mb-4 text-2xl xl:text-5xl pt-4">
            
            Elevate Your Listings with{' '}
            <Tooltip text="Buckinghamshire Based Drone experts">
              <span className="font-light text-kite">{' '}Red Kite Aerial</span>
            </Tooltip>
            <br/> We are imaging Experts transforming 
            <b className="font-mtl-bold">{' '} your Real Estate, Airbnb, and Commercial listing</b> 
            {' '} with {' '}
            <b className="font-mtl-bold">Breathtaking bird&apos;s-eye</b> Photography and Video Services through every
            capture. With transparent pricing tailored to your needs, we are the perfect partner for your next project.
          </p>
          <NextLink href="/services" passHref legacyBehavior>
            <Button asAnchor>
              <span>Our Services</span>
              <ArrowRight />
            </Button>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default About;