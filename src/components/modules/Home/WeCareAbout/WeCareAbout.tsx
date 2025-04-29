"use client";
import { features } from "@/app/data/features";
import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import { Card, CardContent } from "@/components/ui/card";
import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";

const WeCareAbout = () => {
  return (
    <Container>
      {/* section-1 */}
      <div className="mt-20">
        <TitleAndText
          title="Мы заботимся о вас"
          text="Комфорт и удобство в изучении языка:"
        />
      </div>
      {/* section-2  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 place-items-center p-6">
        {features.map((feature, index) => (
          <Card
            data-aos="fade-up"
            key={index}
            className="bg-[#FFD60A] text-center text-[#474747] rounded-2xl p-12 w-full max-w-xs flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <CardContent>
              <div className="text-white text-5xl mb-4 ">{feature.icon}</div>
              <p className=" font-normal text-nowrap">{feature.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* section-3  */}
      <div className="text-center mt-10 lg:mt-20">
        <p className="text-xl lg:mx-28 mx-2  font-semibold md:text-3xl text-[#64D0FF]">
          Получайте специальные индивидуальные предложения для путешествий на
          свою электронную почту!
        </p>
        <FormModal>
          <ContactButton
            variant="orange"
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-2xl lg:px-10 mt-8 px-6  py-3   hover:opacity-100 mr-2 hover:scale-105 transition-all duration-300 text-2xl h-auto w-auto border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
          >
            Узнать подробнее
          </ContactButton>
        </FormModal>
      </div>
    </Container>
  );
};

export default WeCareAbout;
