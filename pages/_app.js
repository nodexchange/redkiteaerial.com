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
            defaultTitle="Red Kite Aerial | Real Estate and Aerial Photography and Video Service"
            description="Elevate Your Real Estate and Airbnb Listings! Premium services for breathtaking bird's-eye Aerial Photography and captivating Video services based in Radnage, Buckinghamshire, UK."
            canonical="https://www.redkiteaerial.co.uk"
            twitter={{
              handle: "@redkiteaerial",
              site: "@redkiteaerial",
              cardType: "summary_large_image",
            }}
            openGraph={{
              type: "website",
              locale: "en_CA",
              url: "https://www.redkiteaerial.co.uk",
              title: "Red Kite Aerial | Real Estate and Drone Photography and Video Service",
              description: "Elevate Your Real Estate and Airbnb Listings! Premium services for breathtaking bird's-eye Aerial Photography and captivating Video services based in Radnage, Buckinghamshire, UK.",
              images: [
                {
                  url: "https://www.redkiteaerial.co.uk/images/og.png",
                  width: 1200,
                  height: 630,
                  alt: "Red Kite Aerial | Real Estate and Drone Photography and Video Service",
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
