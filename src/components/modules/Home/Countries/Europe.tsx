import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";

const Europe = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-yellow-400 rounded-xl p-6 w-full flex  h-ful flex-col items-center shadow-md"
    >
      {/* Region Title */}
      <div className="bg-white rounded-md px-4 py-2 mb-4">
        <h2 className="text-[#FF2D55] font-semibold text-lg text-center">
          Europe
        </h2>
      </div>

      {/* Country List */}
      {/* Country List */}
      <ul className="flex-1 w-full flex flex-col items-center space-y-2 text-center mb-6 text-xl">
        <li className="text-gray-800">
          <p>Italy</p>
        </li>
        <li className="text-gray-800">
          <p>Spain</p>
        </li>
        <li className="text-gray-800">
          <p>France</p>
        </li>
        <li className="text-gray-800">
          <p>Germany</p>
        </li>
        <li className="text-gray-800">
          <p>Montenegro</p>
        </li>
        <li className="text-gray-800">
          <p>Portugal</p>
        </li>
        <li className="text-gray-800">
          <p>Greece</p>
        </li>
        <li className="text-gray-800">
          <p>Slovenia</p>
        </li>
        <li className="text-gray-800">
          <p>Finland</p>
        </li>
        <li className="text-gray-800">
          <p>Croatia</p>
        </li>
        <li className="text-gray-800">
          <p>Estonia</p>
        </li>
        <li className="text-gray-800">
          <p>Latvia</p>
        </li>
        <li className="text-gray-800">
          <p>Lithuania</p>
        </li>
        <li className="text-gray-800">
          <p>Czech Republic</p>
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

export default Europe;
