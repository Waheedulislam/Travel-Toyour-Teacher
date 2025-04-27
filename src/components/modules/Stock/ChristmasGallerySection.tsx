import image1 from "@/app/assets/girls1.jpg"
import image2 from "@/app/assets/girls2.jpg"
import image3 from "@/app/assets/girls3.jpg"
import image4 from "@/app/assets/girls4.jpg"
import Container from "@/components/shared/Container";
import Image from "next/image";
export default function ChristmasGallerySection() {
  const galleryImages = [
    {
      src: image1,
      alt: "Woman in green sweater and red skirt next to Christmas tree"
    },
    {
      src: image2,
      alt: "Woman in white sweater outside French shop"
    },
    {
      src: image3,
      alt: "Woman in pink coat and red dress in Colmar"
    },
    {
      src: image4,
      alt: "Woman next to red Christmas decoration at cathedral"
    }
  ];

  return (
    <Container>

 
    <section >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image 
              src={image.src} 
              alt={image.alt}
              className="w-full h-[500px] sm:h-[450px] md:h-[500px] object-cover" 
            />
          </div>
        ))}
      </div>
    </section>
    </Container>
  );
}