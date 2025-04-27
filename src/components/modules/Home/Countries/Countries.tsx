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
      <div>
        <TitleAndText title="Страны" text="Куда вы можете отправиться:" />
        <p className="text-xl my-8 text-center">
          Просто выберите страну в списке ниже - куда Вы собрались отправиться,
          и оставьте заявку у нашего консультанта
        </p>
      </div>

      {/* section-2  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-8 p-8">
        <Europe />
        <LatinAmerica />
        <Asia />
        <Oceania />
      </div>
    </Container>
  );
};

export default Countries;
