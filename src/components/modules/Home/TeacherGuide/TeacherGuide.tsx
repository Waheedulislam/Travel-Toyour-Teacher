import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import { InfoCard } from "./InFoCard";
import { TeacherInfoCards } from "@/app/data/teacherInfoCard";

const TeacherGuide = () => {
  return (
    <Container>
      {/* section-1  */}
      <div className="mt-10 p-6">
        <TitleAndText
          title="Учитель гид"
          text="Почему учитель может быть идеальным гидом?"
        />
      </div>
      {/* section-2  */}
      <div className="font-normal text-center">
        <p className="mb-2 mt-8 text-xl">
          Вы едете в путешествие, а мы вам предлагаем гида учителя языка,
          который вам бы хотелось изучить.
        </p>
        <p className="mb-2 mt-4 text-xl">
          Учитель может быть идеальным гидом по нескольким причинам, опираясь на
          свое образование, коммуникативные навыки и способность содействовать
          процессу обучения. Вот некоторые качества, которые делают учителя
          подходящим для роли гида:
        </p>
      </div>

      {/* section-3  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center items-center p-6">
        {TeacherInfoCards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            altText={card.altText}
          />
        ))}
      </div>
    </Container>
  );
};

export default TeacherGuide;
