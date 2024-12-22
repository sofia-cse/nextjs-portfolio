"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/florere.svg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  const [isAnimated, setAnimated] = useState(false);

  const handleHover = () => {
    setAnimated(true);
  };
  const handleExit = () => {
    setAnimated(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
     in place of 'smooth' */
    });
    setAnimated(false);
  };
  const ScrollButton = ({ isAnimated }: { isAnimated: boolean }) => {
    return (
      <div
        className={
          "h-fit text-[--accent]" + (isAnimated ? " animate-bounce" : "")
        }
        aria-label="link to the top of Sofia Martin's Website"
      >
        <HiOutlineChevronDoubleUp
          className="m-auto"
          size={24}
          title="chevron icon"
        />
      </div>
    );
  };

  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        <div
          className="flex flex-row justify-center p-4 hover:cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleExit}
          onClick={scrollToTop}
        >
          <ScrollButton isAnimated={isAnimated} />
        </div>
        <Image
          src={logo}
          alt="Sofia Flower Logo"
          className=""
          width={60}
          height={60}
        />
      </div>
    </footer>
  );
};

export default Footer;
