"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeButton from "./ThemeButton";
import NavLine from "./NavLine";
import { useNavContext } from "@/app/utils/NavContextProvider";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const elementsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [linkWidths, SetLinkWidths] = useState<number[]>([]);
  const { activeNav, setActiveNav } = useNavContext();
  const pathname = usePathname();
  const parsedpath = pathname?.split("/")[1];

  useEffect(() => {
    setMounted(true);

    //if user lands on project page from external link or direct URL entry, set nav to projects
    if (parsedpath === "projects") {
      setActiveNav("work");
    }

    //update linkwidths with mapping of each ref width
    SetLinkWidths(elementsRef.current.map((el) => el!.offsetWidth));
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="nav-top w-full h-16 z-[100] sticky top-0 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center w-full h-full px-4 2xl:px-8">
        <div className="w-full md:flex md:w-fit">
          <Link
            href="/#"
            aria-label="link to the top of the homepage for Sofia Martin's profile"
            onClick={() => setActiveNav("home")}
          >
            <img
              src={"/assets/florere.svg"}
              alt="Sofia Martin's logo"
              title="Sofia Martin's logo"
              width={35}
              height={35}
            />
          </Link>
        </div>
        <div className="flex">
          <nav className="hidden md:flex w-full items-center list-none">
            <li className={activeNav === "home" ? "active" : "inactive"}>
              <Link
                href="/#"
                className="p-5"
                ref={(el) => {
                  elementsRef.current.push(el);
                }}
                onClick={() => setActiveNav("home")}
              >
                Home
              </Link>
            </li>
            <li className={activeNav === "work" ? "active" : "inactive"}>
              <Link
                href="/#work"
                className="p-5"
                ref={(el) => {
                  elementsRef.current.push(el);
                }}
                onClick={() => setActiveNav("work")}
              >
                Work
              </Link>
            </li>
            <li className={activeNav === "about" ? "active" : "inactive"}>
              <Link
                href="/#about"
                className="p-5"
                ref={(el) => {
                  elementsRef.current.push(el);
                }}
                onClick={() => setActiveNav("about")}
              >
                About
              </Link>
            </li>
            <li className={activeNav === "tools" ? "active" : "inactive"}>
              <Link
                href="/#skills"
                className="p-5"
                ref={(el) => {
                  elementsRef.current.push(el);
                }}
                onClick={() => {
                  setActiveNav("tools");
                }}
              >
                Tools
              </Link>
            </li>
            <li className={activeNav === "contact" ? "active" : "inactive"}>
              <Link
                href="/#contact"
                className="p-5"
                ref={(el) => {
                  elementsRef.current.push(el);
                }}
                onClick={() => setActiveNav("contact")}
              >
                Contact
              </Link>
            </li>

            {mounted && (
              <NavLine activeNav={activeNav} linkWidths={linkWidths} />
            )}
          </nav>
          <div className="w-full md:w-fit md:flex justify-center md:pl-5">
            <ThemeButton />
          </div>
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="w-full flex justify-end md:hidden">
          <AiOutlineMenu
            size={25}
            title="hamburger menu icon"
            aria-label="button to open the navigation side menu"
          />
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
              ? "nav-side md:hidden fixed right-0 top-0 px-4 py-5  w-[65%] sm:w-[60%] md:w-[45%] h-screen ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex w-full items-center justify-end">
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
