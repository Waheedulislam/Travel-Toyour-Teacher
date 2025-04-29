import image1 from "@/app/assets/Colmar-Strasbourg-France-Christmas-x-1.jpg";
import image2 from "@/app/assets/friends-traveling.jpg";
import image3 from "@/app/assets/Things-to-do-at-Christmas-in-Toronto-17.jpg.webp";
import Container from "@/components/shared/Container";
import Image from "next/image";

export default function TeacherGuidesSection() {
  return (
    <Container>
      <section className=" mx-auto px-4 py-12">
        {/* Main Heading */}
        <h2 className="text-red-600 font-bold text-center mb-6 ">
          <span className="  text-3xl lg:text-6xl">
            Our teacher-guides are local educators in Italy, Spain, Germany,
            Turkey and other European countries.
          </span>
        </h2>

        {/* Subheading */}
        <div className="text-gray-600 text-center italic mb-10">
          <p className="text-lg sm:text-xl">
            <span className="text-red-500">🎁</span> You will learn English,
            German, Italian, Spanish, Turkish or French.{" "}
            <span className="text-red-500">🎁</span>
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-red-600 rounded-lg p-4 text-white flex flex-col">
            <p className="text-center mb-4 h-24 flex items-center justify-center">
              Our teachers will meet you in the country, become your guides to
              its culture and tell you things you won’t find on the Internet.
            </p>
            <div className="mt-auto rounded-lg overflow-hidden">
              <Image
                src={image1}
                alt="Teacher in red coat"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-red-600 rounded-lg p-4 text-white flex flex-col">
            <p className="text-center mb-4 h-24 flex items-center justify-center">
              This is a great opportunity to learn a language with a native
              speaker.
            </p>
            <div className="mt-auto rounded-lg overflow-hidden">
              <Image
                src={image2}
                alt="Two women in winter clothes"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-red-600 rounded-lg p-4 text-white flex flex-col">
            <p className="text-center mb-4 h-24 flex items-center justify-center">
              Our guides will help you gain a deeper understanding of the
              country, its traditions and people, turning each place into a
              living lesson and an unforgettable experience.
            </p>
            <div className="mt-auto rounded-lg overflow-hidden">
              <Image
                src={image3}
                alt="Woman at Christmas market"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
