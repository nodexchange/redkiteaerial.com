import NextImage from "next/legacy/image"
import savills from "@/images/logos/savills.png";

const CallToAction = () => {
  return (
    <div className="px-6 md:p-4">
      <div
        className="px-4 py-4 sm:py-8 rounded text-eggshell md:py-12 md:px-12 bg-[#b05d46] shadow shadow-[#b05d46]"
        style={{
          backgroundImage: "linear-gradient(to right, #b05d46, rgba(0, 0, 0, 0)), url(/noise.svg)",
        }}
      >
        <div className="flex flex-col max-w-6xl gap-y-6 md:gap-y-12">
          <div className={`relative w-10 sm:w-20 h-20 overflow-hidden`}>
            <NextImage
              src={savills}
              objectFit="contain"
              layout="fill"
              alt="Savills Estate Logo"
            />
          </div>
          <blockquote className="text-xl sm:text-xl sm:!leading-tight md:text-2xl">
          One of the main attractions of a country house is the often breathtaking landscape that surrounds it. However, it can be challenging to properly capture such scale and beauty on camera, particularly in locations which are tricky to access. The cost of hiring a helicopter to take aerial images is usually prohibitively expensive.
          That is where drone photography or videography comes in: used appropriately it can provide affordable, winning shots that catch the eye of website viewers, creating an emotional response that not only prompts buyers to arrange viewings, but generates more offers and ultimately drive sales. Certainly a 30-second film clip, where the viewer feels as though they are flying down a tree-lined drive, then rising up over the house to reveal a stunning water view can be mesmerising and beneficial to a successful sale.
          </blockquote>
          <div>
            <p className="text-sm">Cameron Ewer</p>
            <p className="text-sm text-eggshell/50">Head of Scotland Residential</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;