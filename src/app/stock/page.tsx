import ChristmasGallerySection from "@/components/modules/Stock/ChristmasGallerySection";
import ChristmasPromoSection from "@/components/modules/Stock/ChristmasPromoSection/ChristmasPromoSection";
import GiftCertificateSection from "@/components/modules/Stock/GiftCertificateSection";
import TeacherGuidesSection from "@/components/modules/Stock/TeacherGuidesSection";

const stockPage = () => {
  return (
    <div>
      <ChristmasPromoSection />
      <TeacherGuidesSection />
      <GiftCertificateSection />
      <ChristmasGallerySection />
    </div>
  );
};

export default stockPage;
