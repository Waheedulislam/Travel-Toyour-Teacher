import Image from "next/image";
import bannerImage from "../../../../app/assets/Home-Photo/HomeBanner.png";
import TitleAndText from "@/components/shared/TitleAndText";

const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={bannerImage}
          alt="Home Banner"
          fill
          className="object-cover scale-100 lg:scale-125 transition-all duration-700"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div className="-mt-18 relative">
        <TitleAndText
          title="ОСУЩЕСТВИ МЕЧТУ:"
          text=" изучай язык с учителем гидом и путешествуй"
        />
      </div>
    </div>
  );
};

export default Banner;
