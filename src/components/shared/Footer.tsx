import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contacts"
      className="bg-[#FFD60A] py-12 flex flex-col items-center justify-center space-y-8 mt-20"
    >
      {/* Title */}
      <h2 className="text-4xl  text-white">Контакты:</h2>

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
        <Button
          className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-2xl px-14 py-4 shadow-lg hover:shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto"
          size="lg"
          variant="default"
        >
          ЧАТ С НАМИ
        </Button>
      </div>
    </div>
  );
};

export default Footer;
