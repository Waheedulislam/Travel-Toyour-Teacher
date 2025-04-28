"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { blogData } from "@/app/data/blogData";

const NMBlog = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:opacity-90">
                  Читать далее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NMBlog;
