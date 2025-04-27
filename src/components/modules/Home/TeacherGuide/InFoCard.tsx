import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

export function InfoCard({
  title,
  description,
  imageUrl,
  altText,
}: InfoCardProps) {
  return (
    <Card className="bg-[#FFD60A] flex flex-col items-center justify-between py-6 px-3 gap-6 rounded-2xl shadow-md h-full mt-8">
      <div className="bg-white rounded-xl py-3 px-6 w-full">
        <h2 className="text-lg  text-red-500 text-center">{title}</h2>
      </div>
      <CardContent className=" text-[#474747] text-lg text-left">
        <p>{description}</p>
      </CardContent>
      <div className="relative w-full h-48 px-3">
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <Image src={imageUrl} alt={altText} fill className="object-cover" />
        </div>
      </div>
    </Card>
  );
}
