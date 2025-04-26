"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://traveltoyourteacher.ru/wp-content/uploads/2024/11/cropped-cropped-Logo-for-Travel-to-Your-Teacher-travel-agency_Var-1.1.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex gap-8 font-medium text-gray-800">
        <Link href="/">Home</Link>
        <Link href="/teacher-guide">Teacher guide</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/stock">Stock</Link>
        <Link href="/contacts">Contacts</Link>
      </div>

      {/* Request Call Back Button */}
      <div className="hidden md:block">
        <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold rounded-md hover:opacity-90">
          REQUEST A CALL BACK
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
