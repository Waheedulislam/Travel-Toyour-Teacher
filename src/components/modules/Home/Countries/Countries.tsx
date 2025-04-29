import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import Europe from "./Europe";
import LatinAmerica from "./LatinAmerica";
import Asia from "./Asia";
import Oceania from "./Oceania";

const Countries = () => {
  return (
    <Container>
      {/* section-1  */}
      <div id="countries">
        <TitleAndText title="Countries" text="Where you can go:" />
      </div>
      <div>
        <p className="text-center text-xl font-normal mt-2 mb-4 ">
          Just select the country from the list below - where you are going to
          go, and leave a request with our consultant
        </p>
      </div>

      {/* section-2  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  mx-auto gap-8 p-8 ">
        <Europe />
        <LatinAmerica />
        <Asia />
        <Oceania />
      </div>
      {/* section-3  */}
      <p
        data-aos="zoom-in"
        className="text-xl lg:mx-36 mx-2 text-center  font-semibold md:text-3xl text-[#64D0FF] lg:my-20 my-10"
      >
        Explore the world with experienced teachers and like-minded travelers
        and learn during your next adventure.
      </p>
    </Container>
  );
};

export default Countries;
