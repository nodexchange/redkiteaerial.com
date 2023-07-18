import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogOverlay,
  DialogPortal,
} from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import NextImage from "next/legacy/image";
import { motion } from "framer-motion";
import { cx } from "class-variance-authority";
import Button from "@/components/Button";
import { ArrowRight } from "phosphor-react";

import radnage_house0 from "../../public/images/radnage-house0-high-def.jpg";
import radnage_house1 from "../../public/images/radnage-house1-high-def.jpg";
import radnage_house2 from "../../public/images/radnage-house2-high-def.jpg";
import radnage_house3 from "../../public/images/radnage-house3-high-def.jpg";
import benidorm_commercial0 from "../../public/images/benidorm-commercial0-high-def.jpg";
import benidorm_commercial1 from "../../public/images/benidorm-commercial1-high-def.jpg";
import benidorm_house0 from "../../public/images/benidorm-house0-high-def.jpg";
import benidorm_house1 from "../../public/images/benidorm-house1-high-def.jpg";
import benidorm_house2 from "../../public/images/benidorm-house2-high-def.jpg";

const images = [
  {
    key: 0,
    src: radnage_house0,
    title: "Elevated Aerial shot for Radnage Village",
    alt: "A Sunset picture topdown bird's-eye view of a gorgeous properties in a Radnage village",
  },
  {
    key: 1,
    src: radnage_house1,
    title: "Aerial shot for Radnage Property Shot #1",
    alt: "A golden-hours drone photo of a white house property for sale",
  },
  {
    key: 2,
    src: radnage_house2,
    title: "A bird's-eye view shot of a property in Radnage",
    alt: "A sunset shot of a redbrick property in Radnage, UK",
  },
  {
    key: 3,
    src: radnage_house3,
    title: "A top-down aerial shot from a limestone property in Radnage",
    alt: "An elevated top down drone shot for a property listing in Radnage that reveals a gorgeous green garden and surrounding",
  },
  {
    key: 4,
    src: benidorm_commercial0,
    title: "Drone photo for Asia Gardens Hotel and Thai SPA #1",
    alt: "A commercial drone shot for a 5-stars hotel in Benidorm, revealing gorgeous surrounding and a sea-view",
  },
  {
    key: 5,
    src: benidorm_commercial1,
    title: "Aerial shot for Asia Gardens Hotel and Thai SPA #2",
    alt: "A commercial sun-rise drone photo shot for a 5-stars hotel in Benidorm, revealing the sunrise-touched scenery",
  },
  {
    key: 6,
    src: benidorm_house0,
    title: "Airbnb Listing shot for Benidorm Property",
    alt: "Located just outside Benidorm this drone photo reveals the true beauty of the surrounding as well as features of the gated community",
  },
  {
    key: 7,
    src: benidorm_house1,
    title: "A vertical aerial shot for Airbnb Listing (Benidorm)",
    alt: "This social media friendly elevated drone photo helped the airbnb host to promote the property via social-media",
  },
  {
    key: 8,
    src: benidorm_house2,
    title: "An aerial shot for Airbnb listing (Benidorm)",
    alt: "This drone aerial shot made during the sunrise hours helped to reflect the true beauty of the Sierra mountains surrounding the property in Benidorm",
  }
]



// const images = [
//   {
//     key: 1,
//     src: la,
//     title: "Old School Cadillac",
//     alt: "An old school Cadillac parked in front of a driveway in Los Angeles with blue skies and a tree in the background",
//   },
//   {
//     key: 2,
//     src: jay_lookup,
//     title: "Blue Jays Lookup",
//     alt: "A man wearing a Blue Jays hat looking up at a golden coloured skyscraper in Toronto, Canada with a camera in his hand",
//   },
//   {
//     key: 3,
//     src: lookup,
//     title: "Toronto Classic Lookup",
//     alt: "Looking up at the skyscrapers in Toronto, Canada's financial district. Corner of a building with golden ceiling lights.",
//     vertical: true,
//   },
//   {
//     key: 4,
//     src: nyc_ts,
//     title: "Above Times Square",
//     alt: "A man sitting on top of a building looking down and taking a photo of New York City's Times Square at night",
//   },
//   {
//     key: 5,
//     src: grid_light,
//     title: "Grid Light",
//     alt: "Patterned skyscrapers in Toronto, Canada standing close together with the sunlight shining through the middle of them",
//   },
//   {
//     key: 6,
//     src: karen,
//     title: "Karen's Contrast",
//     alt: "Female model standing in a dark room being highlighted from sunshine coming through the window. Extreme juxtaposition.",
//   },
//   {
//     key: 7,
//     src: tower_clouds,
//     position: "top",
//     title: "Above the Clouds",
//     alt: "A photo of the top of half of the CN Tower in Toronto, Canada, standing tall above the clouds with a blue sky",
//     vertical: true,
//   },
//   {
//     key: 8,
//     src: walker,
//     title: "Slow Walker",
//     alt: "A long exposure of a man crossing the road in Toronto's financial district with two transit streetcars passing in the background",
//   },
// ];

const Image2 = ({ src, alt, ...props }) => (
  <NextImage
    src={src}
    alt={alt}
    layout="fill"
    objectFit="cover"
    className={"transition duration-500 betterhover:hover:scale-[1.03]"}
    {...props}
  />
);

Image2.displayName = "Image2";

const PhotoGrid = () => {
  const [selected, setSelected] = React.useState();
  const [open, setOpen] = React.useState(false);


  return (
    <>
      <div className="grid h-auto grid-cols-2 sm:grid-cols-6 gap-yeat sm-g">
        <Dialog open={open} onOpenChange={setOpen}>
          {images.map((image) => {
            return (
              <DialogTrigger
                key={image.key}
                className="relative w-full overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-kite photo-grid-item"
                onClick={() => {
                  setSelected(image.key);
                  // splitbee.track("Open Photo", { title: image.title });
                }}
              >
                <Image2
                  src={image.src}
                  alt={image.alt}
                  objectPosition={image.position}
                  quality={25}
                  priority
                  placeholder="blur"
                />
              </DialogTrigger>
            );
          })}
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
            <DialogContent
              className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              {images.map((i) => {
                if (i.key === selected) {
                  return (
                    <motion.div
                      key={i.key}
                      className={cx(
                        "relative w-auto sm:h-[800px]",
                        i.vertical ? "h-[500px]" : "h-[250px]"
                      )}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <NextImage
                        src={i.src}
                        alt={i.alt}
                        className="w-auto h-full rounded shadow-md"
                        placeholder="blur"
                        priority
                        quality={25}
                      />
                    </motion.div>
                  );
                }
              })}
               <div className="flex gap-x-2 absolute top-14 right-4">
                  {/* <button>Share</button> */}
                  <DialogClose
                    className="rounded-full bg-white/10 text-black p-2.5 leading-none hover:bg-white transition shrink-0"
                    onClick={() => setOpen(false)}
                  >
                    <X />
                  </DialogClose>
                </div>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
      <div className="mt-yeat"></div>
      <Button fullWidth asAnchor href="/gallery">
        See More
        <ArrowRight weight="bold" />
      </Button>
    </>
  );
};

export default PhotoGrid;
