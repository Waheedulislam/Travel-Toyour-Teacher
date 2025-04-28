"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Lucide icons import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center lg:justify-between justify-center gap-3 px-4 md:px-8 lg:px-10 py-3  bg-white  static lg:fixed top-0 left-0 z-10">
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

        {/* Menu Toggle Button (only mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden bg-[#FFD60A]  p-2 rounded-md shadow-md focus:outline-none"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" /> // Close Icon with white color
          ) : (
            <Menu className="w-6 h-6 text-white" /> // Menu Icon with white color
          )}
        </button>
      </div>
      {/* Middle Section: Menu Links (Desktop Only) */}
      <div className="hidden md:flex gap-x-18 font-normal text-black text-base lg:text-xl">
        <Link href="/">Главная</Link>
        <Link href="/teacher-guide">Учитель гид</Link>
        <Link href="/countries">Страны</Link>
        <Link href="/blog">Блог</Link>
        <Link href="/stock">Акции</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
      <div className="">
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full px-5 py-2 shadow-lg hover:shadow-xl hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm lg:text-base">
          Заказать обратный звонок
        </Button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute  top-16 left-4 right-4 bg-[#FFD60A] shadow-md rounded-lg flex flex-col items-start p-4 gap-4 md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Главная
          </Link>
          <Link href="/teacher-guide" onClick={() => setMenuOpen(false)}>
            Учитель гид
          </Link>
          <Link href="/countries" onClick={() => setMenuOpen(false)}>
            Страны
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Блог
          </Link>
          <Link href="/stock" onClick={() => setMenuOpen(false)}>
            Акции
          </Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)}>
            Контакты
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
