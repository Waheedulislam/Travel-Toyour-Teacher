import Image from "next/image";
import groupImage from "../../../../assets/Group-1.png";

const Banner = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full">
        <Image
          src={groupImage}
          alt="Logo"
          layout="responsive"
          width={1920}
          height={1080}
          className="w-full h-full scale-x-140 scale-y-120" // Only scale horizontally
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold">Осуществи мечту:</h1>
        <p className="mt-4 text-2xl">
          изучай язык с учителем гидом и путешествуй
        </p>
      </div>
    </div>
  );
};

export default Banner;
