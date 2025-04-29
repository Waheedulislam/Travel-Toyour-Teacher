import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";
import Image from "next/image";

const TravelingTeacher = () => {
  return (
    <Container>
      {/* section-1 */}
      <div className="mt-20">
        <TitleAndText
          title="Traveling with your teacher
"
          text="Language teacher as a guide:"
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
          <p className="text-left text-xl font-normal text-[#474747]">
            You couldn&apos;t ask for a more qualified guide, with the
            communication skills, the energy to teach, and the talent to bring
            places and events to life, than a passionate teacher.
          </p>
          <p className="text-left text-xl mt-6 font-normal text-[#474747]">
            And, with their other professional skills of organizational
            experience, problem-solving ability, and adaptability, your tour
            guru won&apos;t be lost or flustered when unexpected
            &quot;hiccups&quot; arise.
          </p>
          <div className="flex items-center justify-center mt-10">
            <FormModal>
              <ContactButton
                variant="orange"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-normal rounded-2xl   px-14 py-4   hover:opacity-100 mr-2 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
              >
                Find out more
              </ContactButton>
            </FormModal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelingTeacher;
