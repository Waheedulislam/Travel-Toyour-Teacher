import Image from "next/image";
import whatsapp from "../../app/assets/Stock-Footer-Image/whatsapp.png";
import email from "../../app/assets/Stock-Footer-Image/email.png";
import skype from "../../app/assets/Stock-Footer-Image/skipe.png";
import telegram from "../../app/assets/Stock-Footer-Image/telegram.png";
import { FormModal } from "../ui/FormModal/FormModal";
import { ContactButton } from "../ui/ContactButton";

const StockFooter = () => {
  return (
    <div className="bg-[#FFD60A] py-12 flex flex-col items-center justify-center space-y-8 mt-20">
      {/* Title */}
      <h2 className="text-4xl  text-white">Contacts::</h2>

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

export default StockFooter;
