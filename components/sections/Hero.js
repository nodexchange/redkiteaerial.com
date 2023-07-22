import NextImage from "next/legacy/image";
import { motion } from "framer-motion";
import { useIsSmall } from "@/hooks/useBreakpoint";
import hero from "../../public/images/hero.jpg";

const Hero = () => {
  const isSmall = useIsSmall();

  return (
    <motion.section
      className="w-screen hero"
      layout
      animate={{ padding: isSmall ? 24 : `16px 24px` }}
      transition={{ delay: 1.2, duration: 1.2 }}
    >
      <div className="grid h-full isolate shadow-md shadow-yolk rounded-[8px]">
        <div className="z-10 flex items-center justify-center overlay">
          <motion.h1
            className="-mt-4 text-2xl text-center text-white md:text-6xl font-mtl-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Elevate your Real Estate and Airbnb listings <br/> with Stunning Photography & Video
          </motion.h1>
        </div>
        <motion.div
          className="relative flex items-center justify-center w-full h-full overflow-hidden content"
          layout
          // brightness
          initial={{filter: "brightness(0.8)"}}
          animate={{ borderRadius: "8px", filter: "brightness(0.5)" }}
          transition={{ delay: 0.5, duration: 1.7 }}
        >
          <NextImage
            src={hero}
            layout="fill"
            objectFit="cover"
            priority
            alt="A sunset aerial drone shot for Radnage village located in Buckinghamshire."
            quality={5}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
