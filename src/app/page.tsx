import Countries from "@/components/modules/Home/Countries/Countries";
import Banner from "@/components/modules/Home/HeroSection/Banner";
import LanguageTeacher from "@/components/modules/Home/LanguageTeacher/LanguageTeacher";
import TeacherGuide from "@/components/modules/Home/TeacherGuide/TeacherGuide";
import TravelIdea from "@/components/modules/Home/TravelIdea/TravelIdea";

export default function Home() {
  return (
    <div>
      <Banner />
      <LanguageTeacher />
      <TeacherGuide />
      <TravelIdea />
      <Countries />
    </div>
  );
}
