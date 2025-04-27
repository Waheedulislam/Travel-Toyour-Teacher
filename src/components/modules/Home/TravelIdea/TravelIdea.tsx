import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import Image from "next/image";

const TravelIdea = () => {
  return (
    <Container>
      <div className="my-20 ">
        {/* section-1 */}
        <div>
          <TitleAndText
            title="Идея «Travel to Your Teacher»"
            text="Основательница Ринета Сейт, учитель английского языка."
          />
        </div>

        {/* section-2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-10 p-6">
          <div className="w-full md:w-1/2">
            <Image
              src="https://traveltoyourteacher.ru/wp-content/uploads/2024/11/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-05-27-%D0%B2-22.04.23_ccdeada0-1536x864.jpg"
              alt="idea-logo"
              width={400}
              height={200}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-left md:text-xl lg:font-normal">
              Она создала платформу, где обучение и путешествие идут рука об
              руку. Объединяя учителей со всего мира, включая даже таких
              известных педагогов, как Мария Лопес из Колумбии и Дэвид Чен из
              Китая, вместе с ней люди создали разнообразную сеть
              энтузиастов-гидов. Наши учителя-гиды — рассказчики, которые
              оживляют каждое место.
            </p>
            <p className="text-left lg:mt-12 mt-8 md:text-xl lg:font-normal">
              Присоединяйтесь к нам для исследования всего того, что выходит за
              рамки осмотра достопримечательностей и вместе с увлечёнными
              педагогами откройте для себя радость обучения с «Travel to Your
              Teacher».
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelIdea;
