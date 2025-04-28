import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const TravelingTeacher = () => {
  return (
    <Container>
      {/* section-1 */}
      <div className="mt-20">
        <TitleAndText
          title="Путешествие со своим учителем
"
          text="Учитель языка как гид:"
        />
      </div>
      {/* section-2 */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-6 p-6">
        <div className="w-full md:w-1/2">
          <Image
            data-aos="fade-right"
            src="https://traveltoyourteacher.ru/wp-content/uploads/2024/11/photo_2024-11-05_02-36-51-e1730763587108-1024x537.jpg"
            alt="idea-logo"
            width={800} // ← increased width
            height={600} // ← increased height
            className="rounded-2xl w-full lg:h-[360px] object-cover" // ← important: fix height
          />
        </div>

        <div
          data-aos="fade-left"
          className="w-full md:w-1/2 bg-[#FFD60A] p-4 lg:p-8 rounded-2xl"
        >
          <p className="text-left font-normal text-[#474747]">
            Вы не могли бы желать более квалифицированного гида, с навыками
            общения, энергией для обучения и талантом оживлять места и события,
            чем пылкий учитель.
          </p>
          <p className="text-left mt-6 font-normal text-[#474747]">
            И, с их другими профессиональными навыками организационного опыта,
            способностью решать проблемы, а также адаптивностью, ваш гуру для
            тура не будет потерян или взволнован, когда возникнут неожиданные
            «заминки».
          </p>
          <div className="flex items-center justify-center mt-10">
            <Button
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-2xl px-14 py-4 shadow-lg hover:shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto"
              size="lg"
              variant="default"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelingTeacher;
