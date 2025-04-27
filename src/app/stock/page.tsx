import ChristmasGallerySection from "@/components/modules/Stock/ChristmasGallerySection";
import ChristmasPromoSection from "@/components/modules/Stock/ChristmasPromoSection/ChristmasPromoSection";
import GiftCertificateSection from "@/components/modules/Stock/GiftCertificateSection";
import TeacherGuidesSection from "@/components/modules/Stock/TeacherGuidesSection";
import StockFooter from "@/components/shared/StockFooter";

const stockPage = () => {
  return (
    <div>
      <ChristmasPromoSection />
      <TeacherGuidesSection />
      <GiftCertificateSection />
      <ChristmasGallerySection />

      <StockFooter />
    </div>
  );
};

export default stockPage;
