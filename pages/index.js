import PhotoGrid from "@/sections/PhotoGrid";
import About from "@/sections/About";
import Break from "@/sections/Break";
import { Contact } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import CallToAction from "@/sections/CallToAction";
import VideoPlayer from "@/components/VideoPlayer";


import Script from "next/script";
import { SocialProfileJsonLd, WebPageJsonLd } from "next-seo";

const Section = ({ className, children }) => {
  return <section className={`px-6 md:px-4 ${className}`}>{children}</section>;
};

export default function Home() {
  return (
    <>
      <WebPageJsonLd name="Red Kite Aerial" url="https://www.redkiteaerial.co.uk" />
      <SocialProfileJsonLd
        type="Person"
        name="Red Kite Aerial"
        url="http://www.redkiteaerial.co.uk"
        sameAs={[
          // "http://www.facebook.com/redkiteaerial",
          // "http://instagram.com/redkiteaerial",
          "http://www.twitter.com/redkiteaerial",
        ]}
      />
      <Script src="/getHeight.js"></Script>
      <main className="relative">
        <Hero />
        <Section>
          <About />
        </Section>
        <Break />
        <Section>
          <VideoPlayer />
        </Section>
        <section className="h-auto px-6 md:px-4">
          <PhotoGrid />
        </section>
        <Break />
        <Section>
          <Work />
        </Section>
        <CallToAction />
        <Break />
        <section className="min-h-full h-[85vh] overflow-scroll">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
