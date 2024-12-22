import React from "react";
import Image from "next/image";
import logo from "../../public/assets/florere.svg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        <div className="flex h-20 flex-row justify-center">
          <a
            href="/"
            className="h-fit p-4 text-[--accent] hover:h-20 hover:animate-bounce"
            aria-label="link to the top of Sofia Martin's Website"
          >
            <HiOutlineChevronDoubleUp
              className="m-auto"
              size={24}
              title="chevron icon"
            />
          </a>
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
