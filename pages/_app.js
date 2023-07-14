import '../styles/fonts.css'
import '../styles/globals.css'

import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Analytics } from '@vercel/analytics/react';
import { SheetProvider } from "@/components/Sheet"
import { DefaultSeo } from "next-seo";
import Layout from "@/components/Layout"

const MyApp = ({ Component, pageProps }) => {


  return (
    <TooltipProvider>
      <SheetProvider>
        <Layout>
          <DefaultSeo
            title={undefined}
            titleTemplate="%s | Red Kite Aerial"
            defaultTitle="Red Kite Aerial | Drone Photography and Video Service"
            description="Premium Photo and Video services for breathtaking Aerial Photography and captivating Video services based in Radnage, Buckinghamshire, UK. We specialise in Real Estate & Airbnb listing as well as commercial property footage capture. Check our affordable services and book now!"
            canonical="https://redkiteaerial.co.uk"
            twitter={{
              handle: "@redkiteaerial",
              site: "@redkiteaerial",
              cardType: "summary_large_image",
            }}
            openGraph={{
              type: "website",
              locale: "en_CA",
              url: "https://redkiteaerial.co.uk",
              title: "Red Kite Aerial | Drone Photography and Video Service",
              description: "Premium Photo and Video services for breathtaking Aerial Photography and captivating Video services based in Radnage, Buckinghamshire, UK. We specialise in Real Estate & Airbnb listing as well as commercial property footage capture. Check our affordable services and book now!",
              images: [
                {
                  url: "https://redkiteaerial.co.uk/images/og.png",
                  width: 1200,
                  height: 630,
                  alt: "Red Kite Aerial | Drone Photography and Video Service",
                  type: "image/png",
                }
              ]
            }}
          /> 
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </SheetProvider> 
    </TooltipProvider>
  );
}

export default MyApp
