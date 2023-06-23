import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../../public/assets/florere.svg";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mb-40 flex-col items-center">
          <Image
            src={logo}
            alt="Sofia Logo"
            className="mx-auto"
            priority
            width={100}
            height={100}
          />
          <h1 className="py-4 mx-auto">Sofia Martin Design</h1>
          <p className="text-sm tracking-wide py-4 max-w-[80%] m-auto">
            UX Designer, Researcher, PM, and{" "}
            <span className="inline-block">Web Developer</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                target="blank"
                aria-label="Link to the designer's LinkedIn profile"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a
                href="https://github.com/sofia-cse"
                target="blank"
                aria-label="Link to the developer's Github Profile"
              >
                <FaGithub size={18} />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a
                href="/#contact"
                aria-label="Anchor Link to the website's contact form"
              >
                <AiOutlineMail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
