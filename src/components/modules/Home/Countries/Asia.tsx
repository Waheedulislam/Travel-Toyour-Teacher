import { ContactButton } from "@/components/ui/ContactButton";
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
          Asia
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-1 text-center mb-4 text-xl">
        <li className="text-gray-800">
          <p>China</p>
        </li>
        <li className="text-gray-800">
          <p>India</p>
        </li>
        <li className="text-gray-800">
          <p>Indonesia</p>
        </li>
        <li className="text-gray-800">
          <p>Sri Lanka</p>
        </li>
      </ul>

      {/* Contact Button */}

      <FormModal>
        <ContactButton
          variant="orange"
          size="lg"
          className="bg-gradient-to-r uppercase from-orange-500 to-yellow-400 text-white  rounded-2xl my-3  mt-4 px-2 font-normal text-lg    hover:opacity-100 mr-2  hover:scale-105 transition-all duration-300   border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
        >
          Contact a consultant
        </ContactButton>
      </FormModal>
    </div>
  );
};

export default Asia;
