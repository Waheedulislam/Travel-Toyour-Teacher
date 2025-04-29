import React from "react";
import { Button } from "@/components/ui/button";
import banner from "@/app/assets/critsmas-banner.jpg";
import tree1 from "@/app/assets/trees.png";
import tree2 from "@/app/assets/trees.png";
import tree3 from "@/app/assets/trees.png";
import Image from "next/image";

export default function ChristmasPromoSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner */}
      <div className="relative w-full">
        <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
          <Image
            src={banner}
            alt="Christmas Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Promo Content */}
        <div className="absolute inset-0 max-w flex flex-col items-center justify-center lg:justify-end lg:mb-32 px-4 text-center">
          <div className="animate-fade-up">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 sm:py-8 md:py-10 px-8 sm:px-10 md:px-12 w-auto md:w-[370px] text-xl sm:text-2xl md:text-3xl uppercase mb-4 sm:mb-6 shadow-lg border-2 rounded-xl">
              Give
            </Button>

            <div className="bg-white/70 px-2 py-3 sm:px-4 sm:py-5 md:px-8 md:py-6 max-w-8xl mx-auto rounded-xl ">
              <p className="text-red-600 font-extrabold text-lg sm:text-2xl md:text-4xl uppercase leading-snug">
                🎄 Give 🎄
                <br />a unique Christmas trip with a teacher-guide!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tree Images */}
      <div className="absolute bottom-0 w-full flex justify-center ">
        <div className="flex-1 ">
          <Image
            src={tree1}
            alt="Tree 1"
            width={430}
            height={90}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 ">
          <Image
            src={tree2}
            alt="Tree 2"
            width={430}
            height={90}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 ">
          <Image
            src={tree3}
            alt="Tree 3"
            width={430}
            height={90}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
