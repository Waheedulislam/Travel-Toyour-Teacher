import Image from "next/image";
import bannerImage from "../../../../app/assets/Home-Photo/HomeBanner.png";
import TitleAndText from "@/components/shared/TitleAndText";

const Banner = () => {
  return (
    <div className="mb-14 lg:mt-20 mt-4">
      <div className="relative w-full -mt-2 h-screen overflow-hidden">
        <Image
          src={bannerImage}
          alt="Home Banner"
          fill
          className="object-cover scale-100 lg:scale-120 transition-all duration-700"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div className="-mt-18 relative">
        <TitleAndText
          title="Make your dream come true:"
          text="learn language with teacher guide and travel"
        />
      </div>
    </div>
  );
};

export default Banner;
