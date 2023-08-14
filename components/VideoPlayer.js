import React, { useEffect, useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";
import { FilmStrip } from "phosphor-react";

const VidPlayer = React.memo(({ videoRef }) => {
  return (
    <CloudinaryContext cloud_name={`${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`} secure>
      <Video
        publicId="redkiteaerial/radnage-hd2_-_HD_1080p_buzjck"
        width="100%"
        controls
        autoPlay
        muted
        alt="Red Kite Aerial ⌘ - Radnage, Buckinghamshire, UK - Sample Video showing a property from above."
        poster="https://res.cloudinary.com/dr4ou2ggt/video/upload/v1/redkiteaerial/radnage-hd2_-_HD_1080p_buzjck.jpg"
        innerRef={videoRef}
      />
    </CloudinaryContext>
  );
});

VidPlayer.displayName = 'VidPlayer';

const VideoPlayer = () => {
  const videoRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inView === true) {
      videoRef.current.play();
    }
  });

  return (
    <div ref={ref} className='relative mb-10 grid h-full grid-cols-1 gap-4 sm:grid-cols-1 isolate'>
      <div className="flex items-center leading-none uppercase gap-x-2">
        <FilmStrip />
        <h2 className="text-dark">Examples</h2>
      </div>
      <VidPlayer videoRef={videoRef} />
    </div>
  );
};

export default VideoPlayer;
