"use client";

import Image from "next/image";
import { blogData } from "@/app/data/blogData";
import { FormModal } from "../../FormModal/FormModal";
import { ContactButton } from "../../ContactButton";

const NMBlog = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div
        data-aos="fade-up"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {blogData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white rounded-xl overflow-hidden  transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.imageUrl}
                alt={item.description}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col flex-1 ">
              <p className=" text-xl font-normal mt-2 ">{item.description}</p>
              <div className=" text-center mt-4">
                <FormModal>
                  <ContactButton
                    variant="orange"
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-normal rounded-2xl  mt-8 px-4  py-2   hover:opacity-100 mr-2  mb-1 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
                  >
                    Читать далее
                  </ContactButton>
                </FormModal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NMBlog;
