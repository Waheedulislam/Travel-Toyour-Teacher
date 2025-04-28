import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/ui/FormModal/FormModal";
import React from "react";

const Asia = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-yellow-400 justify-center  rounded-xl p-6 w-full h-80 flex flex-col items-center shadow-md "
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className=" text-[#FF2D55] font-semibold text-lg text-center">
          Азия
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-2 text-center mb-4">
        <li className="text-gray-800 text-lg">
          <p>Китай</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Индия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Индонезия</p>
        </li>
        <li className="text-gray-800 text-lg">
          <p>Шри-Ланка</p>
        </li>
      </ul>

      {/* Contact Button */}

      <FormModal>
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:scale-105 transition-transform">
          Связь с консультантом
        </Button>
      </FormModal>
    </div>
  );
};

export default Asia;
