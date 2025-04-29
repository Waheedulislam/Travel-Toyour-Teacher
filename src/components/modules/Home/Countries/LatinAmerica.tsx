import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";

const LatinAmerica = () => {
  return (
    <div
      data-aos="fade-down"
      className="bg-yellow-400 rounded-xl p-6 w-full  h-96  flex flex-col items-center shadow-md "
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Latin America
        </h2>
      </div>

      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center  text-center mb-6 text-xl">
        <li className="text-gray-800 mt-1">
          <p>Colombia</p>
        </li>
        <li className="text-gray-800 mt-1">
          <p>Mexico</p>
        </li>
        <li className="text-gray-800 mt-1">
          <p>Guatemala</p>
        </li>
        <li className="text-gray-800 mt-1">
          <p>Brazil</p>
        </li>
        <li className="text-gray-800 mt-1">
          <p>Bolivia</p>
        </li>
        <li className="text-gray-800 mt-1">
          <p>Costa Rica</p>
        </li>
      </ul>

      {/* Contact Button */}
      <FormModal>
        <ContactButton
          variant="orange"
          size="lg"
          className="bg-gradient-to-r mt-4 uppercase from-orange-500 to-yellow-400 text-white  rounded-2xl my-3   px-2 font-normal text-lg    hover:opacity-100 mr-2  hover:scale-105 transition-all duration-300   border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
        >
          Contact a consultant
        </ContactButton>
      </FormModal>
    </div>
  );
};

export default LatinAmerica;
