import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mb-40 flex-col items-center">
          <Image
            src="/assets/florere.svg"
            alt="Sofia Logo"
            className="mx-auto"
            width={100}
            height={24}
            priority
          />
          <h1 className="py-4 mx-auto">Sofia Martin Design</h1>
          <p className="text-sm tracking-wide py-4 max-w-[80%] m-auto">
            UX Designer, Researcher, PM, and{" "}
            <span className="inline-block">Web Developer</span>
          </p>
          <div className="flex  items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-3 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                target="blank"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a href="https://github.com/sofia-cse" target="blank">
                <FaGithub size={18} />
              </a>
            </div>
            <div className="p-3 cursor-pointer">
              <a href="/#contact">
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
