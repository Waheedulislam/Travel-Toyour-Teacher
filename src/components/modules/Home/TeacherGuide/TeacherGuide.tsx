import Container from "@/components/shared/Container";
import TitleAndText from "@/components/shared/TitleAndText";
import { InfoCard } from "./InFoCard";
import { TeacherInfoCards } from "@/app/data/teacherInfoCard";

const TeacherGuide = () => {
  return (
    <Container>
      {/* section-1  */}
      <div className="mt-10 p-6 " id="teacher-guide">
        <TitleAndText
          title="Teacher guide"
          text="Why can a teacher be an ideal guide?"
        />
      </div>
      {/* section-2  */}
      <div className="font-normal text-center">
        <p className="mb-2 mt-8 text-xl">
          You are going on a trip, and we offer you a guide teacher of the
          language you would like to learn.
        </p>
        <p className="mb-2 mt-4 text-xl">
          A teacher can be an ideal guide for several reasons, based on their
          education, communication skills, and ability to facilitate learning.
          Here are some qualities that make a teacher suitable for the role of
          guide:
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
