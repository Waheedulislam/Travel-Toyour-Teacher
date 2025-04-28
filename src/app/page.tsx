import Blog from "@/components/modules/Home/Blog/Blog";
import Countries from "@/components/modules/Home/Countries/Countries";
import Banner from "@/components/modules/Home/HeroSection/Banner";
import LanguageTeacher from "@/components/modules/Home/LanguageTeacher/LanguageTeacher";
import TeacherGuide from "@/components/modules/Home/TeacherGuide/TeacherGuide";
import TravelCountry from "@/components/modules/Home/TravelCountry/TravelCountry";
import TravelIdea from "@/components/modules/Home/TravelIdea/TravelIdea";
import TravelingTeacher from "@/components/modules/Home/TravelingTeacher/TravelingTeacher";
import WeCareAbout from "@/components/modules/Home/WeCareAbout/WeCareAbout";

export default function Home() {
  return (
    <div>
      <Banner />
      <LanguageTeacher />
      <TeacherGuide />
      <TravelIdea />
      <Countries />
      <TravelCountry />
      <TravelingTeacher />
      <WeCareAbout />
      <Blog />
    </div>
  );
}
