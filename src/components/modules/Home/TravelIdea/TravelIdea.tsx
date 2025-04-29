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
            title="The idea of ​​'Travel to Your Teacher'"
            text="Founder Rineta Seit, English teacher."
          />
        </div>

        {/* section-2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-10 p-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full md:w-1/2 overflow-x-hidden"
          >
            <Image
              src="https://traveltoyourteacher.ru/wp-content/uploads/2024/11/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-05-27-%D0%B2-22.04.23_ccdeada0-1536x864.jpg"
              alt="idea-logo"
              width={400}
              height={200}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 overflow-x-hidden"
          >
            <p className="text-left md:text-xl lg:font-normal">
              She has created a platform where learning and travel go hand in
              hand. By bringing together teachers from all over the world,
              including renowned educators like Maria Lopez from Colombia and
              David Chen from China, she has created a diverse network of
              enthusiastic guides. Our teacher guides are storytellers who bring
              each place to life.
            </p>
            <p className="text-left lg:mt-12 mt-8 md:text-xl lg:font-normal">
              Join us as we explore beyond the sights and discover the joy of
              learning with passionate educators at Travel to Your Teacher.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TravelIdea;
