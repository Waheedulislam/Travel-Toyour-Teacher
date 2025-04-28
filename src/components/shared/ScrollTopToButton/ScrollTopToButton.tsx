"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollTopToButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[300]">
      <button
        onClick={handleScrollTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
      >
        {isHovered ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
      </button>
    </div>
  );
};

export default ScrollTopToButton;
