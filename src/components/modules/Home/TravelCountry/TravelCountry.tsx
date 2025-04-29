import { travelOffers } from "@/app/data/travelOffer";
import Container from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { ContactButton } from "@/components/ui/ContactButton";
import { FormModal } from "@/components/ui/FormModal/FormModal";
import Image from "next/image";

const TravelCountry = () => {
  return (
    <Container>
      {/* section-1  */}
      <div>
        <div className="  text-center px-4">
          <h2
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-anchor-placement="top-bottom"
            className="text-3xl md:text-5xl  text-[#FF2D55] lg:mb-4 uppercase"
          >
            Travel for 2024
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1700"
            data-aos-anchor-placement="top-bottom"
            className="text-xl lg:mx-28 mx-2  font-semibold md:text-3xl text-[#64D0FF]"
          >
            Examples of where you can go with a teacher:
          </p>
        </div>
      </div>
      {/* section-2  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-10">
        {travelOffers.map((offer) => (
          <Card
            data-aos="fade-up"
            key={offer.id}
            className="bg-[#FFD60A] rounded-2xl shadow-xl overflow-hidden"
          >
            <div className=" px-6 overflow-hidden">
              <Image
                src={offer.imageUrl}
                alt={offer.title}
                width={400}
                height={250}
                className="w-full object-cover  h-48 rounded-xl"
              />
            </div>
            <CardContent className=" flex flex-col items-center">
              <div className="bg-white  w-full rounded-md px-2 py-2 mb-4">
                <h2 className="text-[#FF2D55]  text-lg text-center ">
                  {offer.title}
                </h2>
              </div>
              <p className="text-gray-700 font-normal text-xl mt-2 text-left">
                {offer.description}
              </p>
              <div className="mt-4 text-center">
                <p className="line-through text-[#ACACAC] text-sm">
                  form ${offer.oldPrice}
                </p>
                <p className="text-[#64D0FF] text-2xl font-bold">
                  form ${offer.newPrice}
                </p>
                <p className="text-gray-600 text-lg mt-1">
                  price for {offer.duration}
                </p>
              </div>
              <FormModal>
                <ContactButton
                  variant="orange"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white  rounded-2xl my-3  mt-4 px-16  font-normal  hover:opacity-100 mr-2  hover:scale-105 transition-all duration-300   border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.7)]"
                >
                  MORE DETAILS
                </ContactButton>
              </FormModal>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TravelCountry;
