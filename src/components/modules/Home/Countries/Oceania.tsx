import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";

const Oceania = () => {
  return (
    <div
      data-aos="fade-left"
      className="bg-yellow-400 rounded-xl p-6 w-full  h-64 flex flex-col items-center shadow-md "
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Oceania
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center  text-center mb-2 text-xl">
        <li className="text-gray-800 ">
          <p>Australia</p>
        </li>
        <li className="text-gray-800 ">
          <p>New Zealand</p>
        </li>
        <li className="text-gray-800 ">
          <p>French Polynesia</p>
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

export default Oceania;
