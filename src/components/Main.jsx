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
          <h1 className="py-4 mx-auto w-max">Sofia Martin Design</h1>
          <p className="text-sm tracking-wide py-4 max-w-[80%] m-auto">
            UX Designer, Researcher, PM, and front-end web developer.
          </p>
          <div className="flex  items-center justify-between max-w-[330px] m-auto py-4">
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
              <a href="/#contact">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
