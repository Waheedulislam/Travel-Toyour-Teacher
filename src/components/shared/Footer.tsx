import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";
import { FormModal } from "../ui/FormModal/FormModal";
import { ContactButton } from "../ui/ContactButton";

const Footer = () => {
  return (
    <div
      id="contacts"
      className="bg-[#FFD60A] py-12 flex flex-col items-center justify-center space-y-8 mt-20"
    >
      {/* Title */}
      <h2 className="text-4xl  text-white">Contacts:</h2>

      {/* Icons */}
      <div className="flex gap-2">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
        <a
          href="https://t.me/your-telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
        >
          <FaTelegramPlane className="text-white text-2xl" />
        </a>
        <a
          href="skype:your-skype?chat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
        >
          <FaSkype className="text-white text-2xl" />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
        >
          <FaEnvelope className="text-white text-2xl" />
        </a>
      </div>

      {/* Chat Button */}

      <div className="flex items-center justify-center ">
        <FormModal>
          <ContactButton
            variant="orange"
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-2xl px-14 py-4   hover:opacity-100 mr-2 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
            onClick={() => console.log("Contact Button Clicked")}
          >
            Chat with us
          </ContactButton>
        </FormModal>
      </div>
    </div>
  );
};

export default Footer;
