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
          <h1
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl md:text-6xl font-normal text-[#FF2D55] lg:mb-4 uppercase"
          >
            Language Teacher on the Go
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-anchor-placement="top-bottom"
            className="text-xl lg:mx-36 mx-2 mt-3 lg:mt-2 font-semibold md:text-3xl text-[#64D0FF]"
          >
            You go on a trip, and we provide you with a guide and teacher of the
            language you would like to learn.
          </p>
        </div>
      </div>

      {/* section-2 */}
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        data-aos-anchor-placement="top-bottom"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      >
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
    text: "Teachers usually have a good command of the local language, which allows them to explain information and answer students' questions more accurately and clearly.",
  },
  {
    image: teacherImage, // local image imported
    text: "The teachers are locals and know the interesting places and cultural features of the region, which makes them guides who can offer unique routes and excursions.",
  },
  {
    image:
      "https://traveltoyourteacher.ru/wp-content/uploads/2024/11/adventure-travel-tourism-hike-people-concept-couple-forest_1157-43353.jpg",
    text: "Teachers help students to actively participate in the learning process, which contributes to better assimilation of the material and the development of communication skills in the local language.",
  },
];

export default LanguageTeacher;
