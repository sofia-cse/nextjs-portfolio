import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="h-[70vh] w-full text-center">
      <div className="relative mx-auto flex h-full w-full max-w-[800px] items-center justify-center p-2">
        <div className="flex-col items-center">
          <div className="center">
            <img
              src={"/assets/florere.svg"}
              alt="Sofia Logo"
              className="logo mx-auto"
              width={100}
              height={100}
            />
          </div>
          <h1 className="mx-auto pb-4 pt-12">Sofia Martin</h1>
          <p className="m-auto max-w-[100%] py-4 text-lg tracking-wide">
            Product Leader, Design Thinker,{" "}
            <span className="inline-block">Data Enthusiast</span>
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <div className="cursor-pointer p-3 hover:text-[--accent]">
              <a
                href="https://www.linkedin.com/in/sofiabrainerdmartin/"
                target="blank"
                aria-label="Link to Sofia Martin's LinkedIn profile"
              >
                <FaLinkedinIn size={18} title="LinkedIn icon" />
              </a>
            </div>
            <div className="cursor-pointer p-3 hover:text-[--accent]">
              <a
                href="https://github.com/sofia-cse"
                target="blank"
                aria-label="Link to Sofia Martin's Github Profile"
              >
                <FaGithub size={18} title="Github icon" />
              </a>
            </div>
            <div className="cursor-pointer p-3 hover:text-[--accent]">
              <a
                href="/#contact"
                aria-label="Anchor link to Sofia Martin's contact form"
              >
                <AiOutlineMail size={18} title="envelope icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
