import Container from "@/components/shared/Container";
import Image from "next/image";
// **Local image correct way import করতে হবে:**
import teacherImage from "../../../../app/assets/Home-Photo/teacher.jpg";

const LanguageTeacher = () => {
  return (
    <Container>
      {/* section-1 */}
      <div className="mt-10">
        <div className="text-center px-4 mb-10">
          <h1 className="text-3xl md:text-6xl font-normal text-[#FF2D55] lg:mb-4 uppercase">
            Учитель Языка в Путешествии
          </h1>
          <p className="text-xl lg:mx-36 mx-2 mt-3 lg:mt-2 font-semibold md:text-3xl text-[#64D0FF]">
            Вы едете в путешествие, а мы вам предоставляем гида учителя языка,
            который вам бы хотелось изучить.
          </p>
        </div>
      </div>

      {/* section-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group hover:scale-[1.02] transition-transform duration-300 h-[500px]"
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={card.image}
                alt={`Card ${index + 1}`}
                fill
                className="object-cover object-center rounded-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Text Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#64D0FF] bg-opacity-90 text-black p-4 rounded-2xl  text-center mx-4">
              <p className=" font-normal text-left">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const cards = [
  {
    image: "https://traveltoyourteacher.ru/wp-content/uploads/2024/11/58.jpg",
    text: "Учителя обычно хорошо владеют местным языком, что позволяет им объяснять информацию и отвечать на вопросы учеников более точно и доступно.",
  },
  {
    image: teacherImage, // local image imported
    text: "Учителя местные жители и знают интересные места и культурные особенности региона, что делает их гидами, способными предложить уникальные маршруты и экскурсии.",
  },
  {
    image:
      "https://traveltoyourteacher.ru/wp-content/uploads/2024/11/adventure-travel-tourism-hike-people-concept-couple-forest_1157-43353.jpg",
    text: "Учителя помогают ученикам активно участвовать в процессе обучения, что способствует лучшему усвоению материала и развитию навыков общения на местном языке.",
  },
];

export default LanguageTeacher;
