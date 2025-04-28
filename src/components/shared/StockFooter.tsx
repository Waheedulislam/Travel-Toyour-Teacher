import Image from "next/image";
import { Button } from "../ui/button";
import whatsapp from "../../app/assets/Stock-Footer-Image/whatsapp.png";
import email from "../../app/assets/Stock-Footer-Image/email.png";
import skype from "../../app/assets/Stock-Footer-Image/skipe.png";
import telegram from "../../app/assets/Stock-Footer-Image/telegram.png";

const StockFooter = () => {
  return (
    <div className="bg-[#FFD60A] py-12 flex flex-col items-center justify-center space-y-8 mt-20">
      {/* Title */}
      <h2 className="text-4xl  text-white">Контакты:</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="https://wa.me/79781214532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={whatsapp}
            alt="WhatsApp"
            width={28}
            height={28}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={telegram}
            alt="Telegram"
            width={28}
            height={28}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="skype:your.skype.id?chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={skype}
            alt="Skype"
            width={28}
            height={28}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={email}
            alt="Email"
            width={28}
            height={28}
            className="hover:scale-110 transition-all duration-300"
          />
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

export default StockFooter;
