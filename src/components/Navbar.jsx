"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20 z-[100] sticky top-0 backdrop-blur-md bg-white/70 dark:bg-[#121212]/70">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-8">
        <a href="/#main">
          <Image src="/assets/florere.svg" alt="logo" width={35} height={35} />
        </a>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#main">Home</Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#about" scroll={false}>
                About
              </Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Mobile Menu */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-[black]/70"
            : "hidden"
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-0 px-2 py-6  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white dark:bg-[#121212] ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="px-5">
                <Image
                  src="/assets/florere.svg"
                  alt="logo"
                  width={35}
                  height={35}
                />
              </div>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={25} />
              </div>
            </div>
          </div>
          <div className="py-4 px-5 flex flex-col">
            <ul>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#main">
                  Home
                </Link>
              </li>

              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#about">
                  About
                </Link>
              </li>

              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#skills">
                  Skills
                </Link>
              </li>

              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#projects">
                  Projects
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-40">
              <p>Let&#39;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                    target="blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="p-3 cursor-pointer">
                  <a href="https://github.com/csejbm" target="blank">
                    <FaGithub />
                  </a>
                </div>
                <div className="p-3 cursor-pointer">
                  <a href="mailto:sofiamartinux@gmail.com" target="blank">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
