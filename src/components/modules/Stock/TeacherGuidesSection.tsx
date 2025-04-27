
import image1 from "@/app/assets/Colmar-Strasbourg-France-Christmas-x-1.jpg"
import image2 from "@/app/assets/friends-traveling.jpg"
import image3 from "@/app/assets/Things-to-do-at-Christmas-in-Toronto-17.jpg.webp"
import Container from "@/components/shared/Container";
import Image from "next/image";

export default function TeacherGuidesSection() {
  return (
    <Container>
        
  
    <section className=" mx-auto px-4 py-12">
      {/* Main Heading */}
      <h2 className="text-red-600 font-bold text-center mb-6 leading-tight">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          НАШИ УЧИТЕЛЯ-ГИДЫ МЕСТНЫЕ ПЕДАГОГИ В
          <br className="hidden sm:block" /> ИТАЛИИ, ИСПАНИИ, ГЕРМАНИИ, ТУРЦИИ И ДРУГИХ
          <br className="hidden sm:block" /> СТРАНАХ ЕВРОПЫ.
        </span>
      </h2>

      {/* Subheading */}
      <div className="text-gray-600 text-center italic mb-10">
        <p className="text-lg sm:text-xl">
          <span className="text-red-500">🎁</span> Вы выучите английский, немецкий, итальянский, испанский, турецкий или 
          французский. <span className="text-red-500">🎁</span>
        </p>
      </div>

      {/* Three Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-red-600 rounded-lg p-4 text-white flex flex-col">
          <p className="text-center mb-4 h-24 flex items-center justify-center">
            Наши педагоги встретят вас в стране, станут вашими проводниками в её культуру и расскажут то, что вы не найдете в интернете.
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
            Это отличная возможность выучить язык с носителем.
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
            Наши гиды помогут вам глубже понять страну, её традиции и людей, превращая каждое место в живой урок и незабываемое впечатление.
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