"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";
import StockFooter from "@/components/shared/StockFooter";

export default function FooterController() {
  const pathname = usePathname();

  if (pathname === "/stock") {
    return <StockFooter />;
  } else {
    return <Footer />;
  }
}
