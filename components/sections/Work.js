import { Text } from "@components";
import NextImage from "next/legacy/image";
import { House } from "phosphor-react";
import foxtons from "../../public/images/foxtons.jpg";
import savills from "../../public/images/savills.jpg";
import mp from "../../public/images/mp.jpg";

const ColumnOne = () => {

  const Tag = ({ children }) => (
    <div className="flex items-center justify-center px-2.5 py-1 text-sm rounded-full sm:px-4 sm:py-2 text-dark/75 bg-dark/10 sm:text-base">
      {children}
    </div>
  );

  
  return (
    <div className="w-full pt-6 pb-6 max-w-prose xl:max-w-screen-lg md:pr-8 grow">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Text className="text-2xl xl:text-5xl">
           {'Whether you\'re in the real estate industry, managing Airbnb listings, or need aerial visuals for your business or any other applications, we are here to provide personalised solutions that meet your specific requirements.'}
          </Text>
          <p className="w-full mt-2 text-md xl:text-2xl sm:w-2/3 text-dark/50">
          We look forward to hearing from you and working together to create stunning aerial photography and videos that will exceed your expectations.
          </p>
          <div className="flex mt-4 gap-x-1">
            <Tag>Aerial</Tag>
            <Tag>Photography</Tag>
            <Tag>Video</Tag>
            <Tag>Listing</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageLayout = ({ logo, src, logoAlt, alt, className }) => {
  return (
    <div className="grid overflow-hidden border rounded h-fit border-kite sm:first:ml-0 sm:last:mr-0 isolate">
      <div className="z-10 flex flex-col items-center justify-center text-white gap-y-4 -mt-yeat overlay">
        <div className={`relative w-20 h-20 sm:w-64 sm:h-64 overflow-hidden ${className}`}>
          <NextImage layout="fill" objectFit="contain" src={logo} alt={logoAlt} />
        </div>
      </div>
      <div className="scale-[101.5%] content brightness-50 aspect-square blur-[3px]">
        <NextImage 
          // placeholder="blur" 
          layout="fill" 
          src={src}
          alt={alt}
          className="object-cover" />
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="relative grid h-full grid-cols-1 gap-4 sm:grid-cols-1 isolate">
      <div className="flex items-center leading-none uppercase gap-x-2">
        <House />
        <h2 className="text-dark">Clients</h2>
      </div>
      <div className="grid grid-flow-col pl-6 pr-6 -mx-6 overflow-x-auto gap-x-yeat auto-cols-custom md:auto-cols-auto sm:mx-0 sm:px-0">
        <ImageLayout src={foxtons} alt="Foxtons Estate Agency" logoAlt="Foxtons" logo="/images/logos/foxtons.png" />
        <ImageLayout src={mp}  alt="" logoAlt="Marsh & Peterson logo" logo="/images/logos/mp.png" className="brightness-0 invert" />
        <ImageLayout src={savills} alt="" logoAlt="Savills" logo="/images/logos/savills.png"/>
      </div>
      <ColumnOne />
    </div>
  );
};
export default Work;
