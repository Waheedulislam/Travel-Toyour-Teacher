"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import giftimage from "@/app/assets/icon-sale.png";
import cuponimage from "@/app/assets/gift-img.jpg";

import Image from "next/image";

export default function GiftCertificateSection() {
  return (
    <Container >
      <section className="py-8 md:py-12">
        {/* Red banner with Santa peeking */}
        <div className="relative bg-red-600 text-white rounded-2xl p-6 md:p-10 mb-10">
          {/* Santa peeking image */}
          <div className="absolute -top-8 right-4">
            <Image
              src={giftimage}
              alt="Santa peeking"
              width={100}
              height={100}
         
            />
          </div>

          {/* Banner text */}
          <p className="text-center text-lg sm:text-xl md:text-2xl italic py-4">
            <span className="text-yellow-300">🎁</span> Подарите себе или своим близким не просто поездку, а полное
            погружение в другую культуру! <span className="text-yellow-300">🎁</span>
          </p>
        </div>

        {/* Gray section text */}
        <div className="text-gray-600 text-center mb-8 md:mb-12">
          <p className="text-lg sm:text-xl md:text-2xl italic">
            <span className="text-yellow-300">🎁</span> Это не просто экскурсия, а настоящий культурный обмен: истории, скрытые от глаз
            туристов, и секреты, известные только местным жителям. <span className="text-yellow-300">🎁</span>
          </p>
        </div>

        {/* Gift Development and Harmony heading */}
        <h2 className="text-red-600 font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10">
          <span className="text-yellow-300">🎁</span> ПОДАРИ РАЗВИТИЕ И ГАРМОНИЮ! <span className="text-yellow-300">🎁</span>
        </h2>

        {/* Two-column layout for gift box and certificate image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left column - Red box */}
          <div className="bg-red-600 text-white rounded-2xl p-6 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Подари развитие и гармонию! Сертификат на изучение языка и путешествие – идеальный подарок. 🎁✨
            </h3>

            <p className="mb-8 text-lg md:text-xl">
              ➡️ Закажите урок-подарок прямо сейчас и начните новую главу на пути к саморазвитию и здоровью.
            </p>

            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg md:text-2xl py-4 px-8 md:py-10 md:px-12 rounded-md">
              ПОДАРИТЬ
            </Button>
          </div>

          {/* Right column - Certificate image */}
          <div className="flex justify-center">
            <Image
              src={cuponimage}
              alt="Gift certificates"
              className="rounded-2xl w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
