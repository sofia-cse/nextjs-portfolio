"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../public/assets/florere.svg";
import ThemeButton from "./ThemeButton.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="nav-top w-full h-20 z-[100] sticky top-0 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center w-full h-full px-2 2xl:px-8">
        <Link
          href="/#main"
          aria-label="link to the top of the homepage for Sofia Martin's profile"
        >
          <Image
            src={logo}
            alt="Sofia Martin's logo"
            title="Sofia Martin's logo"
            width={35}
            height={35}
          />
        </Link>
        <div>
          <ul className="hidden md:flex items-center">
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#main">Home</Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#work">Work</Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#skills">Tools</Link>
            </li>
            <li className="ml-10 text sm hover:border-collapse">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-10 hover:border-collapse min-w-[24px] max-h-[24px]">
              <ThemeButton />
            </li>
          </ul>
          {/* Mobile Menu */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu
              size={25}
              title="hamburger menu icon"
              aria-label="button to open the navigation side menu"
            />
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
              ? "nav-side md:hidden fixed right-0 top-0 px-2 py-6  w-[65%] sm:w-[60%] md:w-[45%] h-screen ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="px-5">
                <ThemeButton />
              </div>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose
                  size={25}
                  title="close icon"
                  aria-label="button to close the navigation sidebar"
                />
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
                <Link onClick={() => setNav(false)} href="/#work">
                  Work
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#about">
                  About
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link onClick={() => setNav(false)} href="/#skills">
                  Tools
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
                  <Link
                    href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                    target="blank"
                    aria-label="link to Sofia Martin's LinkedIn profile"
                  >
                    <FaLinkedinIn title="LinkedIn icon" />
                  </Link>
                </div>
                <div className="p-3 cursor-pointer">
                  <Link
                    href="https://github.com/sofia-cse"
                    target="blank"
                    aria-label="link to Sofia Martin's Github profile"
                  >
                    <FaGithub title="Github icon" />
                  </Link>
                </div>
                <div onClick={handleNav} className="p-3 cursor-pointer">
                  <Link
                    href="/#contact"
                    aria-label="anchor link to Sofia Martin's contact form"
                  >
                    <AiOutlineMail title="envelope icon" />
                  </Link>
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
