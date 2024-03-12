import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/PPNeueMontreal-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PPNeueMontreal-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="apple-mobile-web-app-title" content="Red Kite Aerial" />
        <meta name="keywords" content="Red Kite Aerial Photography,Interior photography, interior video, real estate storytelling, Drone photography Radnage,Buckinghamshire aerial video services,Real estate drone photography UK,Airbnb listing aerial shots,Radnage drone videography,Elevated property photography Buckinghamshire,Premium drone services UK,Buckinghamshire bird's-eye photography,Drone property listing videos,Best drone photographers Radnage,Real estate drone services Buckinghamshire,UK aerial video specialists,Drone shots for Airbnb Radnage,Buckinghamshire aerial property showcase,Drone photography for estate agents,Radnage property videography,Drone services for Airbnb hosts UK,Luxury property aerial photography,Drone panorama Buckinghamshire,Property listing enhancement with drones,Captivating aerial video Radnage,Premium drone shots Buckinghamshire,Breathtaking aerial photos for real estate,Radnage's top drone photography service" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
