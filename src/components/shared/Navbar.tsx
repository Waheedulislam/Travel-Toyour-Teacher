"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FormModal } from "../ui/FormModal/FormModal";
import { scroller } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { ContactButton } from "../ui/ContactButton";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleFooterScroll = () => {
    if (pathname === "/") {
      scroller.scrollTo("contacts", {
        duration: 600,
        delay: 0,
        smooth: true,
      });
    } else {
      router.push("/");
      setTimeout(() => {
        scroller.scrollTo("contacts", {
          duration: 600,
          delay: 0,
          smooth: true,
        });
      }, 500);
    }
  };

  const baseClasses =
    "w-full px-3 py-2 rounded-md transition-all hover:bg-[#3f444b] hover:text-white text-[#33373D] text-xl text-left";
  const activeClasses = "bg-[#3f444b] text-white text-xl";

  return (
    <nav className="w-full flex items-center lg:justify-between justify-center gap-8 px-4 md:px-2 lg:px-10 py-3 bg-white static lg:fixed top-0 left-0 z-10">
      {/* Left Section: Logo + Menu Icon */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="https://traveltoyourteacher.ru/wp-content/uploads/2024/11/cropped-cropped-Logo-for-Travel-to-Your-Teacher-travel-agency_Var-1.1.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>

        {/* Mobile/Tablet menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden bg-[#FFD60A] p-2 rounded-md shadow-md focus:outline-none"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      {/* md:gap-x-2  lg:gap-x-18 */}
      {/* Desktop menu (only visible in lg and above) */}
      <div className="hidden lg:flex  md:gap-x-2  lg:gap-x-18 font-normal text-black text-base lg:text-xl">
        <Link className="" href="/">
          Home
        </Link>
        <button
          onClick={() =>
            scroller.scrollTo("teacher-guide", { smooth: true, duration: 600 })
          }
          className="cursor-pointer  bg-transparent border-none text-black"
        >
          Teacher guid
        </button>
        <button
          onClick={() =>
            scroller.scrollTo("countries", { smooth: true, duration: 600 })
          }
          className="cursor-pointer mr-4 bg-transparent border-none text-black"
        >
          Countries
        </button>
        <Link className="" href="/blog">
          Blog
        </Link>
        <Link className="" href="/stock">
          Stock
        </Link>
        <button
          onClick={handleFooterScroll}
          className="cursor-pointer bg-transparent border-none text-black"
        >
          Contacts
        </button>
      </div>

      {/* Call to Action Button */}
      <div>
        <FormModal>
          <ContactButton
            variant="orange"
            size={"lg"}
            className="bg-gradient-to-r uppercase from-orange-600 to-yellow-400 text-white font-normal rounded-lg px-4 lg:px-8 lg:py-6 py-4 text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 border-none shadow-[4px_4px_0px_0px_rgba(255,140,0,0.9)]"
          >
            Request A Call Back
          </ContactButton>
        </FormModal>
      </div>

      {/* Mobile & Tablet dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#FFD60A] shadow-md rounded-lg flex flex-col items-start p-4 gap-2 lg:hidden z-50 text-base font-medium">
          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("home");
            }}
            className={cn(baseClasses, activeLink === "home" && activeClasses)}
          >
            Home
          </Link>

          <button
            onClick={() => {
              scroller.scrollTo("teacher-guide", {
                smooth: true,
                duration: 600,
              });
              setMenuOpen(false);
              setActiveLink("teacher");
            }}
            className={cn(
              baseClasses,
              activeLink === "teacher" && activeClasses
            )}
          >
            Teacher Guid
          </button>

          <button
            onClick={() => {
              scroller.scrollTo("countries", { smooth: true, duration: 600 });
              setMenuOpen(false);
              setActiveLink("countries");
            }}
            className={cn(
              baseClasses,
              activeLink === "countries" && activeClasses
            )}
          >
            Countries
          </button>

          <Link
            href="/blog"
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("blog");
            }}
            className={cn(baseClasses, activeLink === "blog" && activeClasses)}
          >
            Blog
          </Link>

          <Link
            href="/stock"
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("stock");
            }}
            className={cn(baseClasses, activeLink === "stock" && activeClasses)}
          >
            Stock
          </Link>

          <button
            onClick={() => {
              setMenuOpen(false);
              setActiveLink("contacts");
              handleFooterScroll();
            }}
            className={cn(
              baseClasses,
              activeLink === "contacts" && activeClasses
            )}
          >
            Contacts
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
