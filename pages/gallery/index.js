import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextImage from "next/legacy/image";
import Link from "next/link";
import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import Masonry from "react-masonry-css";
import { X } from "phosphor-react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogPortal,
} from "@radix-ui/react-dialog";
import Heading from "@/components/Heading";
import { AnimatePresence, motion } from "framer-motion";
import { cx } from "class-variance-authority";

const FILTERS = [
  {
    title: "All",
    type: "all",
    filter: "redkiteaerial",
  },
  {
    title: "Concerts",
    type: "concerts",
    filter: "concerts",
  },
  {
    title: "Cityscapes & Architecture",
    type: "architecture",
    filter: "architecture",
  },
  {
    title: "Street",
    type: "street",
    filter: "street",
  },
  {
    title: "The Outdoors",
    type: "outdoors",
    filter: "outdoors",
  },
];

const FilterTag = ({ filter, onClick, children }) => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div className="grid">
      <Link href={`/gallery?type=${filter}`} as={`/gallery/${filter}`} passHref legacyBehavior>
        <a
          className={cx(
            "border rounded px-2 py-0.5 border-dark text-sm content text-dark z-10"
          )}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
      {filter === type || (!type && filter === "all") ? (
        <motion.div
          layoutId="categoryItem"
          className="inline-block px-2 py-0.5 rounded shadow bg-yolk overlay"
          animate
        />
      ) : null}
    </div>
  );
};

const MotionImage = motion(NextImage);

const Gallery = ({ images }) => {
  const router = useRouter();
  const { photoId, type } = router.query;
  const [open, setOpen] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [filter, setFilter] = useState("redkiteaerial");
  const newImages = images.filter((image) => image.public_id.includes(filter));
  const [gridImages, setGridImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState({
    public_id: "",
    format: "",
    blurDataURL: "",
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!router.isReady) return;
    if (type && type !== "all") {
      setFilter(type);
    } else {
      setFilter("redkiteaerial");
    }
  }, [router.isReady]);

  useEffect(() => {
    const shuffledImages = newImages.sort(() => 0.5 - Math.random());
    setGridImages(shuffledImages);
  }, [filter]);

  useEffect(() => {
    if (shuffled) return;
    const shuffledImages = newImages.sort(() => 0.5 - Math.random());
    setShuffled(true);
    setGridImages(shuffledImages);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  console.log(type);

  return (
    <main className="relative">
      <Dialog open={open} onOpenChange={setOpen}>
        {photoId && (
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/75 backdrop-blur-md rdx-state-open:overlay-fade-in rdx-state-closed:overlay-fade-out" />
            <DialogContent
              className="fixed inset-0 mx-auto my-auto rounded shadow outline-none h-fit w-fit rdx-state-open:dialog-item-open rdx-state-closed:dialog-item-close"
              onEscapeKeyDown={() => router.back()}
              onPointerDownOutside={() => router.back()}
            >
              <div
                className={cx(
                  "relative w-auto sm:h-[800px]",
                  selectedImage.width < selectedImage.height
                    ? "h-[500px]"
                    : "h-[250px]"
                )}
              >
                <NextImage
                  alt=""
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1440/${selectedImage.public_id}.${selectedImage.format}`}
                  placeholder="blur"
                  blurDataURL={selectedImage.blurDataURL}
                  // width={selectedImage.width}
                  // height={selectedImage.height}
                  fill
                  className="rounded shadow-md !relative"
                />
              </div>
              <div className="flex gap-x-2 absolute top-4 right-4">
                {/* <button>Share</button> */}
                <DialogClose
                  className="rounded-full bg-white/10 text-white p-2.5 leading-none hover:bg-black transition shrink-0"
                  onClick={() => router.back()}
                >
                  <X />
                </DialogClose>
              </div>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid py-4 px-8 sm:px-4"
        columnClassName="my-masonry-grid_column"
      >
        <div className="h-96 border border-black rounded px-4 pt-2 pb-5 flex flex-col justify-between">
          <Heading>Gallery</Heading>
          <div>
            <p className="text-sm mb-2">
              Welcome to my portfolio! Here you&apos;ll find a selection of my
              best work, from corporate to concert scenes. You can filter
              through the buttons below. Explore and enjoy!
            </p>
            <div className="flex gap-0.5 flex-wrap">
              {FILTERS.map(({ filter, type, title }) => (
                <FilterTag
                  key={type}
                  filter={type}
                  onClick={() => setFilter(filter)}
                >
                  {title}
                </FilterTag>
              ))}
            </div>
          </div>
        </div>

        {gridImages.map(
          ({ id, public_id, format, width, height, blurDataUrl }) => (
            <AnimatePresence key={id}>
              <Link
                href={`/gallery/?photoId=${id}`}
                as={`/gallery/${id}`}
                shallow
              >
                <MotionImage
                  // initial={{ scale: 0.8, opacity: 0 }}
                  // animate={{
                  //   scale: 1,
                  //   opacity: 1,
                  // }}
                  // exit={{
                  //   scale: 0.8,
                  //   opacity: 0,
                  // }}
                  // layout
                  onClick={() => {
                    setSelectedImage({
                      public_id: public_id,
                      format: format,
                      alt: "",
                      blurDataURL: blurDataUrl,
                      width: width,
                      height: height,
                    });
                    setOpen(true);
                  }}
                  className="cursor-pointer block overflow-hidden transition-all duration-500 border rounded-lg shadow betterhover:hover:shadow-xl betterhover:hover:shadow-yolk/50 betterhover:hover:border-yolk border-stone"
                  alt=""
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={width}
                  height={height}
                />
              </Link>
            </AnimatePresence>
          )
        )}
      </Masonry>
    </main>
  );
};

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:redkiteaerial/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}

export default Gallery;
